let express = require('express');
var bodyParser = require('body-parser')
let highlightjs = require('highlight.js');
let marked = require('marked');
let path = require('path');
let Bluebird = require('bluebird');
let fs = Bluebird.promisifyAll(require("fs"));
let Case = require('case');
let _ = require('lodash');
let async = require('async');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('problems'));
app.set('view engine', 'pug');

marked.setOptions({
  highlight: (code) => {
    return highlightjs.highlight('java', code.toString()).value;
    // return require('highlight.js').highlightAuto(code).value;
  }
});

let menu = require('./problems');
menu.Case = Case;

app.get('/', async (req, res) => {
  let landing = marked(await readFile(path.join(__dirname, 'index.md')));
  res.render('problem', { title: 'Interview Study Guide', menu: menu, landing: landing });
});

app.post('/print', (req, res) => {
  const BASE_PATH = path.join(__dirname, 'problems');

  // load all of the problems into an array
  let problemPaths = _.map(req.body, (problem, key) => {
    return {
      path: key,
      name: Case.title(key)
    }
  });

  loadFiles(problemPaths, (problemsToPrint) => {
    // display all of the problems in a pug template
    res.render('print', { title: 'Interview Study Guide',  problems: problemsToPrint });
  });

});

app.get('/problems/:problem', async (req, res) => {
  const PROBLEM = req.params.problem;
  const BASE_PATH = path.join(__dirname, 'problems/', PROBLEM);

  try {
    let explanation = marked(await readFile(path.join(BASE_PATH, 'E.md')));

    res.render('problem', { title: Case.title(PROBLEM),  menu: menu, explanation: explanation });
  } catch(err) {
    res.redirect('/');
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Started app on port: ' + (process.env.PORT || 3000));
});


async function readFile(path) {
  let file = await fs.readFileAsync(path, 'utf8');
  return file;
}

function loadFiles(problemPaths, callback) {
  const BASE_PATH = path.join(__dirname, 'problems');

  async.map(problemPaths, function(problem, cb) {
    let problemPath = path.join(BASE_PATH, problem.path, 'E.md');

    fs.readFile(problemPath, 'utf8', (err, problemFile) => {
      if(err) {
        cb(err || 'error loading file ' + problem.path);
      } else {
        problem.explanation = marked(problemFile);
        cb(null, problem);
      }
    });
  }, function(err, problems) {
    callback(problems);
  });
}
let express = require('express');
let highlightjs = require('highlight.js');
let marked = require('marked');
let Bluebird = require('bluebird');
let path = require('path');
let fs = Bluebird.promisifyAll(require("fs"));

let app = express();
app.use('/static', express.static('problems'));
app.set('view engine', 'pug');

marked.setOptions({
  highlight: function (code) {
    return highlightjs.highlight('java', code.toString()).value;
    // return require('highlight.js').highlightAuto(code).value;
  }
});

let menu = require('./problems');

app.get('/', function (req, res) {
  res.render('problem', { title: 'Interview Study Guide', menu: menu });
});

app.get('/problems/:problem', async function (req, res) {
  const PROBLEM = req.params.problem;
  const BASE_PATH = path.join(__dirname, 'problems/', PROBLEM);

  try {
    let explanation = marked(await readFile(path.join(BASE_PATH, 'E.md')));
    let config = require(BASE_PATH);

    res.render('problem', { title: config.name,  menu: menu, explanation: explanation });
  } catch(err) {
    res.render('problem', { title: 'Interview Study Guide', menu: menu });
  }

});

app.listen(3000, function () {
  console.log('Started app on port 3000');
});


async function readFile(path) {
  let file = await fs.readFileAsync(path, 'utf8');
  return file;
}
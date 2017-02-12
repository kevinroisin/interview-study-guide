let express = require('express');
let highlightjs = require('highlight.js');
let marked = require('marked');
let Bluebird = require('bluebird');
let path = require('path');
let fs = Bluebird.promisifyAll(require("fs"));
let Case = require('case');

let app = express();
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
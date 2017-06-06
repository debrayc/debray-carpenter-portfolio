const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {

  res.render('index')
})


app.listen(port, () => {
  console.log('LIVE on localhost:'+ `${port}`);
})

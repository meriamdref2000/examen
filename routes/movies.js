var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is the movies file');
});

module.exports = router;
var fs=require('fs');
var data=fs.readFileSync('movies_reduit.json', 'utf8');
var words=JSON.parse(data);
var bodyparser=require('body-parser');
console.log(words);
var express=require('express');

var app=express();

var server=app.listen(3030,listening);

function listening(){
console.log("listening..");
}
app.use(express.static('website'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


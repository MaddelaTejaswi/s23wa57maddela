var express = require('express');
var router = express.Router();
let a;
let b;
router.get('/', function(req, res, next) {
if(req.query.a ==undefined ) {
  a=Math.floor(Math.random()*10);
let b1=Math.acosh(a);
let b2=Math.log1p(a);
let b3=Math.tan(a);
let b4=Math.sqrt(a)
  res.send('Math.acosh() applied to '+a+' is ' +b1+"<br>" +'Math.log1p`() applied to '+a+' is '+b2+"<br>"+'Math.tan()  applied to '+a+' is'+b3+'Math.sqrt() applied to' +a+ 'is' +b4); 
}
else{

  a = req.query.a;
  let b1=Math.acosh(a);
  let b2=Math.log1p(a);
  let b3=Math.tan(a);
  let b4=Math.sqrt(a)
  res.send('Math.acosh() applied to' +a+'is' +b1+"<br>" +'Math.log1p`() applied to '+a+' is '+b2+"<br>"+'Math.tan()  applied to '+a+ 'is'+b3+'Math.sqrt() applied to' +a+ 'is' +b4); 
}
});

module.exports = router;
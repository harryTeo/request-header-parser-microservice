var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/api/whoami', function(req, res, next) {

  var ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;
  var userAgent = req.headers["user-agent"];
  var software = userAgent.substring(userAgent.indexOf('(')+1, userAgent.indexOf(')'));
  var languageList = req.headers["accept-language"];
  var language = languageList.substring(0, languageList.indexOf(','));
  var resObject = {
    ipaddress: ipaddress,
    language: language,
    software: software
  };

  res.json(resObject);

});

module.exports = router;
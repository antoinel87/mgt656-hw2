var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I totally am a frickin ninja - hellz yes!');
});

app.get('/nickname', function(request, response){
    response.send('quaint-lion');
});

app.listen(process.env.PORT || 4000);
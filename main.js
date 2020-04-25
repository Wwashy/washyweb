let express = require('express');
let app = express();

app.set('port',(process.env.PORT || 5000));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/me.html');
});

app.listen(app.get('port'),(err)=>{
    if (err) throw err;
    console.log("connected",app.get('port'));
});
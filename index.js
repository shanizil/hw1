const   express    = require('express'),
        app        = express(),
        bodyParser = require('body-parser'),
        data       = require("./data/hotVodAges.json"),
        port       = process.env.PORT || 3000,
        age       = require('./ages');   

app.get('/getAllData', (req,res) =>{ 
        res.status(200).json({data});
     }); 

app.post('/getAgeType/',(req,res) =>{ 
        res.status(200).json(age.cheakAges(req.params.age_id));        
});
app.get ('/getAgesTypeData/:age_id/:movie' ,(req,res) =>{ 
        res.status(200).json(age.cheakIdAndMovie(req.params.age_id,req.params.movie));
}); 
app.get('/' ,
    (req,res) =>{
    res.sendFile(`${__dirname}/index.html`);
    });
app.get('/includes/style.css',
    (req,res) =>{
    res.sendFile(`${__dirname}/includes/style.css`);
    });
app.all('*',(req,res) =>{ 
        res.json('not found');
}); 

app.listen(port,
    () => {
        console.log(`listening on port ${port}`);
    });

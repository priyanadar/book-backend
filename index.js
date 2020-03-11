const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const routes=require('./routes');
const mongoose=require('mongoose');


const port=3011;

mongoose.connect('mongodb://localhost:27017/bookapp', 
{
useNewUrlParser: true, 
useUnifiedTopology: true});


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine','pug');
app.set('views','./views');


app.use(routes);
app.listen(port,function(){console.log(`App has started ${port}`)});
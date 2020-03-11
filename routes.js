const express=require ('express');
const router=express.Router();

const getBooks=require('./controllers/get-books');
const createBook=require('./controllers/create-book');
const createAuthor=require('./controllers/create-author');


router.get('/',function(req,res){
    res.send('Hello World');
})


router.get('/books',getBooks);
router.post('/book',createBook);
router.post('/author',createAuthor);


module.exports=router;
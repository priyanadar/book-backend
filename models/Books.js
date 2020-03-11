const mongoose=require('mongoose');
const author=require('./Author');


const BookSchema=new mongoose.Schema({
    name:{type:'string',required:true},
    description:'string',
    yearOfRelease:{type:'number'},
    author:{type:'ObjectId',ref:author,required:true},
});

const Book =mongoose.model('Book',BookSchema);

module.exports=Book;
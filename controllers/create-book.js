const Book =require ('../models/Books');

const controller =async(req,res)=>{
    const{body}=req;
    const book=await Book.create({
        name: body.name,
        description:body.description,
        yearofRelease:body.yearofRelease,
        author:body.author
});
res.send(book);
}
 
 module.exports=controller;
const Author =require ('../models/Author');

const controller =async(req,res)=>{
    const{body}=req;
    const author=await Author.create({
        name: body.name,
        about:body.about,
        email:body.email,
        avatarUrl:body.avatarUrl
});
res.send(author);
}
 
 module.exports=controller;
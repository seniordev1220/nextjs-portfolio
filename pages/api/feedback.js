const handler=(req,res)=>{
    if(req.method==='POST'){
        const {email,password}=req.body;
        const newFeedback={
            id:new Date().toISOString(),
            email:email,
            password:password
        }
    }
res.status(200).json({message:"Status O00k"});
}

export default handler
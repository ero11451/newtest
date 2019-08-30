export  const ageValidation = async(req,res,next) =>{
    const Age = await req.body.Age;
    if(Age < 18){
        res.send("you are young for this page")
    }else{next()}
    }

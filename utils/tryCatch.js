export const tryCatch=(controller)=>{
return async (req,res,next)=>{
    try{
        await controller(req,res);
    }
    catch(err){
        return next(err);
    }
};
};
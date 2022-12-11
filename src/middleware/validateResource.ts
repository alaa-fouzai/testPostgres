import {Request,Response,NextFunction} from 'express';
import { AnyZodObject } from 'zod';


const validate =(schema:AnyZodObject) =>(req:Request,res:Response,next:NextFunction) =>{
try{
schema.parse({
    body:req.body,
    query:req.query,
    params:req.params
})
next();
}catch(e:any) {
    console.log("invalid",e);
return res.status(400).send(e.error);
}

}
export default validate;
import mongoose from "mongoose";
import config from "config";

function connect() {
const dbUri = config.get<string>("dbUri");

return mongoose.connect(dbUri).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("db connection error");
    process.exit(1);
});

}

export default connect
import express, { Request, Response } from "express";
import config from "config";
import connect from "./utils/connect";
import routes from "./routes";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerDocs from "./utils/swagger";

import db from './models/index';


const app = express();
app.use(express.json());
const port = 1337;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
        routes(app);
        swaggerDocs(app,port);
    })
})
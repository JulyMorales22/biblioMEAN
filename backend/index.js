import express from "express";
import cors from "cors";//reglas de seguridad porque se va a consumir APIS, etc 
import db from "./db/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();//app sera nuestro server
app.use(express.json());
app.use(cors());

//para decirle al OS que aqui va a trabajar
app.listen(process.env.PORT,() =>
    console.log("Backend server running on port: ", process.env.PORT)
);

db.dbConnection();
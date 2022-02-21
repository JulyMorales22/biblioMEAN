import express from "express";
import cors from "cors";//reglas de seguridad porque se va a consumir APIS, etc 
import db from "./db/db.js";
import roleRoutes from "./routes/roleRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import bookLoanRoutes from "./routes/bookLoanRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();//app sera nuestro server
app.use(express.json());
app.use(cors());
app.use("/api/role", roleRoutes);
app.use("/api/user", userRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/bookLoan", bookLoanRoutes);

//para decirle al OS que aqui va a trabajar
app.listen(process.env.PORT,() =>
    console.log("Backend server running on port: ", process.env.PORT)
);

db.dbConnection();
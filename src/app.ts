import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Application, type Request, type Response, urlencoded } from "express";

const app:Application = express();

app.use(cors({
    credentials: true,
}))
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({extended : true}))

app.get("/" , (req:Request , res:Response) => {
    res.send("Hello world")
})

export default app;
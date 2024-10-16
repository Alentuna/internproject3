const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config("./.env");

const app = express();


app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
let origin = 'http://localhost:3000';
console.log('here env', process.env.NODE_ENV);
if(process.env.NODE_ENV === 'production') {
    origin = process.env.CLIENT_ORIGIN;
}
app.use(
    cors({
        credentials: true,
        origin
    })
);

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => {
    res.status(200).send("OK from Server");
});

const PORT = process.env.PORT || 4001;

dbConnect();
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

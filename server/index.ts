import express from 'express';
import authRouter from './routes/auth.routes';
import connectToDb from './database/mongodb';

const app = express();

app.use(express.json());
// app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello")
})

app.use('/api/v1/auth/',authRouter);

// app.post("/api/v1/signup", (req , res) => {

// })
 
// app.post("/api/v1/signin", (req, res) => {

// })

// app.post("/api/v1/content", (req, res) => {

// })

// app.get("/api/v1/content/id", (req, res) => {

// })
// app.get("/api/v1/content/", (req, res) => {

// })

// app.delete("api/v1/content", (req, res) => {

// })

// app.get("/api/v1/brain/share", (req, res) => {

// })

// app.get("/api/v1/brain/:shareLink", (req, res) => {

// })

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
    connectToDb()
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
});


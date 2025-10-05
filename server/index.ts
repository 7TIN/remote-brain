import express from 'express';
import authRouter from './routes/auth.routes';
import connectToDb from './database/mongodb';
import contentRouter from './routes/content.route';
import authorize from './middlewares/auth.middleware';
import shareRoutes from './routes/share.routes';
import cors from 'cors';
// import cookieParser from 'cookie-parser';

const app = express();

const corsOptions = {
    origin : "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
// app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello")
})

// app.use(cookieParser());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/content',authorize,contentRouter);
app.use('/api/v1/brain',authorize, shareRoutes);

// app.get("/api/v1/brain/share",authorize )
// app.get("/api/v1/brain/:shareLink", (req, res) => {})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
    connectToDb()
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
});



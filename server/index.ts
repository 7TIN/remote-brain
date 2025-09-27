import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello")
})

app.post("/api/v1/signup", (req , res) => {

})

app.post("/api/v1/signin", (req, res) => {

})

app.post("/api/v1/content", (req, res) => {

})

app.get("/api/v1/content/id", (req, res) => {

})
app.get("/api/v1/content/", (req, res) => {

})

app.delete("api/v1/content", (req, res) => {

})


app.get("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
});


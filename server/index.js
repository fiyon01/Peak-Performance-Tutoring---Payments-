const express = require("express");
const listEndpoints = require("express-list-endpoints");
const studentRoutes = require("./routes/studentRegistrationRoute");
const adminRoutes = require("./routes/adminRegitrationRoute");
const db = require('./config/db'); // Simulated database module
const Student = require("./models/students");
const cors = require("cors");
const http = require("http")
const { Server} = require("socket.io");
const fetchPaymentToken = require("./utils/fetchPaymentToken");
require("dotenv").config();

const app = express();

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin: 'http://localhost:5173', // no trailing slash here
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true 
    }
});

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", studentRoutes);
app.use("/api", adminRoutes);
app.get("/token",async(req,res)=>{
    const token = await fetchPaymentToken();
    res.json(token)

})

console.log(listEndpoints(app)); // 👉 shows all routes

io.on("connection", (socket) => {
    console.log(` User connected: ${ socket.id} `)

})

io.on("disconnect", () => {
    console.log(` User disconnected: {socket.id}`)
});

server.listen(process.env.PORT || 3500, () => {
    console.log("server running on port 3500");
});

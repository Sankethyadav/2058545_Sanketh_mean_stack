let express=require("express");
let app=express();
let http=require("http").Server(app);
let io=require("socket.io")(http);
app.get("/",(req,res)=>{
 res.sendFile(__dirname+"\\index.html");

})
io.on("connection",(socket)=>{
console.log("Client connected")
socket.on("obj",(msg)=>{
    console.log(msg)
})
socket.emit("obj1","Hello Client ");

})
http.listen(9090,()=>console.log("Server running on port  9090"));
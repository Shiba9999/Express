let express=require("express");
let app=express();
let PORT="8080"
app.listen(PORT,function(){
    console.log(`app is running at port ${PORT}`);
})
app.get("/",(req,res)=>{
    console.log(req.path);
    res.send("hello from backend");
})

let obj={
    name:"shiba"
}
app.get("/user",(req,res)=>{
res.send(obj);

})
app.get("/file",(req,res)=>{
    console.log(__dirname);
    res.sendFile( __dirname + "/public/" + "index.html" );
})
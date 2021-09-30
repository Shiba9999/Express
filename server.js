let express=require("express");
let app=express();
let PORT="5000"
app.listen(PORT,function(){
    console.log(`app is running at port ${PORT}`);
})
app.get("/",(req,res)=>{
    console.log(req.path);
    res.send("hello from backend");
})
 app.use(express.json())//just add this line before get or post req IMP

let user={
   
}
app.get("/user",(req,res)=>{
res.send(user);
})
app.post("/user",(req,res)=>{
    user=req.body;
    console.log(req.body)
    res.send("data added succesfully")
})
app.patch("/user",(req,res)=>{
    let obj=req.body
    for(let key in obj){
        user[key]=obj[key]

    }
    res.json(user);
  //for every time server start start using all the req once again
    //for patch first post then check get then patch to add 
})
app.delete("/user",(req,res)=>{
    user={}
    res.json(user);
})

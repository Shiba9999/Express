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
 let user=[]
 app.use(express.static("public"))
const userRouter=express.Router();
const authRouter=express.Router();
app.use("/user",userRouter)
app.use("/auth",authRouter)
//mounting in express
userRouter
.route("/")
.get(getUser)
.post()
.patch()
.delete()

authRouter
.route("/signup")
.post(signupUser)


function signupUser (req,res){
    let userDetails=req.body
    // let {email,name,password}=req.body
    user.push({email,name,password});
    let name=userDetails.name;
    let email=userDetails.email
    let password=userDetails.password
    console.log(req.body)
    res.json({
        message:"user signed up",
        user:req.body
    })
}
// for param route

// userRouter
// .route("/:id")
// .get

// app.get("/user",getUser)

function getUser(req,res){
    res.send(user);
    }
//simillarly we can convert post patch and delete like get req 

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

//parameter route
app.get("/user/:id",(req,res)=>{
    console.log(req.params);
    res.send(req.params);
})

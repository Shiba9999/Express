let express=require("express");
let app=express();
let cors=require("cors");
let PORT="8000"
app.listen(PORT,function(){
    console.log(`app is running at port ${PORT}`);
})
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.get("/",(req,res)=>{
    console.log(req.path);
    res.send("hello from backend");
})
app.use(cors());
 app.use(express.json())//just add this line before get or post req IMP
 let user=[]

 //middleware function
 app.use((req,res,next)=>{
     console.log("i am a middleware");
     next();
 })


 app.use(express.static("public"))
const userRouter=require("./Routers/userRouter");
const authRouter=require("./Routers/authRouter")
app.use("/user",userRouter)
app.use("/auth",authRouter)
//mounting in express
// userRouter
// .route("/")
// .get(getUser)
// .post()
// .patch()
// .delete()

// authRouter
// .route("/signup")
// .post(setCreatedAt,signupUser);

// function setCreatedAt (req,res,next){
//     let obj=req.body;
//     let length=Object.keys(obj).length;
//     if(length==0){
//         return res.status(400).json({
//             message:"cannot created user if  req.body is empty"
//         })
//     }
//     req.body.createdAt=new Date().toISOString();
//     next();
// }
// const userModel=require("./models/userModel")

// async function signupUser (req,res){
//     try{
       
//         // let {email,name,password}=req.body
//         // let name=userDetails.name;
//         // let email=userDetails.email
//         // let password=userDetails.password
//         let userObj=req.body;
//         let user= await userModel.create(userObj);
//          console.log("user",user);
      
//         res.json({
//             message:"user signed up",
//             user:userObj
//         })
//     }
//     catch(err){
//         console.log(err);
//         res.json({
//             message:err.message
//         })
//     }
   
// }

// authRouter
// .route("/forgetPassword")
// .get(getForgetPassword)
// .post(postForgetpassword)

// function getForgetPassword(req,res){
// res.sendFile("public/forgetPassword.html",{root:__dirname})

// }
// function postForgetpassword (req,res){
//     let data=req.body
//     console.log(data)
//     res.json({
//         msg:"data received",
//         data:data.email
//     })

// }
//redirect
// app.get("/user-all",(req,res)=>{
//     res.redirect("/user");
// })

// //send 404 file
// app.use((req,res)=>{
//     res.sendFile("public/404.html",{root:__dirname})
// })

// // for param route
// // userRouter
// // .route("/:id")
// // .get

// // app.get("/user",getUser)

// function getUser(req,res){
//     res.send(user);
//     }
// //simillarly we can convert post patch and delete like get req 

// app.post("/user",(req,res)=>{
//     user=req.body;
//     console.log(req.body)
//     res.send("data added succesfully")
// })
// app.patch("/user",(req,res)=>{
//     let obj=req.body
//     for(let key in obj){
//         user[key]=obj[key]

//     }
//     res.json(user);
//   //for every time server start start using all the req once again
//     //for patch first post then check get then patch to add 
// })
// app.delete("/user",(req,res)=>{
//     user={}
//     res.json(user);
// })

//parameter route
// app.get("/user/:id",(req,res)=>{
//     console.log(req.params);
//     res.send(req.params);
// })


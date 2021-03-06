const mongoose=require("mongoose")
const validator = require("email-validator");
const db=require("../secrets");
mongoose.connect(db.link).then(function(db){
    // console.log(db);
    console.log("db connected")
}).catch(function(err){
    console.log(err);
})

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
       type:Number
    },
    email:{
        type:String,
        required:true,
        // unique:true,
        validate:function(){
            return validator.validate(this.email);
        }
    },
    createdAt:{
       type:String
    },
    password:{
        type:String,
        required:true,
        min:8,
     
    },
   confirmPassword:{
        type:String,
        required:true,
       min:8,
       validate:function(){
           return this.password==this.confirmPassword
       }
    },
})

userSchema.pre("save",function(){
    this.confirmPassword=undefined;
})

const userModel=mongoose.model("userModel",userSchema);
module.exports=userModel;
    

//  async function createUser(){
//     let user={
//         name:"shiba",
//         age:20,
//         email:"dem01@gmail.com",
//         password:"123456789",
//         confirmPassword:"123456789"

//     };

//   console.log(userObj)
// }
// createUser();

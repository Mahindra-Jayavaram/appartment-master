const express = require("express");
const bodyParser=require("body-parser"); 
const cookieParser=require("cookie-parser"); 
const mongoose=require("mongoose"); 
const cors=require("cors"); 
const bcrypt = require("bcrypt");
const User = require("./models/User");
const jwt = require("jsonwebtoken")

const secretKey = "mahi1342";
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials : true,
}))
const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017/appartment")
};


// const userSchema = 

app.get("/",(req,res)=> {
    try {
       res.send("Listining") 
    } catch (e) {
       console.log(e.message) 
    }
});


app.post("/signUp", (req,res) =>{
    const {email,username} = req.body;
    // console.log(info);
    const password = bcrypt.hashSync(req.body.password, 10);
    const user = new User({email,username,password});
    user.save().then((info)=>{
        console.log(info)
        jwt.sign({id : user._id}, secretKey, (err, token) => {
            if(err)
            {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                res.status(201).cookie("token" , token).send();
            }
        })
        res.sendStatus(201);
    }).catch(e => {
        console.log(e);
        res.sendStatus(500);
    })

});

app.get("/user", (req,res) => {
   const token = req.cookies.token;
    const userInfo = jwt.verify(token,secretKey)
     console.log(userInfo)
        User.findById(userInfo.id)
        .then(user => {
        res.json(user.username); 
        console.log(user);    
        })
        .catch(err => {
         console.log(err);
         res.sendStatus(500)
     })
    

})


app.listen("1342", async()=>{
    try {
        
        await connect();
        console.log("Listining on port")
        
    } catch (e) {
       console.log(e.message) 
    }
})
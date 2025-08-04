import User from "../Models/User-model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async(req,res) => {
    try {
        const {name,email,password} = req.body;
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User already exists."});
        }
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
                let createdUser = await User.create({
                    email,
                    name,
                    password: hash
                })
                let token = jwt.sign({email,userId: createdUser._id},"shshsh");
                res.cookie("token",token);
                res.status(201).json({message: "User created successfully",user:{
                    _id: createdUser._id,
                    name: createdUser.name,
                    email: createdUser.email
                }});
        });
    });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({message: "Internal server error"});
    }
}

export const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            res.status(400).json({meaasge: "Something went wrong"});
        }
        bcrypt.compare(password, user.password, function(err, result) {
           if(!result){
               res.status(400).json({meaasge: "Something went wrong"});
           }
           let token = jwt.sign({email: user.email,userId: user._id},"shshsh");
           res.cookie("token",token);
            res.status(200).json({message: "User logged in successfully", user: {
                _id:user._id,
                name:user.name,
                email:user.email
            }});
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({message: "Internal server error"});       
    }

}
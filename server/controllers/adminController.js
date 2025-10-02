const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const {saveAdmin} = require("../services/admin.services")

//load env variables
dotenv.config()



const registerAdmin = async(req,res)=>{

    const { name, username, email, password} = req.body

     try{
        const newAdmin = await saveAdmin({ name, username, email, password})

        // Generate token 

        const token = jwt.sign({ id :newAdmin._id , username:newAdmin.username, email:newAdmin.email , name:newAdmin.name}, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: "Admin created successfully", admin: newAdmin, token });

     }catch(error){
        res.status(500).json({ message: "Error creating admin: " + error.message });
     }

}

module.exports = { registerAdmin }
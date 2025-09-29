const bcrypt = require('bcryptjs');
const db = require('../config/db'); // Simulated database module

const saveAdmin = async({ name, username, email, password }) => {

    //simulate saving to db

    // check whether admin exists with the email

    const existingAdmin = db.findOne({ email});

    if(existingAdmin){
        throw new Error(" Admin already exists with the email address");
    }else{
      // hash password
      try{
         const hashedPassword = await bcrypt.hash(password,10)

         if(hashedPassword){
        
            const Admin = await db.Create({ name, username, email, hashedPassword})
             return Admin
        
          }else{

            res.status(500).json({message:"An error occurred while trying to hash password"})
          }

        }catch(error){
            throw new Error("Error saving admin to the database" + error.message)
        }
     
       
    }
}

module.exports = { saveAdmin };
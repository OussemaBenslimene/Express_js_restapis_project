const { where , Op } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../models");
const { isEmpty } = require("validator");



const user = db.User

// get liste of students

const getAllUsers =  async (req , res) => {
    try {
    const results = await user.findAll();
    if(results.length > 0) {
        res.send(results);
    }
    else{
        res.send("no records !")
    }
    } catch(error){
        console.error(error)
        res.send('something went rong')
    }
};

// get one user details

const getOneUser = async (req ,res ) => {
    try {
        const result = await user.findByPk(req.params.id)
        if(result) res.send(result)
        else res.send('user not found !')
    } catch (error) {
        console.error(error)
        res.send('something went rong')
    }
}

// add a user to database 

const addUser = async (req, res) => {
    let data = req.body
    if(
        !data.firstname ||
        !data.lastname ||
        !data.email||
        !data.password ||
        !data.role
    )
    {
        res.send('all data must be inserted !')
        return;  
    }
    

    try {
        const result = await user.create(data);
        if(result){
            res.send(result)
        } 
        else res.send('error ! ')
    } catch (error) {
        res.send(error)
}
}
const removeUser = async (req ,res) => {
    try {
        const idTodelete = req.params.id
        const result = await user.destroy({
            where: {
              id: idTodelete,
            },
        })
        if (result) {
            res.send('deleted successfully !')
        } else {
            res.send('error ! ')
        }
        
    } catch (error) {
        res.send(error)
    }
    
}
const updateUser = async (req ,res) => {
    try {
        let result = null
        if (req.body != null) {
            const updatefields = req.body
            const idToUpdate = req.params.id
            result = await user.update(updatefields, 
            {
            where : {
                id : idToUpdate
            }
        })
        }

        if (result > 0) {
            res.send("updated")
            console.log(result)
        } else {
            res.send("error !")  
        }  
    } catch (error) {
        res.send(error)
        
    }
}
const authUser = async (req , res ) => {
        try {
            const result = await user.findOne({
                where : {
                    email : req.body.email
                }
            })
            if(result) {
                const isValid = await bcrypt.compare(req.body.password , result.password)
                if(isValid) res.send({email : "isValid" , password : "isValid"})
                else res.send({email : "isValid" , password : "isNotValid"})
            }
            else{
                res.status(404).send({email : "isNotValid" , password : "isNotValid"})
            }
        } catch (error) {
            res.send(error)
        }
}

module.exports = {
    getAllUsers,
    getOneUser,
    addUser,
    removeUser,
    updateUser,
    authUser
};
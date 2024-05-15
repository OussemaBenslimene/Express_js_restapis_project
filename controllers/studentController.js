
const { where } = require("sequelize");
const db = require("../models")
const student = db.Student



// get liste of students

const getAllStudents =  async (req , res) => {
    try {
    const results = await student.findAll();
    if(results) {
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

const hello = (req, res) =>{
    res.json({greeting : "hello"});
}

// get one student details

const getOneStudent = async (req ,res ) => {
    try {
        const result = await student.findByPk(req.params.id)
        if(result){ 
            res.send(result)
            console.log(result)
        }
        else res.send('student not found !')
    } catch (error) {
        console.error(error)
        res.send('something went rong')
    }
}

// add a student to database 

const addStudent = async (req, res) => {
    const data = req.body
    if(
        !data.firstname ||
        !data.lastname ||
        !data.class
    )
    {
        res.send('all data must be inserted !')
        return;  
    }

    try {
        const result = await student.create(data);
        if(result){
            res.send(result)
        } 
        else res.send('error ! ')
    } catch (error) {
        res.send(error)
}
}
const removeStudent = async (req ,res) => {
    try {
        const idTodelete = req.params.id
        const result = await student.destroy({
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
const updateStudent = async (req ,res) => {
    try {
        let result = null
        if (req.body != null) {
            const updatefields = req.body
            const idToUpdate = req.params.id
            result = await student.update(updatefields, 
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

module.exports = {
    getAllStudents,
    hello , 
    getOneStudent , 
    addStudent,
    removeStudent,
    updateStudent
};
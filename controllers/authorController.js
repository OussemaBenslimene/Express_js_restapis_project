
const { where } = require("sequelize");
const db = require("../models")
const author = db.Author



// get liste of authors

const getAllAuthors =  async (req , res) => {
    try {
    const results = await author.findAll();
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

// get one author details

const getOneAuthor = async (req ,res ) => {
    try {
        const result = await author.findByPk(req.params.id)
        if(result){ 
            res.send(result)
            console.log(result)
        }
        else res.send('author not found !')
    } catch (error) {
        console.error(error)
        res.send('something went rong')
    }
}

// add a author to database 

const addAuthor = async (req, res) => {
    const data = req.body
    if(
        !data.firstname ||
        !data.lastname 
    )
    {
        res.send('all data must be inserted !')
        return;  
    }

    try {
        const result = await author.create(data);
        if(result){
            res.send(result)
        } 
        else res.send('error ! ')
    } catch (error) {
        res.send(error)
}
}
const removeAuthor = async (req ,res) => {
    try {
        const idTodelete = req.params.id
        const result = await author.destroy({
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
const updateAuthor = async (req ,res) => {
    try {
        let result = null
        if (req.body != null) {
            const updatefields = req.body
            const idToUpdate = req.params.id
            result = await author.update(updatefields, 
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
    getAllAuthors,
    getOneAuthor , 
    addAuthor,
    removeAuthor,
    updateAuthor
};
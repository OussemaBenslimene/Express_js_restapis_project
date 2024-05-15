
const { where, Model } = require("sequelize");
const db = require("../models");

const borrowing = db.Borrowing



// get liste of borrowing

const getAllBorrowings =  async (req , res) => {
    try {
    const results = await borrowing.findAll({include : [
        {model : db.Student , as : "student_borrower"},
        {model : db.Book , as : "book_borrowed"}
    ]});
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

// get one borrowing details

const getOneBorrowing = async (req ,res ) => {
    try {
        const result = await borrowing.findByPk(req.params.id,{include : [
            {model : db.Student , as : "student_borrower"},
            {model : db.Book , as : "book_borrowed"}
        ]})
        if(result){ 
            res.send(result)
            console.log(result)
        }
        else res.send('borrowing not found !')
    } catch (error) {
        console.error(error)
        res.send('something went rong')
    }
}

// add a borrowing to database 

const addBorrowing = async (req, res) => {
    const data = req.body
    if(
        !data.studentId ||
        !data.bookId ||
        !data.dateBorrowed ||
        !data.returned)
    {
        res.send('all data must be inserted !')
        return;  
    }

    try {
        const result = await borrowing.create(data);
        if(result){
            res.send(result)
        } 
        else res.send('error ! ')
    } catch (error) {
        res.send(error)
}
}



const removeBorrowing = async (req ,res) => {
    try {
        const idTodelete = req.params.id
        const result = await borrowing.destroy({
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
const updateBorrowing = async (req ,res) => {
    try {
        let result = 0
        if (req.body != null) {
            const updatefields = req.body
            const idToUpdate = req.params.id
            result = await borrowing.update(updatefields, 
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

const researchDate = async (req , res) => {
    const date = req.params.date
    try {
        const results = await borrowing.findAll({include : [
            {model : db.Student , as : "student_borrower"},
            {model : db.Book , as : "book_borrowed"}
        ],
        where : {
            dateBorrowed : date
        }
    });
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

}

module.exports = {
    getAllBorrowings,
    getOneBorrowing,
    updateBorrowing,
    removeBorrowing,
    addBorrowing,
    researchDate

};
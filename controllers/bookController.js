
const { where, Model } = require("sequelize");
const db = require("../models");
const author = require("../models/author");
const book = db.Book



// get liste of books

const getAllBooks =  async (req , res) => {
    try {
    const results = await book.findAll({include : [{
        model : db.Author , as : "author_of_book"}
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

// get one book details

const getOneBook = async (req ,res ) => {
    try {
        const result = await book.findByPk(req.params.id,{include : [{
            model : db.Author , as : "author_of_book"}
        ]})
        if(result){ 
            res.send(result)
            console.log(result)
        }
        else res.send('book not found !')
    } catch (error) {
        console.error(error)
        res.send('something went rong')
    }
}

// add a book to database 

const addBook = async (req, res) => {
    const data = req.body
    if(
        !data.title ||
        !data.authorId 
    )
    {
        res.send('all data must be inserted !')
        return;  
    }

    try {
        const result = await book.create(data);
        if(result){
            res.send(result)
        } 
        else res.send('error ! ')
    } catch (error) {
        res.send(error)
}
}

// create book and an associated author
const addBookAuthor = async (req, res) => {
    const data = req.body
    if(
        !data.title ||
        !data.author_of_book.firstname ||
        !data.author_of_book.lastname    
     )
    {
        res.send('all data must be inserted !')
        return;  
    }

    try {
        const result = await book.create(data,{ include : [{
            model : db.Author , as : "author_of_book"}
        ]});
        if(result){
            res.send(result)
        } 
        else res.send('error ! ')
    } catch (error) {
        res.send(error)
}
}
const removeBook = async (req ,res) => {
    try {
        const idTodelete = req.params.id
        const result = await book.destroy({
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
const updateBook = async (req ,res) => {
    try {
        let result = 0
        if (req.body != null) {
            const updatefields = req.body
            const idToUpdate = req.params.id
            result = await book.update(updatefields, 
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
    getAllBooks,
    getOneBook , 
    addBook,
    removeBook,
    updateBook,
    addBookAuthor
};
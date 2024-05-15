const express = require("express")
const parser = require("body-parser")
const cors = require('cors')
const app = express()
require('dotenv').config()

const studentRouter = require ("./api/studentRoutes")
const userRouter = require("./api/userRoutes")
const authorRouter = require("./api/authorRoutes")
const bookRouter = require("./api/bookRoutes")
const borrowingRouter = require("./api/borrowingRoutes")

const PORT = process.env.PORT

app.use(parser.json())
//app.use(parser.urlencoded({extended : false}))
app.use(cors())

app.use("/api" , studentRouter)
app.use("/api" , userRouter)
app.use("/api" , authorRouter)
app.use("/api" , bookRouter)
app.use("/api" , borrowingRouter)


app.listen(PORT , () => {
    console.log(`listening on port ${PORT}`)
})
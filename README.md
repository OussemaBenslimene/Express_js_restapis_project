1 - to run this project you need : 
        + node.js to be installed
        + a web server for the database like xampp or wampp ...

2 - open the .env file if you have to change these parameters :
          DB_USERNAME = root
          DB_PASSWORD = ""
          DB_HOST = localhost
          DB_DATABASE = library
          PORT = 5000

3 - open terminal in project directory and run these commands : 
        - npm install 
        - npx sequelize-cli db:create
        - npx sequelize-cli db:migrate
        - npm run dev (to start the server)
        
Now you can test the endpoints in postman or other tools

the endpoints : 
    - http://localhost:5000/api/student
    - http://localhost:5000/api/author
    - http://localhost:5000/api/book
    - http://localhost:5000/api/borrowing
    - http://localhost:5000/api/user

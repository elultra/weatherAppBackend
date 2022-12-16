# Weather App Backend
weather app backend

# Setup instruction
## Steps
1. npm init -y (this will create a package.json)
2. npm i axios body-parser cors dotenv express express-rate-limit express-validator mongoose nodemon --save  
3.  create folder structure see below
4.  Add code under index.js
5.  Add code under loaders
6.  Add code under app
## Folder Structure
- app (application)
  - config (if env changes it will change, eg: PORT, url)
  - controllers (req,res)
  - middleware (http header eg: auth)
  - routes (backend-url)
  - services (business-logic, third party)
  - validation (before enter controller it need to validate the result)
- loaders (application init)
  - index.js(entry file)
  - express.js (framework)
  - mongoose.js (database)
- .env (this will change when environment changes)
- .gitignore (As it as what files should git ignore)
- index.js (entry file/code start here)
- package.json (this is when we run npm init)
- README.md (explain what the project is and how to run)


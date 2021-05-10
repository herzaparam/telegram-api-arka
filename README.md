# Telegram back end
Back end repositories for telegram-app. 

## Application Instalation
1. Make sure you already have Redis installed on your machine
2. Clone telegram-api-arka Repository
3. Install Required NPM Packages 
   > `npm install`
4. Create database named `telegram` and import `telegram.sql` from this project folder
5. Create `.env` files with this value
   > - PORT = (Your backend port number, ex:8080)
   > - HOST = localhost
   > - PORT_FRONTEND = (Your frontend port number, ex:3000)
   > - DB_HOST = localhost
   > - DB_USERNAME = (Your database user)
   > - DB_PASSWORD = (Your database password)
   > - DB_NAME = coffee-shop
   > - EMAIL_USER = (Your own email, ex: user@gmail.com)
   > - EMAIL_PASS = (Your email password)
   > - SECRET_KEY = (Your own JWT key)

7. Start Application
   > `npm start`

## Features
- JWT Authentication
- Nodemailer For Mailer
- Upload Image Multer
- CRUD Users

## NPM Packages Used
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [lodash](https://www.npmjs.com/package/lodash)
- [moment](https://www.npmjs.com/package/moment)
- [multer](https://www.npmjs.com/package/multer)
- [morgan](https://www.npmjs.com/package/morgan)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [joi](https://www.npmjs.com/package/joi)
- [ip](https://www.npmjs.com/package/ip)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [redis](https://www.npmjs.com/package/redis)

### Deployment

visit the website here: [https://telegram-app-arka.netlify.app/](https://telegram-app-arka.netlify.app/)

## Also
you can check the front end repositories here : [telegram-app-arka](https://github.com/herzaparam/telegram-app-arka)




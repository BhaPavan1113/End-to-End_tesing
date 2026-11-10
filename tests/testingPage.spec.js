const {test, expect} = require('@playwright/test');
const {faker}= require('@faker-js/faker');
const {POManagerPage} = require('../Pages/POManager');

const dotenv = require('dotenv');
dotenv.config({ path: 'credentials.env' });

test("Web application", async({page})=>{
    //Register user
//     const reg= new registerPage(page);
//     await reg.registerUser('bala123@gmail.com', 'Bala@1234', 'Bala@1234');
  //Login user
  const pom = new POManagerPage(page);
  const login = await pom.getLoginPage();
    await login.goto();
    const email= await faker.internet.email();
    const password= await faker.internet.password();
    console.log(email);
    console.log(password);
    await login.loginUser(email, password);

    //Add event
    const events = await pom.getEventsPage();
    await events.addEvent();

    





 })
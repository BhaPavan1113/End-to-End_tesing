const {registerPage} = require('../Pages/Register');
const {loginPage} = require('../Pages/login');
const {eventsPage} = require('../Pages/events');

class POManagerPage{
    constructor(page){
        this.page = page;
        //this.registerPage = new registerPage(page);
        this.loginPage = new loginPage(page);
        this.eventsPage = new eventsPage(page);
    }

    async getRegisterPage(){
        //return this.registerPage;
    }

    async getLoginPage(){
        return this.loginPage;
    }

    async getEventsPage(){
        return this.eventsPage;
    }
}

module.exports = {POManagerPage};
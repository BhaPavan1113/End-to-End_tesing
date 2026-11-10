class loginPage{
    constructor(page){
        this.page = page;
       this.logEmail=page.locator('#email');
       this.logPassword=page.locator('#password');
       this.logButton=page.getByRole('button', { name: 'Sign In' });
    }

    async goto(){
        await this.page.goto("https://eventhub.rahulshettyacademy.com/login");
    }

    async loginUser(email, password){
        await this.logEmail.fill(email);
        await this.logPassword.fill(password);
        await this.logButton.click();
    }

}

module.exports = {loginPage};
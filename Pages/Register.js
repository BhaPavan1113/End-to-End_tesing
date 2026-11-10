class registerPage{
    constructor(page){
        this.page = page;
        this.regButton=page.getByRole('link', { name: 'Register' });
        this.regEmail=page.getByTestId('register-email');
        this.regpassword=page.locator('#register-password');
        this.regCpassword=page.getByPlaceholder('Repeat your password');
        this.regCreateAccount=page.getByRole('button', { name: 'Create Account' });

    }

    async registerUser(email, password, cpassword){
        await this.regButton.click();
        await this.regEmail.fill(email);
        await this.regpassword.fill(password);
        await this.regCpassword.fill(cpassword);
        await this.regCreateAccount.click();
    }
}

module.exports = {registerPage};
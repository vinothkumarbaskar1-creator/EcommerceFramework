class Login{
    constructor(page){
        this.page=page;
        this.username=page.getByPlaceholder('Username')
        this.Password=page.getByPlaceholder('Password')
        this.loginBtn=page.getByRole('button',{name:'Login'})
        this.errorMessage=page.locator('.error-message-container.error')
        
    }

    async goto(){
        await this.page.goto("https://www.saucedemo.com/")
    }

    async logintoSauceDemo(){
        await this.username.fill("standard_user")
        await this.Password.fill("secret_sauce")
    }

    async clickOnLoginBtn(){
        await this.loginBtn.click()
    }

    async getErrorMessage(){
        return await this.errorMessage.textContent()
    }
}
export default Login;
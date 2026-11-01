class Login{
    constructor(page){
        this.page=page;
        this.username=page.getByPlaceholder('Username')
        this.Password=page.getByPlaceholder('Password')
        this.loginBtn=page.getByRole('button',{name:'Login'})
        this.errorMessage=page.locator('.error-message-container.error')
        
    }

    async goto(){
        await this.page.goto(url)
    }

    async logintoSauceDemo(username,password){
        await this.username.fill(username)
        await this.Password.fill(password)
    }

    async clickOnLoginBtn(){
        await this.loginBtn.click()
    }

    async getErrorMessage(){
        return await this.errorMessage.textContent()
    }
}
export default Login;
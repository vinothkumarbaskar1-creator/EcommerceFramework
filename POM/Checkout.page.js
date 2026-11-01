class Checkout{

    constructor(page){
        this.page=page;
        this.firstName=page.getbyPlaceholder('First Name');
        this.lastName=page.getbyPlaceholder('Last Name');
        this.zipCode=page.getbyPlaceholder('Zip/Postal Code');
        this.contineBtn=page.locator('#continue');
        this.cancelBtn=page.locator('#cancel');
        this.errorMessage=page.locator(".h3[data-test='error']");


    }

    async fillYourInfo(){
        await this.firstName.fill('Vinoth')
        await this.lastName.fill('Kumar')
        await this.zipCode.fill(630001)
    }

    async clickOnCancelBtn(){
        await this.cancelBtn.click()
    }

    async clickOnContinueBtn(){
        await this.contineBtn.click()
    }

    async fillandContinue(){
        await this.fillYourInfo()
        await this.clickOnContinueBtn()
    }

    async erroronCheckout(){
        return await this.errorMessage.textContent()
    }
}

export default Checkout;
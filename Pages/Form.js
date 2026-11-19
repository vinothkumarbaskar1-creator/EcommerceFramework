class Formm{
    constructor(page){
        this.page=page;
        this.NameTxt= page.getByPlaceholder('Enter Name')
        this.Emailtxt=page.getByPlaceholder('Enter EMail')
        this.phonetxt=page.getByPlaceholder('Enter Phone')
        this.Addresstxt=page.locator('#textarea')
        this.genderMale=page.locator('#male')
        this.genderfemale=page.locator('#female')
        this.sundaybox=page.locator('#sunday')
        this.mondaybox=page.locator('#monday')
        this.tuesdaybox=page.locator('#tuesday')
        this.wednesdaybox=page.locator('#wednesday')
        this.thursdaybox=page.locator('#thursday')
        this.frdaybox=page.locator('#friday')
        this.saterdaybox=page.locator('#saturday')
        this.countrydropdown=page.locator('#country')
        this.coloursd_dropdown=page.locator('#colors')
        this.sortedlist_dropdown=page.locator('#animals')
        this.datepicker=page.locator('#datepicker')
        this.datepicker2=page.locator('#txtDate')
        this.startdate=page.locator('#start-date')
        this.enddate=page.locator('#end-date')
        this.submitbtn= page.locator("//button[@class='submit-btn']")

        //Assertion locator
        this.title=page.locator("//h3[@class='post-title entry-title']")
    }
    
    async gotourl(){
        await this.page.goto('https://testautomationpractice.blogspot.com/')
    }

    async formfilling(name, email,phone,address,){
        await this.NameTxt.fill(name)
        await this.Emailtxt.fill(email)
        await this.phonetxt.fill(phone)
        await this.Addresstxt.fill(address)

        //Radiobutton
        
        //Check box
    }

    async handleradiobutton(){
        await this.genderMale.click()
    }

    async handlecheckbox(){
        await this.sundaybox.check()
        await this.mondaybox.check()
        await this.wednesdaybox.check()
    }

    async handledropdown(){
        await this.countrydropdown.selectOption('india')
        await this.coloursd_dropdown.selectOption({index : 2})
        await this.sortedlist_dropdown.selectOption('dog')
    
    }

    async handledate(date,date1,date2,date3){
        await this.datepicker.fill(date)
        await this.datepicker.press('Enter')
        await this.datepicker2.click()
        // await this.datepicker2.getByText('21',{exact: true}).click()
         await this.datepicker2.press('Enter')
        await this.startdate.fill(date2)
        await this.enddate.fill(date3)
      
    }

    async click_submitBtn(){
        await this.submitbtn.click()
    }

}
 export default Formm;
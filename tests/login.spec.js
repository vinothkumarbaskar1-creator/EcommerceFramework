import{test}from '@playwright/test';
import Login from '../POM/Loginpage'
import fs from 'fs'
let userdata=fs.readFileSync('C:/Users/Vinothkumar/OneDrive/Desktop/SauceDemos/EcommerceFramework/Test-Data/Login.json')
let data=Json.parse(userdata)

test('Login to sauceDemo', async({page})=>{
    let loginn=new Login(page);
    await loginn.goto()
    await loginn.logintoSauceDemo(url,username,password)
    await loginn.clickOnLoginBtn()
})
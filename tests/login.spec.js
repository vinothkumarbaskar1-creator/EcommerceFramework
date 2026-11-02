import{test}from '@playwright/test';
import LoginPage from '../POM/Loginpage.js'
import fs from 'fs'
let userdata = fs.readFileSync("C:/Users/Vinothkumar/OneDrive/Desktop/SauceDemos/EcommerceFramework/Test-Data/Login.json")
userdata = JSON.parse(userdata)
let url=userdata.url
let username=userdata.username
let password=userdata.password
test("login to sauce demo",async({page})=>{
   let login1=new LoginPage(page)
 
   await login1.goto(url)
   await login1.logintoSauceDemo(username,password)
   await login1.clickOnLoginBtn()
  




})

import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'Test-Data', 'Login.json');

const userdata = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

let url = userdata.url;
let username = userdata.username;
let password = userdata.password;

test("login to sauce demo",async({page})=>{
   let login1=new LoginPage(page)
 
   await login1.goto(url)
   await login1.logintoSauceDemo(username,password)
   await login1.clickOnLoginBtn()
  




})
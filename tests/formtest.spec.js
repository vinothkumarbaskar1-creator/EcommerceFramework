import{test}from '@playwright/test'
import fs from 'fs';
import path from 'path';
import Formm from '../Pages/Form'
import Assertt from '../Utility/Assert'
import Uploadfile from '../Pages/Uploadfile';
import { log } from 'console';
import { json } from 'stream/consumers';
import { Assert } from 'assert';


const filePath = path.join(
    process.cwd(),
    'Testdata',
    'Form_testdata.json'
);

const userdata = JSON.parse(
    fs.readFileSync(filePath, 'utf-8')
);

// const userdata=JSON.parse(fs.readFileSync("C:/Users/Vinothkumar/OneDrive/Desktop/Automationpractise/Testdata/Form_testdata.json"))

let name=userdata[0].Name
let email=userdata[0].Email
let phone=userdata[0].phone
let address=userdata[0].Address
let date=userdata[0].date
let date1=userdata[0].date1
let date2=userdata[0].date2
let date3=userdata[0].date3
console.log(name);

test('form_test',async({page})=>{
    let form1=new Formm(page)
    await form1.gotourl()
    // await Assertt.verifylabel(form1.title)

    //Form filling
    await form1.formfilling(name,email,phone,address)
    await page.waitForTimeout(2000)

    //Radiobutton
    await form1.handleradiobutton()
    await Assertt.verifycheckbox(form1.genderMale)

    //checkbox
    await form1.handlecheckbox()
    await Assertt.verifycheckbox(form1.sundaybox)
    await Assertt.verifycheckbox(form1.mondaybox)
    await Assertt.verifycheckbox(form1.wednesdaybox)

    //dropdown
    await form1.handledropdown()
    await Assertt.verifydropdown(form1.countrydropdown, 'india')
    await Assertt.verifydropdown(form1.coloursd_dropdown,'green')
    await Assertt.verifydropdown(form1.sortedlist_dropdown, 'dog')
    await page.waitForTimeout(2000)

    //datepicker
    await form1.handledate(date,date1,date2,date3)
    await Assertt.verifydate(form1.datepicker, '11/23/2026')
    await Assertt.verifydate(form1.datepicker2, '23/11/2026')
    await Assertt.verifydate(form1.startdate, '2026-11-18')
     await Assertt.verifydate(form1.enddate, '2026-11-25')

     //Click submit button
     await Assertt.verifybuttonenable(form1.submitbtn)
     await form1.click_submitBtn()
   
})

const filepath2= path.join(process.cwd(),'Testdata','Upladfile.json')
const userdata2=JSON.parse(fs.readFileSync(filepath2))

let file1=userdata2[0].file1
let file2=userdata2[1].file2
let file3=userdata2[1].file3
let expectedmsg=userdata2[0].expectedmsg
let expectedmsg2=userdata2[1].expectedmsg
console.log(typeof file2);
console.log(typeof file3);



test('Uploading single file',async({page})=>{
    let uploadobj=new Uploadfile(page)
     let form2=new Formm(page)
     await form2.gotourl()
    await uploadobj.uploadsingle_file(file1)
    await uploadobj.click_singlefile_btn()
    await Assertt.verifytxt(uploadobj.singlefile_msg,expectedmsg)
})

test('Multiple file upload',async({page})=>{
    let uploadobj2=new Uploadfile(page)
    await uploadobj2.gotourl()
    await uploadobj2.uploadmulti_file(file2,file3)
    await uploadobj2.click_multifile_btn()
    await Assertt.verifytxt(uploadobj2.multifile_msg,expectedmsg2)

})




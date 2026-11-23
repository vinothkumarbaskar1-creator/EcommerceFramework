class Uploadfile{
    constructor(page)
    {
        this.page=page
        this.single_upload=page.locator("//input[@id='singleFileInput']")
        this.multi_upload=page.locator("//input[@id='multipleFilesInput']")
        this.upload_single_btn = page.getByRole('button', {
            name: 'Upload Single File'
        });

        this.upload_multi_btn = page.getByRole('button', {
            name: 'Upload Multiple Files'
        });

        this.singlefile_msg=page.locator("//p[@id='singleFileStatus']")
        this.multifile_msg=page.locator("//p[@id='multipleFilesStatus']")
    }

 async gotourl(){
        await this.page.goto('https://testautomationpractice.blogspot.com/')
    }   
async uploadsingle_file(file1){
    await this.single_upload.setInputFiles(file1)
}

async uploadmulti_file(file2,file3){
    await this.multi_upload.setInputFiles([file2,file3])
}

async click_singlefile_btn(){
    await this.upload_single_btn.click()
}

async click_multifile_btn(){
    await this.upload_multi_btn.click()
}

}
export default Uploadfile;
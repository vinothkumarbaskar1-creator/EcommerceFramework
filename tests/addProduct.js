import{test}from '@playwright/test'
import Login from '../POM/Loginpage'
import Product from '../POM/products.page'

test('Add prduct to cart', async({page})=>{
    let loginn=new Login(page)
    let product=new Product(page)

    await loginn.goto()
    await loginn.logintoSauceDemo()
    await loginn.clickOnLoginBtn()
    await product.clickOnAddToCartBtn()
})
class Product{
    constructor(page){
        this.page=page;

        this.menuBar=page.locator('#react-burger-menu-btn')
        this.cartIcon=page.locator('.shopping_cart_link')
        this.addToCartBtn=page.getByRole('button',{name:'Add to cart'})
        this.removeBtn=page.locator("//button[@id='remove-sauce-labs-backpack']")
        this.cartBadge=page.locator('.shopping_cart_badge')
        this.logoutBtn=page.locator('logout_sidebar_link')
        this.title=page.locator('.title')
        this.sortDropdown=page.locator('.product_sort_container')
        this.productName=page.locator('.inventory_item_name ')
        this.productItem=page.locator('.inventory_item_description')
        this.productItemPrice=page.locator('.inventory_item_price')

    }

    async clickOnAddToCartBtn(){
        // await this.productItem.filter({has:Name('Sauce Labs Backpack')})
        // await item.locator('button:has-Text("Add to cart")').click()
        // await this.addToCartBtn.first().click()
        let productsarr=await this.productItem.all()
        for(let productele of productsarr){
            let productname=await productele.textContent()
            console.log(productname)
            if(productname.includes("Sauce Labs Onesie")){
                await productele.locator('button:has-Text("Add to cart")').click()
                break;
            }
    }

}


}
export default Product;
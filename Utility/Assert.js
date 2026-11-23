import { expect } from "playwright/test";
  class Assertt{
    static async verifylabel(locator){
        await expect(locator).toBeVisible()
    }

    static async verifycheckbox(locator){
        await expect(locator).toBeChecked()
    }

    static async verifydropdown(locator,expectedValue){
        await expect(locator).toHaveValue(expectedValue)
    }

    static async verifydate(locator,expectedValue){
        await expect(locator).toHaveValue(expectedValue)
    }

    static async verifybuttonenable(locator){
        await expect(locator).toBeEnabled()
    }

    static async verifytxt(locator,expectedtxt){
        await expect(locator).toContainText(expectedtxt)
    }

 }
 export default Assertt;
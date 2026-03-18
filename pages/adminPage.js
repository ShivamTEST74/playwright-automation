import{expect} from '@playwright/test'

export class AdminPage
{
    constructor(page)
    {
        this.page=page
        this.adminMenu = page.locator("//span[text()='Admin']")
        this.adminPageTitle = page.locator("//div[@class='oxd-topbar-header-title']")
    }

    async verifyAdminPageTitle()
    {
        await this.adminMenu.click()
        await expect(this.adminPageTitle).toBeVisible()
        await page.waitForTimeout(5000);
    }
}
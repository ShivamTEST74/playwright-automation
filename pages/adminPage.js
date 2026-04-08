import{expect} from '@playwright/test'

export class AdminPage
{
    constructor(page)
    {
        this.page=page
        this.adminMenu = page.locator("//span[text()='Admin']")
        this.adminPageTitle = page.locator("//div[@class='oxd-topbar-header-title']")
        this.addButton = page.getByRole('button',{name:"Add"})
        this.headingAddUser = page.getByRole('heading', {name: 'Add User'})
        this.userRoleDropdown = page.locator("(//div[@class='oxd-select-text--after'])[1]")
        this.selectDropDownValueAdmin = page.locator("(//span[text()='Admin'])[2]")
        this.employeeName = page.getByRole('textbox', { name: 'Type for hints...' })
        this.statusDropdown = page.locator("(//div[@class='oxd-select-text--after'])[2]")
        this.selectStatusEnabled = page.locator("//span[text()='Enabled']")
        this.userName = page.locator("(//input[@class= 'oxd-input oxd-input--active'])[2]")
        this.password = page.locator('.oxd-input.oxd-input--focus')
        this.saveButton = page.getByRole('button', {name: ' Save '})
    }

    async verifyAdminPageTitle()
    {
        await this.adminMenu.click()
        await expect(this.adminPageTitle).toBeVisible()
       
    }
    async addNewUser()
    {
        await this.addButton.click()
        await expect(this.headingAddUser).toBeVisible()
        await this.userRoleDropdown.click()
        await this.selectDropDownValueAdmin.click()
        await this.employeeName.fill('Shivam')
        await expect(this.employeeName).toHaveValue('Shivam')
        await this.statusDropdown.click()
        await this.selectStatusEnabled.click()
        await this.userName.fill('NewUserName')
        //await expect(this.userName).toHaveValue('NewUserName')
        await this.password.fill('NewUserPassword123')
        await expect(this.password).toHaveValue('NewUserPassword123')
        await expect(this.saveButton).toBeEnabled()
        await this.saveButton.click()

    }
}
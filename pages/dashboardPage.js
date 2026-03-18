import {expect} from '@playwright/test'

    export class DashboardPage
    {
        constructor(page)
        {
            this.page = page
            this.logo = page.getByAltText('client brand banner')
            this.dashboardTitle = page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")
            this.adminModule = page.locator("//span[text()='Admin']")
        }
        async verifyDashboardPage()
        {
            await expect(this.dashboardTitle).toBeVisible()
            await expect(this.adminModule).toBeVisible()
        }
    }

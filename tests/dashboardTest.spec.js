import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'

test('Verify Dashboard', async({page})=>{
    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage(page)
    await loginPage.goToLoginPage()
    await loginPage.login('Admin', 'admin123')
    await dashboardPage.verifyDashboardPage()
})
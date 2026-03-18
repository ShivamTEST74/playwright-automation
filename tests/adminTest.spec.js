import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { AdminPage } from '../pages/adminPage'

test('Admin Page Test', async({page})=>{

    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage(page)
    const adminPage = new AdminPage(page)
    await loginPage.goToLoginPage('Admin', 'admin123')
    await dashboardPage.verifyDashboardPage()
    await adminPage.verifyAdminPageTitle()


})
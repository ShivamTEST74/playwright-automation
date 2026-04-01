import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { UpgradePage } from '../pages/upgradePage'

// test('Open Upgrade page', async({page, context})=>{

//     const upgrade = new UpgradePage(page)
//     const login = new LoginPage(page)
//     await login.goToLoginPage()
//     await login.login('Admin','admin123')
//     await page.waitForTimeout(3000);
//     await upgrade.newUpgradePageOpen()
//     await page.waitForTimeout(3000);

// })

test('Open Upgrade page', async({page})=>{

    const upgrade = new UpgradePage(page)
    const login = new LoginPage(page)

    await login.goToLoginPage()
    await login.login('Admin','admin123')

    const newPage = await upgrade.newUpgradePageOpen()

    await newPage.waitForTimeout(3000)

})
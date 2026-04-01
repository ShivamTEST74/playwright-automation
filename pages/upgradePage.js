import {test, expect} from '@playwright/test'

export class UpgradePage
{
    constructor(page)
    {
        this.page=page
        this.upgradeButton = page.getByRole('button',{name: 'Upgrade'})

    }
    async newUpgradePageOpen()
{
    await this.upgradeButton.waitFor({ state: 'visible' })

    const [newPage] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.upgradeButton.click()
    ])

    await newPage.waitForLoadState()
    return newPage
}
}

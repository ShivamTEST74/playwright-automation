import{test,expect} from '@playwright/test'
test ('Open new tab', async({page, context})=>
{
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target')
    console.log('Parent Page Title', await page.title())
    const [newPage2] = await Promise.all([
        context.waitForEvent('page'),
        page.click("//a[@id ='getwebsitebtn']")
    ])
    await newPage2.waitForLoadState()

    console.log('New Page Title', await page.title())
    await newPage2.close();
    await page.bringToFront();
    console.log('Back to Parent Page');



 })

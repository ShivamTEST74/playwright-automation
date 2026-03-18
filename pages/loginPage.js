import {expect} from '@playwright/test'

export class LoginPage {

constructor(page) 
{
this.page=page
this.username = page.getByPlaceholder('Username')
this.password = page.getByPlaceholder('Password')
this.loginButton = page.getByRole('button', {name:'Login'}) 
}
async goToLoginPage(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
}

async login(username, password){

    await this.username.fill(username)
    await this.password.fill(password)
    await this.loginButton.click()
}

}
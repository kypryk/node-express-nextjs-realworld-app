
class AuthorizationPage{
  visit(){
    cy.visit('/user/login')
  }

  getLoginField(){
    return cy.get('[type="Email"]')
  }

  getPasswordField(){
    return cy.get('[type="Password"]')
  }

  getLoginButton(){
    return cy.get('.btn.btn-lg.btn-primary.pull-xs-right')
  }

  submitLoginForm(email, password){
    cy.log('**Fill and submit login form**')
    this.getLoginField().type(email);
    this.getPasswordField().type(password);
    this.getLoginButton().click();
  }
}

export default new AuthorizationPage();
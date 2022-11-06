import AuthorizationPage from '../support/pages/AuthorizationPage'
import HomePage from '../support/pages/HomePage'
import user from '../fixtures/user.json'

describe('Positive cases', () => {

  it('Login with valid creds', {retries: 2}, () => {
    HomePage.visit();
    HomePage.getLoginButton().click();
    AuthorizationPage.submitLoginForm(user.email, user.password);

    cy.get('.nav.navbar-nav.pull-xs-right a[href="/profile/eileen"]').should('exist');
  })

})
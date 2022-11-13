/// <reference types="cypress" />
import AuthorizationPage from '../support/pages/authorizationPage'
import user from '../fixtures/user.json'
import {login, loginViaAPI} from '../support/helper'
import HomePage from '../support/pages/HomePage'


beforeEach('Login', () => {
  loginViaAPI();
})

describe('Positive cases', () => {

  it('Login with valid creds', {retries: 2}, () => {
    HomePage.visit()
    
    HomePage.getProfileButton().should('be.visible');
  })

})
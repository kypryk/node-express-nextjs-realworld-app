/// <reference types="cypress" />
import AuthorizationPage from '../support/pages/AuthorizationPage'
import user from '../fixtures/user.json'
import {login, loginViaAPI} from '../support/helper'
import HomePage from '../support/pages/HomePage'
import tagsArray from '../fixtures/tagsMock.json'
import {faker} from '@faker-js/faker';



beforeEach('Login', () => {
  tagsArray.tags = [`${faker.animal.bear.name}`, `${faker.animal.bird.name}`]
  cy.intercept ('GET', '**/tags', tagsArray)
  loginViaAPI();
})

describe('Positive cases', () => {

  it('Login with valid creds', {retries: 2}, () => {
    HomePage.visit()
    HomePage.getTagsList().should('contain', tagsArray.tags[0])
    HomePage.getTagsList().should('contain', tagsArray.tags[1])
    //HomePage.getProfileButton().should('be.visible');
  })

})
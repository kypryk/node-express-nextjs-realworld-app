/// <reference types="cypress" />
import AuthorizationPage from '../support/pages/AuthorizationPage'
import user from '../fixtures/user.json'
import {login, loginViaAPI} from '../support/helper'
import HomePage from '../support/pages/HomePage'
import myArticle from '../fixtures/myArticle.json'



beforeEach('Login', () => {
  loginViaAPI();
})

describe('Positive cases', () => {

  it('Get article and mock addition and removal of likes', {retries: 2}, () => {
    HomePage.visit()
    cy.intercept ('POST', '/api/articles', myArticle);
    HomePage.getGlobalFeed().click();
    

    myArticle.articles[0].favoritesCount = '15';
    let favoriteBody = {"article": myArticle.articles[0]}
    console.log(favoriteBody)
    let articleName = myArticle.articles[0].slug
    cy.intercept ('POST', `**/${articleName}/favorite`, favoriteBody)
    cy.get('.article-preview a[href="/profile/eileen"]').siblings('.pull-xs-right').click(); 
    
  })

})
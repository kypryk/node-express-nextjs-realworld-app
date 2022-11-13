/// <reference types="cypress" />

import {login, loginViaAPI} from '../support/helper'
import HomePage from '../support/pages/HomePage'
import myArticle from '../fixtures/myArticle.json'



beforeEach('Login', () => {
  loginViaAPI();
})

describe('Positive cases', () => {

  it('Get article and mock addition and removal of likes', {retries: 2}, () => {
    
    
    cy.intercept ('GET', '/api/articles?limit=10&offset=0', myArticle);
    HomePage.visit()
    HomePage.getGlobalFeed().click();
    
    myArticle.articles[0].favoritesCount = 15;
    let favoriteBody = {"article": myArticle.articles[0]}
    //console.log(favoriteBody)
    let articleName = myArticle.articles[0].slug
    
    cy.get('.article-preview a[href="/profile/eileen"]').siblings('.pull-xs-right').click(); 
    cy.intercept ('POST', `**/${articleName}/favorite`, favoriteBody)
    cy.get('.article-preview a[href="/profile/eileen"]').siblings('.pull-xs-right').should('contain', '16')

    cy.get('.article-preview a[href="/profile/eileen"]').siblings('.pull-xs-right').click(); 
    cy.get('.article-preview a[href="/profile/eileen"]').siblings('.pull-xs-right').should('contain', '15')
    
  })

})
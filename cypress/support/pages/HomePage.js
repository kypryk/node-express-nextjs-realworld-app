
class HomePage{
  visit(){
    cy.visit('/')
  }

  getLoginButton(){
    return cy.get('.nav.navbar-nav.pull-xs-right a[href="/user/login"]')
  }

  clickLoginButton(){
    this.getLoginButton().click();
  }

  getProfileButton(){
    return cy.get('[href*="/profile/"]');
  }

  clickProfileButton(){
    this.getProfileButton.click();
  }

  getTagsList(){
    return cy.get('.tag-list')
  }

  getTagChip(){
    return cy.get('.link.tag-default.tag-pill')
  }

  getGlobalFeed(){
    return cy.get('.feed-toggle li:contains("Global Feed")')
  }

}

export default new HomePage();
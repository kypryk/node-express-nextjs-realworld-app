import HomePage from './pages/HomePage';
import AuthorizationPage from './pages/AuthorizationPage'
import user from '../fixtures/user.json'
import authorizationPage from './pages/AuthorizationPage';
import sessionData from '../fixtures/sessionData.json'


export function login(){
    HomePage.visit();
    HomePage.clickLoginButton();

    authorizationPage.submitLoginForm(user.email, user.password);
}

export function loginViaAPI(){
    let requestBody = {user: {email: " ", password: " "}};

    requestBody.user.email = user.email;
    requestBody.user.password = user.password;

    cy.request('POST', 'api/users/login', requestBody).then( response => {
        cy.setCookie('auth', response.body.user.token);

        sessionData.email = user.email;
        sessionData.username = user.username;
        sessionData.token = response.body.user.token;

        window.localStorage.setItem('user', JSON.stringify(sessionData));
    })
}
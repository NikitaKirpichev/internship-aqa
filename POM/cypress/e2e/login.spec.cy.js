import Login from "../integration/page-objects/login";
import * as loginData from "../fixtures/login.mock.json";

describe("Login", function () {
  const login = new Login ();

  it('succses', () => {
    cy.log('load page');
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.log('enter username and password');
    login.getUserName().type(loginData.username);
    login.getPassword().type(loginData.password);
    cy.log('click login button');
    login.loginButton().click();
    cy.log('get a succses message');
    cy.get('#flash')
          .should('exist')
          .contains('You logged into a secure area!');
          cy.screenshot() 
  })

  it('failed (wrong password)', () => {
    cy.log('load page');
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.log('enter username and wrong password');
    login.getUserName().type(loginData.username);
    login.getPassword().type(loginData.passwordWrong);
    cy.log('click login button');
    login.loginButton().click();
    cy.log('get a failure message');
    cy.get('#flash')
          .should('exist')
          .contains('Your password is invalid!');
    cy.screenshot() 
  })

})
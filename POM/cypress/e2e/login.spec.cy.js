import Login from "../integration/page-objects/login";
import * as loginData from "../fixtures/login.mock.json";

describe("Login", function () {
  const login = new Login ();

  it('succses', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    login.getUserName().type(loginData.username);
    login.getPassword().type(loginData.password);
    login.loginButton().click();
    cy.get('#flash')
          .should('exist')
          .contains('You logged into a secure area!');
          cy.screenshot() 
  })

  it('failed (wrong password)', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    login.getUserName().type(loginData.username);
    login.getPassword().type(loginData.passwordWrong);
    login.loginButton().click();
    cy.get('#flash')
          .should('exist')
          .contains('Your password is invalid!');
    cy.screenshot() 
  })

})
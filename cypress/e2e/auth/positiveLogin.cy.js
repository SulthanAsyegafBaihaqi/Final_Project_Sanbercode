import loginPages from '../../pages/loginPages';
import loginData from '../../fixtures/loginData.json';

describe('Login test with intercept', () => {

  beforeEach(() => {
    cy.intercept('POST', '/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');
  })

  it('TC_Login_01 - Verif Login Valid Credentials', () => {
    loginPages.visit();
    loginPages.fillUsername(loginData.validUser.username);
    loginPages.fillPassword(loginData.validUser.password);
    loginPages.clickLogin();

    cy.wait('@loginRequest').its('response.statusCode').shoul('eq', 200);

    cy.url().should('include' / '/dashboard');
  });
});
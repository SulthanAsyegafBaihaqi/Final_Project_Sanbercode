// import file
import loginPages from '../../pages/loginPages';
import loginData from '../../fixtures/loginData.json';

//blok pengujian
describe('Verification Login Fitur', () => {

  beforeEach(() => {
    cy.intercept('GET', '/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');
  })

  //test case pengujian
  it('TC_Login_01 - Verify Login Valid Credentials', () => {
    loginPages.visit();
    loginPages.fillUsername(loginData.validUser.username);
    loginPages.fillPassword(loginData.validUser.password);
    loginPages.clickLogin();

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.url().should('include', '/dashboard');
  });
});
import loginPages from '../../pages/loginPages';
import loginData from '../../fixtures/loginData.json';


describe(' Login test with intercept', () => {

    beforeEach(() => {
        cy.intercept('POST', '/web/index.php/auth/validate').as('loginMessage');
    });

    it('TC_Login_02 - Verif Login invalid Password Credentials', () => {
        loginPages.visit();
        loginPages.fillUsername(loginData.invalidPassword.username);
        loginPages.fillPassword(loginData.invalidPassword.password);
        loginPages.clickLogin();

        cy.wait('@loginMessage').its('response.statusCode').should('eq', 302);

        loginPages.getErrorMessage();
    });

    it('TC_Login_03 - Verif Login Password Credentials', () => {
        loginPages.visit();
        loginPages.fillUsername(loginData.invalidUsername.username);
        loginPages.fillPassword(loginData.invalidUsername.password);
        loginPages.clickLogin();

        cy.wait('@loginMessage').its('response.statusCode').should('eq', 302);

        loginPages.getErrorMessage();
    });

    it('TC_Login_04 - Verif Login Invalid Username & Password Credentials', () => {
        loginPages.visit();
        loginPages.fillUsername(loginData.invalidUsernamePassword.username);
        loginPages.fillPassword(loginData.invalidUsernamePassword.password);
        loginPages.clickLogin();

        cy.wait('@loginMessage').its('response.statusCode').should('eq', 302);

        loginPages.getErrorMessage();
    });

    it('TC_Login_05 - Verif Login Empty Username & Password', () => {
        loginPages.visit();
        loginPages.fillUsername(loginData.invalidEmpty.username);
        loginPages.fillPassword(loginData.invalidEmpty.password);
        loginPages.clickLogin();

        //tidak ada sintak cy.wait () karena input kosong yang tidak terjadi request ke API
        //test case verif login empty username & password dilakukan validasi hanya pada UI/Frontend, bukan cy.intercept

        loginPages.getRequiredMessage();
    });
});
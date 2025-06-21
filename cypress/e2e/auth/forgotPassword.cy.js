import forgotPasswordPages from "../../pages/forgotPasswordPages";
import loginData from "../../fixtures/loginData.json";

describe('Reset Password', () => {

    beforeEach(() => {
        cy.intercept('POST', '/web/index.php/auth/requestResetPassword').as('resetRequest');
    });

    it('TC_Reset Password_06 - Forgot Password User', () => {
        forgotPasswordPages.visit();
        forgotPasswordPages.clickForgotPassword();
        forgotPasswordPages.inputResetUsername(loginData.validUser.username);
        forgotPasswordPages.clickResetPassword();

        cy.wait('@resetRequest').its('response.statusCode').should('eq', 302);
        forgotPasswordPages.validationResetPassword();

    });
});
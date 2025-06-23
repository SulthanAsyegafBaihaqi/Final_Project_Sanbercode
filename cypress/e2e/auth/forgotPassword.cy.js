import forgotPasswordPages from "../../pages/forgotPasswordPages";
import loginData from "../../fixtures/loginData.json";

describe('Verification Forgot Password Fitur', () => {

    beforeEach(() => {
        cy.intercept('POST', '/web/index.php/auth/requestResetPassword').as('resetRequest');
    });

    it('TC_Reset Password_06 - Verify User Reset Password ', () => {
        forgotPasswordPages.visit();
        forgotPasswordPages.clickForgotPassword();
        forgotPasswordPages.inputResetUsername(loginData.validUser.username);
        forgotPasswordPages.clickResetPassword();

        cy.wait('@resetRequest').its('response.statusCode').should('eq', 302);
        forgotPasswordPages.validationResetPassword();

    });
});
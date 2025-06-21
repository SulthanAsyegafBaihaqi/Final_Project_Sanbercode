class forgotPassword {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    fillUsername(username) {
        cy.get('input[name="username"').type(username);
    }

    fillPassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    clickLogin() {
        cy.get('button[type=submit]').click();
    }

    clickForgotPassword() {
        cy.get('.oxd-text').contains('Forgot your password?').click();
    }

    inputResetUsername(username) {
        cy.get('input[placeholder="Username"]').type(username);
    }

    clickResetPassword() {
        cy.get('button[type="submit"]').click();
    }

    validationResetPassword() {
        cy.contains('Reset Password link sent successfully').should('be.visible');
    }
}

export default new forgotPassword();
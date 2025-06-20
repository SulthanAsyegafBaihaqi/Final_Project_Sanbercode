class loginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    fillUsername(username) {
        if (username) {
            cy.get('input[name="username"]').type(username);
        }
    }
    fillPassword(password) {
        if (password) {
            cy.get('input[name="password"]').type(password);
        }
    }
    clickLogin() {
        cy.get('button[type="submit"]').click();
    }

    getErrorMessage() {
        // validasi UI (error login)
        return cy.get('.oxd-alert-content-text').should('be.visible').and('contain', 'Invalid credentials');
    }

    getRequiredMessage() {
        return cy.get('.oxd-input-field-error-message').should('be.visible').contains('Required');
    }
}

export default new loginPage();
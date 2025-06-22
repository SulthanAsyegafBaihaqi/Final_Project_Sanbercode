class dashboardPage {

    clickDirectoryMenu() {
        cy.get('.oxd-sidepanel-body').contains('Directory').click();
    }

    inputEmployee(employeName) {
        cy.get('input[placeholder="Type for hints..."]', { timeout: 10000 })
            .type(employeName)
        cy.get('.oxd-autocomplete-dropdown')
            .should('be.visible')
            .contains('Russel Hamilton')
            .click();
    }

    inputJobTitle() {
        cy.get('.oxd-select-text').eq(0).click();

        cy.get('.oxd-select-text-input')
            .should('be.visible');

        cy.contains('QA Engineer').click();
    }

    inputUserLocation() {
        cy.get('.oxd-select-text').eq(1).click();

        cy.get('.oxd-select-text-input')
            .should('be.visible');

        cy.contains('Texas R&D').click();
    }

    resetDirectory() {
        cy.get('button[type="reset"]').click();
        cy.get('.orangehrm-container').should('be.visible');
    }

    searchEmployee() {
        cy.get('button[type="submit"]').contains('Search').click();
    }



}

export default new dashboardPage();
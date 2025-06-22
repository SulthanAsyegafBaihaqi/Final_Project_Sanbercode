import dashboardPages from "../../pages/dashboardPages";
import loginData from "../../fixtures/loginData.json";
import directoryData from "../../fixtures/directoryData.json";
import loginPages from "../../pages/loginPages";

describe('Directory Dashboard', () => {

    beforeEach(() => {

        loginPages.visit();
        loginPages.fillUsername(loginData.validUser.username);
        loginPages.fillPassword(loginData.validUser.password);
        loginPages.clickLogin();

        cy.intercept('GET', '/web/index.php/api/v2/directory/employees*').as('requestDirectory');

        cy.url().should('include', '/dashboard');

    });

    it('TC_Directory_07 - Search user by Employee Name in Directory Dashboard', () => {

        dashboardPages.clickDirectoryMenu(); //klik menu Directory
        cy.wait('@requestDirectory').its('response.statusCode').should('eq', 200);
        dashboardPages.inputEmployee(directoryData.employee.employeeName); //input employee name
        dashboardPages.searchEmployee();

    });

    it('TC_Directory_08 - Search user by Job Title in Directory Dashboard', () => {

        dashboardPages.clickDirectoryMenu();
        cy.wait('@requestDirectory').its('response.statusCode').should('eq', 200);
        dashboardPages.inputJobTitle();
        dashboardPages.searchEmployee();
    });

    it('TC_Directory_09 - Search user by Location in Directory Dashboard', () => {
        dashboardPages.clickDirectoryMenu();
        cy.wait('@requestDirectory').its('response.statusCode').should('eq', 200);
        dashboardPages.inputUserLocation();
        dashboardPages.searchEmployee();
    });

    it('TC_Directory_10 - Reset Directory Dashboard', () => {
        dashboardPages.clickDirectoryMenu();
        cy.wait('@requestDirectory').its('response.statusCode').should('eq', 200);
        dashboardPages.inputUserLocation();
        dashboardPages.searchEmployee();

        dashboardPages.resetDirectory();

    });
});
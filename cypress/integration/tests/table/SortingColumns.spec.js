/// <reference types="cypress" />

import MainDemoPage from "../../pages/panel/MainDemoPage";

describe("Sorting Any Column of Table" , function () {
    // Test steps
    // 1. Go to the site 
    // 2. The name column is sorted Z to A

    it('Sorting Name Column', function () {
        const mainDemoPage = new MainDemoPage();
        expect("1. Go to the site").to.be.ok
        mainDemoPage.navigate();
        cy.url().should('be.equal', 'https://revolist.github.io/revogrid/demo/#main-demo')
        cy.get('.logo').should('be.visible')
        expect("2. The name column is sorted Z to A").to.be.ok
        mainDemoPage.sortNames(mainDemoPage.NAME_SORTABLE_PATH);
        cy.get().should('not.be.null')
    });
});
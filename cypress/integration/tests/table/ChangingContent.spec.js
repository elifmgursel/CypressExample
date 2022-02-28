/// <reference types="cypress" />

import MainDemoPage from "../../pages/panel/MainDemoPage"

describe("Changing Any Content of Table" , function () {
    // Test steps
    // 1. Go to the site
    // 2. Click on the first eye cell 2 times and the text is deleted.
    // 3. Blue is written inside the deleted text.

    it("Change Color of Eyes Column's Text" ,function () {
        const mainDemoPage = new MainDemoPage();
        expect("1. Go to the site").to.be.ok
        mainDemoPage.navigate();
        cy.url().should('be.equal', 'https://revolist.github.io/revogrid/demo/#main-demo')
        expect("2. Click on the first row of eyes column's cell 2 times and the text is deleted").to.be.ok
        mainDemoPage.doubleClickToCell(mainDemoPage.FIRST_ROW_OF_EYE_COLUMN_PATH, 0);
        mainDemoPage.clearText(mainDemoPage.FIRST_ROW_OF_EYE_COLUMN_TEXT_PATH);
        expect("3. Blue is written inside the deleted cell").to.be.ok
        mainDemoPage.writeToCell(mainDemoPage.FIRST_ROW_OF_EYE_COLUMN_TEXT_PATH, mainDemoPage.BLUE_EYE_TEXT);
        cy.get('.bubble').should('have.css', 'background-color', 'rgb(0, 0, 255)')
    });
});

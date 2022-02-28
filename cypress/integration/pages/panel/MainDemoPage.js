class MainDemoPage{
    //MainDemoPage includes constants and functions.
    FIRST_ROW_OF_EYE_COLUMN_PATH = ".bubble"; //0
    FIRST_ROW_OF_EYE_COLUMN_TEXT_PATH = '[type="text"]';
    NAME_SORTABLE_PATH = '.rgHeaderCell.sortable.asc';
    BLUE_EYE_TEXT = 'blue {enter}';

    navigate() {
        //Navigate to the page
        cy.visit('https://revolist.github.io/revogrid/demo/#main-demo');
    }

    doubleClickToCell(path, index) {
        //Double-click on the first box in the eye column.
        cy.get(path).eq(index).dblclick()
    }

    clearText(path){
        //This clears written text.
        cy.get(path).clear()
    }

    writeToCell(path, ChangeText){
        //The text you want to print is printed.
        cy.get(path).type(ChangeText) 
    }

    sortNames(path){
        //This function sorts by name
        cy.get(this.NAME_SORTABLE_PATH).click()
    }
}
export default MainDemoPage
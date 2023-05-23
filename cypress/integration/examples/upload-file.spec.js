
describe('Upload File', function () {

    it('Uplaod File', function () {

        const filePath = 'wpx.png';
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile(filePath);
        cy.get("#file-submit").click();
        cy.get("#uploaded-files").contains("wpx.png")


    });

});
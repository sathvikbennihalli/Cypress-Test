
describe('Upload File', function () {

    it('Uplaod File', function () {

        // const yourFixturePath = 'example.json';
        const yourFixturePath = 'wpx.png';

        cy.visit("https://the-internet.herokuapp.com/upload");
       
            cy.get('#file-upload').attachFile(yourFixturePath);
            cy.get("#file-submit").click();
            cy.get("#uploaded-files").contains("wpx");
            

    });
});
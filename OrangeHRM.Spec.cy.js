describe('test', () => {
    it('login', () => {
      cy.visit('/', { failOnStatusCode: false });
      cy.wait(2000);
      cy.get('#username').type('Admin');
      cy.wait(2000);
      cy.get('#password').type('admin123');
      cy.wait(2000);
      cy.get('.login-button').click();
      cy.wait(2000);
  
      cy.get('.oxd-main-menu-item.active').should('contain', 'Time').click();
  
      cy.get("[placeholder='Type for hints...']").type('akhil');
  
      cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();
  
      cy.get('.oxd-table-cell.oxta-center').should('contain', 'akhil');
  
      console.log("Able to view the entered employee name");
    });
  });

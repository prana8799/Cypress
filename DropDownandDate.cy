describe('datepickerdropdown',()=>{

        it('date',()=>{

            cy.visit('/')

            cy.wait(2000)

            cy.contains('forms').click()

            cy.wait(2000)

            cy.contains('Datepicker').click()

            cy.wait(2000)

            cy.contains('nb-card','Common Datepicker').find('input')
            .then(inputvalue =>{

                cy.wrap(inputvalue).click()

                cy.wait(2000)

                cy.get('.day-cell').not('.bounding-month').contains('7')
                .click()

                
        })
        
       

        })

    it.only('dropdown',()=>{

        cy.visit('/')

        cy.wait(2000)

        cy.get('nb-select','.appearance-outline').click()

        cy.get('.options-list').contains('cosmic').click()

        cy.wait(2000)

        cy.get('nb-select','.select-button bottom').should('contain','cosmic')

        
    })

})



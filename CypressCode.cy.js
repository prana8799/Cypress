describe('First test suite', () => {

    it('Navigate to Form Layouts page', () => {
        // Visit the base URL
        cy.visit('/')

        cy.wait(2000)

        // Click on 'Forms' menu item
        cy.contains('Forms').click()

        // Click on 'Form Layouts' submenu item
        cy.contains('Form Layouts').click()

        // Check presence of input elements

        // By tag name
        cy.get('input')

        // By id
        cy.get('#inputEmail1')

        // By class value
        cy.get('.input-full-width')

        cy.wait(3000)

        cy.get('#inputPassword2')

        cy.wait(2500)

        cy.contains('Sign in').click()


    })

    it.only('radio',()=>{
        cy.visit('/')

        cy.wait(2000)

        cy.contains('Forms').click()

        cy.wait(2000)

        cy.contains('Form Layouts').click()

        cy.wait(2000)

        cy.contains('nb-card', 'Using the Grid')
            .find('[type="radio"]')
            .then(radiobuttons =>{

                cy.wrap(radiobuttons).eq(1).check({force:true}).should('be.checked')

            })
            })


    })

    it.only('checkboxes',()=>{

        cy.visit('/')

        cy.wait(2000)

        cy.contains('Modal & Overlays').click()

        cy.wait(2000)

        cy.contains('Toastr').click()

        cy.wait(2000)

        cy.contains('nb-card','Toaster configuration')
        .find('[type="checkbox"]')
        .then(checkboxes =>{

         cy.wrap(checkboxes).eq(1).check({force:true}).should('be.checked')

         cy.wait(2000)

         cy.contains('Show toast').click()

        })
        
       

    })

  



describe('Onboarding',()=>{
    it('login',()=>{
        cy.visit('https://preprodinternal.yosicare.com/')
        cy.contains(' Onboard ').click()
        cy.get('#username').type('praneshbalamurugan.m@yosicare.com')
        cy.get('#password').type('Yosi1234$')
        cy.contains(' Login ').click()
        cy.contains('MODIFY EXISTING PRACTICE').click({force: true})
        cy.wait(3000)
        cy.get('#search_practice').type('777801').trigger('keydown', { keyCode: 40 },'click')
        
        cy.contains('ESTHER HEALTHCARE - 777801').click()
        cy.wait(1000)
        // cy.contains('Features').should('be.visible').click()
       
        // cy.contains('Edit ').should('be.visible').click()
        cy.go(1)

        
            cy.visit('https://preprodinternal.yosicare.com/onboard/practice_edit.php?pid=777801')
            cy.get('#practice_name').clear().type('ESTHER HEALTHCARE')
            cy.get("#emr_details_update_btn").click()
        })
       
        
        

       
       

    })

/* eslint-disable no-undef */

describe('Login page tests', function(){

    it('Visit site and click on the Login button', function () {
        cy.visit(' http://localhost:3000');
        cy.get("#okta-signin-submit").click();
        
    });

    it('URL changes to /login', function () {
        cy.url(' http://localhost:3000/login');

    });

    it('click on the Register link', function () {
        
        cy.get('a[href="/register"]').click();
        
    });

    it('URL changes to /register', function () {
        cy.url(' http://localhost:3000/register');

    });

    it('click on "Groomer"', function () {
        
        cy.get('a[href="/groomers"]').click();
        
    });

    

    it('Groomer can register', function () {
        cy.get('input[name="name"]').type('Michael');
        cy.get('input[name="lastname"]').type('Jackson');
        cy.get('input[name="email"]').type('mike@blackandwhite.com');
        cy.get('input[name="phone"]').type('969404565');
        cy.get('input[name="address"]').type("23 Saint Peter's Rd");
        cy.get('input[name="city"]').type('Atlanta');
        cy.get('input[name="state"]').type('Georgia');
        cy.get('input[name="zipcode"]').type('856891');
        cy.get('input[name="description"]').type('I love dogs!');
        cy.get('input[name="photoUrl"]').type('https://flikr.com/myphoto.jpg');
        cy.get('#walk_rate').type('1000');
        cy.get('#day_care_rate').type('3000');
        cy.get('#vet_visit_rate').type('13000');
 



        // If we click on "Submit" it will create a user and we won't be 
        // able to resuse this test unless we rewrite values for name, lastname, etc
        //  cy.get('button').click();

    });


   


});

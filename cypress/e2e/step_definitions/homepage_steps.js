import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

          //ESCENARIO 1

  Given("el usuario abre la pagina para registrarse", () => {             
    //Visitar la página de la plataforma
    cy.visit("/");
  });

  When("el usuario pulsa el boton registro", () => {
    cy.get('[data-testid="boton_registro"]').click()
  });

  Then("el usuario debe ver el mensaje de error", () => {
    //cy.get('[data-testid="mensaje"]').should('be.visible');   //se muestra un mensaje de error
    cy.get('[data-testid="mensaje-error"]').should('be.visible');
  });
  Then("la seccion del examen no aparece", () =>{
   
    cy.get('[data-testid="examenFormulario"]').should('not.be.visible');

  })

  Then ("el formulario de registro permanece visible", () =>{
    cy.get('[data-testid="form-formsingup"]').should('be.visible');
  })


 
          //ESCENARIO 2

  When("introduce un nombre valido en el campo correspondiente" , () => {
    cy.get('[data-testid="input_nombre"]').type('Alicia');  //introduce un nombre válido
    cy.get('[data-testid="input_apellidos"]').type('herrero sanz'); //introducimos apellidos
    cy.get('[data-testid="boton_registro"]').click()          //pulsa el botón de registro
  });

  Then ("el formulario se oculta" , () => {
    cy.get('[data-testid="input_nombre"]').should('not.be.visible');  //el formulario se oculta
    cy.get('[data-testid="boton_registro"]').should('not.be.visible');
  });

  //mensaje de bienvenida en la bienvenida y cambiar html
  Then ("aparece un mensaje de bienvenida", () => {
    cy.get('[data-testid="mensaje"]').should('be.visible'); 
    cy.get('[data-testid="mensaje"]').should('contain', 'BIENVENIDO ALICIA HERRERO SANZ');     //aparece un mensaje de bienvenida
  });

  Then ("se muestra la sección del examen",()=>{
    cy.get('[data-testid="exam"]').should('be.visible');    //se muestra la sección del examen
  })


  

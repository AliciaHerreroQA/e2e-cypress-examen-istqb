import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  
  Given("el usuario abre la página para registrarse", () => {
   

    //Visitar la página de la plataforma
    cy.visit("/");
 
  });

  Given("el usuario pulsa el botón registro", () => {
   

    
    cy.get('[data-testid="boton_registro"]').click()
 
  });

 
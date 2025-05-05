import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  //ESCENARIO 1
  When("el usuario responde la pregunta numero {string} con la opcion {string}", (numeroPregunta, respuesta) => {             
    
    cy.get("[data-testid = respuesta_ + numeroPregunta+respuesta]").click();
  });

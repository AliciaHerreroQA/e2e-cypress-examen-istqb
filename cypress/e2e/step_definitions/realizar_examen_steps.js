import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  //ESCENARIO 1
  When("el usuario responde la pregunta numero {string} con la opcion {string}", (numeroPregunta, respuesta) => {             
    
    cy.get("[data-testid = respuesta_" + numeroPregunta+respuesta + "]").click();    //este step no me funciona, fallo checkvalidity

  });

  When("corrige el examen" , () => {
    cy.get('[data-testid = "boton_finalizar"]').click();

  });


  Then ("la pregunta numero {string} debe tener la puntuacion {string}" , (numeroPregunta, puntuacion) => {
cy.get('[data-testid = "resultado' + numeroPregunta + '"]').should('contain', puntuacion);

  });

  Then ("el resultado final debe tener la puntuacion {string}" , (puntuacion) => {
cy.get('[data-testid = "resultado"]').should('contain', puntuacion);

  });



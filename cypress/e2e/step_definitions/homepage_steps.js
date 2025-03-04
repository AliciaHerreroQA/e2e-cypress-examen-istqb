import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given("el usuario abre la página para registrarse", () => {
   

    //Visitar la página de la plataforma
    cy.visit("/");

    //Recargar la página de la plataforma
    cy.reload();

    //Borrar las cookies. Este paso no es necesario porque CYPRESS, por defecto, las borra.
    cy.clearCookies();
  });

 
Feature: Registrar a un usuario

    Como recruiter, quiero poder registrar a los usuarios en la plataforma para acceder a sus funcionalidades 

Escenario 1: Nombre vacío
    Given el usuario abre la página para registrarse


    When deja el campo de nombre vacío 
    Then el sistema muestra un mensaje de error
    And el examen no aparece
    And el formulario permanece visible
Feature: Registrar a un usuario

    Como recruiter, quiero poder registrar a los usuarios en la plataforma para acceder a sus funcionalidades 

Scenario 1: Nombre vacío
    Given el usuario abre la página para registrarse
    When el usuario pulsa el botón registro
    Then el usuario debe ver el mensaje de error


    
Feature: Registrar a un usuario

    Como recruiter, quiero poder registrar a los usuarios en la plataforma para acceder a sus funcionalidades 

Scenario: Nombre vacío
    Given el usuario abre la página para registrarse
    When el usuario pulsa el botón registro
    Then el usuario debe ver el mensaje de error
    And la seccion del examen no aparece
    And el formulario de registro permanece visible


Scenario: Nombre correcto
    Given el usuario abre la página para registrarse
    When introduce un nombre válido en el campo correspondiente
    Then el formulario se oculta
    And aparece un mensaje de bienvenida
    And se muestra la sección del examen


    
Feature: Realizar examen y ver el resultado

    Como recruiter, quiero poder realizar el examen en la plataforma y ver los resultados para acceder a sus funcionalidades 

Scenario: Examen aprobado
    Given el usuario abre la pagina para registrarse
    When introduce un nombre valido en el campo correspondiente
    When el usuario responde la pregunta numero "1" con la opcion "A"
    When el usuario responde la pregunta numero "2" con la opcion "B"
    When el usuario responde la pregunta numero "3" con la opcion "C"
    When el usuario responde la pregunta numero "4" con la opcion "A"
    When el usuario responde la pregunta numero "5" con la opcion "B"
    When el usuario responde la pregunta numero "6" con la opcion "C"
    When el usuario responde la pregunta numero "7" con la opcion "A"
    When el usuario responde la pregunta numero "8" con la opcion "B" 
    When el usuario responde la pregunta numero "9" con la opcion "C"
    When el usuario responde la pregunta numero "10" con la opcion ""

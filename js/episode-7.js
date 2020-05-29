//NB:il ya des mots qui manque des ^^.
var a_ge;

alert("Pour poursuivre ce programme, nous devons proceder à une vérification de votre age.");
a_ge = parseInt(prompt('Quel est votre age (en année) ?'));

while (a_ge <= 0) { 
    alert("Ereur saisisez correctement votre age; renseigez un nombre positif différent de 0.");
    a_ge = parseInt(prompt('Quel est votre age (en année) ?'));
}

if (a_ge < 18) {
	alert('Vous etes mineur.');
}
else if (a_ge >=18 && a_ge <= 120) {
	alert('Vous etes majeur.');
}
    else {
	    alert("Ereur les chaines de caractères et les nombres >120 ne sont pas pris en charge.");
	
}

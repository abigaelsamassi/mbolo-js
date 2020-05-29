var moyenne;

alert("Chaque reponse de ce questionaire vous a procuré des points nous voulons connaitre votre moyenne obtenue.");
moyenne = prompt("indiquez votre moyenne.");

while (moyenne < 0 || moyenne >20) {
	alert("Désolé la note saisie n'est pas conprise dans la marge de la moyenne.");
	moyenne = prompt("indiquez votre moyenne.");

}

if (moyenne >= 0 && moyenne <= 5) {
	alert("Travail très insuffisant ; faite serieusement vos veilles.");
}
else if (moyenne > 5 && moyenne < 10) {
	alert("Travail moyen peut mieux faire.");
}
else if (moyenne >= 10 && moyenne <12) {
	alert("Passable !");

}
else if (moyenne >= 12 && moyenne <14) {
	alert("Assez-Bien !");

}
else if (moyenne >= 14 && moyenne <16) {
	alert("Bien !");

}
else if (moyenne >= 16 && moyenne <18) {
	alert("Très-Bien !");

}
else if (moyenne >= 18 && moyenne <=20) {
	alert("Excellent !");

}

var nbr1=10,nbr2=51,result;
alert("Vous avez presque terminé effectuer le calcul suivant ?");
alert("Combient font 10*51 ?");
result= prompt("Renseigez la bonne reponse.");

while(result != nbr1*nbr2){
	alert("reponse incorecte.");
	result= prompt("Renseigez la bonne reponse.");
}

if (result == nbr1*nbr2) {
	alert("Bonne reponse.");
	alert("Félicitation vous avez terminé le tournoi merci pour votre patience. ");
}
alert("Merci de m'envoyer votre retour sur des évantuelles remarques ou suggessions.");
alert("QUE MON CODE PAIE MES FACTURES.");
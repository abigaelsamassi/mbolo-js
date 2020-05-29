var montant_achat, montant_a_payer;

alert("Procedez maintenant au payement de vos achats.");
montant_achat = parseInt(prompt("Indiquez le montant de vos achats en fcfa."));

while(montant_achat < 0) {
	alert("les nombres négatifs ne sont pas compris. ");
	montant_achat = parseInt(prompt("Indiquez le montant de vos achats en fcfa."));
}


if (montant_achat <= 40000 && montant_achat > 0) {
	alert("Le montant total à payer est de " + montant_achat +" Fcfa merci de votre visite à bientot." );
}

else if(montant_achat > 40000) {
	alert("Cher client suite à votre achat de " + montant_achat +" Fcfa, vous bénéficiez d'une remise de 10% soit "+  (montant_achat*10)/100 + " FCFA" + " votre montant total à payer après remise est de " + (montant_achat-(montant_achat*10)/100) + " Fcfa merci pour votre fidélité.");

}
    else{
	    alert("Erreur les chaines de caractères ne sont pas pris en charge");
}
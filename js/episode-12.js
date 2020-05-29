var entier, somme = 0 ;
alert(" Nous avons éffectuer le Calcul de la somme des 10 premiers entiers dans la console .");
console.log("Calcul de la somme des entiers.");

for(entier =1; entier <=10 ; entier ++) {
    console.log(entier);
    somme = somme + entier;
    if (entier <10) {
    	console.log("+");
    }
}
console.log("=");
console.log(somme);




var user_name , genre;
user_name= prompt('Quel est votre nom?');
genre= prompt('Quel est votre sexe(homme ou femme)?');

while (genre != "homme" && genre != "femme") {
	alert("Ereur veuillez renseigner correctement votre genre; reéssayer.");
	genre= prompt('Quel est votre sexe(homme ou femme)?');
}
if (genre=="femme") {
	alert("Bonjour madame "+ user_name+" !");
}

if (genre=="homme") {
	alert("Bonjour monsieur "+ user_name +" !");
}

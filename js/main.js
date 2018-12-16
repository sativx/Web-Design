function showlogo (){
	var t =["de développeurs","de créateurs","d'entrepreneurs"];
	var i = 1;

	setInterval(function (){
	i++;
	document.getElementById("textch").innerHTML = t[i];
	if (i == 2){
		i = -1;
	}
	}, 3000); 

}

showlogo();
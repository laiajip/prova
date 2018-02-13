
function MarioLuigi(){
	var imatge = document.getElementById('personatge');
	if (imatge.src.match("img/mario.png")){
		imatge.src = "img/luigi.png"
	}else{
		imatge.src = "img/mario.png"
	}
}

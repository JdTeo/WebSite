window.addEventListener("load", function(){
 
	var containers = document.querySelectorAll(".container");
	for(var i=0; i<containers.length; i++){
		containers[i].addEventListener("touchstart", function(){
			this.classList.toggle('hover');
		})
	}
});

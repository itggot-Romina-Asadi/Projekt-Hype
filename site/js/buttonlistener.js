document.addEventListener('DOMContentLoaded', function() {
	var btn = document.getElementById("newsbtn");
	var dropdown = document.getElementById("dropdown");
	var nav = document.getElementsByTagName("nav")[0];

	var isVis = false;

	document.addEventListener("click", function( event ) {
		if (isVis) {
			isVis = false;
		} else if (dropdown.className == "dropdownhover") {
			dropdown.className = "";
			nav.style.overflowY = "hidden";		
		}
		console.log("clicked somehwere in document");
	});

	newsbtn.addEventListener("click", function( event ) {
		console.log("You clicked on the button!");
		nav.style.overflowY = "visible";
		dropdown.className = "dropdownhover";
		isVis = true;	
	});
/*
	dropdown.addEventListener("mouseleave", function( event ) {
		dropdown.className = "";
		nav.style.overflowY = "hidden";
	});
*/
});

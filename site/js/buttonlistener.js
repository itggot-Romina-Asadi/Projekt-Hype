document.addEventListener('DOMContentLoaded', function() {
	var btn = document.getElementById("newsbtn");
	var dropdown = document.getElementById("dropdown");
	var nav = document.getElementsByTagName("nav")[0];

	newsbtn.addEventListener("mouseenter", function( event ) {
		console.log("You are on the button!");
		nav.style.overflowY = "visible";
		dropdown.className = "dropdownhover";		
	});

	dropdown.addEventListener("mouseleave", function( event ) {
		dropdown.className = "";
		nav.style.overflowY = "hidden";
	});
});

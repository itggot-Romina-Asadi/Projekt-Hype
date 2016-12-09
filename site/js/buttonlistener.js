document.addEventListener('DOMContentLoaded', function() {
	var btn = document.getElementById("newsbtn");
	var dropdown = document.getElementById("dropdown");

	newsbtn.addEventListener("mouseenter", function( event ) {
		console.log("You are on the button!");
		dropdown.className = "dropdownhover";
	});

	dropdown.addEventListener("mouseleave", function( event ) {
		dropdown.className = "";
	});
});

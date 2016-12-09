document.addEventListener('DOMContentLoaded', function() {
	var nav = document.getElementsByTagName("nav")[0];
	var target = $("article");

	$(document).on('scroll', function() {
    	if($(this).scrollTop()>=target.position().top) {
    		console.log("hide me!");
        	nav.className = "hidden";
        } else {
        	nav.className = "";
        }
    });
});

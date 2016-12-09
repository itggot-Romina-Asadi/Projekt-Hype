document.addEventListener('DOMContentLoaded', function() {
	var nav = document.getElementsByTagName("nav")[0];
	var target = $("article");

	$(document).on('scroll', function() {
    	if($(this).scrollTop()>=target.position().top) {
    		console.log("hide me!");
        	nav.style = "display: none";
        } else {
        	nav.style = "display: flex";
        }
    });
});

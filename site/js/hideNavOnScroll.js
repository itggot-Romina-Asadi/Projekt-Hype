document.addEventListener('DOMContentLoaded', function() {
	var nav = document.getElementsByTagName("nav")[0];

	$(document).on('scroll', function() {
    	if($(this).scrollTop()>=300) {
    		console.log("hide me!");
        	nav.className = "hidden";
        } else {
        	nav.className = "";
        }
    });
});

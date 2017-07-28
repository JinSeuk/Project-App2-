
$(document).ready(function(){
	var pagebody = $("#pagebody");
	var topbar   = $("#toolbarnav");
	var viewport = {
    	width  : $(window).width(),
    	height : $(window).height()
	}; 
	function openme() { 
		$(function () {
		    topbar.animate({
		       left: "290px"
		    }, { duration: 300, queue: false });
		    pagebody.animate({
		       left: "290px"
		    }, { duration: 300, queue: false });
		});
	}
	
	function closeme() {
		var closeme = $(function() {
	    	topbar.animate({
	            left: "0px"
	    	}, { duration: 180, queue: false });
	    	pagebody.animate({
	            left: "0px"
	    	}, { duration: 180, queue: false });
		});
	}
 
	$("#menu-btn").live("click", function(e){
		e.preventDefault();
		var leftval = pagebody.css('left');
		
		if(leftval == "0px") {
			openme();
		}
		else { 
			closeme(); 
		}
	});
	
}); 

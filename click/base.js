console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$('span').on('click', function handleClick(event) {
			var clickedItem = $(this).text();
			$('ul').append(clickedItem + " ");
	}); 


});

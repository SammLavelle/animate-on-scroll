
var windowHeight = $(window).height();
var windowPadding = windowHeight * 0.8;
function animateRowOnScroll(count){
		
	var row = {};
	row[count] = '.aos_block-'+ count;
	if ($(row[count])[0]){
	
		var rowPositionBottom = {};
		rowPositionBottom[count] =  ($(row[count]).offset().top) - windowPadding;
		currentScroll = $(window).scrollTop(); //current scroll position
		if (currentScroll >=  rowPositionBottom[count]) {  // apply parallax if you scroll past element
			
					$(row[count]).addClass('active');

		} else{
			$(window).scroll(function() { 
				rowPositionBottom[count] =  ($(row[count]).offset().top) - windowPadding;
				currentScroll = $(window).scrollTop(); //current scroll position
				if (currentScroll >=  rowPositionBottom[count]) {  // apply parallax if you scroll past element
					$(row[count]).addClass('active');

				};

			});
		};
	};

};


$(document).ready(function () {	
	var totalRows = $('.aos_wrapper .aos_block').length + 1;

		var i;
		for (i = 0; i <= totalRows; i++){
			animateRowOnScroll(i);
		}

});

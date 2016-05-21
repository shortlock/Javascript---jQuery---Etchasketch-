$(document).ready(function() {
	$('#start').on('click','button',function() {
		$('.grid').remove();
		
		var input = prompt("How many grids per line?", 16);
		var i = input * input;
		var height1 = $('.container').width();
		var sizeOfGrids = height1/input-2;
		
		/*while(i > 0 && input < 129) {
			$('.container').append('<div class="grid"></div>');
			i--;
		};*/
		
			for(j = 1; j <= i; j++) {
				$('.container').append('<div class="grid"></div>');
			};
		
		$('.grid').css({'height': sizeOfGrids,
						'width': sizeOfGrids
						});
	});
	
	$('div').on('mouseenter', '.grid',function() {
		$(this).addClass('colored');
	});
});
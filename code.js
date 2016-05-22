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
	$('.container').on('mouseenter','.grid',function() {
		var rgb1 =  Math.floor((Math.random() * 255) + 1) ;
		var rgb2 =  Math.floor((Math.random() * 255) + 1) ;
		var rgb3 =  Math.floor((Math.random() * 255) + 1) ;
		$(this).css({'background-color': 'rgb('+rgb1+','+rgb2+','+rgb3+')'
			});
	});
});
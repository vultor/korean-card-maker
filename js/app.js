$(document).ready(function(){
	$('#image').change(function(){
		if($('#image').val() == 'duck') {
			$('#canvas1').drawImage({
				source: 'img/fall-pond.jpg',
				x: 320,
				y: 306
			});
		} else if($('#image').val() == 'heart') {
			$('#canvas1').drawImage({
				source: 'img/korean-food.jpg',
				x: 320,
				y: 306
			});
		} else if($('#image').val() == 'puppy') {
			$('#canvas1').drawImage({
				source: 'img/masks.jpg',
				x: 320,
				y: 306
			});
		} else  {
			$('#canvas1').drawImage({
				source: 'img/korean-bow.jpg',
				x: 320,
				y: 306
			});
		} //end if
	}); //end change
	$('#create').click(function(){
		var line1 = $('#line1').val().toUpperCase();
		var line2 = $('#line2').val().toUpperCase();
		$('#canvas1').drawText({
			fillStyle: '#fff',
			strokeStyle: '#000',
			strokeWidth: 3,
			x: 320,
			y: 50,
			fontSize: '5em',
			fontFamily: 'Impact, sans-serif',
			text: line1
		})
		.drawText({
			fillStyle: '#fff',
			strokeStyle: '#000',
			strokeWidth: 2,
			x: 320,
			y: 470,
			fontSize: '3em',
			fontFamily: 'Impact, sans-serif',
			text: line2
		}); //end draw text
	}); //end click
}); //end ready
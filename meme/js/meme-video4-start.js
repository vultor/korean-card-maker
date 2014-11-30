$(document).ready(function(){
	$('#image').change(function(){
		if($('#image').val() == 'duck') {
			$('#canvas1').drawImage({
				source: 'img/kittenduck.jpg',
				x: 365,
				y: 260
			});
		} else if($('#image').val() == 'heart') {
			$('#canvas1').drawImage({
				source: 'img/puppylove.jpg',
				x: 365,
				y: 260
			});
		} else if($('#image').val() == 'puppy') {
			$('#canvas1').drawImage({
				source: 'img/gspuppy.jpg',
				x: 365,
				y: 260
			});
		} else  {
			$('#canvas1').drawImage({
				source: 'img/grumpycat.jpg',
				x: 365,
				y: 260
			});
		} //end if
	}); //end change

	$('#create').click(function(){
		$('#canvas1').drawText({
			fillStyle: '#fff',
			strokeStyle: '#000',
			strokeWidth: 3,
			x: 365,
			y: 50,
			fontSize: '5em',
			fontFamily: 'Impact, sans-serif',
			text: 'Hello.'
		})
		.drawText({
			fillStyle: '#fff',
			strokeStyle: '#000',
			strokeWidth: 3,
			x: 365,
			y: 470,
			fontSize: '5em',
			fontFamily: 'Impact, sans-serif',
			text: 'This is line 2.'
		}); //end draw text

	}); //end click


}); //end ready















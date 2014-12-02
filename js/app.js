$(document).ready(function(){
	$('#image').change(function(){
		var image = '';
		if($('#image').val() == 'pond') {
			image = 'fall-pond.jpg'
		}
		else if($('#image').val() == 'food') {
			image = 'guk.jpg'
		}
		else if($('#image').val() == 'horse') {
			image = 'horse.jpg'
		}
		else if($('#image').val() == 'masks') {
			image = 'masks.jpg'
		}
		else  if($('#image').val() == 'girls') {
			image = 'girls-day.jpg'
		}
		else  if($('#image').val() == 'bow') {
			image = 'korean-bow.jpg'
		}
		$('#canvas1').drawImage({
			source: 'img/' + image,
			x: 320,
			y: 346
		});
	}); //end change

	$('#greeting').change(function() {
		var text = '';
		var greeting = $('#greeting').val();
		// set the greeting text
		if(greeting == 'lunar') {
			text = 'Happy Lunar New Year'
		}
		else if(greeting == 'korean') {
			text = 'Happy Korean New Year'
		}
		else if(greeting == 'roman') {
			text = 'Saehae Bok Manhi Badeuseyo'
		}
		else if(greeting == 'hanguk'){
			text = '새해 복 많이 받으세요'
		};
		// clear the area before drawing the text
		$('#canvas1').clearCanvas({
			x: 320, y: 80,
		  	width: 640,
		  	height: 93
		})
		// chaining
		.drawText({
			fillStyle: '#EE1C25',
			strokeStyle: '#105EB0',
			strokeWidth: 1,
			x: 320, y: 80,
			fontSize: 48,
			fontFamily: 'Zapf Chancery, Florence, cursive',
			text: text
		})
	}); //end change

	$('#insert').click(function() {
		$('#canvas1').drawText({
			fillStyle: 'darkblue',
			x: 620, y: 580,
			maxWidth: 600,
			align: 'right',
			respectAlign: true,
			fontSize: 28,
			fontFamily: 'Arial, sans-serif',
			text: $('#from').val()
		})
		// chaining 
		.drawText({
			fillStyle: 'darkblue',
			x: 20, y: 20,
			maxWidth: 600,
			align: 'left',
			respectAlign: true,
			fontSize: 28,
			fontFamily: 'Arial, sans-serif',
			text: 'Dear, ' + $('#to').val()
		})
	}); //end click insert

	$('#clear').click(function() {
		$('#canvas1').clearCanvas();
		$('#toName').text('Dear, ');
	}); //end click clear
}); //end ready
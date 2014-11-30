$(document).ready(function(){
	$('#canvas1').drawArc({
		strokeStyle: '#000',
		strokeWidth: 3,
		x: 150,
		y: 150,
		radius: 75,
		fillStyle: '#fff'
	  })
	  .drawArc({
	  	fillStyle: '#000',
	  	x: 75,
	  	y: 75,
	  	radius: 50
	  })
	  .drawArc({
	  	fillStyle: '#222',
	  	x: 225,
	  	y: 75,
	  	radius: 50
	}); //end draw arc

	$('#canvas2').drawRect({
		layer: true,
		name: 'box',
		fillStyle: '#f80',
		x: 100,
		y: 60,
		width: 200,
		height: 120
	}); //end rectangle

	//animate the rectangle
	$('#canvas2').animateLayer('box', {
		x: 200,
		y: 240
	}, 5500)
	.animateLayer('box', {
		x: 200,
		y: 60
	}, 5500);

	$('#canvas3').drawText({
		layer: true,
		fillStyle: '#25a',
		x: 150,
		y: 16,
		fontSize: '32px',
		fontFamily: 'Helvetica, sans-serif',
		text: 'Happy Chuseok',
		click: function() {
		    // Click the text to make it grow
		    $(this).animateLayer(0, {
		      scale: '+=0.25',
		    }, 250);
		}
	}) //end draw text
	.drawText({
		layer: true,
		fillStyle: '#333',
		x: 190,
		y: 270,
		fontSize: '22px',
		fontFamily: 'Georgia, sans-serif',
		text: 'Love, Shawn and Bo',
	}); //end draw text

}); //end ready













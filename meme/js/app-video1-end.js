$(document).ready(function(){
	$('#canvas1').drawArc({
		strokeStyle: '#909',
		strokeWidth: 5,
		x: 200,
		y: 200,
		radius: 50,
		fillStyle: '#f0f'
	  })
	  .drawArc({
	  	fillStyle: '#4a0',
	  	x: 100,
	  	y: 100,
	  	radius: 25
	  })
	  .drawArc({
	  	fillStyle: '#345678',
	  	x: 300,
	  	y: 150,
	  	radius: 100
	}); //end draw arc

	$('#canvas2').drawRect({
		layer: true,
		name: 'box',
		fillStyle: '#fc9',
		strokeStyle: '#963',
		strokeWidth: 5,
		x: 100,
		y: 60,
		width: 100,
		height: 60
	}); //end rectangle

	//animate the rectangle
	$('#canvas2').animateLayer('box', {
		x: 220,
		y: 150
	}, 2500);

	$('#canvas3').drawText({
		layer: true,
		fillStyle: '#9cf',
		strokeStyle: '#25a',
		strokeWidth: 2,
		x: 200,
		y: 100,
		fontSize: '32px',
		fontFamily: 'Verdana, sans-serif',
		text: 'Canvas Rocks!',
		click: function() {
		    // Click the text to make it grow
		    $(this).animateLayer(0, {
		      scale: '+=0.25',
		    }, 250);
		}
	}); //end draw text

}); //end ready













/*	Reel Time Gaming Test
	Author: Thomas Shortt */
$(document).ready(function() { //Ensures the page has loaded before running any scripts.
	
	//Global variables.
	var isPlaying = true;
	var startFrame = 1;
	var startX = -400;
	var startY = 0;
	var timer = 60000;
	var setTimer;
	var loopTimer = 10;
	var setLoop;
	
	//Plays the screen saver when the page loads.
	LoadScreenSaver();
	
	/*Stops the screen saver and displays the game screen when the mouse is clicked.*/
	$('body').click(function() {
		isPlaying = true;
		CanWeContinue();
	});
	
	/*Hides the game screen and plays the screen saver.*/
	function LoadScreenSaver() {
		$('#gamescreen').hide();
		isPlaying = false;
		Render(startFrame, startX, startY);
		CanWeContinue();
		$('#logo').show();
	}
	
	/*Determines if the screen saver animation should be played.*/
	function CanWeContinue() {
		if (isPlaying == false) {
			setLoop = setInterval(PlayScreenSaver, loopTimer);
		} else {
			$('#logo').hide();
			$('#logo').stop(true);
			$('#gamescreen').show();
			clearInterval(setLoop);
			clearTimeout(setTimer);
			setTimer = setTimeout(LoadScreenSaver, timer);
		}
	}
	
	/*Draws the logo at frame 1 and the specified location.
	
	frame - the animation frame
	x - the horizontal location of the top left corner of the logo
	y - the vertical location of the top left corner of the logo*/
	function Render(frame, x, y) {
		if (frame == 1) {
			logo.style.left = x + 'px';
			logo.style.top = y + 'px';
			logo.style.height = '200px';
			logo.style.width = '200px';
			logo.style.fontSize = '100%';
		}
	}
	
	/*Defines the screen saver animations.*/
	function PlayScreenSaver() {
		$('#logo').animate({ //Frame 1
			left: '0px',
			top: '300px'
		}, 'slow', 'linear');
		$('#logo').animate({ //Frame 2
			left: '300px',
			top: '600px'
		}, 'slow', 'linear');
		$('#logo').animate({ //Frame 3
			left: '500px',
			top: '250px',
			height: '300px',
			width: '300px',
			fontSize: '200%'
		}, 'slow', 'linear');
		$('#logo').animate({ //Frame 4
			left: '250px',
			top: '0px'
		}, 'slow', 'linear');
		$('#logo').animate({ //Frame 5
			left: '0px',
			top: '250px'
		}, 'slow', 'linear');
		$('#logo').animate({ //Frame 6
			left: '300px',
			top: '600px',
			height: '200px',
			width: '200px',
			fontSize: '100%'
		}, 'slow', 'linear');
		$('#logo').animate({ //Frame 7
			left: '600px',
			top: '300px'
		}, 'slow', 'linear');
		$('#logo').animate({ //Frame 8
			left: '300px',
			top: '0px'
		}, 'slow', 'linear');
	}
});
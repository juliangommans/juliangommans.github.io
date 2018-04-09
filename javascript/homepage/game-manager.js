// Game variables
let score, // points for hitting an asteroid
	ammo,
	maxAmmo = 12,
	fuel, // pseudo time until gameOver
	gameOver,
	asteroidCount, // keeping track of the number of asteroids
	// score calucluations
	accuracy,
	overAllRating,
	calculatedScore

function initializeGame() {
	score = 0
	ammo = maxAmmo
	asteroidsHit = 0
	fuel = 100
	gameOver = false
	asteroidCount = 0
}

initializeGame()

// Fuel usage (1% every 2s)
setInterval(function(x){
	if (!gameOver){
		fuel --
		$('.fuel').text("Fuel: " + fuel + "%")
	}
	if (fuel <= 0 && !gameOver){
		gameOverResult()
	}
},2000)

// Function to rotate the crosshairs on fire
function AnimateRotate(angle) {
    // caching the object for performance reasons
    var $elem = $('.crosshair-box');

    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    $({deg: 0}).animate({deg: angle}, {
        duration: 1000,
        easing: 'swing',
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}


// Creating asteroids

// Spawns an asteroid off screen
function spawnAsteroid() {
	var a = $('<div></div>')
	a.addClass('asteroid')
	a.attr('id', 'a' + asteroidCount)
	ItemRender(a)
	var radius = sizes[Math.floor(Math.random() * sizes.length)]
	
	AsteroidEventListener(a)
	AsteroidSetRadius(a, radius)
	AsteroidMove(a, radius)
}
// Random interval to spawn asteroids
var NewAsteroid = function() {
	if (!gameOver) {
	    spawnAsteroid()
	    asteroidCount ++
	    var rand = Math.round(Math.random() * (maxRand - minRand)) + minRand;// generate new time (between 3sec and 500"s)
	    setTimeout(NewAsteroid, rand)
	}
}

// Triggers at game over (fuel or ammo runs out)
function gameOverResult() {
	gameOver = true
	accuracy = parseFloat((asteroidsHit/maxAmmo*100).toFixed(2))
	asteroidsHitRatio = parseFloat((asteroidsHit/asteroidCount*100).toFixed(2))
	overAllRating = parseFloat(((accuracy + asteroidsHitRatio + fuel)/3).toFixed(2))
	calculatedScore = (overAllRating * score / 100).toFixed(2)
	renderFinalStats()
	$('.modal').show()
	// render some stats
}

function renderFinalStats() {
	$('.total-score').text(score)
	$('.accuracy-score').text(accuracy + '%(' + asteroidsHit + '/' + maxAmmo + ')') 
	$('.missed-score').text(asteroidsHitRatio + '%(' + asteroidsHit + '/' + asteroidCount + ')')
	$('.speed-score').text(fuel + '%')
	$('.overall-rating').text(overAllRating + '%')
	$('.calculated-score').text(calculatedScore)
}


// Jquery listeners

$( document ).ready(function() {

	// Initial call for asteroid creation
	NewAsteroid()


	// Ammo per click/shot
	$('body').on('click', function(e) {
		if (!gameOver){
			ammo --
			$('.ammo').text("Ammo: " + ammo + "/" + maxAmmo)
			AnimateRotate(720)
		}
			
		if (ammo <= 0 && !gameOver){
			gameOverResult()
		}
	})


	$('.close').on('click', function(e) {
		console.log("clicking close")
		$('.modal').hide()
	})

	$('.replay').on('click', function(e) {
		initializeGame()
		$('.modal').hide()
	})


})
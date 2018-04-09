// Initial variables

const sizes = [20,28,36,44,52,60], // radius of asteroids (TODO: add a score maybe?)
  minRand = 3500, // min spawn time for asteroid (in ms)
  maxRand = 5000 // max spawn time

let asteroidsHit = 0 // Used to keep track of hit asteroids

// Functions used to get game variables

var DtR = Math.PI / 180;
var DeltaTime = function() {
  this.reset();
}
DeltaTime.prototype.reset = function() {
  this.fps = 20;
  this.delta = this.fps / 1000;
  this.last = Date.now();
}
DeltaTime.prototype.update = function() {
  this.cur = Date.now();
  this.delta = this.cur - this.last;
  this.last = this.cur;
  this.fps = 1000 / this.delta;
}
var dt = new DeltaTime();
	Number.prototype.PerFrame = function() {
 	return this / dt.fps;
}

function ItemRender(item) {
  $('.asteroids').append(item);
}

function PolygonSetPoints(svgItem, points) {
  var polygon = svgItem.getElementsByTagName('polygon')[0];
  polygon.setAttribute('points', points);
}

function rndSign() {
  return Math.floor(Math.random() * 2) * 2 - 1;
}

function rndRange(min, max) {
  return min + Math.random() * (max - min);
}

function rndRangeInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function upDown() {
	return rndSign() > 0 ? 'top' : 'bottom'
}

function leftRight() {
	return rndSign() > 0 ? 'left' : 'right'
}


// Handles asteroid creation
  

// Creates the svg element on the dom
function SvgElementCreate() {
  var s = document.createElement('svg');
  var p = document.createElement('polygon');
  s.appendChild(p);
  s.setAttribute('width', '100%');
  s.setAttribute('height', '100%');
  return s;
}
// Sets the radois and draws the polygon points
function AsteroidSetRadius(asteroid, radius) {

  //  set rotation speed and direction
  var rotationSpeed = rndRange(4, 10) / radius;
  var direction = rndSign() > 0 ? 'normal' : 'reverse';
  asteroid.css('animation-duration', rotationSpeed.PerFrame());
  asteroid.css('animation-direction', direction);

  //  set asteroid size
  asteroid.css('width', 2 * radius);
  asteroid.css('height', 2 * radius);

  //  set spawn location
  asteroid.verticalDirection = upDown()
  asteroid.horizontalDirection = leftRight()
  asteroid.css(asteroid.verticalDirection, rndRangeInt(0,100) + "%")
  asteroid.css(asteroid.horizontalDirection, '-'+ radius*2 +'px')

  //  create the polygon that defines the asteroid
  var corners = 5 + Math.floor(radius / 8);
  var points = '';
  for (var i = 0; i < corners; i++) {
    var angle = i * 360 / corners;
    //  distance is 75-100% of radius
    var d = radius * 0.33 * (2 + Math.random());
    var px = radius + d * Math.cos(angle * DtR);
    var py = radius + d * Math.sin(angle * DtR);
    points += px + ',' + py + ' ';
  }
  asteroid.empty();
  var p = SvgElementCreate();
  PolygonSetPoints(p, points);
  asteroid.append(p);
  asteroid.html(asteroid.html());
}
// Sets direction of movement
function AsteroidMove(asteroid,radius) {
	var direction = {}
	direction[asteroid.verticalDirection] = rndRangeInt(0,100) + "%"
	direction[asteroid.horizontalDirection] = $(window).width() + radius*2 + "px"
	asteroid.animate(direction, 5000, function() {
    $(this).remove()
  })
}
// Adds event listener for destroying asteroid
function AsteroidEventListener(asteroid) {
	asteroid.on('click', function(e){
    console.log("before the hit " + asteroidsHit)
    asteroidsHit ++
    console.log("AFTER the hit " + asteroidsHit)
    destroyAsteroid(e)
  })
}


// Handles asteroid 'death'


// Trigger for clicking on an asteroid to kill it
// CB function setup when asteroid is spawned and triggers when clicked
function destroyAsteroid(e){
  score ++
  console.log("asteroid clicked ", e.target, e)
  $('.score').text("Score: " + score)
  $(e.currentTarget).remove()
  AsteroidExplosion(e)
}
// Animate asteroid explosion
function AsteroidExplosion(el) {

  const radius = Math.floor(Math.random() * (14 - 8 + 1)) + 8
  const particleCount = 12

  // start building the particles
  for (let i = 0; i < particleCount; i++) {

    const endPoints = 5 + Math.floor(radius / 8);
    const angle = i * 360 / endPoints
    const d = radius * 0.33 * (2 + Math.random())
    let px = Math.ceil(radius + d * Math.cos(angle *  DtR))
    const py = Math.ceil(radius + d * Math.sin(angle *  DtR))
    px = i < Math.floor(particleCount/2) ? px * -1 : px

    // spawns the particle at the mouse click
    // last variable is to build it's "anti-matter" pair
    BuildAndExplodeParticle(el, px, py, true)
    BuildAndExplodeParticle(el, px, py, false)

  }
}
// Spawns each 'particle' of the explosion then accelerates them away randomly
function BuildAndExplodeParticle(el, px, py, bool) {
  const asteroidParticle = "<div class='asteroid-particle'></div>"

  // if "anti" then will be a clone but go in the opposite direction
  const x = bool ? px : px * -1
  const y = bool ? py : py * -1

  const color = Math.random() >= 0.5 ? 'rgba(20,20,40,0.5)' : 'rgb(160,160,160)'

  const particle = $(asteroidParticle)
    .css({
      'left': el.pageX + 'px',
      'top': el.pageY + 'px',
      'background-color': color
    })
    .appendTo(document.body)

  // `explodes` the particle in a `random` direction then destroys it
  setTimeout(function() {
    particle.css({
      "transform":"translate(" + x + "vw," + y + "vw)"
    })
    setTimeout(function() { particle.remove() }, 900)
  }, 100)
}

// import Component from 'play-web-core/es6/component'

// init controller
// var controller = new ScrollMagic.Controller();
// var openBox = new TweenMax();
// console.log(openBox);

// init ScrollMagic controller
var controller = new ScrollMagic.Controller();

// dom elements
var body = document.querySelector('body');
var camera = document.getElementById('camera');
var cube = document.querySelector('.cube');
var topFace = document.querySelector('.top');
var rightFace = document.querySelector('.right');
var bottomFace = document.querySelector('.bottom');
var leftFace = document.querySelector('.left');
var frontFace = document.querySelector('.front');
var backFace = document.querySelector('.back');
var copyContainer = document.querySelector('.copyContainer');
var bgImage = document.querySelector('.bgImage');


// 
// SCENE: INTRO ANIMATION
// 

function sceneOne() {
	var tl = new TimelineMax();
	
	// set starting styles
	tl.set(cube, { transform:"rotateX(180deg) rotateY(100deg)" })
	tl.set(camera, { transformOrigin:"left center", transform:"scale(1.5) rotateY(0deg) translateX(500px) translateY(10px)" })
	tl.set(topFace, { transform:"rotateX(120deg) translateZ(490px) translateY(-415px) translateX(-100px)" })
	tl.set(rightFace, { transform:"rotateY(90deg) rotateX(-40deg) translateZ(-340px) translateY(-220px)" })
	tl.set(bottomFace, { transform:"rotateX(-150deg) rotateY(77deg) translateZ(680px) translateY(100px)" })
	tl.set(leftFace, { transform:"rotateY(-20deg) rotateX(30deg) translateZ(530px)" })
	tl.set(frontFace, { transform:"rotateY(50deg) translateZ(550px) translateY(-40px)" }) 
	tl.set(backFace, { transform:"rotateY(170deg) rotateX(-20deg) translateZ(480px) translateY(-221px)" });
	// 
	tl.to(camera, 1.5, { rotationY: '780_cw', x: "10%", scale: 0.5, transformOrigin:"left center", ease: Linear.easeOut })
	// // transition to cube
	tl.call(() => transitionToCube())
	// // shift camera perspective
	tl.to(camera, 0.5, { rotationY: '850_cw'})
	tl.to(copyContainer, 0.5, { transformOrigin:"left center", text: "Welcome to the box"})
	tl.to(copyContainer, 0.5, { transformOrigin:"left center", transform: "translateZ(23vh) translateX(0px) translateY(-320px) rotateY(-70deg) rotate(0deg)" }, "-=0.5")
	// // camera slight rotation
	tl.to(camera, 1, { rotationX: '-20_ccw', rotationY: '900_cw'}, "+=0.5")
	// // slam the cube
	tl.add("s1_slam_cube")
	tl.to(copyContainer, 0.5, { transform: "translateZ(221vh) translateX(-660px) translateY(-430px) rotateY(-72.6deg) rotate(180deg)" }, "-=0.5", "s1_slam_cube")
	tl.to(cube, 0.5, { transform:"rotateX(110deg) rotateY(40deg) translateX(-600px) translateY(1420px) translateZ(-900px)" }, "-=0.5", "s1_slam_cube")

	// tl.seek("s1_slam_cube")

	return tl;

}


// 
// SCENE 2
// 
// Make the box explode
// 
function sceneTwo() {
	
	var tl = new TimelineMax();

	tl.to(copyContainer, 0.5, { opacity: 0 }, "-=1")
	tl.to(bgImage, 1, {opacity: 1}, "-=1")
	tl.to(camera, 1, { rotationX: '-20_ccw', rotationY: '930_cw', scale: 1.5, y: -190 }, "-=1")
	tl.to(topFace, 1, { transform:"rotateX(120deg) translateZ(490px) translateY(-415px) translateX(-100px)" }, "-=1")
	tl.to(rightFace, 1, { transform:"rotateY(90deg) rotateX(-40deg) translateZ(-340px) translateY(-220px)" }, "-=1")
	tl.to(bottomFace, 1, { transform:"rotateX(-150deg) rotateY(77deg) translateZ(680px) translateY(100px)" }, "-=1")
	tl.to(leftFace, 1, { transform:"rotateY(-20deg) rotateX(30deg) translateZ(530px)" }, "-=1")
	tl.to(frontFace, 1, { transform:"rotateY(50deg) translateZ(550px) translateY(-40px)" }, "-=1") 
	tl.to(backFace, 1, { transform:"rotateY(170deg) rotateX(-20deg) translateZ(480px) translateY(-221px)" }, "-=1")
	tl.call(() => cube.classList.add('faceDetails')); // add hover classes for the faces
	tl.call(() => transitionToLiving())
	tl.to(cube, 90, { repeat: -1, rotationY: '930_cw', rotationX: '30_cw', ease: Linear.ease }, "-=1")

	return tl;
}

// selector
function runTopFace() {
	console.log('runTopFace');
}

// Transition to cube shape
function transitionToCube() {
	var tl = new TimelineMax();
	tl.to(topFace, 0.5, { transform:"rotateX(90deg) translateZ(0px) translateY(-200px)"}, "-=0.5")
	tl.to(rightFace, 0.5, { transform:"rotateY(90deg) translateZ(200px)"}, "-=0.5")
	tl.to(bottomFace, 0.5, { transform:"rotateX(-90deg) translateZ(200px)"}, "-=0.5")
	tl.to(leftFace, 0.5, { transform:"rotateY(-90deg) translateZ(200px)"}, "-=0.5")
	tl.to(frontFace, 0.5, { transform:"translateZ(200px)"}, "-=0.5") 
	tl.to(backFace, 0.5, { transform: "rotateY(180deg) translateZ(200px)"}, "-=0.5")
	return tl;
}

// Transition to cube shape
function transitionToScatter() {
	var tl = new TimelineMax();
	tl.to(cube, 0.2, { transform:"rotateX(110deg) rotateY(40deg) translateX(-600px) translateY(1420px) translateZ(-900px)" })
	tl.to(camera, 1, { rotationX: '-20_ccw', rotationY: '930_cw', scale: 1.5, y: -190 }, "-=0.5")
	tl.to(topFace, 0.5, { transform:"rotateX(120deg) translateZ(490px) translateY(-415px) translateX(-100px)" }, "-=0.5")
	tl.to(rightFace, 0.5, { transform:"rotateY(90deg) rotateX(-40deg) translateZ(-340px) translateY(-220px)" }, "-=0.5")
	tl.to(bottomFace, 0.5, { transform:"rotateX(-150deg) rotateY(77deg) translateZ(680px) translateY(100px)" }, "-=0.5")
	tl.to(leftFace, 0.5, { transform:"rotateY(-20deg) rotateX(30deg) translateZ(530px)" }, "-=0.5")
	tl.to(frontFace, 0.5, { transform:"rotateY(50deg) translateZ(550px) translateY(-40px)" }, "-=0.5") 
	tl.to(backFace, 0.5, { transform:"rotateY(170deg) rotateX(-20deg) translateZ(480px) translateY(-221px)" }, "-=0.5")
	tl.to(cube, 90, { repeat: -1, rotationY: '930_cw', rotationX: '30_cw', ease: Linear.none }, "-=0.5");
	return tl;
}


function transitionToLiving() {
	console.log('Clicked')
	var tl = new TimelineMax();
	tl.to(cube, 0.2, { transform:"rotateX(110deg) rotateY(40deg) translateX(-600px) translateY(1420px) translateZ(-900px)" })
	tl.to(camera, 1, { rotationX: '-20_ccw', rotationY: '930_cw', scale: 1.5, y: -190 }, "-=0.5")
	tl.to(topFace, 0.5, { transformOrigin: "center center", transform:"rotateX(80deg) rotateY(-20deg) rotate(-100deg) translateZ(-500px) translateY(-500px) translateX(1000px)" }, "-=0.5")
	// tl.to(rightFace, 0.5, { transform:"rotateY(90deg) rotateX(-40deg) translateZ(-340px) translateY(-220px)" }, "-=0.5")
	// tl.to(bottomFace, 0.5, { transform:"rotateX(-150deg) rotateY(77deg) translateZ(680px) translateY(100px)" }, "-=0.5")
	// tl.to(leftFace, 0.5, { transform:"rotateY(-20deg) rotateX(30deg) translateZ(530px)" }, "-=0.5")
	// tl.to(frontFace, 0.5, { transform:"rotateY(50deg) translateZ(550px) translateY(-40px)" }, "-=0.5") 
	// tl.to(backFace, 0.5, { transform:"rotateY(170deg) rotateX(-20deg) translateZ(480px) translateY(-221px)" }, "-=0.5")
	// tl.to(cube, 90, { repeat: -1, rotationY: '930_cw', rotationX: '30_cw', ease: Linear.none }, "-=0.5");
	return tl;

}

// Event listeners
topFace.addEventListener('click', transitionToCube)
backFace.addEventListener('click', transitionToScatter)
rightFace.addEventListener('click', transitionToLiving)

// Create a master timeline
var master = new TimelineMax()
// add scene one to the master
.add(sceneOne(), "scene1")
.add(sceneTwo(), "scene2");

master.seek("scene2")

// 
// SCENE 1
// 

// build tween1
// var tween1 = new TimelineMax();
// tween1.to(camera, 1, { transform:"scale(0.5) rotateY(40deg) translate(calc(0% - 200px), 80%)" })
// tween1.to(topFace, 1, { transform:"rotateX(120deg) translateZ(100px) translateY(-175px)" }, "-=1")
// tween1.to(body, 1, { backgroundColor: 'white' }, "-=1");


// var scene1 = new ScrollMagic.Scene({ offset: 100 })
//   .setTween(tween1) // trigger a TweenMax.to tween
//   .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
//   .addTo(controller);




// tween2.to(topFace, 1, { transform:"rotateX(120deg) translateZ(100px) translateY(-175px)" }, "-=1")
// tween2.to(body, 1, { backgroundColor: 'white' }, "-=1");


// var scene2 = new ScrollMagic.Scene({ offset: 300 })
//   .setTween(tween2) // trigger a TweenMax.to tween
//   .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
//   .addTo(controller);
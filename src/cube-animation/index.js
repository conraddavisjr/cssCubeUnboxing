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


// 
// INTRO ANIMATION
// 

var introAnimation = new TimelineMax()
// set starting styles
.set(cube, { transform:"rotateX(180deg) rotateY(100deg)" })
.set(camera, { transform:"scale(1.5) rotateY(0deg) translate(calc(50% - 200px), 20%)" })
.set(topFace, { transform:"rotateX(120deg) translateZ(490px) translateY(-415px) translateX(-100px)" })
.set(rightFace, { transform:"rotateY(90deg) rotateX(-40deg) translateZ(-340px) translateY(-220px)" })
.set(bottomFace, { transform:"rotateX(-150deg) rotateY(77deg) translateZ(680px) translateY(100px)" })
.set(leftFace, { transform:"rotateY(-20deg) rotateX(30deg) translateZ(530px)" })
.set(frontFace, { transform:"rotateY(50deg) translateZ(550px) translateY(-40px)" }) 
.set(backFace, { transform:"rotateY(170deg) rotateX(-20deg) translateZ(480px) translateY(-221px)" })
// 
.to(camera, 1.5, { rotationY: '780_cw', scale: 2, transformOrigin:"left center", ease: Linear.easeOut })
.to(camera, 1, { scale: 0.5, x:"100%", }, "-=1")
// transition to cube
.to(cube, { transform:"rotateX(180deg) rotateY(100deg)" })
.to(camera, { transform:"scale(1.5) rotateY(0deg) translate(calc(50% - 200px), 20%)"})
.to(topFace, 0.5, { transform:"rotateX(90deg) translateZ(0px) translateY(-200px)"}, "-=0.5")
.to(rightFace, 0.5, { transform:"rotateY(90deg) translateZ(200px)"}, "-=0.5")
.to(bottomFace, 0.5, { transform:"rotateX(-90deg) translateZ(200px)"}, "-=0.5")
.to(leftFace, 0.5, { transform:"rotateY(-90deg) translateZ(200px)"}, "-=0.5")
.to(frontFace, 0.5, { transform:"translateZ(200px)"}, "-=0.5") 
.to(backFace, 0.5, { transform: "rotateY(180deg) translateZ(200px)"}, "-=0.5")
.to(copyContainer, 0.5, { transformOrigin:"left center", text: "Welcome to the box"}, "+=0.5")
// shift camrea perspective
.to(camera, 0.5, { rotationY: '850_cw'})
.to(copyContainer, 0.5, { transformOrigin:"left center", transform: "translateZ(23vh) translateX(0px) translateY(-320px) rotateY(-70deg)" }, "-=0.5")
.to(camera, 1, { rotationX: '-20_ccw', rotationY: '900_cw'}, "-=0.3")
.set(copyContainer, { transformOrigin:"right bottom", transform: "translateZ(221vh) translateX(-660px) translateY(-430px) rotateY(-72.6deg) rotate(0deg)" })


// 
// SCENE 1
// 
// var intro = new TimelineMax()
// copyContainer.



// var introAnimation = new TimelineMax()




// 
// SCENE 1
// 

// build tween1
var tween1 = new TimelineMax();
tween1.to(camera, 1, { transform:"scale(0.5) rotateY(40deg) translate(calc(0% - 200px), 80%)" })
tween1.to(topFace, 1, { transform:"rotateX(120deg) translateZ(100px) translateY(-175px)" }, "-=1")
tween1.to(body, 1, { backgroundColor: 'white' }, "-=1");


var scene1 = new ScrollMagic.Scene({ offset: 100 })
  .setTween(tween1) // trigger a TweenMax.to tween
  .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
  .addTo(controller);



// 
// SCENE 2
// 

// build tween2
var tween2 = new TimelineMax();
tween2.to(cube, 0.5, { transform:"rotateX(180deg) rotateY(100deg)" })
tween2.to(camera, 0.5, { transform:"scale(1) rotateY(0deg) translate(calc(50% - 200px), 20%)" }, "-=0.5")
tween2.to(topFace, 0.5, { transform:"rotateX(120deg) translateZ(490px) translateY(-415px) translateX(-100px)" }, "-=0.5")
tween2.to(rightFace, 0.5, { transform:"rotateY(90deg) rotateX(-40deg) translateZ(-340px) translateY(-220px)" }, "-=0.5")
tween2.to(bottomFace, 0.5, { transform:"rotateX(-150deg) rotateY(77deg) translateZ(680px) translateY(100px)" }, "-=0.5")
tween2.to(leftFace, 0.5, { transform:"rotateY(-20deg) rotateX(30deg) translateZ(530px)" }, "-=0.5")
tween2.to(frontFace, 0.5, { transform:"rotateY(50deg) translateZ(550px) translateY(-40px)" }, "-=0.5") 
tween2.to(backFace, 0.5, { transform:"rotateY(170deg) rotateX(-20deg) translateZ(480px) translateY(-221px)" }, "-=0.5");

// tween2.to(topFace, 1, { transform:"rotateX(120deg) translateZ(100px) translateY(-175px)" }, "-=1")
// tween2.to(body, 1, { backgroundColor: 'white' }, "-=1");


var scene2 = new ScrollMagic.Scene({ offset: 300 })
  .setTween(tween2) // trigger a TweenMax.to tween
  .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
  .addTo(controller);
// import Component from 'play-web-core/es6/component'

// init controller
// var controller = new ScrollMagic.Controller();
// var openBox = new TweenMax();
// console.log(openBox);

// init ScrollMagic controller
var controller = new ScrollMagic.Controller();

// dom elements
var topFace = document.querySelector('.top');

// build tween (openLid)
var openLid = new TimelineMax();
openLid.to(topFace, 1, { transform:"rotateX(120deg) translateZ(100px) translateY(-175px)" });


// TweenMax.set(topFace, { transform: "rotateX(90deg) translateZ(0px) translateY(-200px)" });


var scene1 = new ScrollMagic.Scene({ triggerElement: "#trigger1" })
  // .setTween(openBox.to('.top', 1, { transform:"rotateX(120deg) translateZ(100px)" })) // trigger a TweenMax.to tween
  .setTween(openLid) // trigger a TweenMax.to tween
  // transform:"rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)"
  .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
  .addTo(controller);

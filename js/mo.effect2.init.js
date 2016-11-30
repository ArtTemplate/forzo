// Btn animation
var els = document.querySelectorAll('.btn-white');
[].forEach.call( els, function(el) {
var elSpan = el.querySelector('span'),
    timeline = new mojs.Timeline(),
	opacityCurve = mojs.easing.path('M0,0 C0,87 27,100 40,100 L40,0 L100,0'),
	scaleCurve = mojs.easing.path('M0,0c0,80,39.2,100,39.2,100L40-100c0,0-0.7,106,60,106'),
	
// burst animation
tween1 = new mojs.Transit({
	parent: el,
	duration: 1000,
	delay: 100,
	type: 'rect',
	radius: {0: 60},
	scaleX: 4,	
	fill: 'transparent',
	stroke: '#ffffff',
	strokeWidth: {50:0},
	opacity: 0.4,
	x: '50%',     
	y: '50%',
	isRunLess: true,
	easing: mojs.easing.bezier(0, 1, 0.5, 1)
}),
// ring animation
tween2 = new mojs.Transit({
	parent: el,
	duration: 1800,
	delay: 300,
	type: 'rect',
	radius: {0: 40},
	scaleX: 4,
	fill: 'transparent',
	stroke: '#ffffff',
	strokeWidth: {40:0},
	opacity: 0.2,
	x: '50%',     
	y: '50%',
	isRunLess: true,
	easing: mojs.easing.bezier(0, 1, 0.5, 1)
});

timeline.add(tween1, tween2);
el.addEventListener('mousedown', function () { //mouseenter
    timeline.start();
});

});
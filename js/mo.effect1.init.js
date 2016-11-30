// Btn animation
var els = document.querySelectorAll('.menu-toggle');
[].forEach.call( els, function(el) {
var elSpan = el.querySelector('span'),
    timeline = new mojs.Timeline(),
    scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0'),
// burst animation
tween1 = new mojs.Burst({
	parent: el,
		duration: 1500,
		shape : 'circle',
		fill : 'white',
		x: '50%',
		y: '50%',
		childOptions: { 
			radius: {6:0},
			type: 'line',
			stroke: '#15fbea',
			strokeWidth: 2
		},
		radius: {10:50},
		count: 20,
		isRunLess: true,
		easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
}),
// ring animation
tween2 = new mojs.Transit({
	parent: el,
		duration: 800,
		type: 'circle',
		radius: {0: 30},
		fill: 'transparent',
		stroke: '#15fbea',
		strokeWidth: {20:0},
		x: '50%',     
		y: '50%',
		isRunLess: true,
		easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
}),
// icon scale animation
tween3 = new mojs.Tween({
	duration : 900,
	easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
});

timeline.add(tween1, tween2, tween3);
el.addEventListener('mousedown', function () { //mouseenter
    timeline.start();
});

});
window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
	var alpha = event.alpha; // 方位角度，從0度到360度
	var beta = event.beta; // 前後傾斜角度，從-180度到180度
	var gamma = event.gamma; // 左右傾斜角度，從-90度到90度

	document.getElementById("values").innerHTML =  Math.round(gamma) + "°";

	var compass = document.getElementById("compass");
	if (alpha !== null) {
		var transform = "rotate(" + Math.round(alpha) + "deg)";
		compass.style.webkitTransform = transform;
		compass.style.MozTransform = transform;
		compass.style.msTransform = transform;
		compass.style.OTransform = transform;
		compass.style.transform = transform;
	}
}
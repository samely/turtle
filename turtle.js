var num = 12;
var weight = 69;
var e = " ";
var a = "@";
var s = "|";
var d = ":";
var o = "o";
var n = "#";
var p = "%";
var t = "´";
var u = "^";

turtle();

function turtle() {
	//head
	console.log(mirror(dr(a, 4) + dr(e, 2)));
	console.log(mirror(dr(a, 3) + dr(d, 4) + dr(a, 2)));
	console.log(mirror(dr(a, 1) + dr(d, 9)));
	console.log(mirror(dr(a, 2) + dr(d, 4) + dr(a, 3) + dr(d, 3)));
	console.log(mirror(dr(a, 2) + dr(d, 3) + dr(a, 1) + dr(e, 1) + dr(o, 2) + dr(a, 1) + dr(d, 2)));
	console.log(mirror(dr(a, 2) + dr(d, 4) + dr(a, 1) + dr(e, 1) + dr(o, 2) + dr(a, 1) + dr(d, 2)));
	console.log(mirror(dr(a, 3) + dr(d, 4) + dr(a, 5) + dr(d, 2)));
	console.log(mirror(dr(a, 3) + dr(d, 12)));
	console.log(mirror(dr(a, 2) + dr(d, 13)));
	console.log(mirror(dr(a, 3) + dr(d, 7) + dr(a, 3) + dr(d, 2)));
	console.log(mirror(dr(a, 6) + dr(d, 6) + dr(a, 4)));
	console.log(mirror(dr(a, 3) + dr(t, 5) + dr(a, 3) + dr(d, 7) + dr(a, 2)));
	console.log(mirror(dr(a, 3) + dr(t, 2) + dr(p, 2) + dr(t, 6) + dr(a, 3) + dr(d, 6)));
	console.log(mirror(dr(a, 2) + dr(t, 5) + dr(p, 2) + dr(t, 8) + dr(a, 3) + dr(d, 3)));

	//body
	console.log(mirror(dr(a, 3) + dr(t, 6) + dr(p, 2) + dr(a, 9) + dr(d, 4)));
	console.log(mirror(dr(a, 3) + dr(p, 1) + dr(t, 5) + dr(a, 4) + dr(s, 2) + dr(a, 3) + dr(n, 3) + dr(a, 1) + dr(d, 3)));
	console.log(mirror(dr(a, 2) + dr(t, 1) + dr(p, 2) + dr(t, 1) + dr(a, 3) + dr(s, 9) + dr(a, 2) + dr(n, 3) + dr(a, 1) + dr(d, 2)));
	console.log(mirror(dr(a, 2) + dr(t, 3) + dr(a, 3) + dr(s, 13) + dr(a, 2) + dr(n, 2) + dr(a, 1) + dr(d, 1)));
	console.log(mirror(dr(a, 2) + dr(t, 2) + dr(a, 2) + dr(s, 10) + dr(a, 1) + dr(s, 7) + dr(a, 2) + dr(n, 1) + dr(a, 1)));
	console.log(mirror(dr(a, 2) + dr(t, 1) + dr(a, 2) + dr(s, 9) + dr(a, 3) + dr(s, 9) + dr(a, 2)));
	console.log(mirror(dr(a, 4) + dr(s, 8) + dr(a, 5) + dr(s, 10) + dr(a, 1)));
	console.log(mirror(dr(a, 2) + dr(t, 1) + dr(a, 2) + dr(s, 8) + dr(a, 1) + dr(t, 2) + dr(a, 1) + dr(s, 7) + ")(" + dr(s, 1) + dr(a, 1)));
	console.log(mirror(dr(a, 2) + dr(t, 3) + dr(a, 2) + dr(s, 7) + dr(a, 1) + dr(t, 1) + dr(a, 1) + dr(s, 10) + dr(a, 1)));
	console.log(mirror(dr(a, 2) + dr(t, 1) + dr(p, 2) + dr(t, 1) + dr(a, 2) + dr(s, 6) + dr(a, 3) + dr(s, 9) + dr(a, 1)));
	console.log(mirror(dr(a, 2) + dr(p, 1) + dr(t, 3) + dr(a, 2) + dr(s, 5) + dr(a, 2) + dr(s, 10) + dr(a, 1)));
	console.log(mirror(dr(a, 2) + dr(t, 5) + dr(a, 2) + dr(s, 3) + dr(a, 2) + dr(s, 7) + ")(" + dr(s, 1) + dr(a, 1)));
	console.log(mirror(dr(a, 2) + dr(t, 3) + dr(p, 2) + dr(t, 2) + dr(a, 4) + dr(s, 10) + dr(a, 1)));
	console.log(mirror(dr(a, 2) + dr(t, 1) + dr(p, 2) + dr(t, 4) + dr(a, 2) + dr(s, 11) + dr(a, 1)));
	console.log(mirror(dr(a, 3) + dr(t, 4) + dr(a, 2) + dr(s, 12) + dr(a, 1)));
	console.log(mirror(dr(a, 3) + dr(t, 2) + dr(a, 2) + dr(s, 9) + ")(" + dr(s, 1) + dr(a, 1)));
	console.log(mirror(dr(a, 5) + dr(s, 12) + dr(a, 1)));
	for (var i = 6 - 1; i >= 0; i--) {
		console.log(mirror(dr(a, 2) + dr(s, 12) + dr(a, 1)));
	}
	console.log(boundary(dr(a, 25)));

	//feet
	for (var i = 1; i < 6; i++) {
		console.log(mirror(dr(a, 2) + dr(d, i * 2 + 1) + dr(a, 2) + dr(e, 2)))
		if (i === 1 || i === 5) {
			console.log(mirror(dr(a, 2) + dr(d, i * 2 + 1) + dr(a, 2) + dr(e, 2)))
		}
	}
	console.log(mirror(dr(a, 13) + dr(e, 3)))
	console.log(boundary(dr(u, 37)));
	console.log(boundary(dr(u, 41)));
}


//Define weight in variable weight
function boundary(text) {
	var emptystr = e.repeat((weight - text.length) / 2);
	return emptystr + text + emptystr;
}

// dr a given character as many times as it is required
function dr(element, quantity) {
	return element.repeat(quantity)
}

// Reverse string and join to itself
function mirror(text) {
	return boundary(text + text.replace(/.$/, '').split('').reverse().join(''));
}
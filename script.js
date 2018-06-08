var btnRound = document.getElementById('mathRound');

btnRound.onclick = function() {
	var round = Math.round(document.getElementById('number').value);
	if(isNaN(round)){
		alert('Input Number');
	}else{
		document.getElementById('answer').innerHTML = round;
	}
	
}

var btnFloor = document.getElementById('mathFloor');

btnFloor.onclick = function() {
	var floor = Math.floor(document.getElementById('number').value);
	if(isNaN(floor)){
		alert('Input Number');
	}else{
		document.getElementById('answer').innerHTML = floor;
	}
	
}

var btnSqrt = document.getElementById('mathSqrt');

btnSqrt.onclick  = function() {
	var sqrt = Math.sqrt(document.getElementById('number').value);
	if(isNaN(sqrt)){
		alert('inputNumber');
	}else{
		document.getElementById('answer').innerHTML = sqrt;
	}
	
}

var btnSign = document.getElementById('mathSign');

btnSign.onclick = function() {
	var sign = Math.sign(document.getElementById('number').value);
	if(isNan(sqrt)){
		alert('input Number');
	}else{
		document.getElementById('answer').innerHTML = sign;
	}
	
}


var leng = document.getElementById('length');

leng.onclick = function() {
	var newLeng = document.getElementById('string').value.length;
	document.getElementById('answer2').innerHTML = newLeng;
}

var up = document.getElementById('upper');

up.onclick = function() {
	var secondStr =	document.getElementById('string').value.toUpperCase();
	document.getElementById('answer2').innerHTML = secondStr;
}

var sub = document.getElementById('substr');

sub.onclick = function() {
	var secondStr = document.getElementById('string').value;
	var newStr = "**"+ secondStr.substring(0,2) + " " +  secondStr.substring(2) + "**";
	document.getElementById('answer2').innerHTML = newStr;
}



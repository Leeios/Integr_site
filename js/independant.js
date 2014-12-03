var logos = [];
var wrapQuote;
var loginBox;
var current = 0;
var logShow = false;
function loadJS() {
	wrapQuote = document.body.getElementsByClassName('wrap-quote')[0];
	loginBox = document.body.getElementsByClassName('login-box')[0];
	logos[0] = document.body.getElementsByClassName('logo-bnp')[0];
	logos[1] = document.body.getElementsByClassName('logo-zodiac')[0];
	logos[2] = document.body.getElementsByClassName('logo-amundi')[0];
	// logos[0].style.opacity = '1';
	// logos[1].style.opacity = '0.5';
	// logos[2].style.opacity = '0.5';
}
function switchQuote(mark) {
	if (current === mark) return ;
	logos[current].style.opacity = '0.5';
	logos[mark].style.opacity = '1';
	current = mark;
	wrapQuote.style.left = (-mark * 100) + '%';
}
function displayLoginBox() {
	if (!logShow) {
		loginBox.style.top = '0';
		loginBox.style.left = '80%';
		logShow = true;
	} else {
		loginBox.style.top = '-20%';
		loginBox.style.left = '120%';
		logShow = false;
	}
}

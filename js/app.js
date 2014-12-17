sand.require('Game', function(r) {
	page = new r.Game();
	window.onload = function() {
		document.body.appendChild(page.el);
	}
})

sand.require('AhBT', function(r) {
	page = new r.AhBT();
	window.onload = function() {
		document.body.appendChild(page.el);
	}
})

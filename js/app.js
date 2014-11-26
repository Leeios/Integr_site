sand.require('PageCreation', function(r) {
	page = new r.PageCreation();
	window.onload = function() {
		document.body.appendChild(page.el);
	}
})

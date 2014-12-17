sand.define('Player', [
	'DOM/toDOM',
	'Seed'
	], function(r) {
	return r.Seed.extend({

		options: function () {
			return {
				id: -1,
				pts: 0,
				nbPlayers: 1
			}
		},

		tpl: function() {
			return {
				tag: '.wrap-player.player' + this.id,
				children: ['.player']
			}
		},

		'+init': function() {

			// this['player' + i] = r.toDOM('.player.player' + i);
			// this.players.appendChild(this['player' + i]);
			this.el.innerHTML = this.pts;
			this.el.style.width = (100 / this.nbPlayers) + '%';
			this.el.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
			document.addEventListener('keydown', this.fireEvent.bind(this));
		},

		setPts: function(diffPts) {
			this.pts += diffPts;
			this.el.innerHTML = this.pts;
		},

		fireEvent: function(e) {
			console.log(e.keyCode, this.id)
			if (this.id === 0 && e.keyCode === 32
				|| this.id === 1 && e.keyCode === 37
				|| this.id === 2 && e.keyCode === 38
				|| this.id === 3 && e.keyCode === 39
				|| this.id === 4 && e.keyCode === 40) {
				this.fire('O', this.id);
			}
		}

	})
})

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
				children: ['.player'],
				events: {
					click: function(e) {
						this.fire('O', this.id);
					}.bind(this)
				}
			}
		},

		'+init': function() {

			// this['player' + i] = r.toDOM('.player.player' + i);
			// this.players.appendChild(this['player' + i]);
			this.el.innerHTML = this.pts;
			this.el.style.width = (100 / this.nbPlayers) + '%';
			this.el.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		},

		setPts: function(diffPts) {
			this.pts += diffPts;
			this.el.innerHTML = this.pts;
		}

	})
})

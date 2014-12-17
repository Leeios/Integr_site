sand.define('Game', [
	'DOM/toDOM',
	'Seed',
	'Player'
	], function(r) {
	return r.Seed.extend({

		options: function () {
			return {
				data: null,
				answers: [],
				current: -1
			}
		},

		tpl: function() {
			return {
				tag: '.game', children: [
					['.wrap-question', [{tag: '.question', as: 'question'}]],
					['.wrap-answer', [{tag: '.answer', as: 'answer'}]],
					{tag: '.players', as: 'players'}
				]
			}
		},

		'+init': function() {
			this.getData();
			this.startGame(5, 4);
		},

		startGame: function(nbQuestions, nbPlayers) {
			for (var i = 0; i < nbPlayers; i++) {
				this['player' + i] = this.create(r.Player, {id: i, nbPlayers: nbPlayers, pts: 1000});
				this['player' + i].on('O', this.playerPush.bind(this));
				this.players.appendChild(this['player' + i].el);
			}
			this.newQuestion();
		},

		getData: function() {
			this.data =
				{
					"quotes": [
						"Vous ne m'aurez point !",
						"Des lézards, everywhere",
						"Rien de pire que l'anéymolide",
						"Les ondes malsaines qui circulent dans cette ville",
						"img/test0.jpg",
						"img/test1.jpg"
					],
					"answers": [
						"An evil dard",
						"Oenology",
						"Hollywood parano",
						"Tir",
						"Cover me",
						"Cover you"
					]
				};
		},

		newQuestion: function() {
			/*Random question*/
			this.iQuestion = Math.floor(Math.random() * (this.data.quotes.length));
			this.question.innerHTML = this.data.quotes[this.iQuestion];
			/*Random nb answers*/
			var maxAnswers = Math.floor(Math.random() * 3 + 3);
			this.answers.length = maxAnswers;
			for(var i = 0; i < maxAnswers; i++) {
				this.answers[i] = "";
			}


			this.answers[0] = this.data.answers[this.iQuestion];
			for (var i = 0; i < maxAnswers; i++) {
				this.addAnswer(i);
			}

			this.shuffle(this.answers);

			console.log(this.answers);
			this.displayAnswers();
		},

		addAnswer: function(i) {
			do {
				this.answers[i] = this.data.answers[Math.floor(Math.random() * (this.data.answers.length))];
			} while (this.inArray(this.answers, this.answers[i]) !== i);
		},

		displayAnswers: function() {
			this.current = -1;
			for (var i = 0, len = this.answers.length + 1; i < len; i++) {
				setTimeout(function() {
					this.current++;
					this.launchTime = new Date().getTime();
					if (this.current === this.answers.length) {
						this.newQuestion();
					} else {
						this.answer.innerHTML = this.answers[this.current];
					}
				}.bind(this), i * 3000);
			}
		},

		playerPush: function(id) {
			var RT = new Date().getTime() - this.launchTime;
			console.log('Player ' + id + ' answered in ' + (RT / 1000) + ' seconds.');
			var nbPts = Math.floor((3000 - RT) / 100);
			if (this.answers[this.current] === this.data.answers[this.iQuestion]) {
				console.log('GG WP !');
			} else {
				console.log('Too Bad...');
				nbPts = -nbPts;
			}
				this['player' + id].setPts(nbPts);
		},

		shuffle: function(array) {
			var currentIndex = array.length, temporaryValue, randomIndex ;

			while (0 !== currentIndex) {

				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			return array;
		},

		inArray: function(a, obj) {
			for (var i = 0; i < a.length; i++) {
				if (a[i] === obj) {
					return i;
				}
			}
			return -1;
		}

	})
})

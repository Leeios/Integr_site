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
				current: -1,
				timeOut: [],
				/*Variable de points/durée*/
				timeAnswer: 3000,
				timeBetQuestions: 2000,
				coefAnswer: 0.05
			}
		},

		tpl: function() {
			return {
				tag: '.game', children: [
					{tag: '.wrap-box', as: 'wrapBox', children: [{tag: '.box', as: 'box'}]},
					['.wrap-question', [{tag: '.question', as: 'question'}, {tag: '.question-title', as: 'title'}]],
					['.wrap-answer', [{tag: '.answer', as: 'answer'}]],
					{tag: '.players', as: 'players'}
				]
			}
		},

		'+init': function() {
			this.getData();
			this.startGame(5, 4, 1000);
		},

		startGame: function(nbQuestions, nbPlayers, pts) {
			this.nbQuestions = nbQuestions;
			this.pts = pts;
			for (var i = 0; i < nbPlayers; i++) {
				this['player' + i] = this.create(r.Player, {id: i, nbPlayers: nbPlayers, pts: pts});
				this['player' + i].on('O', this.playerPush.bind(this), this);
				this.players.appendChild(this['player' + i].el);
			}
			this.newQuestion();
		},

		getData: function() {
			this.data =
				{
					"quotes": [
						"0",
						"1",
						"2",
						"3",
						"4",
						"5"
					],
					"answers": [
						"0",
						"1",
						"2",
						"3",
						"4",
						"5"
					]
				};
		},

		newQuestion: function() {
			/*Check end game*/
			this.nbQuestions--;
			if (this.nbQuestions <= 0) {
				this.message('Game Over');
				console.log('Game Over');
				return ;
			}
			this.title.innerHTML = this.nbQuestions - 1 + ' questions left';
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
			for (var i = 1; i < maxAnswers; i++) {
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
			this.timeOut = [];
			for (var i = 0, len = this.answers.length + 1; i < len; i++) {
				this.timeOut[i] = setTimeout(function() {
					this.current++;
					this.launchTime = new Date().getTime();
					if (this.current === this.answers.length) {
						this.resetAnswers();
						this.message("Nobody found the answer. You bad. All of you.");
						setTimeout(this.newQuestion.bind(this), 2000);/*TIME between questions*/
					} else {
						this.answer.innerHTML = this.answers[this.current];
					}
				}.bind(this), i * this.timeAnswer);
			}
		},

		playerPush: function(id) {
			var RT = new Date().getTime() - this.launchTime;
			console.log('Player ' + id + ' answered in ' + (RT / 1000) + ' seconds.');
			/*HARD POINTS*/
			var nbPts = Math.floor((this.timeAnswer - RT) / 100);
			/*MATCH CONDITION*/
			if (this.answers[this.current] === this.data.answers[this.iQuestion]) {
				console.log('GG WP !');
				this.resetAnswers();
				this.message("Good answer was " + this.data.answers[this.iQuestion] + "<br />WP player " + id)
				setTimeout(this.newQuestion.bind(this), this.timeBetQuestions);/*TIME between questions*/
			} else {
				console.log('Too Bad...');
				nbPts = -nbPts;
			}
			this['player' + id].setPts(this.adjustPts(nbPts));
		},

		resetAnswers: function() {
			/*Reset timeout answers*/
			for (var i = 0, len = this.timeOut.length; i < len; i++) {
				clearTimeout(this.timeOut[i]);
			}
			this.timeOut = [];
		},

		adjustPts: function(p) {
			return Math.floor(p * this.coefAnswer * (this.pts / (this.nbQuestions + 1)));
		},

		message: function(s) {
			this.box.innerHTML = s;
			this.wrapBox.style.marginLeft = "0";
			this.wrapBox.style.color = "rgba(0, 0, 0, 1)";
			this.wrapBox.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
			setTimeout(function() {
				this.wrapBox.style.color = "rgba(0, 0, 0, 0)";
				this.wrapBox.style.backgroundColor = "rgba(0, 0, 0, 0)";
			}.bind(this), this.timeBetQuestions / 2);
			setTimeout(function() {
				this.wrapBox.style.marginLeft = "-100%";
			}.bind(this), this.timeBetQuestions);
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

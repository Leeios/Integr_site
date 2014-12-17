sand.define('AhBT', [
	'DOM/toDOM',
	'Seed'
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
					['.players', [
						{tag: '.player.player0', as: 'player0'},
						{tag: '.player.player1', as: 'player1'},
						{tag: '.player.player2', as: 'player2'}
					]]
				]
			}
		},

		'+init': function() {
			this.getData();
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
					"answer": [
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


			this.answers[0] = this.data.answer[this.iQuestion];
			for (var i = 0; i < maxAnswers; i++) {
				this.addAnswer(i);
			}

			this.shuffle(this.answers);

			console.log(this.answers);
			this.displayAnswers();
		},

		addAnswer: function(i) {
			do {
				this.answers[i] = this.data.answer[Math.floor(Math.random() * (this.data.quotes.length))];
			} while (this.inArray(this.answers, this.answers[i]) !== i);
		},

		displayAnswers: function() {
			this.current = -1;
			for (var i = 0, len = this.answers.length; i < len; i++) {
				setTimeout(function() {
					this.answer.innerHTML = this.answers[++this.current];
				}.bind(this), i * 1500);
			}
			// this.newQuestion();
		},

		playerPush: function(id) {
			;
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

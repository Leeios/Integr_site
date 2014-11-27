sand.define('PageCreation', [
	'DOM/toDOM',
	'Seed'
	], function(r) {

	return r.Seed.extend({

HTMLentities: function(t) {

t = t.replace(/"/g,'&quot;'); // 34 22
t = t.replace(/&/g,'&amp;'); // 38 26
t = t.replace(/\'/g,'&#39;'); // 39 27
t = t.replace(/</g,'&lt;'); // 60 3C
t = t.replace(/>/g,'&gt;'); // 62 3E
t = t.replace(/\^/g,'&circ;'); // 94 5E
t = t.replace(/‘/g,'&lsquo;'); // 145 91
t = t.replace(/’/g,'&rsquo;'); // 146 92
t = t.replace(/“/g,'&ldquo;'); // 147 93
t = t.replace(/”/g,'&rdquo;'); // 148 94
t = t.replace(/•/g,'&bull;'); // 149 95
t = t.replace(/–/g,'&ndash;'); // 150 96
t = t.replace(/—/g,'&mdash;'); // 151 97
t = t.replace(/˜/g,'&tilde;'); // 152 98
t = t.replace(/™/g,'&trade;'); // 153 99
t = t.replace(/š/g,'&scaron;'); // 154 9A
t = t.replace(/›/g,'&rsaquo;'); // 155 9B
t = t.replace(/œ/g,'&oelig;'); // 156 9C
t = t.replace(/ž/g,'&#382;'); // 158 9E
t = t.replace(/Ÿ/g,'&Yuml;'); // 159 9F
// t = t.replace(/ /g,'&nbsp;'); // 160 A0
t = t.replace(/¡/g,'&iexcl;'); // 161 A1
t = t.replace(/¢/g,'&cent;'); // 162 A2
t = t.replace(/£/g,'&pound;'); // 163 A3
//t = t.replace(/ /g,'&curren;'); // 164 A4
t = t.replace(/¥/g,'&yen;'); // 165 A5
t = t.replace(/¦/g,'&brvbar;'); // 166 A6
t = t.replace(/§/g,'&sect;'); // 167 A7
t = t.replace(/¨/g,'&uml;'); // 168 A8
t = t.replace(/©/g,'&copy;'); // 169 A9
t = t.replace(/ª/g,'&ordf;'); // 170 AA
t = t.replace(/«/g,'&laquo;'); // 171 AB
t = t.replace(/¬/g,'&not;'); // 172 AC
t = t.replace(/­/g,'&shy;'); // 173 AD
t = t.replace(/®/g,'&reg;'); // 174 AE
t = t.replace(/¯/g,'&macr;'); // 175 AF
t = t.replace(/°/g,'&deg;'); // 176 B0
t = t.replace(/±/g,'&plusmn;'); // 177 B1
t = t.replace(/²/g,'&sup2;'); // 178 B2
t = t.replace(/³/g,'&sup3;'); // 179 B3
t = t.replace(/´/g,'&acute;'); // 180 B4
t = t.replace(/µ/g,'&micro;'); // 181 B5
t = t.replace(/¶/g,'&para'); // 182 B6
t = t.replace(/·/g,'&middot;'); // 183 B7
t = t.replace(/¸/g,'&cedil;'); // 184 B8
t = t.replace(/¹/g,'&sup1;'); // 185 B9
t = t.replace(/º/g,'&ordm;'); // 186 BA
t = t.replace(/»/g,'&raquo;'); // 187 BB
t = t.replace(/¼/g,'&frac14;'); // 188 BC
t = t.replace(/½/g,'&frac12;'); // 189 BD
t = t.replace(/¾/g,'&frac34;'); // 190 BE
t = t.replace(/¿/g,'&iquest;'); // 191 BF
t = t.replace(/À/g,'&Agrave;'); // 192 C0
t = t.replace(/Á/g,'&Aacute;'); // 193 C1
t = t.replace(/Â/g,'&Acirc;'); // 194 C2
t = t.replace(/Ã/g,'&Atilde;'); // 195 C3
t = t.replace(/Ä/g,'&Auml;'); // 196 C4
t = t.replace(/Å/g,'&Aring;'); // 197 C5
t = t.replace(/Æ/g,'&AElig;'); // 198 C6
t = t.replace(/Ç/g,'&Ccedil;'); // 199 C7
t = t.replace(/È/g,'&Egrave;'); // 200 C8
t = t.replace(/É/g,'&Eacute;'); // 201 C9
t = t.replace(/Ê/g,'&Ecirc;'); // 202 CA
t = t.replace(/Ë/g,'&Euml;'); // 203 CB
t = t.replace(/Ì/g,'&Igrave;'); // 204 CC
t = t.replace(/Í/g,'&Iacute;'); // 205 CD
t = t.replace(/Î/g,'&Icirc;'); // 206 CE
t = t.replace(/Ï/g,'&Iuml;'); // 207 CF
t = t.replace(/Ð/g,'&ETH;'); // 208 D0
t = t.replace(/Ñ/g,'&Ntilde;'); // 209 D1
t = t.replace(/Ò/g,'&Ograve;'); // 210 D2
t = t.replace(/Ó/g,'&Oacute;'); // 211 D3
t = t.replace(/Ô/g,'&Ocirc;'); // 212 D4
t = t.replace(/Õ/g,'&Otilde;'); // 213 D5
t = t.replace(/Ö/g,'&Ouml;'); // 214 D6
t = t.replace(/×/g,'&times;'); // 215 D7
t = t.replace(/Ø/g,'&Oslash;'); // 216 D8
t = t.replace(/Ù/g,'&Ugrave;'); // 217 D9
t = t.replace(/Ú/g,'&Uacute;'); // 218 DA
t = t.replace(/Û/g,'&Ucirc;'); // 219 DB
t = t.replace(/Ü/g,'&Uuml;'); // 220 DC
t = t.replace(/Ý/g,'&Yacute;'); // 221 DD
t = t.replace(/Þ/g,'&THORN;'); // 222 DE
t = t.replace(/ß/g,'&szlig;'); // 223 DF
t = t.replace(/à/g,'&agrave;'); // 224 E0
t = t.replace(/á/g,'&aacute;'); // 225 E1
t = t.replace(/â/g,'&acirc;'); // 226 E2
t = t.replace(/ã/g,'&atilde;'); // 227 E3
t = t.replace(/ä/g,'&auml;'); // 228 E4
t = t.replace(/å/g,'&aring;'); // 229 E5
t = t.replace(/æ/g,'&aelig;'); // 230 E6
t = t.replace(/ç/g,'&ccedil;'); // 231 E7
t = t.replace(/è/g,'&egrave;'); // 232 E8
t = t.replace(/é/g,'&eacute;'); // 233 E9
t = t.replace(/ê/g,'&ecirc;'); // 234 EA
t = t.replace(/ë/g,'&euml;'); // 235 EB
t = t.replace(/ì/g,'&igrave;'); // 236 EC
t = t.replace(/í/g,'&iacute;'); // 237 ED
t = t.replace(/î/g,'&icirc;'); // 238 EE
t = t.replace(/ï/g,'&iuml;'); // 239 EF
t = t.replace(/ð/g,'&eth;'); // 240 F0
t = t.replace(/ñ/g,'&ntilde;'); // 241 F1
t = t.replace(/ò/g,'&ograve;'); // 242 F2
t = t.replace(/ó/g,'&oacute;'); // 243 F3
t = t.replace(/ô/g,'&ocirc;'); // 244 F4
t = t.replace(/õ/g,'&otilde;'); // 245 F5
t = t.replace(/ö/g,'&ouml;'); // 246 F6
t = t.replace(/÷/g,'&divide;'); // 247 F7
t = t.replace(/ø/g,'&oslash;'); // 248 F8
t = t.replace(/ù/g,'&ugrave;'); // 249 F9
t = t.replace(/ú/g,'&uacute;'); // 250 FA
t = t.replace(/û/g,'&ucirc;'); // 251 FB
t = t.replace(/ü/g,'&uuml;'); // 252 FC
t = t.replace(/ý/g,'&yacute;'); // 253 FD
t = t.replace(/þ/g,'&thorn;'); // 254 FE
t = t.replace(/ÿ/g,'&yuml;'); // 255 FF
	return t;
},

		tpl: function() {
			return (
				{tag: '.wrap-pages', children: [
					{tag: '.page-first.page', attr: {name: 'page-first'}, children: [
						['.first-background', [
							['.header', ['.banner MyExpertizer.',
								['.menu', [
									{tag: 'a.link-second.link SOLUTION', attr: {href: '#page-second'}},
									{tag: 'a.link-fourth.link USE CASES', attr: {href: '#page-fourth'}}
								]],
								['.log-info', [
									'.tel-number +33 6 52 53 21 68',
									{tag: '.login-button.button LOGIN', events: {
										click: this.displayLoginBox.bind(this)
										}
									}
								]]
							]],
							['.content', [['.wrap-content', [
								'.image-content',
								{tag: '.txt-content', as: 'contentFirstTxT'}
							]]]]
						]],
						['.footer', [['.logos', [
							['.contain', [{tag: '.logo-bnp.logo', as: 'logo0', events: {
								click: function() {
									this.switchQuote(0);
								}.bind(this)
							}}]],
							['.contain', [{tag: '.logo-zodiac.logo', as: 'logo1', events: {
								click: function() {
									this.switchQuote(1);
								}.bind(this)
							}}]],
							['.contain', [{tag: '.logo-amundi.logo', as: 'logo2', events: {
								click: function() {
									this.switchQuote(2);
								}.bind(this)
							}}]]]
						],
						{tag: '.quote', as: 'quoteContain', children: ['.quote-first', {tag: '.quote-txt', as: 'quoteTxt'}, {tag: '.quote-author', as: 'quoteAuthor'}]}]]
					]},/*END*/
					{tag: '.page-second.page#page-second', children: [
						['.wrap', [{tag:'.main-txt', as: 'mainSecondTxt',}]],
						['.left-side.side', [{tag: '.wrap-left.wrap-side', children: [
							'.img-left.img-second',
							{tag: '.legend-left.legend-second', as: 'secondTxtLeft'},
							{tag: '.list-left.list-second', as: 'secondListLeft'}
						]}]],
						['.right-side.side', [{tag: '.wrap-right.wrap-side', children: [
							'.img-right.img-second',
							{tag: '.legend-right.legend-second', as: 'secondTxtRight'},
							{tag: '.list-right.list-second', as: 'secondListRight'}
						]}]],
						{tag: '.footer', as: 'secondFooter'}
					]},/*END*/
					{tag: '.page-third.page', attr: {name: 'page-third'}, children: [
						['.wrap-page', [
							'.frise',
							['.wrap-line', [
								{tag: '.left-one.left', as: 'leftOne'}, '.icon-one.icon', '.right-one.right'
							]],
							['.wrap-line', [
								'.left-two.left', '.icon-two.icon', {tag: '.right-two.right', as: 'rightTwo'}
							]],
							['.wrap-line', [
								{tag: '.left-three.left', as: 'leftThree'}, '.icon-three.icon', '.right-three.right'
							]]
						]]
					]},/*END*/
					{tag: '.page-fourth.page#page-fourth', children: [
						['.up-part.part', [
							['.wrap-title', [{tag: '.title', as: 'fourthTitle'}]],
							['.content', [
								['.left-part.part', ['.left-img.img', {tag: '.left-txt.txt', as: 'fourthLeftTxt'}]],
								['.right-part.part', ['.right-img.img', {tag: '.right-txt.txt', as: 'fourthRightTxt'}]]
							]]
						]],
						['.down-part.part', [
							['.wrap-title', [{tag: '.title', as: 'fourthTitleDown'}]],
							{tag: '.contact', as: 'fourthContact'},
							{tag: '.logo', as: 'fourthLogo'}
						]]
					]}
				]}
			);
		},

		'+init': function() {
			this.contentFirstTxT.innerHTML = 'Le logiciel <span class="special-logo">MyExpertizer</span>' + this.HTMLentities(' rend vos données exploitables, de manière pérenne, grâce à des expertises métiers embarquées et des règles intelligentes de traitement.');

			this.quotes = [];
			this.bosses = [];
			/*0: BNP, 1: Zodiac, 2:Amundi*/
			this.quotes[0] = 'It was really awesome. MyExpertizer has made my unreadable Excel actionnable in 1h30 where it usually took 3 days"';
			this.bosses[0] = "- Some boss";
			this.quotes[1] = 'Zt was really awesome. MyExpertizer has made my unreadable Excel actionnable in 1h30 where it usually took 3 days"';
			this.bosses[1] = "- Zodiac boss";
			this.quotes[2] = 'At was really awesome. MyExpertizer has made my unreadable Excel actionnable in 1h30 where it usually took 3 days"';
			this.bosses[2] = "- Amundi boss";

			this.current = 0;
			this['logo0'].style.opacity = '1';
			this['logo1'].style.opacity = '0.5';
			this['logo2'].style.opacity = '0.5';
			this.quoteTxt.innerHTML = this.quotes[0];
			this.quoteAuthor.innerHTML = this.bosses[0];
			this.switchQuote(0);

			this.mainSecondTxt.innerHTML = 'Des solutions <span class="color-white">' + this.HTMLentities('pour vos coûts.') + '</span> A bas ' + this.HTMLentities('coûts.');

			this.secondTxtLeft.innerHTML = "Besoin d'une <span class='span-red'>" + this.HTMLentities('expertise spécifique') + '</span> pour votre domaine ' + this.HTMLentities("d'activités ?");
			this.secondTxtRight.innerHTML = 'Besoin de gagner du temps sur des <span class="span-red">besoins recurrents ?</span>';
			this.secondFooter.innerHTML = this.HTMLentities('Notre méthode ?') + '<br />'
											+ this.HTMLentities('Reprendre la main sur ses données.') + '<br />'
											+ this.HTMLentities('Pour prendre les bonnes décisions.');
			this.secondListLeft.innerHTML = '<ul><li>' + this.HTMLentities('Coûts par activité') + '</li>'
									+ '<li>' + this.HTMLentities('Mécanismes de refacturation') + '</li>'
									+ '<li>' + this.HTMLentities('Gestion de scénarios et simulations de coûts') + '</li></ul>';
			this.secondListRight.innerHTML = '<ul><li>' + this.HTMLentities('Génération de devis') + '</li>'
									+ '<li>' + this.HTMLentities('Calcul de prix de revient') + '</li>'
									+ '<li>' + this.HTMLentities('Contrôle et fiabilisation de données') + '</li></ul>';


			this.leftOne.innerHTML = '<span class="span-title"><span class="span-red">'
										+ this.HTMLentities('Préparer le cadre de travail') + '</span></span><br /><br />'
										+ this.HTMLentities('Nous définissons ensemble les objectifs réalisables en fonction du contexte et des informations disponibles: indicateurs, données, mode de fonctionnement');
			this.rightTwo.innerHTML = '<span class="span-title"><span class="span-blue">Co-construire</span>'
										+ '<br /> le dispositif</span><br /><br />'
										+ this.HTMLentities("Nous élaborons avec vous un système flexible qui repose sur l'organisation structurée et documentée des règles de gestion");
			this.leftThree.innerHTML = '<span class="span-title">Assurer un fonctionnement<br />'
											+ '<span class="span-green">' + this.HTMLentities('fiable dans la durée') + '</span></span><br /><br />'
										+ this.HTMLentities("Le lien natif entre la vue métier et sa traduction technique facilite la compréhension partagée du dispositif et sécurise les évolutions");

			this.fourthTitle.innerHTML = '<span class="color-white">' + this.HTMLentities('Découvrez nos') + '</span> cas clients.';
			this.fourthLeftTxt.innerHTML = 'Gestion des <span class="color-red">' + this.HTMLentities('coûts IT');
			this.fourthRightTxt.innerHTML = 'Optimisation <span class="color-red">vignobles</span>';

			this.fourthTitleDown.innerHTML = this.HTMLentities('Demander une démonstration');
			this.fourthContact.innerHTML = 'Stephane Janin<br />'
											+ this.HTMLentities('+ (33) 6 87 24 90 10')
											+ '<br />' + this.HTMLentities('stephane.janin@myexpertizer.com');
			this.fourthLogo.innerHTML = 'Myexpertizer.';
		},

		switchQuote: function(mark) {

			if (this.current === mark) return ;

			this['logo' + this.current].style.opacity = '0.5';
			this['logo' + mark].style.opacity = '1';

			var dir = this.current < mark;

			this.quoteContain.style.left = dir ? '-200%' : '200%';

			setTimeout(function() {
				this.quoteContain.style.display = 'none';
				this.current = mark;
				this.quoteTxt.innerHTML = this.quotes[this.current];
				this.quoteAuthor.innerHTML = this.bosses[this.current];

				this.quoteContain.style.left = dir ? '200%' : '-200%';

				setTimeout(function() {
					this.quoteContain.style.display = 'block';
					this.quoteContain.style.left = '0px';
				}.bind(this), 300);
			}.bind(this), 300)
		},

		displayLoginBox: function(e) {
			;
		}

	})
})

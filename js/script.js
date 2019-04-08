let social = [
	{color: '#AD35AF', img: 'imgs/instagram.png', url: 'https://instagram.com/lucaslopesf'},
	{color: '#3C5999', img: 'imgs/facebook.png',  url: 'https://fb.com/lucaslopes42'},
	{color: '#0274B3', img: 'imgs/linkedin.png',  url: 'https://linkedin.com/in/lucaslopesf'},
	{color: '#189CDE', img: 'imgs/telegram.png',  url: 'https://t.me/lucaslopesf'},
	{color: '#2AA9E0', img: 'imgs/twitter.png',   url: 'https://twitter.com/lucaslopes37'},
	{color: '#DC2A26', img: 'imgs/youtube.png',   url: 'https://youtube.com/lucaslopesf2'},
	{color: '#1DB854', img: 'imgs/spotify.png',   url: 'https://open.spotify.com/user/12146452710'},
	{color: '#1B1F23', img: 'imgs/github.png',    url: 'https://github.com/lucaslopes'},
	{color: '#292929', img: 'imgs/medium.png',    url: 'https://medium.com/@lucaslopesf'},
	{color: '#2C2B64', img: 'imgs/lattes.png',    url: 'http://lattes.cnpq.br/4977148353055436'},
	{color: '#B92A27', img: 'imgs/quora.png',     url: 'https://quora.com/profile/Lucas-Lopes-3'},
	{color: '#F6F6F6', img: 'imgs/email.png',     url: 'email', email: 'luc' + 'aslop' + 'esf2@g' + 'mai' + 'l.c' + 'om'}
];

let table;
function fillTable(cols, randomize) {
	if (randomize)
		social = shuffle(social);

	$('.social').remove();
	table = $('<table>').addClass('social');

	for (let [i, s] of social.entries()) {
		if (i%cols == 0)
			table.append($('<tr>'));

		let lastRow = table.find('tr').last();

		let cell = $('<td>').addClass('top').css('background-color', s.color);
		let image = $('<img>').addClass('logos inside-link').attr('src', s.img);
		let link = $('<a>').addClass('links').attr({href: s.url, target: '_blank'});

		if (s.url == 'email') {
			image.removeClass('inside-link');
			cell.append(image).removeClass('top').addClass('center');

			cell.css('cursor', 'pointer');
			cell.click(function() {
				copy(s.email);

				message.css('visibility', 'visible').animate({
					bottom: 0
				}, 250, 'easeInQuad', function() {
					message.delay(2500).animate({
						bottom: -message.height()
					}, 250, 'easeInQuad', function() {
						message.css('visibility', 'hidden').finish();
					});
				})
			});
		}
		else {
			link.append(image);
			cell.append(link);
		}

		lastRow.append(cell);
	}
}
fillTable(getCols(), true);

let shake = new Shake();
shake.start();
$(window).on('shake', function() {
	fillTable(getCols(), true);
	$('body').prepend(table);
});

let message = $('<div>').addClass('message');
message.html('Email address copied to clipboard');

$(function() {
	$('body').append(table);
	$('body').append(message);
})

$(window).resize(function() {
	fillTable(getCols(), false);
	$('body').prepend(table);
})

function getCols() {
	let possibilities = [2, 3, 4, 6, 12];
	let ratio = $(window).width()/$(window).height();
	let index = Math.min(Math.floor(ratio/3*possibilities.length), possibilities.length-1);
	return possibilities[index];
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random()*(i+1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function copy(string) {
	let textarea = $('<textarea>').val(string);
	$('body').append(textarea);
	if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
		var el = textarea.get(0);
		var editable = el.contentEditable;
		var readOnly = el.readOnly;
		el.contentEditable = true;
		el.readOnly = false;
		var range = document.createRange();
		range.selectNodeContents(el);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
		el.setSelectionRange(0, 999999);
		el.contentEditable = editable;
		el.readOnly = readOnly;
	} else
		textarea.select();
	document.execCommand('copy');
	textarea.remove();
}

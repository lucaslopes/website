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
{color: '#F6F6F6', img: 'imgs/email.png',     url: 'email', email: 'lucaslopesf2@gmail.com'}
];

let rows = 4;
social = shuffle(social);

let table = $('<table>').addClass('social');
for (let [i, s] of social.entries()) {
  if (i%Math.floor(social.length/rows) == 0)
    table.append($('<tr>'));

  let lastRow = table.find('tr').last();

  let cell = $('<td>').addClass('top').css('background-color', s.color);
  let image = $('<img>').addClass('logos inside-link').attr('src', s.img);
  let link = $('<a>').addClass('links').attr({href: s.url, target: '_blank'});

  if (s.url == 'email') {
    image.removeClass('inside-link')
    cell.append(image).removeClass('top').addClass('center');

    cell.css('cursor', 'pointer');
    cell.click(function() {
      copy(s.url);
    });
  }
  else {
    link.append(image);
    cell.append(link);
  }

  lastRow.append(cell);
}

let intro;

if (Cookies.get('visited') != 'true') {
  intro = $('<div>').addClass('intro');
  let logo = $('<img>').attr('src', './imgs/logo.svg');

  intro.append(logo);

  logo.css({width: '50%', height: '50%'});

  logo.delay(250).animate({width: '100%', height: '100%'}, 1000, $.easeInQuad);
  intro.delay(250).fadeOut(1500);

  $('body').append(intro);

  Cookies.set('visited', 'true');
}

$(function() {
  $('body').append(table);
  $('body').append(intro);
})

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function copy(string) {
  let textarea = $('<textarea>').val(string);
  $('body').append(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}
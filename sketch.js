let x, y, w, h, i, j, side, social;
let email, twitter, facebook, instagram, linkedin, youtube, spotify, github, medium, quora, telegram, lattes;

function preload() {
  instagram = loadImage('imgs/instagram.png');
  facebook  = loadImage('imgs/facebook.png');
  linkedin  = loadImage('imgs/linkedin.png');
  telegram  = loadImage('imgs/telegram.png');
  twitter   = loadImage('imgs/twitter.png');
  youtube   = loadImage('imgs/youtube.png');
  spotify   = loadImage('imgs/spotify.png');
  github    = loadImage('imgs/github.png');
  medium    = loadImage('imgs/medium.png');
  lattes    = loadImage('imgs/lattes.png');
  quora     = loadImage('imgs/quora.png');
  email     = loadImage('imgs/email.png');

  social = [
    ['#AD35AF', instagram, 'https://instagram.com/lucaslopesf'],
    ['#3C5999', facebook,  'https://fb.com/lucaslopes42'],
    ['#0274B3', linkedin,  'https://linkedin.com/in/lucaslopesf'],
    ['#189CDE', telegram,  'https://t.me/lucaslopesf'],
    ['#2AA9E0', twitter,   'https://twitter.com/lucaslopes37'],
    ['#DC2A26', youtube,   'https://youtube.com/lucaslopesf2'],
    ['#1DB854', spotify,   'https://open.spotify.com/user/12146452710'],
    ['#1b1f23', github,    'https://github.com/lucaslopes'],
    ['#292929', medium,    'https://medium.com/@lucaslopesf'],
    ['#2C2B64', lattes,    'http://lattes.cnpq.br/4977148353055436'],
    ['#B92A27', quora,     'https://quora.com/profile/Lucas-Lopes-3'],
    ['#FFFFFF', email,     'email']
  ];
}

function resize() {
  x = windowWidth;
  y = windowHeight;

  if (x > y) { w = x / 4; h = y / 3; i = 4; j = 3; side = h / 2 }
  else       { w = x / 3; h = y / 4; i = 3; j = 4; side = w / 2 }
}

function show(s) {
  noStroke();
  fill(s[0]);
  rect(w * s[3], h * s[4], w, h);
  imageMode(CENTER);
  image(s[1], w * s[3] + w / 2, h * s[4] + h / 2, side, side);
}

function copying(s, string = 'lucaslopesf2 AT gmail.com') {
  const el = document.createElement('textarea');
  el.value = string;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  confirm(s)
}

function confirm(s) {
  fill(0)
  textSize(side / 5)
  textAlign(CENTER);
  textFont('Courier');
  let pos_x = s[3] * w + w / 2 + 3
  let pos_y = s[4] * h + h / 5
  // let copiado = createGraphics(x, y)
  text('copiado!', pos_x, pos_y)
  fill(255)
  rectMode(CENTER)
  window.setTimeout(() => rect(pos_x, pos_y - 5, w / 2, h / 4.6), 2000);
}

// Reference: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  let copy = [], n = array.length, i;
  while (n) {
    i = Math.floor(Math.random() * array.length);
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }
  return copy;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  social = shuffle(social);
}

function draw() {
  resize();
  let s = 0;
  for (let a = 0; a < i; a++)
    for (let b = 0; b < j; b++) {
      social[s][3] = a;
      social[s][4] = b;
      s++
    }
  for (let s of social)
    show(s);
  noLoop();
}

function mouseClicked() {
  for (let s of social) {
    let s_x = s[3] * w + w / 2;
    let s_y = s[4] * h + h / 2;
    let d = dist(s_x, s_y, mouseX, mouseY);
    if (d < side * 2 / 3) {
      if (s[2] == 'email') copying(s)
      else window.open(s[2])
      break;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function deviceShaken() {
  social = shuffle(social);
  loop();
}

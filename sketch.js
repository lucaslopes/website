let x, y, w, h, i, j, side, social;

function loadLogos() {
  let n = {};
  n['instagram'] = loadImage('imgs/instagram.png');
  n['facebook']  = loadImage('imgs/facebook.png');
  n['linkedin']  = loadImage('imgs/linkedin.png');
  n['telegram']  = loadImage('imgs/telegram.png');
  n['twitter']   = loadImage('imgs/twitter.png');
  n['youtube']   = loadImage('imgs/youtube.png');
  n['spotify']   = loadImage('imgs/spotify.png');
  n['github']    = loadImage('imgs/github.png');
  n['medium']    = loadImage('imgs/medium.png');
  n['lattes']    = loadImage('imgs/lattes.png');
  n['quora']     = loadImage('imgs/quora.png');
  n['email']     = loadImage('imgs/email.png');
  return n;
}

function loadSocial(n) {
  social = [
    ['#AD35AF', n['instagram'], 'https://instagram.com/lucaslopesf'],
    ['#3C5999', n['facebook'],  'https://fb.com/lucaslopes42'],
    ['#0274B3', n['linkedin'],  'https://linkedin.com/in/lucaslopesf'],
    ['#189CDE', n['telegram'],  'https://t.me/lucaslopesf'],
    ['#2AA9E0', n['twitter'],   'https://twitter.com/lucaslopes37'],
    ['#DC2A26', n['youtube'],   'https://youtube.com/lucaslopesf2'],
    ['#1DB854', n['spotify'],   'https://open.spotify.com/user/12146452710'],
    ['#1B1F23', n['github'],    'https://github.com/lucaslopes'],
    ['#292929', n['medium'],    'https://medium.com/@lucaslopesf'],
    ['#2C2B64', n['lattes'],    'http://lattes.cnpq.br/4977148353055436'],
    ['#B92A27', n['quora'],     'https://quora.com/profile/Lucas-Lopes-3'],
    ['#FFFFFF', n['email'],     'email']
  ];
}

function preload() {
  loadSocial(loadLogos());
}

function setup() {
  let logo = document.getElementById("logo")
  logo.parentNode.removeChild(logo);
  resize();
  createCanvas(x, y);
  social = shuffle(social);
}

function draw() {
  let s = 0;
  for (let a = 0; a < i; a++) {
    for (let b = 0; b < j; b++) {
      social[s][3] = a;
      social[s][4] = b;
      s++;
    }
  }
  for (let s of social)
    show(s);
  noLoop();
}

function show(s) {
  noStroke();
  fill(s[0]);
  rect(w * s[3], h * s[4], w, h);
  imageMode(CENTER);
  image(s[1], w * s[3] + w / 2, h * s[4] + h / 2, side, side);
}

function copying(s, string = 'lucaslopesf2@gmail.com') {
  const el = document.createElement('textarea');
  el.value = string;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  confirm(s);
}

function confirm(s) {
  fill(0);
  textSize(side / 5);
  textAlign(CENTER);
  textFont('Courier');
  let pos_x = s[3] * w + w / 2 + 3;
  let pos_y = s[4] * h + h / 5;
  text('copiado!', pos_x, pos_y);
  fill(255);
  rectMode(CENTER);
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

function mouseClicked() {
  for (let s of social) {
    let s_x = s[3] * w + w / 2;
    let s_y = s[4] * h + h / 2;
    let d = dist(s_x, s_y, mouseX, mouseY);
    if (d < side * 2 / 3) {
      if (s[2] == 'email') copying(s);
      else window.open(s[2]);
      break;
    }
  }
}

function resize() {
  x = windowWidth;
  y = windowHeight;
  if (x > y) { w = x / 4; h = y / 3; i = 4; j = 3; side = h / 2; }
  else       { w = x / 3; h = y / 4; i = 3; j = 4; side = w / 2; }
}

function windowResized() {
  resize();
  resizeCanvas(x, y);
}

function deviceShaken() {
  social = shuffle(social);
  loop();
}

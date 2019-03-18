
var weather;

var api = 'https://api.apixu.com/v1/current.json?'
var apiKey = 'key=e9094bc077f84b29b2d75019191703'


var input;

var city = "~"


function preload() {
  mohave = loadFont('assets/Mohave-Medium.ttf');
  night_clear = loadImage('assets/Night Clear.png');
}


function setup() {
  createCanvas(windowWidth,windowHeight,);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + apiKey + '&q=' + input.value()
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data
}

function draw() {
  background(255, 255, 242);
  textFont(mohave)

  if (weather) {
    fill(0);
    textAlign(LEFT,BOTTOM)
    textSize(80);
    text(weather.location.name + ', ' + weather.location.region,0,80);
    textSize(60);
    text(weather.current.condition.text, 0, 150);
    text(weather.current.temp_f + " ºF",0,220);

    weatherImage();
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function weatherImage() {
  if (weather.current.condition.code == '1000') {
    image(night_clear,200,90);
  }
}

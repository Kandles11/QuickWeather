
var weather;

var api = 'https://api.apixu.com/v1/current.json?'
var apiKey = 'key=e9094bc077f84b29b2d75019191703'

var units = '&units=imperial'

var input;

var city = "~"


function preload() {
  mohave = loadFont('assets/Mohave-Medium.ttf');
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
  textSize(60);
  if (weather) {
    fill(0);
    textAlign(LEFT,TOP)
    text(weather.current.temp_f + " ºF",0,130);
    text(weather.current.condition.text, 0, 70);
    textSize(80);
    text(weather.location.name + ', ' + weather.location.region,0,0);
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

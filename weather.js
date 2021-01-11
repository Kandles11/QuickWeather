
var weather;

var api = 'http://api.weatherstack.com/current?'
var apiKey = 'access_key=d981b7ee5111e91147f56f3c94afaf07'


var input;

var city = "~"


function preload() {
  mohave = loadFont('assets/fonts/Mohave-Medium.ttf');
  night_clear = loadImage('assets/night weather conditions/Night Clear.png');
  day_sunny = loadImage('assets/day weather conditions/Day Sunny.png');
  day_partly_cloudy = loadImage('assets/day weather conditions/Day Partly Cloudy.png');
  night_partly_cloudy = loadImage('assets/night weather conditions/Night Partly Cloudy.png');
}


function setup() {
  createCanvas(windowWidth,windowHeight,);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + apiKey + '&query=' + input.value()
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
    text(weather.current.wind_mph  + " mph",0,290);


    weatherImage();
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function weatherImage() {
  if (weather.current.is_day == "1"){
    if (weather.current.condition.code == "1000"){
      image(day_sunny,200,90);
    }
    if (weather.current.condition.code == "1003"){
      image(day_partly_cloudy,290,90);

    }








  } else {
    if (weather.current.condition.code == "1000"){
      image(night_clear,200,90);
  }
  if (weather.current.condition.code == "1003"){
    image(night_partly_cloudy,290,90);

  }







}
}

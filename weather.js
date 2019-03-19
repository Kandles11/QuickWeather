
var weather;

var api = 'https://api.apixu.com/v1/current.json?'
var apiKey = 'key=e9094bc077f84b29b2d75019191703'


var input;

var city = "~"


function preload() {
  mohave = loadFont('assets/fonts/Mohave-Medium.ttf');
  night_clear = loadImage('assets/night weather conditions/Night Clear.png');
  day_sunny = loadImage('assets/day weather conditions/Day Sunny.png');
  day_partly_cloudy = loadImage('assets/day weather conditions/Day Partly Cloudy.png');
  night_partly_cloudy = loadImage('assets/night weather conditions/Night Partly Cloudy.png');
  day_mist = loadImage('assets/day weather conditions/Day Mist.png');
  night_mist = loadImage('assets/night weather conditions/Night Mist.png');
  day_patchy_rain = loadImage('assets/day weather conditions/Day Patchy Rain Possible.png');
  night_patchy_rain = loadImage('assets/night weather conditions/Night Patchy Rain Possible.png');
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
    if (weather.current.condition.code == "1030"){
      image(day_mist,290,90);
    }
    if (weather.current.condition.code == "1063"){
      image(day_patchy_rain,290,90);
    }








  } else {
    if (weather.current.condition.code == "1000"){
      image(night_clear,200,90);
  }
  if (weather.current.condition.code == "1003"){
    image(night_partly_cloudy,290,90);
  }
  if (weather.current.condition.code == "1030"){
    image(night_mist,290,90);
  }
  if (weather.current.condition.code == "1063"){
    image(night_patchy_rain,290,90);
  }






}
}

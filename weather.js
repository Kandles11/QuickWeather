var weather;
var darkData;

var api = 'https://api.apixu.com/v1/current.json?'
var apiKey = 'key=e9094bc077f84b29b2d75019191703'
var forecastApi = 'https://api.apixu.com/v1/forecast.json?'
var darkApi = ' https://api.darksky.net/forecast/'
var darkApiKey = 'b4b24fa0c2ca3e613ecb4b6896bf3abe/'

var input;

var city = "~"

var lat;
var lon;

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
  createCanvas(windowWidth, windowHeight, );

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + apiKey + '&q=' + input.value()
  var forecastUrl = forecastApi + apiKey + '&q=' + input.value()
  loadJSON(url, gotData);

  var darkUrl = darkApi + darkApiKey + lat + ',' + lon
  loadJSON(darkUrl, darkGotData);
}

function gotData(data) {
  weather = data
  lat = weather.location.lat
  lon = weather.location.lon
}
function darkGotData(data) {
  darkData = data
}


function draw() {
  background(255, 255, 242);
  textFont(mohave)

  if (weather) {
    fill(0);
    textAlign(LEFT, BOTTOM)
    textSize(80);
    text(weather.location.name + ', ' + weather.location.region, 0, 80);
    textSize(70);
    text('Current:', 0, 140)
    textSize(60);
    text(weather.current.condition.text, 0, 190);
    text(weather.current.temp_f + " ºF", 0, 250);
    //text(darkData.timezone,100,100);
    console.log(darkData);
    weatherImage();
    currentParagraph();
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function weatherImage() {
  if (weather.current.is_day == "1") {
    if (weather.current.condition.code == "1000") {
      image(day_sunny, 800, 130);
    }
    if (weather.current.condition.code == "1003") {
      image(day_partly_cloudy, 800, 130);
    }
    if (weather.current.condition.code == "1030") {
      image(day_mist, 800, 130);
    }
    if (weather.current.condition.code == "1063") {
      image(day_patchy_rain, 800, 130);
    }
  } else {
    if (weather.current.condition.code == "1000") {
      image(night_clear, 800, 130);
    }
    if (weather.current.condition.code == "1003") {
      image(night_partly_cloudy, 800, 130);
    }
    if (weather.current.condition.code == "1030") {
      image(night_mist, 800, 130);
    }
    if (weather.current.condition.code == "1063") {
      image(night_patchy_rain, 800, 130);
    }
  }
}


function currentParagraph() {
  textSize(30);
  textAlign(LEFT, TOP)
  text("Right now, its " + weather.current.condition.text + ', ', 340, 130);
  text(weather.current.temp_f + ' ºF, in ' + weather.location.name + '.', 340, 160);
  text('Currently, it feels like ' + weather.current.feelslike_f + " ºF.", 340, 190);
  text('There are ' + weather.current.wind_mph + " mph winds blowing " + weather.current.wind_dir + '.', 340, 220);

}

function forecastParagraph() {
  textSize(30);
  textAlign(LEFT,TOP)
  text()

}

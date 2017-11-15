// Default location (area code or city, state – in quotes)
var lc = "Somerset Village, Bermuda";


// Really Simple Weather Plug-In Details

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: lc, //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    // sample data to display city and temperature
    html = '<main>';
    html += '<section class="top">';
    html += '<img src="img/bermuda-logo.png">';
    html += '<h1 class="wdata-01">'+weather.city+', '+weather.region+'</h1>';
    html += '<h2 class="wdata-02">'+weather.temp+'&deg;</h2>';
    html += '<p class="wdata-03">'+weather.currently+'</p>';
    html += '<p><i class="icon icon-'+weather.code+'"></i></p>';
    html += '<div class="low">';
    html += '<h3 class="wdata-04">'+weather.low+'</h3>';
    html += '</div>';
    html += '<div class="high">';
    html += '<h3 class="wdata-05">'+weather.high+'</h3>';
    html += '</div>';
    html += '</section>';
    html += '<section class="bottom">';
    html += '<div class="left">Sunrise';
    html += '<h3 class="wdata-06">'+weather.sunrise+'</h3>';
    html += '</div>';
    html += '<div class="right">Sunset';
    html += '<h3 class="wdata-07">'+weather.sunset+'</h3>';
    html += '</div>';
    html += '<div class="update">';
    html += '</div>';
    html += '</section>';
    html += '<section class="under">';
    html += '<div class="speed"><h4>Wind Speed</h4><p> '+weather.wind.speed+'</p></div>';
    html += '<div class="chill"><h4>Wind Chill</h4><p> '+weather.wind.chill+'</p></div>';
    html += '<div class="direction"><h4>Wind Direction</h4><p> '+weather.wind.direction+'</p></div>';
    html += '<h4 class="wdata-08">Last Updated: '+weather.updated+'</h4>';
    html += '</section>';
    html += '</main>';
    html += '<aside>';
    html += '<section class="week1">';
    html += '<h1 class="title">Bermuda Forecast';
    html += '</h1>';
    html += '<div class="day"> '+weather.forecast[1].day+'</div>';
    html += '<div class="climate">'+weather.forecast[1].text+'</div>';
    html += '<div class="high"> '+weather.forecast[1].high+' </div>';
    html += '<div class="low"> '+weather.forecast[1].low+' </div>';
    html += '</section>'
    html += '<section class="week2">';
    html += '<div class="day"> '+weather.forecast[2].day+'</div>';
    html += '<div class="climate">'+weather.forecast[2].text+'</div>';
    html += '<div class="high"> '+weather.forecast[2].high+' </div>';
    html += '<div class="low"> '+weather.forecast[2].low+' </div>';
    html += '</section>';
    html += '<section class="week3">';
    html += '<div class="day"> '+weather.forecast[3].day+'</div>';
    html += '<div class="climate">'+weather.forecast[3].text+'</div>';
    html += '<div class="high"> '+weather.forecast[3].high+' </div>';
    html += '<div class="low"> '+weather.forecast[3].low+' </div>';
    html += '</section>';
    html += '<section class="week4">';
    html += '<div class="day"> '+weather.forecast[4].day+'</div>';
    html += '<div class="climate">'+weather.forecast[4].text+'</div>';
    html += '<div class="high"> '+weather.forecast[4].high+'</div>';
    html += '<div class="low"> '+weather.forecast[4].low+'</div>';
    html += '</section>';
    html += '<section class="week5">';
    html += '<div class="day"> '+weather.forecast[5].day+'</div>';
    html += '<div class="climate">'+weather.forecast[5].text+'</div>';
    html += '<div class="high"> '+weather.forecast[5].high+' </div>';
    html += '<div class="low"> '+weather.forecast[5].low+' </div>';
    html += '</section>';
    html += '<section class="week6">';
    html += '<div class="day"> '+weather.forecast[6].day+'</div>';
    html += '<div class="climate">'+weather.forecast[6].text+'</div>';
    html += '<div class="high"> '+weather.forecast[6].high+'</div>';
    html += '<div class="low"> '+weather.forecast[6].low+'</div>';
    html += '</section>';
    html += '';
    html += '';
    html += '';
    html += '';
    html += '';
    html += '</aside>';
	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});


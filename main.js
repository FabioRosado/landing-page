
const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric";
const weatherApi = "&APPID=";
var data = {};

function buildWeatherUrl(latitude, longitude) {
    var url = weatherUrl + '&lat=' + latitude + '&lon=' + longitude + weatherApi;
    return url;
  }



if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
    var lat =  position.coords.latitude;
    var lon =  position.coords.longitude;
    getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }


function getWeather(lat, lon){
  let url = buildWeatherUrl(lat, lon);
    axios
  .get(url)
  .catch(function (error) {
    console.log(error);
  })
  .then(function (response) {
    data.city = response.data.name;
    data.country = response.data.sys.country;
    data.temp = response.data.main.temp;
    data.weather = response.data.weather[0].description;
    data.icon = response.data.weather[0].main;
    console.log(response.data);

    weather = document.getElementById('weather-details');
    weather.innerHTML = getIcon(data.icon) + data.temp + '°C and ' + data.weather + ' in ' + data.city + ", " + data.country;

    updateBg(data.icon);
  });
}

function getIcon(icon){
  var icon = icon.toLowerCase();
  switch (icon) {
    case 'thunderstorm':
      return '<i class="fas fa-bolt fa-lg"></i>';
    case 'drizzle':
      return '<i class="fas fa-tint fa-lg"></i>';
    case 'rain':
      return '<i class="fas fa-umbrella fa-lg"></i>';
    case 'snow':
      return '<i class="fas fa-snowflake fa-lg"></i>';
    case 'atmosphere':
      return '<i class="fas fa-braille fa-lg"></i>';
    case 'clear':
      return '<i class="fas fa-sun fa-lg"></i>';
    case 'clouds':
      return '<i class="fas fa-cloud fa-lg"></i>';
  }
}

function updateBg(image){
  var image = image.toLowerCase();
  var sheet = document.styleSheets[0];
  var rulesList = sheet.cssRules || sheet.rules;
  var htmlRule = rulesList[0];
  htmlRule.style.backgroundImage = "url('assets/images/" + image + ".jpg')";
}
    
// let weather = new Vue ({
//   el: '#weather',
//   // data: {
//   //   error: '',
//   //   apiUrl: '',
//   //   city: '',
//   //   country: '',
//   //   icon: '',
//   //   description: '',
//   //   results: [],
//   // },
//   methods: {
//     // getPosition: function() {
//     //   if (navigator.geolocation){
//     //     navigator.geolocation.getCurrentPosition(this.getUrl.bind(this));
//     //   }else{
//     //     this.error = 'Geolocation is not supported.';
//     //   }
//     // },
//     // getUrl: function(position){
//     //   const vm = this;
//     //   if (navigator.geolocation) {
//     //     //Return the user's longitude and latitude on page load using HTML5 geolocation API
//     //     let currentPosition;
//     //     currentPosition = position;
//     //     latTest = currentPosition.coords.latitude;
//     //     lonTest = currentPosition.coords.longitude;
//     //   }
//     // },
//     getWeather: function(){
//       let url = buildWeatherUrl(this.lat, this.lon);
//       console.log(this.lon)
//       console.log(url);
//       // axios
//       // .get(url)
//       // .catch(function (error) {
//       //   console.log(error);
//       // })
//       // .then(function (response) {
//       //   console.log(response.data);
//       // });
//     //   axios.get(this.$data.apiUrl).then(response => {
//     //     console.log(response.data.results);
//     //     console.log(response.data);
//     //     this.city = response.data.name;
//     //     this.results = response.data;
//     //   }).catch( error => { console.log(error); });
//     }
//   },
//   beforeMount() {

//   },
//   mounted() {
//     console.log(data);
//     // this.getWeather();
//   }
// });
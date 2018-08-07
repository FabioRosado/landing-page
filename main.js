// Constant variables
const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric";
const weatherApi = "&APPID=" +  "{Your API Key Here}";
var data = {};

// Build open weather url
function buildWeatherUrl(latitude, longitude) {
    var url = weatherUrl + '&lat=' + latitude + '&lon=' + longitude + weatherApi;
    return url;
  }

// Get icon from the weather status
function getIcon(icon){
  var icon = icon.toLowerCase();
  switch (icon) {
    case 'thunderstorm':
      return "fas fa-bolt fa-lg";
    case 'drizzle':
      return "fas fa-tint fa-lg";
    case 'rain':
      return "fas fa-umbrella fa-lg";
    case 'snow':
      return "fas fa-snowflake fa-lg";
    case 'atmosphere':
      return "fas fa-braille fa-lg";
    case 'clear':
      return "fas fa-sun fa-lg";
    case 'clouds':
      return "fas fa-cloud fa-lg";
  }
}

// Change background image depending of the weather
function updateBg(image){
  var image = image.toLowerCase();
  var sheet = document.styleSheets[0];
  var rulesList = sheet.cssRules || sheet.rules;
  var htmlRule = rulesList[0];
  htmlRule.style.backgroundImage = "url('assets/images/" + image + ".jpg')";
}

// Vue Components
Vue.component('weather', {
  template: `
    <h4>
    <i :class="weatherIcon"></i> {{weatherDetails}}
    </h4>`,
  props: ['weatherIcon', 'weatherDetails']
});

Vue.component('todo-item', {
  template: `
    <li id="todo-item">
      <input type="checkbox" name="To do Done"> <span class="is-clickable" id="left-grey-color" v-on:click="$emit(\'remove\')">{{title}}</span>
    </li>
  `,
  props: ['title']
});

Vue.component('notes-item', {
  data: function() {
    return {'show': false};
  },
  template: `
    <a v-on:click="show = !show" id="notes-list">
      <li>
        {{title}}
        <p v-if="show">{{text}}</p> <button id="move-left-2rem" v-on:click="$emit(\'remove\')">Delete</button>
      </li>
    </a>
  `,
  props: {'title': {type: String}, 'text': {type: String}}
});

let vueApp = new Vue ({
  el: '#app',
  data: {
    quote: '',
    author: '',
    monthNames: ["January", "February", "March", "April",
                 "May", "June", "July", "August", "September",
                 "October", "November", "December"],
    day: '31',
    month: 'February',
    year: '1209',
    hours: 0,
    minutes: 0,
    date: '',
    time: '',
    todo: true,
    newTodoText: '',
    todos: [],
    note: true,
    newNote: false,
    newNoteTitle: '',
    newNoteText: '',
    notes: [],
    weatherIcon: '',
    weatherDetails: '',
  },
  methods: {
    getQuote() {
      let url = "https://favqs.com/api/qotd";
      axios
        .get(url)
        .then(response => {
          this.quote = '"' + response.data.quote.body + '"';
          this.author = "—  " + response.data.quote.author;
        })
        .catch( error => {console.log(error);});
    },
    shareTwitter() {
      window.open('https://twitter.com/intent/tweet?hashtags=quote&text=' + this.quote + "  " +  this.author, 'popup','width=400,height=200')
    },
    getCurrentTime() {
      let currentDate = new Date();
      this.day = currentDate.getDate();
      this.month = this.monthNames[currentDate.getMonth()];
      this.year = currentDate.getFullYear();

      this.date = `${this.day}, ${this.month} ${this.year}`;

      let hour = currentDate.getHours();
      let minute = currentDate.getMinutes();

      this.hours = (hour < 10 ? "0": "") + hour;
      this.minutes = (minute < 10 ? "0": "") + minute;

      this.time = `${this.hours}:${this.minutes}`

    },
    geolocation() {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getWeather);
      } else {
        this.weatherDetails = "Geolocations is not supported";
      }
      },
      getWeather(position) {
        const vm = this;
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = buildWeatherUrl(lat, lon);

        axios
          .get(url)
          .catch(function(error){
            console.error(error);
          })
          .then(function (response){
            const city = response.data.name;
            const country = response.data.sys.country;
            const temp = response.data.main.temp;
            const weather = response.data.weather[0].description;
            const icon = response.data.weather[0].main;

            vm.weatherIcon = getIcon(icon);
            vm.weatherDetails = `${temp}°C and ${weather} in ${city}, ${country}`;
            updateBg(icon);
          });

    },
    addNewTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        title: this.newTodoText,
      });
      this.newTodoText = '';
    },
  addNewNote() {
    if (this.newNoteTitle == '') {
      this.newNoteTitle = "Note " + this.notes.length;
    }

    this.notes.push({
      id: this.notes.length + 1,
      title: this.newNoteTitle,
      text: this.newNoteText,
    });
    this.clearNoteFields();

  },
  clearNoteFields() {
    this.newNoteTitle = '';
    this.newNoteText = '';
  }
},
  beforeMount() {
    // this.geolocation();
  },
  mounted() {
    this.getQuote();
    this.getCurrentTime();
  }
});
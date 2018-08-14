# Landing Page

A landing page that displays inspirational quotes, shows current weather (geolocation needs to be enabled) and has a working To Do List.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to register at [OpenWeatherMap](https://openweathermap.org/) and subscribe for a free API key of the Current weather data from [this page](https://openweathermap.org/api).

Then open the file `main.js` in your favourite editor and add your API key on line 3.

```
const weatherApi = "&APPID=" +  "{your API Key here}";
```

## Deployment

Simply open the `index.html` page on your favourite browser and everything will work fine.

## Things you can do

The landing page is meant to provide you with some basic things that could be useful to you without opening any other application or site.

### The Quote

You can get a new quote by pressing the icon with two arrows in a circle. If the quote is something you enjoy, you can share directly to your Twitter account by pressing the Twitter icon.

### The To Do List

To open the to-do list you need to press the icon that says "To Do List" a new area will be visible and you can write your to-do items in the list.

You can tick an item by simply pressing the checkbox if you would like to delete the item all you need to do is press the text and the item will be deleted.

### The Notes
To open the notes you just need to press the icon that says "Notes" a new area will be visible, there you can start creating your notes.

To create a new note simply click the button `+ Add note`, when you click the button a form will be shown where you can add a title for the note and then you have the text field where you can write your notes.

_Note: If you forget to provide a title, the note will have the title of `Note <number>`._

Only the title of the notes are shown as a list view, to open the note simply click on the title and you will be able to see the full description of the note.

To delete the note just click the `delete` button.

### The Watch
This is meant to be very simple, it shows you the current time and date. 


## Built With

* [Vue](https://vuejs.org) - The JavaScript framework used
* [Axios](https://github.com/axios/axios) - To connect to the APIs
* [Bulma.io](https://bulma.io) - The CSS framework used
* [OpenWeatherMap](https://openweathermap.org) - Used to get weather data
* [FontAwesome](https://fontawesome.com) - The icons used

## Authors

* **Fabio Rosado** - *Initial work* - [FabioRosado](https://github.com/FabioRosado)

## Credit

All the pictures used for the page background were taken from [unsplash](https://unsplash.com).

* [Placeholder Photo by Max Boettinger](https://unsplash.com/@maxboettinger)
* [Clear Photo by Mohamed Thasneem](https://unsplash.com/@thanni)
* [Clouds Photo by Nathan Anderson](https://unsplash.com/@nathananderson)
* [Rain Photo by Liv Bruce](https://unsplash.com/@livvie_bruce)
* [Drizzle Photo by Riley Briggs](https://unsplash.com/@rileybriggs)
* [Mist Photo by Ricardo Gomez Angel](https://unsplash.com/@ripato)
* [Snow Photo by Adam Jaime](https://unsplash.com/@arobj)
* [Thunderstorm Photo by Dominik QN](https://unsplash.com/@dominik_qn)
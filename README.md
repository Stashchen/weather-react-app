# Weather app

The idea of the app is to test React js skills by creating simple weather app.
You need to type any City, and you will see its weather forecast.

For this project, I have used [MetaWeather API](https://www.metaweather.com/api/) for weather forecast
and [Pixabay Api](https://pixabay.com/api/docs/) for pictures.

### To start app, you need:
1. Clone this repo
2. Create config.js file in src folder with folowing context:
	```js
	const metaWeatherApiKey = 'your_key';
	const pixabayApiKey = 'your_key';

	export default { metaWeatherApiKey, pixabayApiKey };
	```
3. Start dev version or production version:
```
npm start
// or npm start build -- for production
```
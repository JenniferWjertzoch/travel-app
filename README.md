# Travel App Project

## Overview
In this project, I built an online travel app including data sources from multiple APIs to help people plan trips by generating weather forecasts for the places they’re visiting.

For this project, I used:
* Node
* Express
* 3 API's: Geonames, Weatherbit and Pixabay
* Webpack
* Service Worker


## Run project
Here you can see how to run the project in development and production mode.
### run in development mode
To start the webpack dev server at port 8084

` $ npm run dev`


### run in production mode
Generate the dist files and then start server at port 8084

` $ npm run build`

` $ npm run start`


## Testing

Testing is done with Jest. To run test, use the command

`npm run test`


## Extended Options

* User can remove the trip via remove button.

* When there is no result for entered location, a placeholder image will appear.

* I use local storage to save the data.
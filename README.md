# NodeJS Webapps Creator

Web application created to provide a four-steps method to build an endless number of GIS webapps with customized title, location, basemap and theme color.

The app uses NodeJS and ExpressJS for API, routes creation and server-side processing and Calcite Web for front-end.

GIS capabilities and web maps are available through ArcGIS API for JavaScript.

Each GIS webapp created is hosted on the machine where the main app (project) is deployed.

## Demo & preview

![nodejs-webapps-creator](https://user-images.githubusercontent.com/18401030/43267866-c0b556fc-90f7-11e8-8acb-abc555f3984c.gif)


##  Areas and capabilities

### Main front page

![1st](https://user-images.githubusercontent.com/18401030/43266063-0f3c530c-90f3-11e8-8d7b-331b186575f6.png)

### Front page modal

![2nd](https://user-images.githubusercontent.com/18401030/43266080-1a742042-90f3-11e8-9a62-3ac03e25ff5d.png)

### Demo app

![3rd](https://user-images.githubusercontent.com/18401030/43266097-262fb234-90f3-11e8-9996-f67112edf2df.png)

### Back-end webapp created after clicked 'Create app'

When the user clicks 'Create app' button, a folder on the back-end is created. The name of the folder is in the following format: **__location**.

Inside the folder, a HTML file is created with the necessary code to render the app. The name of the file is the same as the folder.

![4th](https://user-images.githubusercontent.com/18401030/43266124-350d1a26-90f3-11e8-97d3-c47aa0e9b5ca.png)

### Font-end webapp showed in a new tab

The app created on the back-end is rendered in a new tab.

![5th](https://user-images.githubusercontent.com/18401030/43266136-3ca949ee-90f3-11e8-923d-f7173b112748.png)


##  Getting started | Using the app

### Installing

Download the repository and install the dependencies:

```
$ npm install
```

### Running

Build and run nodemon

```
$ npm run node
```

### Development 

Run gulp

```
$ gulp
```

### Delete created webapps

Run delapps.sh 

```
$ npm run del
```

## Resources
The following resources have been used to create this application:
* <a target="blank" href="https://nodejs.org/en/">NodeJS</a>
* <a target="blank" href="https://expressjs.com/">ExpressJS</a>
* <a target="blank" href="https://developers.arcgis.com/javascript/">ArcGIS API for JavaScript 4.8</a>
* <a target="blank" href="http://esri.github.io/calcite-web/">Calcite Web</a>
* <a target="blank" href="https://gulpjs.com/">GulpJS</a>
* <a target="blank" href="https://nodemon.io/">Nodemon</a>


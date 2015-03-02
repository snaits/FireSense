#FireSense.Web

A simple web site built on Yeoman gulp-angular-generator, that presents data from Firebase in a n3-line-chart. It requires the following 
* [npm](http://npmjs.com/)
* [bower](http://bower.io/)
* [yeoman](http://yeoman.io/)
* [gulp](http://gulpjs.com/)
* [angular](http://angularjs.org/)
* [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular)
* [a firebase account](http://www.firebase.com)
* many more bower and npm components that are automatically handled for you by gulp build.

To run it, edit the src/app/main/main.controller.js to fit your Firebase configuration, then
```
gulp build
gulp serve
```

For extra credit, I added a call to numbersapi.com to present some trivia on the last reading.

Enjoy!

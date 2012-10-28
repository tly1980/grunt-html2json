# grunt-html2json

Compile the html files into a JSON file.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-html2json`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-html2json');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
Example Code
```javascript
grunt.initConfig({
  html2json: {
    dist: {
       src: ['src/*.txt', 'src/*.html'],
       dest: 'dist/built.json'
    }
  }
});

```



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Tom Tang  
Licensed under the MIT license.

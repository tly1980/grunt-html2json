# grunt-html2json

Compile the html files into a JSON file.

This feature is very useful when you use a lot of JS template with client-side javascripts.
You can get one single JSON file and use JSON.parse convert it into a dict.
With the dict, you can easily pick up the the template you wish to render, which saves you a lot of trouble by getting html file one by one.

```javascript
/*
* tpl_str might be something looks like:
* {
*    "h2": "<h2 class="title">{{h2}}!</h2>",
*	  "p": "<p class="warnning">{{msg}}</p>"
* }
*/
var tpl_str = ... // get the JSON content from some where, either from requre.js text plugin or your AJAX call.
var tpl = JSON.parse(tpl_str);

//render to: <h2 class="title">Hello World~!</h2>
Mustache.render(tpl.h2, {h2: 'Hello World~!'});

//render to "<p class="warnning">Alert!</p>"
Mustache.render(tpl.p, {msg: 'Alert!'});
```

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

You might also want to trigger the compiled process by watching the file change.
Append following ine in the grunt.initConfig list.
```javascript
watch: {
  files: '<config:html2json.dist.src>',
  tasks: 'default'
}
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
+ 0.1
++ Well, it works (testcase is yet to be done).
++ JSON is pretty print by default. Later will add an option to switch.

## License
Copyright (c) 2012 Tom Tang  
Licensed under the MIT license.

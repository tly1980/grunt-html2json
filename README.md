# grunt-html2json

As a intensive client-side javascript template user, I alwasy try to find the best way to load the templates.
And I found it is a very good practise that compiling the templates into on single JSON file.

You can get one single JSON file and use JSON.parse convert it into a dict.
With the dict, you can easily pick up the the template you wish to render, which saves you a lot of trouble by getting html file one by one.

```javascript
/*
* tpl_str might be something looks like:
* {
*    "h2": "<h2 class="title">{{title}}!</h2>",
*	  "p": "<p class="warnning">{{msg}}</p>"
* }
*/
var tpl_str = ... // get the JSON content from some where, 
                  // either from requre.js text plugin or a AJAX call.
var tpl = JSON.parse(tpl_str);

//render to: <h2 class="title">Hello World~!</h2>
Mustache.render(tpl.h2, {title: 'Hello World~!'});
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
       dest: 'dist/templates.json'
    }
  }
});

```

With this task, you can compile all `txt` and `html` files in `src` into `dist/templates.json`.


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

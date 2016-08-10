# APC Responsive
Our AllPosters sites aren't responsive. This code will make them responsive. :tada:

## Setup
1. Fork the repo onto your local machine
2. Run `npm install` to download the necessary packages
3. Code all the things!
4. Once you've coded all the things, or a new feature or whatever, you can use [Gulp](http://gulpjs.com/) to build it out to a gitignored `/dest` directory.
5. Here's some options:
  * `gulp scripts` to compile all your JS under `/source/scripts`
  * `gulp styles` to compile all your stylus files under `/source/stylus`
  * `gulp nunjucks` to piece together all the templates under `/source/pages` and `/source/templates`
  * `gulp` default task will run all of the above
  * `gulp serve` will run all of the above and launch a live-reloading `browser-sync` window. The task will watch for any changes to .js, .styl, or nunjucks template files, and will reload the browser page after each change.

## Main packages
* [Stylus](http://stylus-lang.com/) - css preprocessor
* [Nunjucks](https://mozilla.github.io/nunjucks/) by Mozilla - Templating

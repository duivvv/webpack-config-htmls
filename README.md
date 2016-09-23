# webpack-config-htmls (1.0.0)

Maintainer: Geoffrey Dhuyvetters [@duivvv](https://twitter.com/duivvv)

## Installation

Install the plugin with npm:

```shell
$ npm install webpack-config-htmls --save-dev
```

## Basic Usage

```javascript

var configHTMLs = require('webpack-config-htmls')();

//config is a webpack config object
config.entry = config.entry.concat(htmls.entry);
config.plugins = config.plugins.concat(htmls.plugins);

```

This module returns an object with 2 keys.

* entry: Array of html paths to add to config.entry
* plugins: Array of [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) instances

### example

/src/
  /index.html
  /pages
    /about.html

```javascript

var configHTMLs = require('webpack-config-htmls')();

```

finds 2 html files, adds them to entry

```javascript

console.log(configHTMLs.entry);

// ['./src/index.html', './src/pages/about.html']

```

creates HtmlWebpackPlugin instances and adds them to plugin

```javascript

console.log(configHTMLs.plugins);

/*

  [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about.html',
      filename: 'pages/about.html'
    }),
  ]

*/

```

## Configuration

You can pass a hash of configuration options to `webpack-config-html`.

- `base`: folder to look for html files (defaults to './src')
- `custom`: Array with custom option objects (to override default behaviour) (**template and filename are required**)

**custom example:**

```javascript

var configHTMLs = require('webpack-config-htmls')({
  custom: [{
    template: './src/pages/foo.html',
    filename: 'pages/bar.html'
  }]
});

```

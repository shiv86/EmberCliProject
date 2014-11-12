#Embercliapp

This project was used to get fimilar with Ember-CLI. I used the initial Bloggr getting started example and reproduced it using Ember-Cli which is going to be the default way to develop, manage dependencies and build with Ember Apps going forward. Note it leverages existing technologies such as Bower to install and manage dependencies, Broccili as a build tool. 

###Ember Lessons Learnt

Below are some of the lessons learnt using Ember and EmberCli. Please check out the #emberjs and #ember-cli IRC channels for further help.

1.{{bind-attr only works with controllers
2.Mix-in defined for the ApplicationController is inhertied for all the nested controllers
3.There is a difference between Ember.Controller, Ember.ArrayController, and Ember.ObjectController. Object templates must be backed by EmberObjectController.
4.Always use  this._super(controller,model); when override setupController method on Route.



###Ember Cli-Lessons:

1.Different type of blueprints
2.Installing/importing dependency: 

  2.1bower install --save showdown
  2.2appimport('bower_components/showdown/src/showdown.js');
  2.3(I think this Step is not required if using the directive below)Added the global to the .jshintrc "predef": [
    "document",
    "window",
    "-Promise",
    "Showdown"
  ]
  2.4 import' the dependency using: /* global Showdown */



This README outlines the details of collaborating on this Ember application.

A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


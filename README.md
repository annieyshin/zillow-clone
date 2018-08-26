# ZillowClone

#### Epicodus JavaScript Project Week 3, August 17, 2018

#### By Annie Shin

## Description

This is a project built in Angular to produce a zillow website clone. This project will have the ability to use the zillow API to utilize the ability to look at a geographic location to see homes for sale, rent, and to sell a home.  


## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| Search for homes for sale in a specified area by entering address, neighborhood, city, or zip code| address, neighborhood, city, or zip code | list of properties for sale in the specified area
| Search for homes for rent in a specified area by entering address, neighborhood, city, or zip code| address, neighborhood, city, or zip code | route to site to help sell your home or property |
| Ability to sell home by entering address| address| see links to start selling home|

## Setup on OSX

* Install Node.js
* npm install Typescript Version 2.1.4
* npm install -g @angular/cli@1.6.5
* Clone the repo
* Run `ng build` to build the project
* Run `ng serve` for a dev server.
* Navigate to `http://localhost:4200/`
* Create a free account at : https://www.zillow.com/webservice/Registration.htm
* Check your email for Zillow API confirmation of registration and Zillow Web Services Identification (ZWSID)
* Create a ".env" file in the root directory of this Project
* Type: `exports.apiKey = "Your ZWSID KEY HERE"` into file .env
* Create a Firebase account at: https://firebase.google.com/
* Install angularfire2 with this command: `npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save`
* Make sure the versions of angularfire2 and firebase in file package.json are: `"angularfire2": "4.0.0-rc.0" & "firebase": "^3.6.6"`if not, update to these versions and run `npm install`
* Add the following line to file tsconfig.json: `"types": [ "firebase" ]`
* Create file "api-keys.ts" in the src/app directory
* Paste in the firebase credentials for web based app into this file

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Links

* To visit this repository, go to: https://github.com/annieyshin/zillow-clone
* To report any bugs, or if you have any questions, feel free to email me at: annieyshin@gmail.com

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Annie Shine**

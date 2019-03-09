# Project WARN!

Please read project's documentation!


# Project Title

Swagger editor.

# Project Description

Project allows for edition and validation JSON files with help of @stoplight/spectral oas2. 
It's written using React, Mobx, Webpack, Typescript.

It has some limitations because of @stoplight/spectral library, it doesn't return path to direct file.
Also if there is an error in first nesting of JSON, then path to error will be empty array that's why 
I'm unable to allocate error to row.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development:

*RUN
  npm install
  npm run start

## Deployment

*RUN
  npm run build
  

## Running the tests

*RUN
  npm run test


### And coding style

Styles written with CSS


## Built With

* ["@stoplight/spectral"] - https://github.com/stoplightio/spectral


## Version

* 1.0.0

## Authors

* **pawelkarauda**

## License

This project is licensed under the MIT License.

# serverless-starter-kit  
[![Donate][paypal-image]](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=938FMCPPQG4DQ&currency_code=USD&source=url)
[![codecov](https://codecov.io/gh/serverless-guy/serverless-starter-kit/branch/master/graph/badge.svg)](https://codecov.io/gh/serverless-guy/serverless-starter-kit) [![Greenkeeper badge](https://badges.greenkeeper.io/serverless-guy/serverless-starter-kit.svg)](https://greenkeeper.io/)
[![Build Status][travis-image]][travis-url]
  
## Setup  
  
You have to clone the repo first using the command below:
```bash  
$ git clone https://github.com/serverless-guy/serverless-starter-kit.git
```  
Once the cloning process is done, you have to `cd` to the project's directory and install the project's dependencies:
```bash  
$ cd serverless-starter-kit
$ npm install
```  
To run the application locally, you have to run the following command:
```bash  
$ npm run develop
```  
The application should run on `http://localhost:3000`.  
  
## Deploying  
  
You have to run the following command to deploy to production.
```bash  
$ npm run deploy:prod
```  
  
## devDependencies  
  
* aws-sdk
* chai
* chai-as-promised
* eslint
* mocha
* nyc
* serverless
* serverless-offline
* serverless-prune-plugin
* serverless-webpack
* ts-loader
* ts-node
* typescript
* webpack
* webpack-cli
* webpack-node-externals  
  
and other types related devDependencies...
  
## dependencies  
  
* @serverless-guy/lambda  
  
## Contributing  
  
1. Fork it (https://github.com/serverless-guy/serverless-starter-kit/fork)  
2. Create your feature branch (git checkout -b feature/fooBar)  
3. Commit your changes (git commit -am 'Add some fooBar')  
4. Push to the branch (git push origin feature/fooBar)  
5. Create a new Pull Request  
  
<!-- images -->
[paypal-image]: https://img.shields.io/badge/Donate-PayPal-green.svg
[travis-image]: https://travis-ci.org/serverless-guy/serverless-starter-kit.svg?branch=master
[travis-url]: https://travis-ci.org/serverless-guy/serverless-starter-kit
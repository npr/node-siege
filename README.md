# node-siege

Simple Node wrapper for siege load testing

## Getting Started
Install the module with: `npm install node-siege`

```javascript
var siege = require('siege');
siege('-t5s -c 10 -f urls.txt');
```

## Documentation
Bin version is not currently ready for use.

siege function is only a passthrough, options are required.

Assumes siege has already been installed.  Otherwise an error will be thrown.

## Examples
Check out the tests for examples

test/test.js

Documentation for [siege](http://www.joedog.org/siege-home/).

## Testing
Install grunt
```
sudo npm install grunt -g
```
Then run
```
grunt simplemocha
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 johnymonster  
Licensed under the MIT license.

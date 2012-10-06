# node-siege

Simple Node wrapper for siege load testing

## Getting Started
Install the module with: `npm install node-siege`

```javascript
var siege = require('siege');

siege()
  .args('-t5s -c 10 -b -f./urls.txt')
  .on('stdout',function(data){})
  .on('stderr',function(data){})
  .on('error',function(err){})
  .on('exit',function(){
    console.log('done');
  })
  .run();
```

## Documentation
Assumes siege has already been installed.  Otherwise an error will be thrown.

## Examples
Check out the tests for examples

test/siege.js

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

## License
Copyright (c) 2012 johnymonster  
Licensed under the MIT license.

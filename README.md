littleshovel
============

**Realized there is already stuff out there for this. Deprecated :|**

Simple functions to scrape websites

## Installation 
```
var littleshovel = require('littleshovel');

littleshovel.get("http://google.com", function(data){
  console.log(data);
});
```

## Reference

#### get(url, callback)
* *url* - URL of site you want to get
* *callback* - Called when data from site is returned. Receives response body as parameter.

Calls a get request to given url

#### getText(url, callback)
* *url* - URL of site you want to get
* *callback* - Called when data from site is returned. Receives text of response as parameter.

### Experimental

#### getSearchForType(type, searchString, callback)

#### getTextSearchForType(type, searchString, callback)

## Contributing
LittleShovel is very early in development. Any help would be appreciated (new features or feature requests or refactoring or... anything!)

## License 
Copyright (c) 2014 Brandon Truong. Released under the MIT License

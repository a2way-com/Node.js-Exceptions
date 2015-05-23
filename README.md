#A2Way Node.js Exceptions
Exceptions for Node.js. Catch'em with "atry". Check'em with "instanceof".

##Example
```
var atry = require('atry');
var Exceptions = require('a2way-node.js-exceptions');
var doge = getARandomDog();

atry(function(){
    if(doge.isAGoodBoy() === false){
        throw new Exceptions.BadDog();
    }
}).catch(function(ex){
    if(ex instanceof Exceptions.BadDog){
        console.log('Bad doggy, bad, bad doggy!');
    }else{
        throw ex;
    }
});
```

**Note**: While an exception called `BadDog` would have been very useful, it is not yet available in this module. Deep down, we love dogs. We believe adding such an exception would harm long trust between us humans and our K9 friends.

However, there are other exceptions available for your consumption. See below for a list of them.

##Installating
**Note**: `a2way-node.js-exceptions` is designed to work with `atry`. Make sure you have it installed. Then install this package:

```
npm install a2way-node.js-exceptions --save
```

##Available Exceptions
 - Generic
 - FileNotFound
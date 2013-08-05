if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        result = [];
        var properties = Object.getOwnPropertyNames(obj);
        properties.forEach(function(name){
            result.push('' +name+ ': ' + obj[name]);
        });
        return result;
    }
  };
});

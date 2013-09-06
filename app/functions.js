if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(param){
            return str + ', ' + param
        }
    },

    makeClosures : function(arr, fn) {
        var result = []
        arr.forEach(function(elem){
            result.push(function(){return fn(elem)});
        });
        return result;
    },

    partial : function(fn, str1, str2) {
        return function(str3){
            return fn(str1, str2, str3);
        }
    },

    useArguments : function() {
        return [].reduce.call(arguments, function(prev, current){return prev + current})
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});

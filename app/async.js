if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        var dfd = new $.Deferred();

        if (value === true){
            setTimeout(dfd.resolve(value), 5000)
        }else {
            dfd.resolve(value);
        }

        return dfd;
    },

    manipulateRemoteData : function(url) {
        var dfd = new $.Deferred();

        $.get(url, function(data){
            var result = [];
            data.people.forEach(function(item){
               result.push(item['name']);
            });
            result.sort();
            dfd.resolve(result);
        });

        return dfd;
    }
  };
});

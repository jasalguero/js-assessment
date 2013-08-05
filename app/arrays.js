if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(item, sum){
            return sum + item;
        });
    },

    remove : function(arr, item) {
        return arr.filter(function(elem){
           return elem !== item;
        });
    },

    removeWithoutCopy : function(arr, item) {
        while (arr.indexOf(item) != -1){
            var index = arr.indexOf(item);
            arr.splice(index,1);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0,0,item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        arr.forEach(function (elem){
            if (elem === item) {count++;}
        });
        return count;
    },

    duplicates : function(arr) {
        var duplicates = [];
        var visited = [];
        arr.forEach(function(elem){
            //elem is duplicated but not yet marked as duplicated
            if (duplicates.indexOf(elem) === -1 && visited.indexOf(elem) !== -1){
                duplicates.push(elem);
            }
            //elem is marked as visited
            else if (visited.indexOf(elem) === -1){
                visited.push(elem);
            }
        });
        return duplicates;
    },

    square : function(arr) {
        return arr.map(function(elem){
            return elem * elem;
        });
    },

    findAllOccurrences : function(arr, target) {
        var positions = [];

        arr.forEach(function(elem, index){
            if (elem === target) {positions.push(index)}
        });

        return positions;
    }
  };
});

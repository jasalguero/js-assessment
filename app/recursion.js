if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var listFiles = [];
        if (dirName){
            var subDir = this.findDir(data,dirName)
            return this.iterateFiles(subDir, listFiles);
        }else{
            return this.iterateFiles(data, listFiles);
        }
    },

    findDir: function(data, dirName) {
        if (data.dir === dirName){
            return data;
        }else if (data.files){
            var that = this;
            var subDir;
            data.files.forEach(function(item){
                var result = that.findDir(item,dirName);
                if (result) {subDir = result}
            });
            return subDir;
        }
    },

    iterateFiles: function(data, fileList) {
        if (!data.hasOwnProperty('files')){
            return fileList;
        }else {
            var that = this;
            data.files.forEach(function(item){
                if (typeof item === 'string'){
                    fileList.push(item);
                }else{
                    that.iterateFiles(item, fileList);
                }
            });
        }

        return fileList;
    },

    permute: function(arr) {

    }
  };
});

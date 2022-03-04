(function(exp) {
  function RichBinaryMatrixImpl(config) {
    this.config = config;
    
    // TODO: validations
    
    this.matrix = new BinaryMatrix(config.colValues);
    
    this.width = this.matrix.width;
    this.height = this.matrix.height;
  }
  
  RichBinaryMatrixImpl.prototype = {
    propertyKeyToIndex: function(propertyKey) {
      var index = this.config.colLabels.indexOf(propertyKey);

      if(index < 0) {
          throw "Property key '" + propertyKey + "' not found";
      }

      return index;
    },
    
    elementLabel: function(i) {
      return this.config.rowLabels[i];
    },
    
    /* Delegates */
    
    row: function() { return this.matrix.row.apply(this.matrix, arguments); },
    col: function() { return this.matrix.col.apply(this.matrix, arguments); },
  };
  
  exp.RichBinaryMatrix = RichBinaryMatrixImpl;
  
})(window);

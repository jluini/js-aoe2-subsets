(function(exp) {
  function RichBinaryMatrixImpl(config) {
    this.config = config;
    
    // TODO: validations
    
    this.matrix = new BinaryMatrix(config.colValues);
    
    this.width = this.matrix.width;
    this.height = this.matrix.height;
  }
  
  RichBinaryMatrixImpl.prototype = {
    propertyIndexToKey: function(propertyIndex) {
      return this.sarasaIndexToKey(propertyIndex, "Property", this.config.colLabels);
    },
    
    elementIndexToKey: function(elementIndex) {
      return this.sarasaIndexToKey(elementIndex, "Element", this.config.rowLabels);
    },
    
    propertyKeyToIndex: function(propertyKey) {
      return this.sarasaKeyToIndex(propertyKey, "Property", this.config.colLabels);
    },
    
    elementKeyToIndex: function(elementKey) {
      return this.sarasaKeyToIndex(elementKey, "Element", this.config.rowLabels);
    },
    
    sarasaKeyToIndex: function(key, kind, labels) {
      var index = labels.indexOf(key);

      if(index < 0) {
        throw kind + " key '" + key + "' not found";
      }

      return index;
    },
    
    sarasaIndexToKey: function(index, _kind, labels) {
      return labels[index];
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

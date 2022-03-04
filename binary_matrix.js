(function(exp) {
  function BinaryMatrixImpl(columns) {
    this.width = columns.length;
    this.height = columns[0].length;
    
    this.columns = columns;
    this.rows = new Array(this.height);
    
    for(var i = 0; i < this.height; i++) {
      var source = new Array(this.width);
      
      for(var j = 0; j < this.width; j++) {
        source[j] = columns[j].isOn(i);
      }
      
      this.rows[i] = new BinaryVector(source);
    }
  }
  
  BinaryMatrixImpl.prototype = {
    row: function(i) {
      // TODO: validate
      
      return this.rows[i];
    }
  };
  
  exp.BinaryMatrix = BinaryMatrixImpl;
  
})(window);

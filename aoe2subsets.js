(function(exp) {
  function Aoe2SubsetsImpl(config) {
    this.matrix = new RichBinaryMatrix(config);
    this.categories = config.categories;
  }
  
  Aoe2SubsetsImpl.prototype = {
    numberOfProperties: function() { return this.matrix.width; },
    numberOfElements: function() { return this.matrix.height; },
    
    whichCivs: function(req) {
      var conditionHashes = this._humanConditionListToHashes(req);
      
      return this._whichCivs.apply(this, conditionHashes);
    },
    
    h: function(category, civName) {
      var civIndex = this.matrix.elementKeyToIndex(civName);
      
      var civ = this.matrix.row(civIndex);
      var categoryData = this._findCategory(category);
      
      var intersection = civ.and(categoryData);
      
      return this._showProperties(intersection);
    },
    
    /* */
    
    _showProperties: function(a) {
      var matrix = this.matrix;
      
      return a.reduce([], function(accum, index, current) {
        if(current) {
          var propertyName = matrix.propertyIndexToKey(index);
          accum.push(propertyName);
        }
        
        return [false, accum];
      });
    },
    
    _findCategory: function(categoryKey) {
      var out = this.categories[categoryKey];
      
      if(!out) {
        throw "Category '" + categoryKey + "' not found";
      }
      
      return out;
    },
    
    _whichCivs: function(a, b) {
      var out = [];
      
      for(var e = 0; e < this.numberOfElements(); e++) {
        if(this._meetsConditions(e, a, b)) {
          out.push(this.matrix.elementLabel(e));
        }
      }

      return out;
    },
    
    _meetsConditions: function(elementIndex, a, b) {
      var row = this.matrix.row(elementIndex);
      
      return row.meetsConditions(a, b);
    },
    
    _humanConditionListToHashes: function(humanConditionList) {
      var out = [new BinaryVector(this.numberOfProperties()), new BinaryVector(this.numberOfProperties())];
      
      for(var h = 0; h < humanConditionList.length; h++) {
        var humanCondition = humanConditionList[h];
        var regexp = /(\+|\-|)(.+)/g;
        var match = regexp.exec(humanCondition);

        var negated = match[1] == "-";
        
        var propertyKey = match[2];
        var propertyIndex = this.matrix.propertyKeyToIndex(propertyKey);
        
        out[negated ? 1 : 0].setBit(propertyIndex, true);
      }

      return out;
    },
  };
  
  exp.Aoe2Subsets = Aoe2SubsetsImpl;
  
})(window);

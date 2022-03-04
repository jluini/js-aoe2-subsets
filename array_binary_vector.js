(function(exp) {
  function ArrayBinaryVector(d) {
    var t = typeof d;
    
    if(t === "number") {
      this.bools = new Array(d);
      for(var i = 0; i < d; i++) {
        this.bools[i] = false
      }
      this.length = d;
    } else if(Array.isArray(d)) {
      this.bools = d;
      this.length = d.length;
    }
  }
  
  ArrayBinaryVector.metFunction = function (a, b, c) { return a ? !c : !b; };
  
  ArrayBinaryVector.prototype = {
    isOn: function(i) {
      // TODO: validate
      return this.bools[i];
    },
    
    setBit: function(i, value) {
      this.bools[i] = value;
      
      return this;
    },
    
    getBit: function(i) {
      return this.bools[i];
    },
    
    /* */
    
    weight: function() {
      return this.reduce(0, function(accum, current) {
        return [false, accum + (current ? 1 : 0)];
      });
    },
    
    /* */
    
    meetsConditions: function(a, b) {
      // return this.met(a, b).all();
      return this.allMet(a, b);
    },
    
    allMet: function(a, b) {
      return this.reduce(
        true,
        function(accum, current, a, b) {
          var currentMet = ArrayBinaryVector.metFunction(current, a, b);
          
          if(currentMet) {
            return [false, true];
          } else {
            return [true, false];
          }
        },
        a,
        b
      );
    },
    
    // met: function(a, b) {
    //   return this.evaluate(
    //     ArrayBinaryVector.metFunction,
    //     a,
    //     b
    //   );
    // },
    
    all: function() {
      return this.reduce(true, function(accum, current) {
        if(current) {
          return [false, true];
        } else {
          return [true, false];
        }
      });
    },
    
    reduce: function(initialValue, func) {
      var value = initialValue;
      
      for(var i = 0; i < this.length; i++) {
        var reduceArgs = [value, this.bools[i]];
        
        for(var j = 2; j < arguments.length; j++) {
          reduceArgs.push(arguments[j].getBit(i));
        }
        
        var s = func.apply(null, reduceArgs);
        
        value = s[1];
        
        if(s[0]) {
          // console.log("Breaking", i, "/", this.length);
          break;
        }
      }
      
      return value;
    },
    
    evaluate: function(func/*, ...*/) {
      var arr = [];

      for(var i = 0; i < this.length; i++) {
        var evaluateArgs = [this.bools[i]];
        
        for(var j = 1; j < arguments.length; j++) {
          evaluateArgs.push(arguments[j].bools[i]);
        }
        
        var value = func.apply(null, evaluateArgs);
        
        arr.push(value);
      }

      return new ArrayBinaryVector(arr);
    },
  };
  
  exp.BinaryVector = ArrayBinaryVector;
  
})(window);

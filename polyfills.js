(function(_exp) {
  function main() {
    isArrayPolyfill();
  }
  
  function isArrayPolyfill() {
    if (typeof Array.isArray === 'undefined') {
      Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      }
    }
  }
  
  main();
  
})(window);

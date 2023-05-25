/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
    let argsToProcess = null;
    let timeoutInProcess = null;
    
    const timeout = () => {
        if(argsToProcess === null) {
            timeoutInProcess = null;
        }else {
            fn(...argsToProcess);
            argsToProcess = null;
            timeoutInProcess = setTimeout(timeout, t);
        }
    }
    
    return (...args) => {
      if(timeoutInProcess) {
          argsToProcess = args;
      }else {
          fn(...args);
          timeoutInProcess = setTimeout(timeout, t);
      }
    }
};

export default throttle;
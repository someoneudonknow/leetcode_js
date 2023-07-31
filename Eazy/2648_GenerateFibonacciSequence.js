/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let fib = [];
    let i = 0;
    while(true) {
        if(i === 0) {
            fib[i] = 0;
        }else if(i === 1) {
            fib[i] = 1;
        }else {
            fib[i] = fib[i-1] + fib[i-2];
        }
        yield fib[i];
        i++;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

export default fibGenerator;
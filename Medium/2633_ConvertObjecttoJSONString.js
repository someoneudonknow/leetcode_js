/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if(typeof object === 'string' || object instanceof String) return `"${object}"`;
    
    if(typeof object !== 'object' || object === null) return String(object);

    if(Array.isArray(object)) {
        const arrToString = object.map(curr => jsonStringify(curr));
        return `[${arrToString.join()}]`;
    }

    let objToString = Object.keys(object).map(key => `"${key}":${jsonStringify(object[key])}`);
    return `{${objToString.join()}}`
};

export default jsonStringify;
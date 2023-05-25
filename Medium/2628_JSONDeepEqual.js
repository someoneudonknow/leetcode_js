/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    if (o1 === o2) return true;
    if (String(o1) !== String(o2)) return false;
    if (typeof o1 !== 'object') return o1 === o2;
    if (Object.keys(o1).length !== Object.keys(o2).length) return false;

    for (let key of Object.keys(o1)) {
        if (!areDeeplyEqual(o1[key], o2[key])) {
            return false;
        }
    }

    return true;
};

export default areDeeplyEqual;
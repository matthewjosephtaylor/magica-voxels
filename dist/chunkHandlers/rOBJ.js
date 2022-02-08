var readDict = require('../readDict');
export function rOBJHandler(state, startIndex, endIndex) {
    var ret = {};
    // DICT node attributes
    ret = readDict(state);
    return ret;
}
//# sourceMappingURL=rOBJ.js.map
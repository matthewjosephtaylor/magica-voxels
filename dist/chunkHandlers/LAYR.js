import readDict from '../readDict';
import { assert } from '../assert';
export function LAYRHandler(state, startIndex, endIndex) {
    var ret = {};
    // node id
    ret.id = state.Buffer.readInt32LE(state.readByteIndex);
    state.readByteIndex += 4;
    // DICT node attributes
    ret.attributes = readDict(state);
    ret.reserved_id = state.Buffer.readInt32LE(state.readByteIndex);
    assert(ret.reserved_id === -1, 'LAYR reserved_id must be -1');
    state.readByteIndex += 4;
    return ret;
}
//# sourceMappingURL=LAYR.js.map
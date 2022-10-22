import { readId } from "./readId.js";
const intByteLength = 4;
export default function parseHeader(buffer) {
    const ret = {};
    const state = {
        Buffer: buffer,
        readByteIndex: 0,
    };
    ret[readId(state)] = buffer.readInt32LE(intByteLength);
    return ret;
}
//# sourceMappingURL=parseHeader.js.map
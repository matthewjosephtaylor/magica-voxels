import parseHeader from "./parseHeader";
import useDefaultPalette from "./useDefaultPalette";
import { recReadChunksInRange } from "./recReadChunksInRange";
import { Buffer } from "buffer";
const intByteLength = 4;
export function parse(bytes) {
    const buffer = Buffer.from(bytes);
    var header = parseHeader(buffer);
    var body = recReadChunksInRange(buffer, 8, //start on the 8th byte as the header dosen't follow RIFF pattern.
    buffer.byteLength, header);
    if (!body.RGBA) {
        body.RGBA = useDefaultPalette();
    }
    const result = Object.assign(header, body);
    return result;
}
//# sourceMappingURL=parse.js.map
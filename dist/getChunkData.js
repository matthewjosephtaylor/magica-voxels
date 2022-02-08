import { SIZEHandler } from "./chunkHandlers/SIZE";
import { RGBAHandler } from "./chunkHandlers/RGBA";
import { XYZIHandler } from "./chunkHandlers/XYZI";
import { PACKHandler } from "./chunkHandlers/PACK";
import { MATTHandler } from "./chunkHandlers/MATT";
import { nTRNHandler } from "./chunkHandlers/nTRN";
import { nGRPHandler } from "./chunkHandlers/nGRP";
import { nSHPHandler } from "./chunkHandlers/nSHP";
import { LAYRHandler } from "./chunkHandlers/LAYR";
import { MATLHandler } from "./chunkHandlers/MATL";
import { rOBJHandler } from "./chunkHandlers/rOBJ";
import { SKIPHandler } from "./chunkHandlers/SKIPHandler";
const chunkHandlers = {
    SIZE: SIZEHandler,
    XYZI: XYZIHandler,
    RGBA: RGBAHandler,
    PACK: PACKHandler,
    MATT: MATTHandler,
    nTRN: nTRNHandler,
    nGRP: nGRPHandler,
    nSHP: nSHPHandler,
    LAYR: LAYRHandler,
    MATL: MATLHandler,
    rOBJ: rOBJHandler,
};
export function getChunkData(state, id, startIndex, endIndex) {
    if (!chunkHandlers[id]) {
        // throw "Unsupported chunk type " + id;
        console.log("Unsupported chunk type " + id);
        return SKIPHandler(state, startIndex, endIndex);
    }
    return chunkHandlers[id](state, startIndex, endIndex);
}
//# sourceMappingURL=getChunkData.js.map
import { readId } from "./readId.js";
import { State } from "./State.js";
const intByteLength = 4;

export default function parseHeader(buffer: Buffer) {
  const ret = {};
  const state: State = {
    Buffer: buffer,
    readByteIndex: 0,
  };
  ret[readId(state)] = buffer.readInt32LE(intByteLength);
  return ret;
}

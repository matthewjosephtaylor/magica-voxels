import { assert } from "../assert";

export function XYZIHandler(state, startIndex, endIndex) {
  var numVoxels = Math.abs(state.Buffer.readInt32LE(state.readByteIndex));
  state.readByteIndex += 4;

  const voxelData = [];
  for (var n = 0; n < numVoxels; n++) {
    voxelData[n] = {
      x: state.Buffer[state.readByteIndex++] & 0xff,
      y: state.Buffer[state.readByteIndex++] & 0xff,
      z: state.Buffer[state.readByteIndex++] & 0xff,

      // WTF?!??!
      // NOTE color [0-254] are mapped to palette index [1-255]
      i: (state.Buffer[state.readByteIndex++] & 0xff) - 1, //color index in RGBA
    };
  }

  assert(state.readByteIndex === endIndex, "XYZI chunk did not fully read");
  return voxelData;
}

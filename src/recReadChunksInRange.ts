import { readId } from "./readId";

import { getChunkData } from "./getChunkData";
import { assert } from "./assert";
// const debug = require('debug')('parse-magica-voxel')
const intByteLength = 4;

export function recReadChunksInRange(
  Buffer,
  bufferStartIndex,
  bufferEndIndex,
  accum
) {
  const state = {
    Buffer,
    readByteIndex: bufferStartIndex,
  };

  // var id = readId(state, bufferStartIndex);
  var id = readId(state);

  var chunkContentByteLength = Buffer.readInt32LE(state.readByteIndex);
  state.readByteIndex += intByteLength;

  var childContentByteLength = Buffer.readInt32LE(state.readByteIndex);
  state.readByteIndex += intByteLength;

  var bufferStartIndex = bufferStartIndex;
  var definitionEndIndex = state.readByteIndex;
  var contentByteLength = chunkContentByteLength;
  var childContentByteLength = childContentByteLength;
  var totalChunkEndIndex =
    state.readByteIndex + chunkContentByteLength + childContentByteLength;

  if (contentByteLength == 0 && childContentByteLength == 0) {
    console.warn(`no content or children for ${id}`, id);
    return accum;
  }

  if (contentByteLength && id) {
    var chunkContent = getChunkData(
      state,
      id,
      definitionEndIndex,
      totalChunkEndIndex
    );
    assert(
      state.readByteIndex === totalChunkEndIndex,
      `${id} length mismatch ${state.readByteIndex}:${totalChunkEndIndex}`
    );
    if (!accum[id]) {
      accum[id] = chunkContent;
    } else if (accum[id] && !accum[id].length) {
      accum[id] = [accum[id], chunkContent];
    } else if (accum[id] && accum[id].length) {
      accum[id].push(chunkContent);
    }
  }

  //read children
  if (childContentByteLength > 0) {
    return recReadChunksInRange(
      Buffer,
      definitionEndIndex + contentByteLength,
      bufferEndIndex,
      {}
    );
  }

  //accumulate siblings
  if (totalChunkEndIndex != bufferEndIndex) {
    return recReadChunksInRange(
      Buffer,
      totalChunkEndIndex,
      bufferEndIndex,
      accum
    );
  }

  return accum;
}

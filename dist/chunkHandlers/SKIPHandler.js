export function SKIPHandler(state, startIndex, endIndex) {
    state.readByteIndex = endIndex;
    return { error: "Unsupported chunk type" };
}
//# sourceMappingURL=SKIPHandler.js.map
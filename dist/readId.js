export function readId(state) {
    state.readByteIndex;
    var id = String.fromCharCode(parseInt(state.Buffer[state.readByteIndex++])) +
        String.fromCharCode(parseInt(state.Buffer[state.readByteIndex++])) +
        String.fromCharCode(parseInt(state.Buffer[state.readByteIndex++])) +
        String.fromCharCode(parseInt(state.Buffer[state.readByteIndex++]));
    return id;
}
//# sourceMappingURL=readId.js.map
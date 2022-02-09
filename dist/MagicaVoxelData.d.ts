export declare type XYZ = {
    x: number;
    y: number;
    z: number;
};
export declare type XYZC = {
    x: number;
    y: number;
    z: number;
    c: number;
};
export declare type TRN = {
    node_id: number;
    attributes: object;
    child_id: number;
    reserved_id: number;
    number_of_frames: number;
    frame_transforms: object[];
};
export declare type GRP = {
    id: number;
    attributes: object;
    num_of_children: number;
    child_ids: number[];
};
export declare type SHP = {
    id: number;
    attributes: object;
    num_of_models: number;
    models: {
        id: number;
        attributes: object;
    }[];
};
export declare type LAYR = {
    id: number;
    attributes: object;
    reserved_id: number;
};
/** range: 0-255 */
export declare type RGBA = {
    r: number;
    g: number;
    b: number;
    a: number;
};
/** key is a number in string format */
export declare type MATL = {
    id: number;
    properties: Record<string, number>;
};
/** key is a number in string format */
export declare type OBJ = Record<string, number>;
/** reverse engineered, this is NOT definitive :) */
export declare type MagicalVoxelData = {
    VOX: number;
    SIZE: XYZ;
    XYZI: XYZC[];
    nTRN: TRN[];
    nGRP: GRP[];
    nSHP: SHP[];
    LAYR: LAYR[];
    RGBA: RGBA[];
    MATL: MATL[];
    rOBJ: OBJ[];
};
//# sourceMappingURL=MagicaVoxelData.d.ts.map
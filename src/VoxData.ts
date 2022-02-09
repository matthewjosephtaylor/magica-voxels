export type XYZ = {
  x: number;
  y: number;
  z: number;
};
export type XYZI = {
  x: number;
  y: number;
  z: number;
  i: number;
};

export type TRN = {
  node_id: number;
  attributes: object;
  child_id: number;
  reserved_id: number;
  number_of_frames: number;
  frame_transforms: object[];
};

export type GRP = {
  id: number;
  attributes: object;
  num_of_children: number;
  child_ids: number[];
};

export type SHP = {
  id: number;
  attributes: object;
  num_of_models: number;
  models: { id: number; attributes: object }[];
};

export type LAYR = {
  id: number;
  attributes: object;
  reserved_id: number;
};

/** range: 0-255 */
export type RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
};

/** key is a number in string format */
export type MATL = {
  id: number;
  properties: Record<string, number>;
};

/** key is a number in string format */
export type OBJ = Record<string, number>;

/** reverse engineered, this is NOT definitive :) */
export type VoxData = {
  VOX: number;
  SIZE: XYZ;
  XYZI: XYZI[];
  nTRN: TRN[];
  nGRP: GRP[];
  nSHP: SHP[];
  LAYR: LAYR[];
  RGBA: RGBA[];
  MATL: MATL[];
  rOBJ: OBJ[];
};

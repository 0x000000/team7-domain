// package: domain
// file: definitions/role.proto

import * as jspb from "google-protobuf";

export class Role extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getType(): Role.TypeMap[keyof Role.TypeMap];
  setType(value: Role.TypeMap[keyof Role.TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    id: number,
    type: Role.TypeMap[keyof Role.TypeMap],
  }

  export interface TypeMap {
    ADMIN: 0;
    LENDER: 1;
  }

  export const Type: TypeMap;
}


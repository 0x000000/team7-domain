// package: domain
// file: definitions/user.proto

import * as jspb from "google-protobuf";
import * as definitions_role_pb from "../definitions/role_pb";

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  clearRolesList(): void;
  getRolesList(): Array<definitions_role_pb.Role>;
  setRolesList(value: Array<definitions_role_pb.Role>): void;
  addRoles(value?: definitions_role_pb.Role, index?: number): definitions_role_pb.Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    name: string,
    rolesList: Array<definitions_role_pb.Role.AsObject>,
  }
}


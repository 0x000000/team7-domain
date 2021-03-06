// package: domain
// file: definitions/loan.proto

import * as jspb from "google-protobuf";
import * as definitions_user_pb from "../definitions/user_pb";
import * as definitions_address_pb from "../definitions/address_pb";

export class Loan extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNotes(): string;
  setNotes(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): definitions_user_pb.User | undefined;
  setUser(value?: definitions_user_pb.User): void;

  getState(): Loan.StateMap[keyof Loan.StateMap];
  setState(value: Loan.StateMap[keyof Loan.StateMap]): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): definitions_address_pb.Address | undefined;
  setAddress(value?: definitions_address_pb.Address): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Loan.AsObject;
  static toObject(includeInstance: boolean, msg: Loan): Loan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Loan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Loan;
  static deserializeBinaryFromReader(message: Loan, reader: jspb.BinaryReader): Loan;
}

export namespace Loan {
  export type AsObject = {
    id: number,
    notes: string,
    user?: definitions_user_pb.User.AsObject,
    state: Loan.StateMap[keyof Loan.StateMap],
    address?: definitions_address_pb.Address.AsObject,
    createdAt: number,
    updatedAt: number,
  }

  export interface StateMap {
    DRAFT: 0;
    SUBMITTED: 10;
    APPROVED: 20;
    REJECTED: 100;
  }

  export const State: StateMap;
}


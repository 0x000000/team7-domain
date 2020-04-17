// package: domain
// file: definitions/loan.proto

import * as jspb from "google-protobuf";
import * as definitions_types_date_pb from "../definitions/types/date_pb";
import * as definitions_user_pb from "../definitions/user_pb";

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

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): definitions_types_date_pb.DateTimeUTC | undefined;
  setCreatedAt(value?: definitions_types_date_pb.DateTimeUTC): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): definitions_types_date_pb.DateTimeUTC | undefined;
  setUpdatedAt(value?: definitions_types_date_pb.DateTimeUTC): void;

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
    createdAt?: definitions_types_date_pb.DateTimeUTC.AsObject,
    updatedAt?: definitions_types_date_pb.DateTimeUTC.AsObject,
  }

  export interface StateMap {
    DRAFT: 0;
    SUBMITTED: 10;
    APPROVED: 20;
    REJECTED: 100;
  }

  export const State: StateMap;
}


// package: domain
// file: definitions/address.proto

import * as jspb from "google-protobuf";

export class Address extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStreet(): string;
  setStreet(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getState(): string;
  setState(value: string): void;

  getZip(): string;
  setZip(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    id: number,
    street: string,
    city: string,
    state: string,
    zip: string,
  }
}


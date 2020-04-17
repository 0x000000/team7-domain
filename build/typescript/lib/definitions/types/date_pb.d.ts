// package: domain.types
// file: definitions/types/date.proto

import * as jspb from "google-protobuf";

export class DateTimeUTC extends jspb.Message {
  getYear(): number;
  setYear(value: number): void;

  getMonth(): number;
  setMonth(value: number): void;

  getDay(): number;
  setDay(value: number): void;

  getHour(): number;
  setHour(value: number): void;

  getMinute(): number;
  setMinute(value: number): void;

  getSecond(): number;
  setSecond(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateTimeUTC.AsObject;
  static toObject(includeInstance: boolean, msg: DateTimeUTC): DateTimeUTC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateTimeUTC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateTimeUTC;
  static deserializeBinaryFromReader(message: DateTimeUTC, reader: jspb.BinaryReader): DateTimeUTC;
}

export namespace DateTimeUTC {
  export type AsObject = {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  }
}


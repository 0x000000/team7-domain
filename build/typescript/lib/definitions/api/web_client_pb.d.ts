// package: domain.api
// file: definitions/api/web_client.proto

import * as jspb from "google-protobuf";

export class WebClient extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebClient.AsObject;
  static toObject(includeInstance: boolean, msg: WebClient): WebClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebClient;
  static deserializeBinaryFromReader(message: WebClient, reader: jspb.BinaryReader): WebClient;
}

export namespace WebClient {
  export type AsObject = {
    id: number,
    name: string,
  }
}


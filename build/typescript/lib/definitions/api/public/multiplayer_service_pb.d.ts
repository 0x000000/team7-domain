// package: domain.api.public
// file: definitions/api/public/multiplayer_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as definitions_api_web_client_pb from "../../../definitions/api/web_client_pb";

export class WebAction extends jspb.Message {
  hasClient(): boolean;
  clearClient(): void;
  getClient(): definitions_api_web_client_pb.WebClient | undefined;
  setClient(value?: definitions_api_web_client_pb.WebClient): void;

  getType(): WebAction.TypeMap[keyof WebAction.TypeMap];
  setType(value: WebAction.TypeMap[keyof WebAction.TypeMap]): void;

  getElementLocator(): string;
  setElementLocator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebAction.AsObject;
  static toObject(includeInstance: boolean, msg: WebAction): WebAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebAction;
  static deserializeBinaryFromReader(message: WebAction, reader: jspb.BinaryReader): WebAction;
}

export namespace WebAction {
  export type AsObject = {
    client?: definitions_api_web_client_pb.WebClient.AsObject,
    type: WebAction.TypeMap[keyof WebAction.TypeMap],
    elementLocator: string,
  }

  export interface TypeMap {
    CONNECTED: 0;
    DISCONNECTED: 1;
    ACQUIRED: 2;
    RELEASED: 3;
  }

  export const Type: TypeMap;
}


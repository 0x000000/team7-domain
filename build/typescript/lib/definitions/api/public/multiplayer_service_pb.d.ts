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
    ACQUIRED: 0;
    RELEASED: 1;
  }

  export const Type: TypeMap;
}

export class ClientsUpdate extends jspb.Message {
  clearConnectedList(): void;
  getConnectedList(): Array<definitions_api_web_client_pb.WebClient>;
  setConnectedList(value: Array<definitions_api_web_client_pb.WebClient>): void;
  addConnected(value?: definitions_api_web_client_pb.WebClient, index?: number): definitions_api_web_client_pb.WebClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientsUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ClientsUpdate): ClientsUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientsUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientsUpdate;
  static deserializeBinaryFromReader(message: ClientsUpdate, reader: jspb.BinaryReader): ClientsUpdate;
}

export namespace ClientsUpdate {
  export type AsObject = {
    connectedList: Array<definitions_api_web_client_pb.WebClient.AsObject>,
  }
}


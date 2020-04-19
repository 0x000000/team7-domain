// package: domain.api.public
// file: definitions/api/public/multiplayer_service.proto

import * as definitions_api_public_multiplayer_service_pb from "../../../definitions/api/public/multiplayer_service_pb";
import * as definitions_api_web_client_pb from "../../../definitions/api/web_client_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MultiplayerServiceListenToUpdates = {
  readonly methodName: string;
  readonly service: typeof MultiplayerService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof definitions_api_web_client_pb.WebClient;
  readonly responseType: typeof definitions_api_public_multiplayer_service_pb.WebAction;
};

export class MultiplayerService {
  static readonly serviceName: string;
  static readonly ListenToUpdates: MultiplayerServiceListenToUpdates;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MultiplayerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listenToUpdates(requestMessage: definitions_api_web_client_pb.WebClient, metadata?: grpc.Metadata): ResponseStream<definitions_api_public_multiplayer_service_pb.WebAction>;
}


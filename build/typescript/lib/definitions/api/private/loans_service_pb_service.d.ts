// package: domain.api.private
// file: definitions/api/private/loans_service.proto

import * as definitions_api_private_loans_service_pb from "../../../definitions/api/private/loans_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as definitions_loan_pb from "../../../definitions/loan_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LoansServiceLoadAll = {
  readonly methodName: string;
  readonly service: typeof LoansService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof definitions_api_private_loans_service_pb.AllLoansResponse;
};

type LoansServiceUpdateLoan = {
  readonly methodName: string;
  readonly service: typeof LoansService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof definitions_loan_pb.Loan;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type LoansServiceListenToLoanUpdates = {
  readonly methodName: string;
  readonly service: typeof LoansService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof definitions_api_private_loans_service_pb.ClientData;
  readonly responseType: typeof definitions_loan_pb.Loan;
};

export class LoansService {
  static readonly serviceName: string;
  static readonly LoadAll: LoansServiceLoadAll;
  static readonly UpdateLoan: LoansServiceUpdateLoan;
  static readonly ListenToLoanUpdates: LoansServiceListenToLoanUpdates;
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

export class LoansServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  loadAll(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: definitions_api_private_loans_service_pb.AllLoansResponse|null) => void
  ): UnaryResponse;
  loadAll(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: definitions_api_private_loans_service_pb.AllLoansResponse|null) => void
  ): UnaryResponse;
  updateLoan(
    requestMessage: definitions_loan_pb.Loan,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateLoan(
    requestMessage: definitions_loan_pb.Loan,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  listenToLoanUpdates(requestMessage: definitions_api_private_loans_service_pb.ClientData, metadata?: grpc.Metadata): ResponseStream<definitions_loan_pb.Loan>;
}


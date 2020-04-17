// package: domain.api.private
// file: definitions/api/private/loans_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as definitions_loan_pb from "../../../definitions/loan_pb";

export class AllLoansResponse extends jspb.Message {
  clearLoansList(): void;
  getLoansList(): Array<definitions_loan_pb.Loan>;
  setLoansList(value: Array<definitions_loan_pb.Loan>): void;
  addLoans(value?: definitions_loan_pb.Loan, index?: number): definitions_loan_pb.Loan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllLoansResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllLoansResponse): AllLoansResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllLoansResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllLoansResponse;
  static deserializeBinaryFromReader(message: AllLoansResponse, reader: jspb.BinaryReader): AllLoansResponse;
}

export namespace AllLoansResponse {
  export type AsObject = {
    loansList: Array<definitions_loan_pb.Loan.AsObject>,
  }
}

export class ClientData extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientData.AsObject;
  static toObject(includeInstance: boolean, msg: ClientData): ClientData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientData;
  static deserializeBinaryFromReader(message: ClientData, reader: jspb.BinaryReader): ClientData;
}

export namespace ClientData {
  export type AsObject = {
    id: number,
  }
}


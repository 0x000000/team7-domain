// package: domain.api.private
// file: definitions/api/private/loans_service.proto

var definitions_api_private_loans_service_pb = require("../../../definitions/api/private/loans_service_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var definitions_loan_pb = require("../../../definitions/loan_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LoansService = (function () {
  function LoansService() {}
  LoansService.serviceName = "domain.api.private.LoansService";
  return LoansService;
}());

LoansService.LoadAll = {
  methodName: "LoadAll",
  service: LoansService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: definitions_api_private_loans_service_pb.AllLoansResponse
};

LoansService.UpdateLoan = {
  methodName: "UpdateLoan",
  service: LoansService,
  requestStream: false,
  responseStream: false,
  requestType: definitions_loan_pb.Loan,
  responseType: google_protobuf_empty_pb.Empty
};

LoansService.ListenToLoanUpdates = {
  methodName: "ListenToLoanUpdates",
  service: LoansService,
  requestStream: false,
  responseStream: true,
  requestType: definitions_api_private_loans_service_pb.ClientData,
  responseType: definitions_loan_pb.Loan
};

exports.LoansService = LoansService;

function LoansServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LoansServiceClient.prototype.loadAll = function loadAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LoansService.LoadAll, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

LoansServiceClient.prototype.updateLoan = function updateLoan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LoansService.UpdateLoan, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

LoansServiceClient.prototype.listenToLoanUpdates = function listenToLoanUpdates(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LoansService.ListenToLoanUpdates, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.LoansServiceClient = LoansServiceClient;


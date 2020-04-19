// package: domain.api.public
// file: definitions/api/public/multiplayer_service.proto

var definitions_api_public_multiplayer_service_pb = require("../../../definitions/api/public/multiplayer_service_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var definitions_api_web_client_pb = require("../../../definitions/api/web_client_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MultiplayerService = (function () {
  function MultiplayerService() {}
  MultiplayerService.serviceName = "domain.api.public.MultiplayerService";
  return MultiplayerService;
}());

MultiplayerService.Update = {
  methodName: "Update",
  service: MultiplayerService,
  requestStream: false,
  responseStream: false,
  requestType: definitions_api_public_multiplayer_service_pb.WebAction,
  responseType: google_protobuf_empty_pb.Empty
};

MultiplayerService.ListenToActionUpdates = {
  methodName: "ListenToActionUpdates",
  service: MultiplayerService,
  requestStream: false,
  responseStream: true,
  requestType: definitions_api_web_client_pb.WebClient,
  responseType: definitions_api_public_multiplayer_service_pb.WebAction
};

MultiplayerService.ListenToClientUpdates = {
  methodName: "ListenToClientUpdates",
  service: MultiplayerService,
  requestStream: false,
  responseStream: true,
  requestType: definitions_api_web_client_pb.WebClient,
  responseType: definitions_api_public_multiplayer_service_pb.ClientsUpdate
};

exports.MultiplayerService = MultiplayerService;

function MultiplayerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MultiplayerServiceClient.prototype.update = function update(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MultiplayerService.Update, {
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

MultiplayerServiceClient.prototype.listenToActionUpdates = function listenToActionUpdates(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MultiplayerService.ListenToActionUpdates, {
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

MultiplayerServiceClient.prototype.listenToClientUpdates = function listenToClientUpdates(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MultiplayerService.ListenToClientUpdates, {
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

exports.MultiplayerServiceClient = MultiplayerServiceClient;


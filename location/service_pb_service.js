// package: location
// file: location/service.proto

var location_service_pb = require("../location/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LocationApi = (function () {
  function LocationApi() {}
  LocationApi.serviceName = "location.LocationApi";
  return LocationApi;
}());

LocationApi.GetLocationHistory = {
  methodName: "GetLocationHistory",
  service: LocationApi,
  requestStream: false,
  responseStream: false,
  requestType: location_service_pb.GetLocationHistoryRequest,
  responseType: location_service_pb.GetLocationHistoryResponse
};

LocationApi.GetRealtimeLocation = {
  methodName: "GetRealtimeLocation",
  service: LocationApi,
  requestStream: false,
  responseStream: true,
  requestType: location_service_pb.GetRealtimeLocationRequest,
  responseType: location_service_pb.GetRealtimeLocationResponse
};

LocationApi.GetSubjectLocationsAt = {
  methodName: "GetSubjectLocationsAt",
  service: LocationApi,
  requestStream: false,
  responseStream: false,
  requestType: location_service_pb.GetSubjectLocationsAtRequest,
  responseType: location_service_pb.GetSubjectLocationsAtResponse
};

exports.LocationApi = LocationApi;

function LocationApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LocationApiClient.prototype.getLocationHistory = function getLocationHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocationApi.GetLocationHistory, {
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

LocationApiClient.prototype.getRealtimeLocation = function getRealtimeLocation(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LocationApi.GetRealtimeLocation, {
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

LocationApiClient.prototype.getSubjectLocationsAt = function getSubjectLocationsAt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocationApi.GetSubjectLocationsAt, {
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

exports.LocationApiClient = LocationApiClient;


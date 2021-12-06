// package: location
// file: location/service.proto

var location_service_pb = require("../location/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LocationApi = (function () {
  function LocationApi() {}
  LocationApi.serviceName = "location.LocationApi";
  return LocationApi;
}());

LocationApi.GetLocationTimeline = {
  methodName: "GetLocationTimeline",
  service: LocationApi,
  requestStream: false,
  responseStream: false,
  requestType: location_service_pb.GetSubjectTimelineRequest,
  responseType: location_service_pb.GetSubjectTimelineResponse
};

exports.LocationApi = LocationApi;

function LocationApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LocationApiClient.prototype.getLocationTimeline = function getLocationTimeline(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocationApi.GetLocationTimeline, {
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


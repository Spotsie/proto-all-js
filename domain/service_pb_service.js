// package: domain
// file: domain/service.proto

var domain_service_pb = require("../domain/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LocationApi = (function () {
  function LocationApi() {}
  LocationApi.serviceName = "domain.LocationApi";
  return LocationApi;
}());

LocationApi.GetBeaconTimeline = {
  methodName: "GetBeaconTimeline",
  service: LocationApi,
  requestStream: false,
  responseStream: false,
  requestType: domain_service_pb.GetBeaconTimelineRequest,
  responseType: domain_service_pb.GetBeaconTimelineResponse
};

exports.LocationApi = LocationApi;

function LocationApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LocationApiClient.prototype.getBeaconTimeline = function getBeaconTimeline(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocationApi.GetBeaconTimeline, {
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


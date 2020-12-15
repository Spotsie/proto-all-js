// package: deployment
// file: deployment/service.proto

var deployment_service_pb = require("../deployment/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DeploymentService = (function () {
  function DeploymentService() {}
  DeploymentService.serviceName = "deployment.DeploymentService";
  return DeploymentService;
}());

DeploymentService.BeaconLocationUpdateStream = {
  methodName: "BeaconLocationUpdateStream",
  service: DeploymentService,
  requestStream: false,
  responseStream: true,
  requestType: deployment_service_pb.BeaconLocationUpdateStreamRequest,
  responseType: deployment_service_pb.BeaconLocationUpdate
};

DeploymentService.BeaconTimelineUpdateStream = {
  methodName: "BeaconTimelineUpdateStream",
  service: DeploymentService,
  requestStream: false,
  responseStream: true,
  requestType: deployment_service_pb.BeaconTimelineUpdateStreamRequest,
  responseType: deployment_service_pb.BeaconTimelineUpdateStreamReply
};

DeploymentService.BeaconEventStream = {
  methodName: "BeaconEventStream",
  service: DeploymentService,
  requestStream: false,
  responseStream: true,
  requestType: deployment_service_pb.BeaconEventStreamRequest,
  responseType: deployment_service_pb.BeaconEvent
};

DeploymentService.GetBeaconLocationHistory = {
  methodName: "GetBeaconLocationHistory",
  service: DeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetBeaconLocationHistoryRequest,
  responseType: deployment_service_pb.GetBeaconLocationHistoryReply
};

DeploymentService.GetNearbyBeacons = {
  methodName: "GetNearbyBeacons",
  service: DeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetNearbyBeaconsRequest,
  responseType: deployment_service_pb.GetNearbyBeaconsReply
};

DeploymentService.GetZones = {
  methodName: "GetZones",
  service: DeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetZonesRequest,
  responseType: deployment_service_pb.GetZonesReply
};

DeploymentService.GetZoneHistory = {
  methodName: "GetZoneHistory",
  service: DeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetZoneHistoryRequest,
  responseType: deployment_service_pb.GetZoneHistoryReply
};

DeploymentService.SaveImage = {
  methodName: "SaveImage",
  service: DeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.SaveImageRequest,
  responseType: deployment_service_pb.SaveImageReply
};

exports.DeploymentService = DeploymentService;

function DeploymentServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DeploymentServiceClient.prototype.beaconLocationUpdateStream = function beaconLocationUpdateStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DeploymentService.BeaconLocationUpdateStream, {
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

DeploymentServiceClient.prototype.beaconTimelineUpdateStream = function beaconTimelineUpdateStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DeploymentService.BeaconTimelineUpdateStream, {
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

DeploymentServiceClient.prototype.beaconEventStream = function beaconEventStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DeploymentService.BeaconEventStream, {
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

DeploymentServiceClient.prototype.getBeaconLocationHistory = function getBeaconLocationHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentService.GetBeaconLocationHistory, {
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

DeploymentServiceClient.prototype.getNearbyBeacons = function getNearbyBeacons(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentService.GetNearbyBeacons, {
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

DeploymentServiceClient.prototype.getZones = function getZones(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentService.GetZones, {
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

DeploymentServiceClient.prototype.getZoneHistory = function getZoneHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentService.GetZoneHistory, {
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

DeploymentServiceClient.prototype.saveImage = function saveImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentService.SaveImage, {
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

exports.DeploymentServiceClient = DeploymentServiceClient;


// package: device
// file: device/service.proto

var device_service_pb = require("../device/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DeviceService = (function () {
  function DeviceService() {}
  DeviceService.serviceName = "device.DeviceService";
  return DeviceService;
}());

DeviceService.getDevices = {
  methodName: "getDevices",
  service: DeviceService,
  requestStream: false,
  responseStream: false,
  requestType: device_service_pb.GetDevicesRequest,
  responseType: device_service_pb.GetDevicesResponse
};

DeviceService.addDevice = {
  methodName: "addDevice",
  service: DeviceService,
  requestStream: false,
  responseStream: false,
  requestType: device_service_pb.AddDeviceRequest,
  responseType: device_service_pb.AddDeviceResponse
};

exports.DeviceService = DeviceService;

function DeviceServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DeviceServiceClient.prototype.getDevices = function getDevices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceService.getDevices, {
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

DeviceServiceClient.prototype.addDevice = function addDevice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceService.addDevice, {
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

exports.DeviceServiceClient = DeviceServiceClient;


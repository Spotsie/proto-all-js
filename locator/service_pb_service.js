// package: locator
// file: locator/service.proto

var locator_service_pb = require("../locator/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LocatorService = (function () {
  function LocatorService() {}
  LocatorService.serviceName = "locator.LocatorService";
  return LocatorService;
}());

LocatorService.getGateways = {
  methodName: "getGateways",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.GetGatewaysRequest,
  responseType: locator_service_pb.GetGatewaysReply
};

LocatorService.GatewayNotificationStream = {
  methodName: "GatewayNotificationStream",
  service: LocatorService,
  requestStream: false,
  responseStream: true,
  requestType: locator_service_pb.GatewayNotificationStreamRequest,
  responseType: locator_service_pb.GatewayNotification
};

LocatorService.GatewayAction = {
  methodName: "GatewayAction",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.GatewayActionRequest,
  responseType: locator_service_pb.GatewayActionResponse
};

LocatorService.GetGatewayConfigurations = {
  methodName: "GetGatewayConfigurations",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.GetGatewayConfigurationsRequest,
  responseType: locator_service_pb.GetGatewayConfigurationsResponse
};

LocatorService.SaveGatewayConfiguration = {
  methodName: "SaveGatewayConfiguration",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.SaveGatewayConfigurationRequest,
  responseType: locator_service_pb.SaveGatewayConfigurationResponse
};

LocatorService.ObservationStream = {
  methodName: "ObservationStream",
  service: LocatorService,
  requestStream: false,
  responseStream: true,
  requestType: locator_service_pb.ObservationStreamRequest,
  responseType: locator_service_pb.ObservationStreamMessage
};

LocatorService.BeaconPositionStream = {
  methodName: "BeaconPositionStream",
  service: LocatorService,
  requestStream: false,
  responseStream: true,
  requestType: locator_service_pb.BeaconPositionStreamRequest,
  responseType: locator_service_pb.BeaconPositionStreamMessage
};

LocatorService.CreateBinary = {
  methodName: "CreateBinary",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.CreateBinaryRequest,
  responseType: locator_service_pb.CreateBinaryReply
};

LocatorService.GetBinaries = {
  methodName: "GetBinaries",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.GetBinariesRequest,
  responseType: locator_service_pb.GetBinariesReply
};

LocatorService.SetGatewayParamsConfig = {
  methodName: "SetGatewayParamsConfig",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.SetGatewayParamsConfigRequest,
  responseType: locator_service_pb.SetGatewayParamsConfigReply
};

LocatorService.SetGatewaySoftwareVersion = {
  methodName: "SetGatewaySoftwareVersion",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.SetGatewaySoftwareVersionRequest,
  responseType: locator_service_pb.SetGatewaySoftwareVersionReply
};

LocatorService.SetGatewayTags = {
  methodName: "SetGatewayTags",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.SetGatewayTagsRequest,
  responseType: locator_service_pb.SetGatewayTagsReply
};

LocatorService.SetGatewayPosition = {
  methodName: "SetGatewayPosition",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.SetGatewayPositionRequest,
  responseType: locator_service_pb.SetGatewayPositionReply
};

LocatorService.GetGatewayLogs = {
  methodName: "GetGatewayLogs",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.GetGatewayLogsRequest,
  responseType: locator_service_pb.GetGatewayLogsReply
};

LocatorService.GatewayLogStream = {
  methodName: "GatewayLogStream",
  service: LocatorService,
  requestStream: false,
  responseStream: true,
  requestType: locator_service_pb.GatewayLogStreamRequest,
  responseType: locator_service_pb.GatewayLogDto
};

LocatorService.SetDeploymentMap = {
  methodName: "SetDeploymentMap",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.SetDeploymentMapRequest,
  responseType: locator_service_pb.SetDeploymentMapReply
};

LocatorService.CreateDeployment = {
  methodName: "CreateDeployment",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.CreateDeploymentRequest,
  responseType: locator_service_pb.CreateDeploymentReply
};

LocatorService.GetDeployments = {
  methodName: "GetDeployments",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.GetDeploymentsRequest,
  responseType: locator_service_pb.GetDeploymentsReply
};

LocatorService.SetDeploymentConfig = {
  methodName: "SetDeploymentConfig",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.SetDeploymentConfigRequest,
  responseType: locator_service_pb.SetDeploymentConfigReply
};

LocatorService.SetDeploymentGateways = {
  methodName: "SetDeploymentGateways",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.SetDeploymentGatewaysRequest,
  responseType: locator_service_pb.SetDeploymentGatewaysReply
};

LocatorService.SetDeploymentBeaconMajor = {
  methodName: "SetDeploymentBeaconMajor",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.SetDeploymentBeaconMajorRequest,
  responseType: locator_service_pb.SetDeploymentBeaconMajorReply
};

LocatorService.CreateDeploymentApiKey = {
  methodName: "CreateDeploymentApiKey",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.CreateDeploymentApiKeyRequest,
  responseType: locator_service_pb.CreateDeploymentApiKeyReply
};

LocatorService.DeleteDeploymentApiKey = {
  methodName: "DeleteDeploymentApiKey",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.DeleteDeploymentApiKeyRequest,
  responseType: locator_service_pb.DeleteDeploymentApiKeyReply
};

LocatorService.RegenerateDeploymentApiKey = {
  methodName: "RegenerateDeploymentApiKey",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.RegenerateDeploymentApiKeyRequest,
  responseType: locator_service_pb.RegenerateDeploymentApiKeyReply
};

LocatorService.SignUp = {
  methodName: "SignUp",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.SignUpRequest,
  responseType: locator_service_pb.SignUpReply
};

LocatorService.SignIn = {
  methodName: "SignIn",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.SignInRequest,
  responseType: locator_service_pb.SignInReply
};

LocatorService.CreateOrganization = {
  methodName: "CreateOrganization",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.CreateOrganizationRequest,
  responseType: locator_service_pb.CreateOrganizationReply
};

LocatorService.CreateOrganizationInvite = {
  methodName: "CreateOrganizationInvite",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.CreateOrganizationInviteRequest,
  responseType: locator_service_pb.CreateOrganizationInviteReply
};

LocatorService.RemoveOrganizationUser = {
  methodName: "RemoveOrganizationUser",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.RemoveOrganizationUserRequest,
  responseType: locator_service_pb.RemoveOrganizationUserReply
};

LocatorService.CreateApp = {
  methodName: "CreateApp",
  service: LocatorService,
  requestStream: false,
  responseStream: false,
  requestType: locator_service_pb.CreateAppRequest,
  responseType: locator_service_pb.CreateAppReply
};

exports.LocatorService = LocatorService;

function LocatorServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LocatorServiceClient.prototype.getGateways = function getGateways(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.getGateways, {
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

LocatorServiceClient.prototype.gatewayNotificationStream = function gatewayNotificationStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LocatorService.GatewayNotificationStream, {
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

LocatorServiceClient.prototype.gatewayAction = function gatewayAction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.GatewayAction, {
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

LocatorServiceClient.prototype.getGatewayConfigurations = function getGatewayConfigurations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.GetGatewayConfigurations, {
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

LocatorServiceClient.prototype.saveGatewayConfiguration = function saveGatewayConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.SaveGatewayConfiguration, {
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

LocatorServiceClient.prototype.observationStream = function observationStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LocatorService.ObservationStream, {
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

LocatorServiceClient.prototype.beaconPositionStream = function beaconPositionStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LocatorService.BeaconPositionStream, {
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

LocatorServiceClient.prototype.createBinary = function createBinary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.CreateBinary, {
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

LocatorServiceClient.prototype.getBinaries = function getBinaries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.GetBinaries, {
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

LocatorServiceClient.prototype.setGatewayParamsConfig = function setGatewayParamsConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.SetGatewayParamsConfig, {
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

LocatorServiceClient.prototype.setGatewaySoftwareVersion = function setGatewaySoftwareVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.SetGatewaySoftwareVersion, {
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

LocatorServiceClient.prototype.setGatewayTags = function setGatewayTags(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.SetGatewayTags, {
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

LocatorServiceClient.prototype.setGatewayPosition = function setGatewayPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.SetGatewayPosition, {
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

LocatorServiceClient.prototype.getGatewayLogs = function getGatewayLogs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.GetGatewayLogs, {
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

LocatorServiceClient.prototype.gatewayLogStream = function gatewayLogStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LocatorService.GatewayLogStream, {
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

LocatorServiceClient.prototype.setDeploymentMap = function setDeploymentMap(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.SetDeploymentMap, {
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

LocatorServiceClient.prototype.createDeployment = function createDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.CreateDeployment, {
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

LocatorServiceClient.prototype.getDeployments = function getDeployments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.GetDeployments, {
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

LocatorServiceClient.prototype.setDeploymentConfig = function setDeploymentConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.SetDeploymentConfig, {
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

LocatorServiceClient.prototype.setDeploymentGateways = function setDeploymentGateways(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.SetDeploymentGateways, {
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

LocatorServiceClient.prototype.setDeploymentBeaconMajor = function setDeploymentBeaconMajor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.SetDeploymentBeaconMajor, {
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

LocatorServiceClient.prototype.createDeploymentApiKey = function createDeploymentApiKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.CreateDeploymentApiKey, {
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

LocatorServiceClient.prototype.deleteDeploymentApiKey = function deleteDeploymentApiKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.DeleteDeploymentApiKey, {
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

LocatorServiceClient.prototype.regenerateDeploymentApiKey = function regenerateDeploymentApiKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.RegenerateDeploymentApiKey, {
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

LocatorServiceClient.prototype.signUp = function signUp(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.SignUp, {
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

LocatorServiceClient.prototype.signIn = function signIn(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.SignIn, {
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

LocatorServiceClient.prototype.createOrganization = function createOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.CreateOrganization, {
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

LocatorServiceClient.prototype.createOrganizationInvite = function createOrganizationInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.CreateOrganizationInvite, {
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

LocatorServiceClient.prototype.removeOrganizationUser = function removeOrganizationUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.RemoveOrganizationUser, {
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

LocatorServiceClient.prototype.createApp = function createApp(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LocatorService.CreateApp, {
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

exports.LocatorServiceClient = LocatorServiceClient;


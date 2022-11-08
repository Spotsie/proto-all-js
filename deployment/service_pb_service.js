// package: deployment
// file: deployment/service.proto

var deployment_service_pb = require("../deployment/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DeploymentApi = (function () {
  function DeploymentApi() {}
  DeploymentApi.serviceName = "deployment.DeploymentApi";
  return DeploymentApi;
}());

DeploymentApi.GetDeployments = {
  methodName: "GetDeployments",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetDeploymentsRequest,
  responseType: deployment_service_pb.GetDeploymentsResponse
};

DeploymentApi.CreateDeployment = {
  methodName: "CreateDeployment",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.CreateDeploymentRequest,
  responseType: deployment_service_pb.CreateDeploymentResponse
};

DeploymentApi.UpdateDeployment = {
  methodName: "UpdateDeployment",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.UpdateDeploymentRequest,
  responseType: deployment_service_pb.UpdateDeploymentResponse
};

DeploymentApi.CreateZone = {
  methodName: "CreateZone",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.CreateZoneRequest,
  responseType: deployment_service_pb.CreateZoneResponse
};

DeploymentApi.DeleteZone = {
  methodName: "DeleteZone",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.DeleteZoneRequest,
  responseType: deployment_service_pb.DeleteZoneResponse
};

DeploymentApi.UpdateZone = {
  methodName: "UpdateZone",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.UpdateZoneRequest,
  responseType: deployment_service_pb.UpdateZoneResponse
};

DeploymentApi.GetZones = {
  methodName: "GetZones",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetZonesRequest,
  responseType: deployment_service_pb.GetZonesResponse
};

DeploymentApi.GetZone = {
  methodName: "GetZone",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetZoneRequest,
  responseType: deployment_service_pb.GetZoneResponse
};

DeploymentApi.AddPositioningReferent = {
  methodName: "AddPositioningReferent",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.AddPositioningReferentRequest,
  responseType: deployment_service_pb.AddPositioningReferentResponse
};

DeploymentApi.UpdatePositioningReferent = {
  methodName: "UpdatePositioningReferent",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.UpdatePositioningReferentRequest,
  responseType: deployment_service_pb.UpdatePositioningReferentResponse
};

DeploymentApi.GetPositioningReferents = {
  methodName: "GetPositioningReferents",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetPositioningReferentsRequest,
  responseType: deployment_service_pb.GetPositioningReferentsResponse
};

DeploymentApi.GetPositioningReferent = {
  methodName: "GetPositioningReferent",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetPositioningReferentRequest,
  responseType: deployment_service_pb.GetPositioningReferentResponse
};

DeploymentApi.CreateOrganization = {
  methodName: "CreateOrganization",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.CreateOrganizationRequest,
  responseType: deployment_service_pb.CreateOrganizationResponse
};

DeploymentApi.GetOrganization = {
  methodName: "GetOrganization",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetOrganizationRequest,
  responseType: deployment_service_pb.GetOrganizationResponse
};

DeploymentApi.GetOrganizations = {
  methodName: "GetOrganizations",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetOrganizationsRequest,
  responseType: deployment_service_pb.GetOrganizationsResponse
};

DeploymentApi.GetMembers = {
  methodName: "GetMembers",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetMembersRequest,
  responseType: deployment_service_pb.GetMembersResponse
};

DeploymentApi.CreateMemberInvite = {
  methodName: "CreateMemberInvite",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.CreateMemberInviteRequest,
  responseType: deployment_service_pb.CreateMemberInviteResponse
};

DeploymentApi.SignIn = {
  methodName: "SignIn",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.SignInRequest,
  responseType: deployment_service_pb.SignInResponse
};

DeploymentApi.SignUp = {
  methodName: "SignUp",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.SignUpRequest,
  responseType: deployment_service_pb.SignUpResponse
};

DeploymentApi.GetSignUpInvite = {
  methodName: "GetSignUpInvite",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.GetSignUpInviteRequest,
  responseType: deployment_service_pb.GetSignupInviteResponse
};

DeploymentApi.PasswordRecovery = {
  methodName: "PasswordRecovery",
  service: DeploymentApi,
  requestStream: false,
  responseStream: false,
  requestType: deployment_service_pb.PasswordRecoveryRequest,
  responseType: deployment_service_pb.PasswordRecoveryResponse
};

exports.DeploymentApi = DeploymentApi;

function DeploymentApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DeploymentApiClient.prototype.getDeployments = function getDeployments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.GetDeployments, {
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

DeploymentApiClient.prototype.createDeployment = function createDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.CreateDeployment, {
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

DeploymentApiClient.prototype.updateDeployment = function updateDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.UpdateDeployment, {
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

DeploymentApiClient.prototype.createZone = function createZone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.CreateZone, {
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

DeploymentApiClient.prototype.deleteZone = function deleteZone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.DeleteZone, {
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

DeploymentApiClient.prototype.updateZone = function updateZone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.UpdateZone, {
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

DeploymentApiClient.prototype.getZones = function getZones(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.GetZones, {
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

DeploymentApiClient.prototype.getZone = function getZone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.GetZone, {
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

DeploymentApiClient.prototype.addPositioningReferent = function addPositioningReferent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.AddPositioningReferent, {
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

DeploymentApiClient.prototype.updatePositioningReferent = function updatePositioningReferent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.UpdatePositioningReferent, {
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

DeploymentApiClient.prototype.getPositioningReferents = function getPositioningReferents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.GetPositioningReferents, {
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

DeploymentApiClient.prototype.getPositioningReferent = function getPositioningReferent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.GetPositioningReferent, {
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

DeploymentApiClient.prototype.createOrganization = function createOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.CreateOrganization, {
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

DeploymentApiClient.prototype.getOrganization = function getOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.GetOrganization, {
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

DeploymentApiClient.prototype.getOrganizations = function getOrganizations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.GetOrganizations, {
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

DeploymentApiClient.prototype.getMembers = function getMembers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.GetMembers, {
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

DeploymentApiClient.prototype.createMemberInvite = function createMemberInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.CreateMemberInvite, {
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

DeploymentApiClient.prototype.signIn = function signIn(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.SignIn, {
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

DeploymentApiClient.prototype.signUp = function signUp(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.SignUp, {
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

DeploymentApiClient.prototype.getSignUpInvite = function getSignUpInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.GetSignUpInvite, {
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

DeploymentApiClient.prototype.passwordRecovery = function passwordRecovery(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeploymentApi.PasswordRecovery, {
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

exports.DeploymentApiClient = DeploymentApiClient;


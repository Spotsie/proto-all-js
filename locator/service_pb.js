// source: locator/service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gateway_gateway_pb = require('../gateway/gateway_pb.js');
goog.object.extend(proto, gateway_gateway_pb);
var domain_domain_pb = require('../domain/domain_pb.js');
goog.object.extend(proto, domain_domain_pb);
goog.exportSymbol('proto.locator.AuthData', null, global);
goog.exportSymbol('proto.locator.BeaconPositionStreamMessage', null, global);
goog.exportSymbol('proto.locator.BeaconPositionStreamRequest', null, global);
goog.exportSymbol('proto.locator.BinaryDto', null, global);
goog.exportSymbol('proto.locator.ConfigureGatewayAction', null, global);
goog.exportSymbol('proto.locator.CreateAppReply', null, global);
goog.exportSymbol('proto.locator.CreateAppRequest', null, global);
goog.exportSymbol('proto.locator.CreateBinaryReply', null, global);
goog.exportSymbol('proto.locator.CreateBinaryRequest', null, global);
goog.exportSymbol('proto.locator.CreateDeploymentApiKeyReply', null, global);
goog.exportSymbol('proto.locator.CreateDeploymentApiKeyRequest', null, global);
goog.exportSymbol('proto.locator.CreateDeploymentReply', null, global);
goog.exportSymbol('proto.locator.CreateDeploymentRequest', null, global);
goog.exportSymbol('proto.locator.CreateOrganizationInviteReply', null, global);
goog.exportSymbol('proto.locator.CreateOrganizationInviteRequest', null, global);
goog.exportSymbol('proto.locator.CreateOrganizationReply', null, global);
goog.exportSymbol('proto.locator.CreateOrganizationRequest', null, global);
goog.exportSymbol('proto.locator.DeleteDeploymentApiKeyReply', null, global);
goog.exportSymbol('proto.locator.DeleteDeploymentApiKeyRequest', null, global);
goog.exportSymbol('proto.locator.Gateway', null, global);
goog.exportSymbol('proto.locator.Gateway.Request', null, global);
goog.exportSymbol('proto.locator.Gateway.Request.Response', null, global);
goog.exportSymbol('proto.locator.GatewayActionRequest', null, global);
goog.exportSymbol('proto.locator.GatewayActionRequest.GatewayactionCase', null, global);
goog.exportSymbol('proto.locator.GatewayActionResponse', null, global);
goog.exportSymbol('proto.locator.GatewayActionType', null, global);
goog.exportSymbol('proto.locator.GatewayLogDto', null, global);
goog.exportSymbol('proto.locator.GatewayLogStreamReply', null, global);
goog.exportSymbol('proto.locator.GatewayLogStreamRequest', null, global);
goog.exportSymbol('proto.locator.GatewayNotification', null, global);
goog.exportSymbol('proto.locator.GatewayNotification.LastDiscoveryUpdate', null, global);
goog.exportSymbol('proto.locator.GatewayNotification.LastPingUpdate', null, global);
goog.exportSymbol('proto.locator.GatewayNotification.NotificationCase', null, global);
goog.exportSymbol('proto.locator.GatewayNotification.RequestUpdate', null, global);
goog.exportSymbol('proto.locator.GatewayNotificationStreamRequest', null, global);
goog.exportSymbol('proto.locator.GatewayParamsConfigDto', null, global);
goog.exportSymbol('proto.locator.GetBinariesReply', null, global);
goog.exportSymbol('proto.locator.GetBinariesRequest', null, global);
goog.exportSymbol('proto.locator.GetDeploymentsReply', null, global);
goog.exportSymbol('proto.locator.GetDeploymentsRequest', null, global);
goog.exportSymbol('proto.locator.GetGatewayConfigurationsRequest', null, global);
goog.exportSymbol('proto.locator.GetGatewayConfigurationsResponse', null, global);
goog.exportSymbol('proto.locator.GetGatewayLogsReply', null, global);
goog.exportSymbol('proto.locator.GetGatewayLogsRequest', null, global);
goog.exportSymbol('proto.locator.GetGatewayLogsRequest.Direction', null, global);
goog.exportSymbol('proto.locator.GetGatewaysReply', null, global);
goog.exportSymbol('proto.locator.GetGatewaysRequest', null, global);
goog.exportSymbol('proto.locator.ObservationStreamMessage', null, global);
goog.exportSymbol('proto.locator.ObservationStreamRequest', null, global);
goog.exportSymbol('proto.locator.PingAction', null, global);
goog.exportSymbol('proto.locator.PipelineLifecycleEventMessage', null, global);
goog.exportSymbol('proto.locator.PipelineLifecycleEventStreamRequest', null, global);
goog.exportSymbol('proto.locator.RegenerateDeploymentApiKeyReply', null, global);
goog.exportSymbol('proto.locator.RegenerateDeploymentApiKeyRequest', null, global);
goog.exportSymbol('proto.locator.RemoveOrganizationUserReply', null, global);
goog.exportSymbol('proto.locator.RemoveOrganizationUserRequest', null, global);
goog.exportSymbol('proto.locator.RestartGatewayAction', null, global);
goog.exportSymbol('proto.locator.SaveGatewayConfigurationRequest', null, global);
goog.exportSymbol('proto.locator.SaveGatewayConfigurationResponse', null, global);
goog.exportSymbol('proto.locator.SetDeploymentBeaconMajorReply', null, global);
goog.exportSymbol('proto.locator.SetDeploymentBeaconMajorRequest', null, global);
goog.exportSymbol('proto.locator.SetDeploymentConfigReply', null, global);
goog.exportSymbol('proto.locator.SetDeploymentConfigRequest', null, global);
goog.exportSymbol('proto.locator.SetDeploymentGatewaysReply', null, global);
goog.exportSymbol('proto.locator.SetDeploymentGatewaysRequest', null, global);
goog.exportSymbol('proto.locator.SetDeploymentMapReply', null, global);
goog.exportSymbol('proto.locator.SetDeploymentMapRequest', null, global);
goog.exportSymbol('proto.locator.SetGatewayParamsConfigReply', null, global);
goog.exportSymbol('proto.locator.SetGatewayParamsConfigRequest', null, global);
goog.exportSymbol('proto.locator.SetGatewayPositionReply', null, global);
goog.exportSymbol('proto.locator.SetGatewayPositionRequest', null, global);
goog.exportSymbol('proto.locator.SetGatewaySoftwareVersionReply', null, global);
goog.exportSymbol('proto.locator.SetGatewaySoftwareVersionRequest', null, global);
goog.exportSymbol('proto.locator.SetGatewayTagsReply', null, global);
goog.exportSymbol('proto.locator.SetGatewayTagsRequest', null, global);
goog.exportSymbol('proto.locator.SignInReply', null, global);
goog.exportSymbol('proto.locator.SignInRequest', null, global);
goog.exportSymbol('proto.locator.SignUpReply', null, global);
goog.exportSymbol('proto.locator.SignUpRequest', null, global);
goog.exportSymbol('proto.locator.SoftwareUpdateAction', null, global);
goog.exportSymbol('proto.locator.StartBleScan', null, global);
goog.exportSymbol('proto.locator.StopBleScan', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GetGatewaysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GetGatewaysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GetGatewaysRequest.displayName = 'proto.locator.GetGatewaysRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GetGatewaysReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.GetGatewaysReply.repeatedFields_, null);
};
goog.inherits(proto.locator.GetGatewaysReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GetGatewaysReply.displayName = 'proto.locator.GetGatewaysReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GatewayNotificationStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GatewayNotificationStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GatewayNotificationStreamRequest.displayName = 'proto.locator.GatewayNotificationStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.Gateway = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.Gateway.repeatedFields_, null);
};
goog.inherits(proto.locator.Gateway, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.Gateway.displayName = 'proto.locator.Gateway';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.Gateway.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.Gateway.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.Gateway.Request.displayName = 'proto.locator.Gateway.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.Gateway.Request.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.Gateway.Request.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.Gateway.Request.Response.displayName = 'proto.locator.Gateway.Request.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GatewayNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.locator.GatewayNotification.oneofGroups_);
};
goog.inherits(proto.locator.GatewayNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GatewayNotification.displayName = 'proto.locator.GatewayNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GatewayNotification.LastPingUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GatewayNotification.LastPingUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GatewayNotification.LastPingUpdate.displayName = 'proto.locator.GatewayNotification.LastPingUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GatewayNotification.LastDiscoveryUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GatewayNotification.LastDiscoveryUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GatewayNotification.LastDiscoveryUpdate.displayName = 'proto.locator.GatewayNotification.LastDiscoveryUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GatewayNotification.RequestUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GatewayNotification.RequestUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GatewayNotification.RequestUpdate.displayName = 'proto.locator.GatewayNotification.RequestUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.RestartGatewayAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.RestartGatewayAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.RestartGatewayAction.displayName = 'proto.locator.RestartGatewayAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.ConfigureGatewayAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.ConfigureGatewayAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.ConfigureGatewayAction.displayName = 'proto.locator.ConfigureGatewayAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.StartBleScan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.StartBleScan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.StartBleScan.displayName = 'proto.locator.StartBleScan';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.StopBleScan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.StopBleScan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.StopBleScan.displayName = 'proto.locator.StopBleScan';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SoftwareUpdateAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SoftwareUpdateAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SoftwareUpdateAction.displayName = 'proto.locator.SoftwareUpdateAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.PingAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.PingAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.PingAction.displayName = 'proto.locator.PingAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GatewayActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.locator.GatewayActionRequest.oneofGroups_);
};
goog.inherits(proto.locator.GatewayActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GatewayActionRequest.displayName = 'proto.locator.GatewayActionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GatewayActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GatewayActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GatewayActionResponse.displayName = 'proto.locator.GatewayActionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GatewayParamsConfigDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GatewayParamsConfigDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GatewayParamsConfigDto.displayName = 'proto.locator.GatewayParamsConfigDto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GetGatewayConfigurationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GetGatewayConfigurationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GetGatewayConfigurationsRequest.displayName = 'proto.locator.GetGatewayConfigurationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GetGatewayConfigurationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.GetGatewayConfigurationsResponse.repeatedFields_, null);
};
goog.inherits(proto.locator.GetGatewayConfigurationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GetGatewayConfigurationsResponse.displayName = 'proto.locator.GetGatewayConfigurationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SaveGatewayConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SaveGatewayConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SaveGatewayConfigurationRequest.displayName = 'proto.locator.SaveGatewayConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SaveGatewayConfigurationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SaveGatewayConfigurationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SaveGatewayConfigurationResponse.displayName = 'proto.locator.SaveGatewayConfigurationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.ObservationStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.ObservationStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.locator.ObservationStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.ObservationStreamRequest.displayName = 'proto.locator.ObservationStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.ObservationStreamMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.ObservationStreamMessage.repeatedFields_, null);
};
goog.inherits(proto.locator.ObservationStreamMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.ObservationStreamMessage.displayName = 'proto.locator.ObservationStreamMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.BinaryDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.BinaryDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.BinaryDto.displayName = 'proto.locator.BinaryDto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateBinaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.CreateBinaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateBinaryRequest.displayName = 'proto.locator.CreateBinaryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateBinaryReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.CreateBinaryReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateBinaryReply.displayName = 'proto.locator.CreateBinaryReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GetBinariesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GetBinariesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GetBinariesRequest.displayName = 'proto.locator.GetBinariesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GetBinariesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.GetBinariesReply.repeatedFields_, null);
};
goog.inherits(proto.locator.GetBinariesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GetBinariesReply.displayName = 'proto.locator.GetBinariesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetGatewayParamsConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetGatewayParamsConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetGatewayParamsConfigRequest.displayName = 'proto.locator.SetGatewayParamsConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetGatewayParamsConfigReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetGatewayParamsConfigReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetGatewayParamsConfigReply.displayName = 'proto.locator.SetGatewayParamsConfigReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetGatewaySoftwareVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetGatewaySoftwareVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetGatewaySoftwareVersionRequest.displayName = 'proto.locator.SetGatewaySoftwareVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetGatewaySoftwareVersionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetGatewaySoftwareVersionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetGatewaySoftwareVersionReply.displayName = 'proto.locator.SetGatewaySoftwareVersionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetGatewayTagsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.SetGatewayTagsRequest.repeatedFields_, null);
};
goog.inherits(proto.locator.SetGatewayTagsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetGatewayTagsRequest.displayName = 'proto.locator.SetGatewayTagsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetGatewayTagsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetGatewayTagsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetGatewayTagsReply.displayName = 'proto.locator.SetGatewayTagsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetGatewayPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetGatewayPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetGatewayPositionRequest.displayName = 'proto.locator.SetGatewayPositionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetGatewayPositionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetGatewayPositionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetGatewayPositionReply.displayName = 'proto.locator.SetGatewayPositionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GatewayLogDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GatewayLogDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GatewayLogDto.displayName = 'proto.locator.GatewayLogDto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GetGatewayLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GetGatewayLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GetGatewayLogsRequest.displayName = 'proto.locator.GetGatewayLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GetGatewayLogsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.GetGatewayLogsReply.repeatedFields_, null);
};
goog.inherits(proto.locator.GetGatewayLogsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GetGatewayLogsReply.displayName = 'proto.locator.GetGatewayLogsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GatewayLogStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GatewayLogStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GatewayLogStreamRequest.displayName = 'proto.locator.GatewayLogStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GatewayLogStreamReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GatewayLogStreamReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GatewayLogStreamReply.displayName = 'proto.locator.GatewayLogStreamReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetDeploymentMapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetDeploymentMapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetDeploymentMapRequest.displayName = 'proto.locator.SetDeploymentMapRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetDeploymentMapReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetDeploymentMapReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetDeploymentMapReply.displayName = 'proto.locator.SetDeploymentMapReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateDeploymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.CreateDeploymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateDeploymentRequest.displayName = 'proto.locator.CreateDeploymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateDeploymentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.CreateDeploymentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateDeploymentReply.displayName = 'proto.locator.CreateDeploymentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GetDeploymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.GetDeploymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GetDeploymentsRequest.displayName = 'proto.locator.GetDeploymentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.GetDeploymentsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.GetDeploymentsReply.repeatedFields_, null);
};
goog.inherits(proto.locator.GetDeploymentsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.GetDeploymentsReply.displayName = 'proto.locator.GetDeploymentsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetDeploymentConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetDeploymentConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetDeploymentConfigRequest.displayName = 'proto.locator.SetDeploymentConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetDeploymentConfigReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetDeploymentConfigReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetDeploymentConfigReply.displayName = 'proto.locator.SetDeploymentConfigReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetDeploymentGatewaysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.SetDeploymentGatewaysRequest.repeatedFields_, null);
};
goog.inherits(proto.locator.SetDeploymentGatewaysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetDeploymentGatewaysRequest.displayName = 'proto.locator.SetDeploymentGatewaysRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetDeploymentGatewaysReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetDeploymentGatewaysReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetDeploymentGatewaysReply.displayName = 'proto.locator.SetDeploymentGatewaysReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateDeploymentApiKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.CreateDeploymentApiKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateDeploymentApiKeyRequest.displayName = 'proto.locator.CreateDeploymentApiKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateDeploymentApiKeyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.CreateDeploymentApiKeyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateDeploymentApiKeyReply.displayName = 'proto.locator.CreateDeploymentApiKeyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.DeleteDeploymentApiKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.DeleteDeploymentApiKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.DeleteDeploymentApiKeyRequest.displayName = 'proto.locator.DeleteDeploymentApiKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.DeleteDeploymentApiKeyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.DeleteDeploymentApiKeyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.DeleteDeploymentApiKeyReply.displayName = 'proto.locator.DeleteDeploymentApiKeyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.RegenerateDeploymentApiKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.RegenerateDeploymentApiKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.RegenerateDeploymentApiKeyRequest.displayName = 'proto.locator.RegenerateDeploymentApiKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.RegenerateDeploymentApiKeyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.RegenerateDeploymentApiKeyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.RegenerateDeploymentApiKeyReply.displayName = 'proto.locator.RegenerateDeploymentApiKeyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.BeaconPositionStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.BeaconPositionStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.locator.BeaconPositionStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.BeaconPositionStreamRequest.displayName = 'proto.locator.BeaconPositionStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.BeaconPositionStreamMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.BeaconPositionStreamMessage.repeatedFields_, null);
};
goog.inherits(proto.locator.BeaconPositionStreamMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.BeaconPositionStreamMessage.displayName = 'proto.locator.BeaconPositionStreamMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.PipelineLifecycleEventStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.PipelineLifecycleEventStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.locator.PipelineLifecycleEventStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.PipelineLifecycleEventStreamRequest.displayName = 'proto.locator.PipelineLifecycleEventStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.PipelineLifecycleEventMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.PipelineLifecycleEventMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.PipelineLifecycleEventMessage.displayName = 'proto.locator.PipelineLifecycleEventMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetDeploymentBeaconMajorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetDeploymentBeaconMajorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetDeploymentBeaconMajorRequest.displayName = 'proto.locator.SetDeploymentBeaconMajorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SetDeploymentBeaconMajorReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SetDeploymentBeaconMajorReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SetDeploymentBeaconMajorReply.displayName = 'proto.locator.SetDeploymentBeaconMajorReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.AuthData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.AuthData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.AuthData.displayName = 'proto.locator.AuthData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SignUpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SignUpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SignUpRequest.displayName = 'proto.locator.SignUpRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SignUpReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SignUpReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SignUpReply.displayName = 'proto.locator.SignUpReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SignInRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SignInRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SignInRequest.displayName = 'proto.locator.SignInRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.SignInReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.SignInReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.SignInReply.displayName = 'proto.locator.SignInReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.CreateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateOrganizationRequest.displayName = 'proto.locator.CreateOrganizationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateOrganizationReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.CreateOrganizationReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateOrganizationReply.displayName = 'proto.locator.CreateOrganizationReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateOrganizationInviteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.CreateOrganizationInviteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateOrganizationInviteRequest.displayName = 'proto.locator.CreateOrganizationInviteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateOrganizationInviteReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.CreateOrganizationInviteReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateOrganizationInviteReply.displayName = 'proto.locator.CreateOrganizationInviteReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.RemoveOrganizationUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.RemoveOrganizationUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.RemoveOrganizationUserRequest.displayName = 'proto.locator.RemoveOrganizationUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.RemoveOrganizationUserReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.RemoveOrganizationUserReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.RemoveOrganizationUserReply.displayName = 'proto.locator.RemoveOrganizationUserReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateAppRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.locator.CreateAppRequest.repeatedFields_, null);
};
goog.inherits(proto.locator.CreateAppRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateAppRequest.displayName = 'proto.locator.CreateAppRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.locator.CreateAppReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.locator.CreateAppReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.locator.CreateAppReply.displayName = 'proto.locator.CreateAppReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GetGatewaysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GetGatewaysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GetGatewaysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewaysRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GetGatewaysRequest}
 */
proto.locator.GetGatewaysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GetGatewaysRequest;
  return proto.locator.GetGatewaysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GetGatewaysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GetGatewaysRequest}
 */
proto.locator.GetGatewaysRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GetGatewaysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GetGatewaysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GetGatewaysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewaysRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.GetGatewaysReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GetGatewaysReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GetGatewaysReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GetGatewaysReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewaysReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewaysList: jspb.Message.toObjectList(msg.getGatewaysList(),
    proto.locator.Gateway.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GetGatewaysReply}
 */
proto.locator.GetGatewaysReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GetGatewaysReply;
  return proto.locator.GetGatewaysReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GetGatewaysReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GetGatewaysReply}
 */
proto.locator.GetGatewaysReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.locator.Gateway;
      reader.readMessage(value,proto.locator.Gateway.deserializeBinaryFromReader);
      msg.addGateways(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GetGatewaysReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GetGatewaysReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GetGatewaysReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewaysReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewaysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.locator.Gateway.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Gateway gateways = 1;
 * @return {!Array<!proto.locator.Gateway>}
 */
proto.locator.GetGatewaysReply.prototype.getGatewaysList = function() {
  return /** @type{!Array<!proto.locator.Gateway>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.locator.Gateway, 1));
};


/**
 * @param {!Array<!proto.locator.Gateway>} value
 * @return {!proto.locator.GetGatewaysReply} returns this
*/
proto.locator.GetGatewaysReply.prototype.setGatewaysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.locator.Gateway=} opt_value
 * @param {number=} opt_index
 * @return {!proto.locator.Gateway}
 */
proto.locator.GetGatewaysReply.prototype.addGateways = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.locator.Gateway, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.GetGatewaysReply} returns this
 */
proto.locator.GetGatewaysReply.prototype.clearGatewaysList = function() {
  return this.setGatewaysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GatewayNotificationStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GatewayNotificationStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GatewayNotificationStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayNotificationStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GatewayNotificationStreamRequest}
 */
proto.locator.GatewayNotificationStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GatewayNotificationStreamRequest;
  return proto.locator.GatewayNotificationStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GatewayNotificationStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GatewayNotificationStreamRequest}
 */
proto.locator.GatewayNotificationStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GatewayNotificationStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GatewayNotificationStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GatewayNotificationStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayNotificationStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.Gateway.repeatedFields_ = [5,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.Gateway.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.Gateway.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.Gateway} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.Gateway.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    serialId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lastPing: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastDiscovery: jspb.Message.getFieldWithDefault(msg, 4, ""),
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.locator.Gateway.Request.toObject, includeInstance),
    position: (f = msg.getPosition()) && domain_domain_pb.Point.toObject(includeInstance, f),
    paramsConfigId: jspb.Message.getFieldWithDefault(msg, 7, 0),
    softwareVersion: jspb.Message.getFieldWithDefault(msg, 8, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    deployment: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.Gateway}
 */
proto.locator.Gateway.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.Gateway;
  return proto.locator.Gateway.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.Gateway} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.Gateway}
 */
proto.locator.Gateway.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSerialId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastPing(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastDiscovery(value);
      break;
    case 5:
      var value = new proto.locator.Gateway.Request;
      reader.readMessage(value,proto.locator.Gateway.Request.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    case 6:
      var value = new domain_domain_pb.Point;
      reader.readMessage(value,domain_domain_pb.Point.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParamsConfigId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoftwareVersion(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeployment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.Gateway.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.Gateway.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.Gateway} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.Gateway.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSerialId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLastPing();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastDiscovery();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.locator.Gateway.Request.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      domain_domain_pb.Point.serializeBinaryToWriter
    );
  }
  f = message.getParamsConfigId();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getSoftwareVersion();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getDeployment();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.Gateway.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.Gateway.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.Gateway.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.Gateway.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lastAttemptDate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attempts: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maxAttempts: jspb.Message.getFieldWithDefault(msg, 4, 0),
    response: (f = msg.getResponse()) && proto.locator.Gateway.Request.Response.toObject(includeInstance, f),
    finished: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    timeout: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.Gateway.Request}
 */
proto.locator.Gateway.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.Gateway.Request;
  return proto.locator.Gateway.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.Gateway.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.Gateway.Request}
 */
proto.locator.Gateway.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMessageId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastAttemptDate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAttempts(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxAttempts(value);
      break;
    case 5:
      var value = new proto.locator.Gateway.Request.Response;
      reader.readMessage(value,proto.locator.Gateway.Request.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinished(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.Gateway.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.Gateway.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.Gateway.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.Gateway.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLastAttemptDate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttempts();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMaxAttempts();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.locator.Gateway.Request.Response.serializeBinaryToWriter
    );
  }
  f = message.getFinished();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.Gateway.Request.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.Gateway.Request.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.Gateway.Request.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.Gateway.Request.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.Gateway.Request.Response}
 */
proto.locator.Gateway.Request.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.Gateway.Request.Response;
  return proto.locator.Gateway.Request.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.Gateway.Request.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.Gateway.Request.Response}
 */
proto.locator.Gateway.Request.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gateway.GatewayResponseCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.Gateway.Request.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.Gateway.Request.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.Gateway.Request.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.Gateway.Request.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional gateway.GatewayResponseCode code = 1;
 * @return {!proto.gateway.GatewayResponseCode}
 */
proto.locator.Gateway.Request.Response.prototype.getCode = function() {
  return /** @type {!proto.gateway.GatewayResponseCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.gateway.GatewayResponseCode} value
 * @return {!proto.locator.Gateway.Request.Response} returns this
 */
proto.locator.Gateway.Request.Response.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.locator.Gateway.Request.Response.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.Gateway.Request.Response} returns this
 */
proto.locator.Gateway.Request.Response.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 message_id = 1;
 * @return {number}
 */
proto.locator.Gateway.Request.prototype.getMessageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.Gateway.Request} returns this
 */
proto.locator.Gateway.Request.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string last_attempt_date = 2;
 * @return {string}
 */
proto.locator.Gateway.Request.prototype.getLastAttemptDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.Gateway.Request} returns this
 */
proto.locator.Gateway.Request.prototype.setLastAttemptDate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 attempts = 3;
 * @return {number}
 */
proto.locator.Gateway.Request.prototype.getAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.Gateway.Request} returns this
 */
proto.locator.Gateway.Request.prototype.setAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 max_attempts = 4;
 * @return {number}
 */
proto.locator.Gateway.Request.prototype.getMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.Gateway.Request} returns this
 */
proto.locator.Gateway.Request.prototype.setMaxAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Response response = 5;
 * @return {?proto.locator.Gateway.Request.Response}
 */
proto.locator.Gateway.Request.prototype.getResponse = function() {
  return /** @type{?proto.locator.Gateway.Request.Response} */ (
    jspb.Message.getWrapperField(this, proto.locator.Gateway.Request.Response, 5));
};


/**
 * @param {?proto.locator.Gateway.Request.Response|undefined} value
 * @return {!proto.locator.Gateway.Request} returns this
*/
proto.locator.Gateway.Request.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.Gateway.Request} returns this
 */
proto.locator.Gateway.Request.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.Gateway.Request.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool finished = 6;
 * @return {boolean}
 */
proto.locator.Gateway.Request.prototype.getFinished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.locator.Gateway.Request} returns this
 */
proto.locator.Gateway.Request.prototype.setFinished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional uint32 timeout = 7;
 * @return {number}
 */
proto.locator.Gateway.Request.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.Gateway.Request} returns this
 */
proto.locator.Gateway.Request.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.locator.Gateway.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 serial_id = 2;
 * @return {number}
 */
proto.locator.Gateway.prototype.getSerialId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.setSerialId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string last_ping = 3;
 * @return {string}
 */
proto.locator.Gateway.prototype.getLastPing = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.setLastPing = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_discovery = 4;
 * @return {string}
 */
proto.locator.Gateway.prototype.getLastDiscovery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.setLastDiscovery = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Request requests = 5;
 * @return {!Array<!proto.locator.Gateway.Request>}
 */
proto.locator.Gateway.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.locator.Gateway.Request>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.locator.Gateway.Request, 5));
};


/**
 * @param {!Array<!proto.locator.Gateway.Request>} value
 * @return {!proto.locator.Gateway} returns this
*/
proto.locator.Gateway.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.locator.Gateway.Request=} opt_value
 * @param {number=} opt_index
 * @return {!proto.locator.Gateway.Request}
 */
proto.locator.Gateway.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.locator.Gateway.Request, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};


/**
 * optional domain.Point position = 6;
 * @return {?proto.domain.Point}
 */
proto.locator.Gateway.prototype.getPosition = function() {
  return /** @type{?proto.domain.Point} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.Point, 6));
};


/**
 * @param {?proto.domain.Point|undefined} value
 * @return {!proto.locator.Gateway} returns this
*/
proto.locator.Gateway.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.Gateway.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 params_config_id = 7;
 * @return {number}
 */
proto.locator.Gateway.prototype.getParamsConfigId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.setParamsConfigId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string software_version = 8;
 * @return {string}
 */
proto.locator.Gateway.prototype.getSoftwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.setSoftwareVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated string tags = 9;
 * @return {!Array<string>}
 */
proto.locator.Gateway.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string deployment = 10;
 * @return {string}
 */
proto.locator.Gateway.prototype.getDeployment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.Gateway} returns this
 */
proto.locator.Gateway.prototype.setDeployment = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.locator.GatewayNotification.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.locator.GatewayNotification.NotificationCase = {
  NOTIFICATION_NOT_SET: 0,
  LAST_PING_UPDATE: 1,
  LAST_DISCOVERY_UPDATE: 2,
  REQUEST_UPDATE: 3
};

/**
 * @return {proto.locator.GatewayNotification.NotificationCase}
 */
proto.locator.GatewayNotification.prototype.getNotificationCase = function() {
  return /** @type {proto.locator.GatewayNotification.NotificationCase} */(jspb.Message.computeOneofCase(this, proto.locator.GatewayNotification.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GatewayNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GatewayNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GatewayNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastPingUpdate: (f = msg.getLastPingUpdate()) && proto.locator.GatewayNotification.LastPingUpdate.toObject(includeInstance, f),
    lastDiscoveryUpdate: (f = msg.getLastDiscoveryUpdate()) && proto.locator.GatewayNotification.LastDiscoveryUpdate.toObject(includeInstance, f),
    requestUpdate: (f = msg.getRequestUpdate()) && proto.locator.GatewayNotification.RequestUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GatewayNotification}
 */
proto.locator.GatewayNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GatewayNotification;
  return proto.locator.GatewayNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GatewayNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GatewayNotification}
 */
proto.locator.GatewayNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.locator.GatewayNotification.LastPingUpdate;
      reader.readMessage(value,proto.locator.GatewayNotification.LastPingUpdate.deserializeBinaryFromReader);
      msg.setLastPingUpdate(value);
      break;
    case 2:
      var value = new proto.locator.GatewayNotification.LastDiscoveryUpdate;
      reader.readMessage(value,proto.locator.GatewayNotification.LastDiscoveryUpdate.deserializeBinaryFromReader);
      msg.setLastDiscoveryUpdate(value);
      break;
    case 3:
      var value = new proto.locator.GatewayNotification.RequestUpdate;
      reader.readMessage(value,proto.locator.GatewayNotification.RequestUpdate.deserializeBinaryFromReader);
      msg.setRequestUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GatewayNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GatewayNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GatewayNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastPingUpdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.locator.GatewayNotification.LastPingUpdate.serializeBinaryToWriter
    );
  }
  f = message.getLastDiscoveryUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.locator.GatewayNotification.LastDiscoveryUpdate.serializeBinaryToWriter
    );
  }
  f = message.getRequestUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.locator.GatewayNotification.RequestUpdate.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GatewayNotification.LastPingUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GatewayNotification.LastPingUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GatewayNotification.LastPingUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayNotification.LastPingUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lastPing: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GatewayNotification.LastPingUpdate}
 */
proto.locator.GatewayNotification.LastPingUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GatewayNotification.LastPingUpdate;
  return proto.locator.GatewayNotification.LastPingUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GatewayNotification.LastPingUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GatewayNotification.LastPingUpdate}
 */
proto.locator.GatewayNotification.LastPingUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGatewayId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastPing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GatewayNotification.LastPingUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GatewayNotification.LastPingUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GatewayNotification.LastPingUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayNotification.LastPingUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLastPing();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 gateway_id = 1;
 * @return {number}
 */
proto.locator.GatewayNotification.LastPingUpdate.prototype.getGatewayId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GatewayNotification.LastPingUpdate} returns this
 */
proto.locator.GatewayNotification.LastPingUpdate.prototype.setGatewayId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string last_ping = 2;
 * @return {string}
 */
proto.locator.GatewayNotification.LastPingUpdate.prototype.getLastPing = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.GatewayNotification.LastPingUpdate} returns this
 */
proto.locator.GatewayNotification.LastPingUpdate.prototype.setLastPing = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GatewayNotification.LastDiscoveryUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GatewayNotification.LastDiscoveryUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GatewayNotification.LastDiscoveryUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayNotification.LastDiscoveryUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lastDiscovery: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GatewayNotification.LastDiscoveryUpdate}
 */
proto.locator.GatewayNotification.LastDiscoveryUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GatewayNotification.LastDiscoveryUpdate;
  return proto.locator.GatewayNotification.LastDiscoveryUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GatewayNotification.LastDiscoveryUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GatewayNotification.LastDiscoveryUpdate}
 */
proto.locator.GatewayNotification.LastDiscoveryUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGatewayId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastDiscovery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GatewayNotification.LastDiscoveryUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GatewayNotification.LastDiscoveryUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GatewayNotification.LastDiscoveryUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayNotification.LastDiscoveryUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLastDiscovery();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 gateway_id = 1;
 * @return {number}
 */
proto.locator.GatewayNotification.LastDiscoveryUpdate.prototype.getGatewayId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GatewayNotification.LastDiscoveryUpdate} returns this
 */
proto.locator.GatewayNotification.LastDiscoveryUpdate.prototype.setGatewayId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string last_discovery = 2;
 * @return {string}
 */
proto.locator.GatewayNotification.LastDiscoveryUpdate.prototype.getLastDiscovery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.GatewayNotification.LastDiscoveryUpdate} returns this
 */
proto.locator.GatewayNotification.LastDiscoveryUpdate.prototype.setLastDiscovery = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GatewayNotification.RequestUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GatewayNotification.RequestUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GatewayNotification.RequestUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayNotification.RequestUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    request: (f = msg.getRequest()) && proto.locator.Gateway.Request.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GatewayNotification.RequestUpdate}
 */
proto.locator.GatewayNotification.RequestUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GatewayNotification.RequestUpdate;
  return proto.locator.GatewayNotification.RequestUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GatewayNotification.RequestUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GatewayNotification.RequestUpdate}
 */
proto.locator.GatewayNotification.RequestUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGatewayId(value);
      break;
    case 2:
      var value = new proto.locator.Gateway.Request;
      reader.readMessage(value,proto.locator.Gateway.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GatewayNotification.RequestUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GatewayNotification.RequestUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GatewayNotification.RequestUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayNotification.RequestUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.locator.Gateway.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 gateway_id = 1;
 * @return {number}
 */
proto.locator.GatewayNotification.RequestUpdate.prototype.getGatewayId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GatewayNotification.RequestUpdate} returns this
 */
proto.locator.GatewayNotification.RequestUpdate.prototype.setGatewayId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Gateway.Request request = 2;
 * @return {?proto.locator.Gateway.Request}
 */
proto.locator.GatewayNotification.RequestUpdate.prototype.getRequest = function() {
  return /** @type{?proto.locator.Gateway.Request} */ (
    jspb.Message.getWrapperField(this, proto.locator.Gateway.Request, 2));
};


/**
 * @param {?proto.locator.Gateway.Request|undefined} value
 * @return {!proto.locator.GatewayNotification.RequestUpdate} returns this
*/
proto.locator.GatewayNotification.RequestUpdate.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayNotification.RequestUpdate} returns this
 */
proto.locator.GatewayNotification.RequestUpdate.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayNotification.RequestUpdate.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LastPingUpdate last_ping_update = 1;
 * @return {?proto.locator.GatewayNotification.LastPingUpdate}
 */
proto.locator.GatewayNotification.prototype.getLastPingUpdate = function() {
  return /** @type{?proto.locator.GatewayNotification.LastPingUpdate} */ (
    jspb.Message.getWrapperField(this, proto.locator.GatewayNotification.LastPingUpdate, 1));
};


/**
 * @param {?proto.locator.GatewayNotification.LastPingUpdate|undefined} value
 * @return {!proto.locator.GatewayNotification} returns this
*/
proto.locator.GatewayNotification.prototype.setLastPingUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.locator.GatewayNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayNotification} returns this
 */
proto.locator.GatewayNotification.prototype.clearLastPingUpdate = function() {
  return this.setLastPingUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayNotification.prototype.hasLastPingUpdate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LastDiscoveryUpdate last_discovery_update = 2;
 * @return {?proto.locator.GatewayNotification.LastDiscoveryUpdate}
 */
proto.locator.GatewayNotification.prototype.getLastDiscoveryUpdate = function() {
  return /** @type{?proto.locator.GatewayNotification.LastDiscoveryUpdate} */ (
    jspb.Message.getWrapperField(this, proto.locator.GatewayNotification.LastDiscoveryUpdate, 2));
};


/**
 * @param {?proto.locator.GatewayNotification.LastDiscoveryUpdate|undefined} value
 * @return {!proto.locator.GatewayNotification} returns this
*/
proto.locator.GatewayNotification.prototype.setLastDiscoveryUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.locator.GatewayNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayNotification} returns this
 */
proto.locator.GatewayNotification.prototype.clearLastDiscoveryUpdate = function() {
  return this.setLastDiscoveryUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayNotification.prototype.hasLastDiscoveryUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RequestUpdate request_update = 3;
 * @return {?proto.locator.GatewayNotification.RequestUpdate}
 */
proto.locator.GatewayNotification.prototype.getRequestUpdate = function() {
  return /** @type{?proto.locator.GatewayNotification.RequestUpdate} */ (
    jspb.Message.getWrapperField(this, proto.locator.GatewayNotification.RequestUpdate, 3));
};


/**
 * @param {?proto.locator.GatewayNotification.RequestUpdate|undefined} value
 * @return {!proto.locator.GatewayNotification} returns this
*/
proto.locator.GatewayNotification.prototype.setRequestUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.locator.GatewayNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayNotification} returns this
 */
proto.locator.GatewayNotification.prototype.clearRequestUpdate = function() {
  return this.setRequestUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayNotification.prototype.hasRequestUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.RestartGatewayAction.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.RestartGatewayAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.RestartGatewayAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.RestartGatewayAction.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.RestartGatewayAction}
 */
proto.locator.RestartGatewayAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.RestartGatewayAction;
  return proto.locator.RestartGatewayAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.RestartGatewayAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.RestartGatewayAction}
 */
proto.locator.RestartGatewayAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.RestartGatewayAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.RestartGatewayAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.RestartGatewayAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.RestartGatewayAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.ConfigureGatewayAction.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.ConfigureGatewayAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.ConfigureGatewayAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.ConfigureGatewayAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    configuration: (f = msg.getConfiguration()) && gateway_gateway_pb.GatewayParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.ConfigureGatewayAction}
 */
proto.locator.ConfigureGatewayAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.ConfigureGatewayAction;
  return proto.locator.ConfigureGatewayAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.ConfigureGatewayAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.ConfigureGatewayAction}
 */
proto.locator.ConfigureGatewayAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gateway_gateway_pb.GatewayParams;
      reader.readMessage(value,gateway_gateway_pb.GatewayParams.deserializeBinaryFromReader);
      msg.setConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.ConfigureGatewayAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.ConfigureGatewayAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.ConfigureGatewayAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.ConfigureGatewayAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      gateway_gateway_pb.GatewayParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional gateway.GatewayParams configuration = 1;
 * @return {?proto.gateway.GatewayParams}
 */
proto.locator.ConfigureGatewayAction.prototype.getConfiguration = function() {
  return /** @type{?proto.gateway.GatewayParams} */ (
    jspb.Message.getWrapperField(this, gateway_gateway_pb.GatewayParams, 1));
};


/**
 * @param {?proto.gateway.GatewayParams|undefined} value
 * @return {!proto.locator.ConfigureGatewayAction} returns this
*/
proto.locator.ConfigureGatewayAction.prototype.setConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.ConfigureGatewayAction} returns this
 */
proto.locator.ConfigureGatewayAction.prototype.clearConfiguration = function() {
  return this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.ConfigureGatewayAction.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.StartBleScan.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.StartBleScan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.StartBleScan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.StartBleScan.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.StartBleScan}
 */
proto.locator.StartBleScan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.StartBleScan;
  return proto.locator.StartBleScan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.StartBleScan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.StartBleScan}
 */
proto.locator.StartBleScan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.StartBleScan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.StartBleScan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.StartBleScan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.StartBleScan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.StopBleScan.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.StopBleScan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.StopBleScan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.StopBleScan.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.StopBleScan}
 */
proto.locator.StopBleScan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.StopBleScan;
  return proto.locator.StopBleScan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.StopBleScan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.StopBleScan}
 */
proto.locator.StopBleScan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.StopBleScan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.StopBleScan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.StopBleScan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.StopBleScan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SoftwareUpdateAction.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SoftwareUpdateAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SoftwareUpdateAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SoftwareUpdateAction.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SoftwareUpdateAction}
 */
proto.locator.SoftwareUpdateAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SoftwareUpdateAction;
  return proto.locator.SoftwareUpdateAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SoftwareUpdateAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SoftwareUpdateAction}
 */
proto.locator.SoftwareUpdateAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SoftwareUpdateAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SoftwareUpdateAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SoftwareUpdateAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SoftwareUpdateAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.PingAction.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.PingAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.PingAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.PingAction.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.PingAction}
 */
proto.locator.PingAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.PingAction;
  return proto.locator.PingAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.PingAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.PingAction}
 */
proto.locator.PingAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.PingAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.PingAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.PingAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.PingAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.locator.GatewayActionRequest.oneofGroups_ = [[4,5,6,7,8,9,10]];

/**
 * @enum {number}
 */
proto.locator.GatewayActionRequest.GatewayactionCase = {
  GATEWAYACTION_NOT_SET: 0,
  RESTART: 4,
  CONFIGURE: 5,
  START_BLE_SCAN: 6,
  STOP_BLE_SCAN: 7,
  CALIBRATE: 8,
  SOFTWAREUPDATE: 9,
  PING: 10
};

/**
 * @return {proto.locator.GatewayActionRequest.GatewayactionCase}
 */
proto.locator.GatewayActionRequest.prototype.getGatewayactionCase = function() {
  return /** @type {proto.locator.GatewayActionRequest.GatewayactionCase} */(jspb.Message.computeOneofCase(this, proto.locator.GatewayActionRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GatewayActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GatewayActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GatewayActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    serialId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxAttempts: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timeout: jspb.Message.getFieldWithDefault(msg, 3, 0),
    restart: (f = msg.getRestart()) && proto.locator.RestartGatewayAction.toObject(includeInstance, f),
    configure: (f = msg.getConfigure()) && proto.locator.ConfigureGatewayAction.toObject(includeInstance, f),
    startBleScan: (f = msg.getStartBleScan()) && proto.locator.StartBleScan.toObject(includeInstance, f),
    stopBleScan: (f = msg.getStopBleScan()) && proto.locator.StopBleScan.toObject(includeInstance, f),
    calibrate: (f = msg.getCalibrate()) && gateway_gateway_pb.GatewayCalibrateParams.toObject(includeInstance, f),
    softwareupdate: (f = msg.getSoftwareupdate()) && proto.locator.SoftwareUpdateAction.toObject(includeInstance, f),
    ping: (f = msg.getPing()) && proto.locator.PingAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GatewayActionRequest}
 */
proto.locator.GatewayActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GatewayActionRequest;
  return proto.locator.GatewayActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GatewayActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GatewayActionRequest}
 */
proto.locator.GatewayActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSerialId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxAttempts(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeout(value);
      break;
    case 4:
      var value = new proto.locator.RestartGatewayAction;
      reader.readMessage(value,proto.locator.RestartGatewayAction.deserializeBinaryFromReader);
      msg.setRestart(value);
      break;
    case 5:
      var value = new proto.locator.ConfigureGatewayAction;
      reader.readMessage(value,proto.locator.ConfigureGatewayAction.deserializeBinaryFromReader);
      msg.setConfigure(value);
      break;
    case 6:
      var value = new proto.locator.StartBleScan;
      reader.readMessage(value,proto.locator.StartBleScan.deserializeBinaryFromReader);
      msg.setStartBleScan(value);
      break;
    case 7:
      var value = new proto.locator.StopBleScan;
      reader.readMessage(value,proto.locator.StopBleScan.deserializeBinaryFromReader);
      msg.setStopBleScan(value);
      break;
    case 8:
      var value = new gateway_gateway_pb.GatewayCalibrateParams;
      reader.readMessage(value,gateway_gateway_pb.GatewayCalibrateParams.deserializeBinaryFromReader);
      msg.setCalibrate(value);
      break;
    case 9:
      var value = new proto.locator.SoftwareUpdateAction;
      reader.readMessage(value,proto.locator.SoftwareUpdateAction.deserializeBinaryFromReader);
      msg.setSoftwareupdate(value);
      break;
    case 10:
      var value = new proto.locator.PingAction;
      reader.readMessage(value,proto.locator.PingAction.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GatewayActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GatewayActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GatewayActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerialId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMaxAttempts();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getRestart();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.locator.RestartGatewayAction.serializeBinaryToWriter
    );
  }
  f = message.getConfigure();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.locator.ConfigureGatewayAction.serializeBinaryToWriter
    );
  }
  f = message.getStartBleScan();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.locator.StartBleScan.serializeBinaryToWriter
    );
  }
  f = message.getStopBleScan();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.locator.StopBleScan.serializeBinaryToWriter
    );
  }
  f = message.getCalibrate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      gateway_gateway_pb.GatewayCalibrateParams.serializeBinaryToWriter
    );
  }
  f = message.getSoftwareupdate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.locator.SoftwareUpdateAction.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.locator.PingAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 serial_id = 1;
 * @return {number}
 */
proto.locator.GatewayActionRequest.prototype.getSerialId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GatewayActionRequest} returns this
 */
proto.locator.GatewayActionRequest.prototype.setSerialId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 max_attempts = 2;
 * @return {number}
 */
proto.locator.GatewayActionRequest.prototype.getMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GatewayActionRequest} returns this
 */
proto.locator.GatewayActionRequest.prototype.setMaxAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 timeout = 3;
 * @return {number}
 */
proto.locator.GatewayActionRequest.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GatewayActionRequest} returns this
 */
proto.locator.GatewayActionRequest.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional RestartGatewayAction restart = 4;
 * @return {?proto.locator.RestartGatewayAction}
 */
proto.locator.GatewayActionRequest.prototype.getRestart = function() {
  return /** @type{?proto.locator.RestartGatewayAction} */ (
    jspb.Message.getWrapperField(this, proto.locator.RestartGatewayAction, 4));
};


/**
 * @param {?proto.locator.RestartGatewayAction|undefined} value
 * @return {!proto.locator.GatewayActionRequest} returns this
*/
proto.locator.GatewayActionRequest.prototype.setRestart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.locator.GatewayActionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayActionRequest} returns this
 */
proto.locator.GatewayActionRequest.prototype.clearRestart = function() {
  return this.setRestart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayActionRequest.prototype.hasRestart = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ConfigureGatewayAction configure = 5;
 * @return {?proto.locator.ConfigureGatewayAction}
 */
proto.locator.GatewayActionRequest.prototype.getConfigure = function() {
  return /** @type{?proto.locator.ConfigureGatewayAction} */ (
    jspb.Message.getWrapperField(this, proto.locator.ConfigureGatewayAction, 5));
};


/**
 * @param {?proto.locator.ConfigureGatewayAction|undefined} value
 * @return {!proto.locator.GatewayActionRequest} returns this
*/
proto.locator.GatewayActionRequest.prototype.setConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.locator.GatewayActionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayActionRequest} returns this
 */
proto.locator.GatewayActionRequest.prototype.clearConfigure = function() {
  return this.setConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayActionRequest.prototype.hasConfigure = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional StartBleScan start_ble_scan = 6;
 * @return {?proto.locator.StartBleScan}
 */
proto.locator.GatewayActionRequest.prototype.getStartBleScan = function() {
  return /** @type{?proto.locator.StartBleScan} */ (
    jspb.Message.getWrapperField(this, proto.locator.StartBleScan, 6));
};


/**
 * @param {?proto.locator.StartBleScan|undefined} value
 * @return {!proto.locator.GatewayActionRequest} returns this
*/
proto.locator.GatewayActionRequest.prototype.setStartBleScan = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.locator.GatewayActionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayActionRequest} returns this
 */
proto.locator.GatewayActionRequest.prototype.clearStartBleScan = function() {
  return this.setStartBleScan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayActionRequest.prototype.hasStartBleScan = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional StopBleScan stop_ble_scan = 7;
 * @return {?proto.locator.StopBleScan}
 */
proto.locator.GatewayActionRequest.prototype.getStopBleScan = function() {
  return /** @type{?proto.locator.StopBleScan} */ (
    jspb.Message.getWrapperField(this, proto.locator.StopBleScan, 7));
};


/**
 * @param {?proto.locator.StopBleScan|undefined} value
 * @return {!proto.locator.GatewayActionRequest} returns this
*/
proto.locator.GatewayActionRequest.prototype.setStopBleScan = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.locator.GatewayActionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayActionRequest} returns this
 */
proto.locator.GatewayActionRequest.prototype.clearStopBleScan = function() {
  return this.setStopBleScan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayActionRequest.prototype.hasStopBleScan = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional gateway.GatewayCalibrateParams calibrate = 8;
 * @return {?proto.gateway.GatewayCalibrateParams}
 */
proto.locator.GatewayActionRequest.prototype.getCalibrate = function() {
  return /** @type{?proto.gateway.GatewayCalibrateParams} */ (
    jspb.Message.getWrapperField(this, gateway_gateway_pb.GatewayCalibrateParams, 8));
};


/**
 * @param {?proto.gateway.GatewayCalibrateParams|undefined} value
 * @return {!proto.locator.GatewayActionRequest} returns this
*/
proto.locator.GatewayActionRequest.prototype.setCalibrate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.locator.GatewayActionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayActionRequest} returns this
 */
proto.locator.GatewayActionRequest.prototype.clearCalibrate = function() {
  return this.setCalibrate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayActionRequest.prototype.hasCalibrate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SoftwareUpdateAction softwareUpdate = 9;
 * @return {?proto.locator.SoftwareUpdateAction}
 */
proto.locator.GatewayActionRequest.prototype.getSoftwareupdate = function() {
  return /** @type{?proto.locator.SoftwareUpdateAction} */ (
    jspb.Message.getWrapperField(this, proto.locator.SoftwareUpdateAction, 9));
};


/**
 * @param {?proto.locator.SoftwareUpdateAction|undefined} value
 * @return {!proto.locator.GatewayActionRequest} returns this
*/
proto.locator.GatewayActionRequest.prototype.setSoftwareupdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.locator.GatewayActionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayActionRequest} returns this
 */
proto.locator.GatewayActionRequest.prototype.clearSoftwareupdate = function() {
  return this.setSoftwareupdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayActionRequest.prototype.hasSoftwareupdate = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PingAction ping = 10;
 * @return {?proto.locator.PingAction}
 */
proto.locator.GatewayActionRequest.prototype.getPing = function() {
  return /** @type{?proto.locator.PingAction} */ (
    jspb.Message.getWrapperField(this, proto.locator.PingAction, 10));
};


/**
 * @param {?proto.locator.PingAction|undefined} value
 * @return {!proto.locator.GatewayActionRequest} returns this
*/
proto.locator.GatewayActionRequest.prototype.setPing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.locator.GatewayActionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayActionRequest} returns this
 */
proto.locator.GatewayActionRequest.prototype.clearPing = function() {
  return this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayActionRequest.prototype.hasPing = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GatewayActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GatewayActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GatewayActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GatewayActionResponse}
 */
proto.locator.GatewayActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GatewayActionResponse;
  return proto.locator.GatewayActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GatewayActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GatewayActionResponse}
 */
proto.locator.GatewayActionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMessageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GatewayActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GatewayActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GatewayActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayActionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 message_id = 1;
 * @return {number}
 */
proto.locator.GatewayActionResponse.prototype.getMessageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GatewayActionResponse} returns this
 */
proto.locator.GatewayActionResponse.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GatewayParamsConfigDto.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GatewayParamsConfigDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GatewayParamsConfigDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayParamsConfigDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alias: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAtDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    configuration: (f = msg.getConfiguration()) && gateway_gateway_pb.GatewayParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GatewayParamsConfigDto}
 */
proto.locator.GatewayParamsConfigDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GatewayParamsConfigDto;
  return proto.locator.GatewayParamsConfigDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GatewayParamsConfigDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GatewayParamsConfigDto}
 */
proto.locator.GatewayParamsConfigDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAtDate(value);
      break;
    case 4:
      var value = new gateway_gateway_pb.GatewayParams;
      reader.readMessage(value,gateway_gateway_pb.GatewayParams.deserializeBinaryFromReader);
      msg.setConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GatewayParamsConfigDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GatewayParamsConfigDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GatewayParamsConfigDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayParamsConfigDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAtDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      gateway_gateway_pb.GatewayParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.locator.GatewayParamsConfigDto.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GatewayParamsConfigDto} returns this
 */
proto.locator.GatewayParamsConfigDto.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string alias = 2;
 * @return {string}
 */
proto.locator.GatewayParamsConfigDto.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.GatewayParamsConfigDto} returns this
 */
proto.locator.GatewayParamsConfigDto.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string created_at_date = 3;
 * @return {string}
 */
proto.locator.GatewayParamsConfigDto.prototype.getCreatedAtDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.GatewayParamsConfigDto} returns this
 */
proto.locator.GatewayParamsConfigDto.prototype.setCreatedAtDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional gateway.GatewayParams configuration = 4;
 * @return {?proto.gateway.GatewayParams}
 */
proto.locator.GatewayParamsConfigDto.prototype.getConfiguration = function() {
  return /** @type{?proto.gateway.GatewayParams} */ (
    jspb.Message.getWrapperField(this, gateway_gateway_pb.GatewayParams, 4));
};


/**
 * @param {?proto.gateway.GatewayParams|undefined} value
 * @return {!proto.locator.GatewayParamsConfigDto} returns this
*/
proto.locator.GatewayParamsConfigDto.prototype.setConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayParamsConfigDto} returns this
 */
proto.locator.GatewayParamsConfigDto.prototype.clearConfiguration = function() {
  return this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayParamsConfigDto.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GetGatewayConfigurationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GetGatewayConfigurationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GetGatewayConfigurationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewayConfigurationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    alias: jspb.Message.getFieldWithDefault(msg, 1, ""),
    configuration: (f = msg.getConfiguration()) && gateway_gateway_pb.GatewayParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GetGatewayConfigurationsRequest}
 */
proto.locator.GetGatewayConfigurationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GetGatewayConfigurationsRequest;
  return proto.locator.GetGatewayConfigurationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GetGatewayConfigurationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GetGatewayConfigurationsRequest}
 */
proto.locator.GetGatewayConfigurationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 2:
      var value = new gateway_gateway_pb.GatewayParams;
      reader.readMessage(value,gateway_gateway_pb.GatewayParams.deserializeBinaryFromReader);
      msg.setConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GetGatewayConfigurationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GetGatewayConfigurationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GetGatewayConfigurationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewayConfigurationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      gateway_gateway_pb.GatewayParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional string alias = 1;
 * @return {string}
 */
proto.locator.GetGatewayConfigurationsRequest.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.GetGatewayConfigurationsRequest} returns this
 */
proto.locator.GetGatewayConfigurationsRequest.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional gateway.GatewayParams configuration = 2;
 * @return {?proto.gateway.GatewayParams}
 */
proto.locator.GetGatewayConfigurationsRequest.prototype.getConfiguration = function() {
  return /** @type{?proto.gateway.GatewayParams} */ (
    jspb.Message.getWrapperField(this, gateway_gateway_pb.GatewayParams, 2));
};


/**
 * @param {?proto.gateway.GatewayParams|undefined} value
 * @return {!proto.locator.GetGatewayConfigurationsRequest} returns this
*/
proto.locator.GetGatewayConfigurationsRequest.prototype.setConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GetGatewayConfigurationsRequest} returns this
 */
proto.locator.GetGatewayConfigurationsRequest.prototype.clearConfiguration = function() {
  return this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GetGatewayConfigurationsRequest.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.GetGatewayConfigurationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GetGatewayConfigurationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GetGatewayConfigurationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GetGatewayConfigurationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewayConfigurationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    configurationsList: jspb.Message.toObjectList(msg.getConfigurationsList(),
    proto.locator.GatewayParamsConfigDto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GetGatewayConfigurationsResponse}
 */
proto.locator.GetGatewayConfigurationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GetGatewayConfigurationsResponse;
  return proto.locator.GetGatewayConfigurationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GetGatewayConfigurationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GetGatewayConfigurationsResponse}
 */
proto.locator.GetGatewayConfigurationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.locator.GatewayParamsConfigDto;
      reader.readMessage(value,proto.locator.GatewayParamsConfigDto.deserializeBinaryFromReader);
      msg.addConfigurations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GetGatewayConfigurationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GetGatewayConfigurationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GetGatewayConfigurationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewayConfigurationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigurationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.locator.GatewayParamsConfigDto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GatewayParamsConfigDto configurations = 1;
 * @return {!Array<!proto.locator.GatewayParamsConfigDto>}
 */
proto.locator.GetGatewayConfigurationsResponse.prototype.getConfigurationsList = function() {
  return /** @type{!Array<!proto.locator.GatewayParamsConfigDto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.locator.GatewayParamsConfigDto, 1));
};


/**
 * @param {!Array<!proto.locator.GatewayParamsConfigDto>} value
 * @return {!proto.locator.GetGatewayConfigurationsResponse} returns this
*/
proto.locator.GetGatewayConfigurationsResponse.prototype.setConfigurationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.locator.GatewayParamsConfigDto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.locator.GatewayParamsConfigDto}
 */
proto.locator.GetGatewayConfigurationsResponse.prototype.addConfigurations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.locator.GatewayParamsConfigDto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.GetGatewayConfigurationsResponse} returns this
 */
proto.locator.GetGatewayConfigurationsResponse.prototype.clearConfigurationsList = function() {
  return this.setConfigurationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SaveGatewayConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SaveGatewayConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SaveGatewayConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SaveGatewayConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    alias: jspb.Message.getFieldWithDefault(msg, 1, ""),
    configuration: (f = msg.getConfiguration()) && gateway_gateway_pb.GatewayParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SaveGatewayConfigurationRequest}
 */
proto.locator.SaveGatewayConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SaveGatewayConfigurationRequest;
  return proto.locator.SaveGatewayConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SaveGatewayConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SaveGatewayConfigurationRequest}
 */
proto.locator.SaveGatewayConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 2:
      var value = new gateway_gateway_pb.GatewayParams;
      reader.readMessage(value,gateway_gateway_pb.GatewayParams.deserializeBinaryFromReader);
      msg.setConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SaveGatewayConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SaveGatewayConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SaveGatewayConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SaveGatewayConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      gateway_gateway_pb.GatewayParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional string alias = 1;
 * @return {string}
 */
proto.locator.SaveGatewayConfigurationRequest.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SaveGatewayConfigurationRequest} returns this
 */
proto.locator.SaveGatewayConfigurationRequest.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional gateway.GatewayParams configuration = 2;
 * @return {?proto.gateway.GatewayParams}
 */
proto.locator.SaveGatewayConfigurationRequest.prototype.getConfiguration = function() {
  return /** @type{?proto.gateway.GatewayParams} */ (
    jspb.Message.getWrapperField(this, gateway_gateway_pb.GatewayParams, 2));
};


/**
 * @param {?proto.gateway.GatewayParams|undefined} value
 * @return {!proto.locator.SaveGatewayConfigurationRequest} returns this
*/
proto.locator.SaveGatewayConfigurationRequest.prototype.setConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.SaveGatewayConfigurationRequest} returns this
 */
proto.locator.SaveGatewayConfigurationRequest.prototype.clearConfiguration = function() {
  return this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.SaveGatewayConfigurationRequest.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SaveGatewayConfigurationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SaveGatewayConfigurationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SaveGatewayConfigurationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SaveGatewayConfigurationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    configuration: (f = msg.getConfiguration()) && proto.locator.GatewayParamsConfigDto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SaveGatewayConfigurationResponse}
 */
proto.locator.SaveGatewayConfigurationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SaveGatewayConfigurationResponse;
  return proto.locator.SaveGatewayConfigurationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SaveGatewayConfigurationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SaveGatewayConfigurationResponse}
 */
proto.locator.SaveGatewayConfigurationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.locator.GatewayParamsConfigDto;
      reader.readMessage(value,proto.locator.GatewayParamsConfigDto.deserializeBinaryFromReader);
      msg.setConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SaveGatewayConfigurationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SaveGatewayConfigurationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SaveGatewayConfigurationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SaveGatewayConfigurationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.locator.GatewayParamsConfigDto.serializeBinaryToWriter
    );
  }
};


/**
 * optional GatewayParamsConfigDto configuration = 1;
 * @return {?proto.locator.GatewayParamsConfigDto}
 */
proto.locator.SaveGatewayConfigurationResponse.prototype.getConfiguration = function() {
  return /** @type{?proto.locator.GatewayParamsConfigDto} */ (
    jspb.Message.getWrapperField(this, proto.locator.GatewayParamsConfigDto, 1));
};


/**
 * @param {?proto.locator.GatewayParamsConfigDto|undefined} value
 * @return {!proto.locator.SaveGatewayConfigurationResponse} returns this
*/
proto.locator.SaveGatewayConfigurationResponse.prototype.setConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.SaveGatewayConfigurationResponse} returns this
 */
proto.locator.SaveGatewayConfigurationResponse.prototype.clearConfiguration = function() {
  return this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.SaveGatewayConfigurationResponse.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.ObservationStreamRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.ObservationStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.ObservationStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.ObservationStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.ObservationStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    beaconFilterList: jspb.Message.toObjectList(msg.getBeaconFilterList(),
    domain_domain_pb.Beacon.toObject, includeInstance),
    gatewayFilterList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.ObservationStreamRequest}
 */
proto.locator.ObservationStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.ObservationStreamRequest;
  return proto.locator.ObservationStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.ObservationStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.ObservationStreamRequest}
 */
proto.locator.ObservationStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeploymentId(value);
      break;
    case 2:
      var value = new domain_domain_pb.Beacon;
      reader.readMessage(value,domain_domain_pb.Beacon.deserializeBinaryFromReader);
      msg.addBeaconFilter(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setGatewayFilterList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.ObservationStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.ObservationStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.ObservationStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.ObservationStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBeaconFilterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      domain_domain_pb.Beacon.serializeBinaryToWriter
    );
  }
  f = message.getGatewayFilterList();
  if (f.length > 0) {
    writer.writePackedUint32(
      3,
      f
    );
  }
};


/**
 * optional string deployment_id = 1;
 * @return {string}
 */
proto.locator.ObservationStreamRequest.prototype.getDeploymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.ObservationStreamRequest} returns this
 */
proto.locator.ObservationStreamRequest.prototype.setDeploymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated domain.Beacon beacon_filter = 2;
 * @return {!Array<!proto.domain.Beacon>}
 */
proto.locator.ObservationStreamRequest.prototype.getBeaconFilterList = function() {
  return /** @type{!Array<!proto.domain.Beacon>} */ (
    jspb.Message.getRepeatedWrapperField(this, domain_domain_pb.Beacon, 2));
};


/**
 * @param {!Array<!proto.domain.Beacon>} value
 * @return {!proto.locator.ObservationStreamRequest} returns this
*/
proto.locator.ObservationStreamRequest.prototype.setBeaconFilterList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.domain.Beacon=} opt_value
 * @param {number=} opt_index
 * @return {!proto.domain.Beacon}
 */
proto.locator.ObservationStreamRequest.prototype.addBeaconFilter = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.domain.Beacon, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.ObservationStreamRequest} returns this
 */
proto.locator.ObservationStreamRequest.prototype.clearBeaconFilterList = function() {
  return this.setBeaconFilterList([]);
};


/**
 * repeated uint32 gateway_filter = 3;
 * @return {!Array<number>}
 */
proto.locator.ObservationStreamRequest.prototype.getGatewayFilterList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.locator.ObservationStreamRequest} returns this
 */
proto.locator.ObservationStreamRequest.prototype.setGatewayFilterList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.locator.ObservationStreamRequest} returns this
 */
proto.locator.ObservationStreamRequest.prototype.addGatewayFilter = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.ObservationStreamRequest} returns this
 */
proto.locator.ObservationStreamRequest.prototype.clearGatewayFilterList = function() {
  return this.setGatewayFilterList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.ObservationStreamMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.ObservationStreamMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.ObservationStreamMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.ObservationStreamMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.ObservationStreamMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    observationsList: jspb.Message.toObjectList(msg.getObservationsList(),
    domain_domain_pb.ObservationDto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.ObservationStreamMessage}
 */
proto.locator.ObservationStreamMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.ObservationStreamMessage;
  return proto.locator.ObservationStreamMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.ObservationStreamMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.ObservationStreamMessage}
 */
proto.locator.ObservationStreamMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.ObservationDto;
      reader.readMessage(value,domain_domain_pb.ObservationDto.deserializeBinaryFromReader);
      msg.addObservations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.ObservationStreamMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.ObservationStreamMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.ObservationStreamMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.ObservationStreamMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObservationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      domain_domain_pb.ObservationDto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated domain.ObservationDto observations = 1;
 * @return {!Array<!proto.domain.ObservationDto>}
 */
proto.locator.ObservationStreamMessage.prototype.getObservationsList = function() {
  return /** @type{!Array<!proto.domain.ObservationDto>} */ (
    jspb.Message.getRepeatedWrapperField(this, domain_domain_pb.ObservationDto, 1));
};


/**
 * @param {!Array<!proto.domain.ObservationDto>} value
 * @return {!proto.locator.ObservationStreamMessage} returns this
*/
proto.locator.ObservationStreamMessage.prototype.setObservationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.domain.ObservationDto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.domain.ObservationDto}
 */
proto.locator.ObservationStreamMessage.prototype.addObservations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.domain.ObservationDto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.ObservationStreamMessage} returns this
 */
proto.locator.ObservationStreamMessage.prototype.clearObservationsList = function() {
  return this.setObservationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.BinaryDto.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.BinaryDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.BinaryDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.BinaryDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.BinaryDto}
 */
proto.locator.BinaryDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.BinaryDto;
  return proto.locator.BinaryDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.BinaryDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.BinaryDto}
 */
proto.locator.BinaryDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.BinaryDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.BinaryDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.BinaryDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.BinaryDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.locator.BinaryDto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.BinaryDto} returns this
 */
proto.locator.BinaryDto.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.locator.BinaryDto.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.BinaryDto} returns this
 */
proto.locator.BinaryDto.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string created_at = 3;
 * @return {string}
 */
proto.locator.BinaryDto.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.BinaryDto} returns this
 */
proto.locator.BinaryDto.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateBinaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateBinaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateBinaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateBinaryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    binaryName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    binaryFile: msg.getBinaryFile_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateBinaryRequest}
 */
proto.locator.CreateBinaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateBinaryRequest;
  return proto.locator.CreateBinaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateBinaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateBinaryRequest}
 */
proto.locator.CreateBinaryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBinaryName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBinaryFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateBinaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateBinaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateBinaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateBinaryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBinaryName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBinaryFile_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string binary_name = 1;
 * @return {string}
 */
proto.locator.CreateBinaryRequest.prototype.getBinaryName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateBinaryRequest} returns this
 */
proto.locator.CreateBinaryRequest.prototype.setBinaryName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.locator.CreateBinaryRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateBinaryRequest} returns this
 */
proto.locator.CreateBinaryRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes binary_file = 3;
 * @return {!(string|Uint8Array)}
 */
proto.locator.CreateBinaryRequest.prototype.getBinaryFile = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes binary_file = 3;
 * This is a type-conversion wrapper around `getBinaryFile()`
 * @return {string}
 */
proto.locator.CreateBinaryRequest.prototype.getBinaryFile_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBinaryFile()));
};


/**
 * optional bytes binary_file = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBinaryFile()`
 * @return {!Uint8Array}
 */
proto.locator.CreateBinaryRequest.prototype.getBinaryFile_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBinaryFile()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.locator.CreateBinaryRequest} returns this
 */
proto.locator.CreateBinaryRequest.prototype.setBinaryFile = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateBinaryReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateBinaryReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateBinaryReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateBinaryReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateBinaryReply}
 */
proto.locator.CreateBinaryReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateBinaryReply;
  return proto.locator.CreateBinaryReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateBinaryReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateBinaryReply}
 */
proto.locator.CreateBinaryReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateBinaryReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateBinaryReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateBinaryReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateBinaryReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GetBinariesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GetBinariesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GetBinariesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetBinariesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GetBinariesRequest}
 */
proto.locator.GetBinariesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GetBinariesRequest;
  return proto.locator.GetBinariesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GetBinariesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GetBinariesRequest}
 */
proto.locator.GetBinariesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GetBinariesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GetBinariesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GetBinariesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetBinariesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.GetBinariesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GetBinariesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GetBinariesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GetBinariesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetBinariesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    binaryListList: jspb.Message.toObjectList(msg.getBinaryListList(),
    proto.locator.BinaryDto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GetBinariesReply}
 */
proto.locator.GetBinariesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GetBinariesReply;
  return proto.locator.GetBinariesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GetBinariesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GetBinariesReply}
 */
proto.locator.GetBinariesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.locator.BinaryDto;
      reader.readMessage(value,proto.locator.BinaryDto.deserializeBinaryFromReader);
      msg.addBinaryList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GetBinariesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GetBinariesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GetBinariesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetBinariesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBinaryListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.locator.BinaryDto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BinaryDto binary_list = 1;
 * @return {!Array<!proto.locator.BinaryDto>}
 */
proto.locator.GetBinariesReply.prototype.getBinaryListList = function() {
  return /** @type{!Array<!proto.locator.BinaryDto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.locator.BinaryDto, 1));
};


/**
 * @param {!Array<!proto.locator.BinaryDto>} value
 * @return {!proto.locator.GetBinariesReply} returns this
*/
proto.locator.GetBinariesReply.prototype.setBinaryListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.locator.BinaryDto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.locator.BinaryDto}
 */
proto.locator.GetBinariesReply.prototype.addBinaryList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.locator.BinaryDto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.GetBinariesReply} returns this
 */
proto.locator.GetBinariesReply.prototype.clearBinaryListList = function() {
  return this.setBinaryListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetGatewayParamsConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetGatewayParamsConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetGatewayParamsConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayParamsConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    configHash: jspb.Message.getFieldWithDefault(msg, 1, 0),
    gatewayId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetGatewayParamsConfigRequest}
 */
proto.locator.SetGatewayParamsConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetGatewayParamsConfigRequest;
  return proto.locator.SetGatewayParamsConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetGatewayParamsConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetGatewayParamsConfigRequest}
 */
proto.locator.SetGatewayParamsConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfigHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGatewayId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetGatewayParamsConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetGatewayParamsConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetGatewayParamsConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayParamsConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigHash();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getGatewayId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint32 config_hash = 1;
 * @return {number}
 */
proto.locator.SetGatewayParamsConfigRequest.prototype.getConfigHash = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.SetGatewayParamsConfigRequest} returns this
 */
proto.locator.SetGatewayParamsConfigRequest.prototype.setConfigHash = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 gateway_id = 2;
 * @return {number}
 */
proto.locator.SetGatewayParamsConfigRequest.prototype.getGatewayId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.SetGatewayParamsConfigRequest} returns this
 */
proto.locator.SetGatewayParamsConfigRequest.prototype.setGatewayId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetGatewayParamsConfigReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetGatewayParamsConfigReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetGatewayParamsConfigReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayParamsConfigReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetGatewayParamsConfigReply}
 */
proto.locator.SetGatewayParamsConfigReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetGatewayParamsConfigReply;
  return proto.locator.SetGatewayParamsConfigReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetGatewayParamsConfigReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetGatewayParamsConfigReply}
 */
proto.locator.SetGatewayParamsConfigReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetGatewayParamsConfigReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetGatewayParamsConfigReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetGatewayParamsConfigReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayParamsConfigReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetGatewaySoftwareVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetGatewaySoftwareVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetGatewaySoftwareVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewaySoftwareVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    softwareVersion: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetGatewaySoftwareVersionRequest}
 */
proto.locator.SetGatewaySoftwareVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetGatewaySoftwareVersionRequest;
  return proto.locator.SetGatewaySoftwareVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetGatewaySoftwareVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetGatewaySoftwareVersionRequest}
 */
proto.locator.SetGatewaySoftwareVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGatewayId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoftwareVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetGatewaySoftwareVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetGatewaySoftwareVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetGatewaySoftwareVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewaySoftwareVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSoftwareVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 gateway_id = 1;
 * @return {number}
 */
proto.locator.SetGatewaySoftwareVersionRequest.prototype.getGatewayId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.SetGatewaySoftwareVersionRequest} returns this
 */
proto.locator.SetGatewaySoftwareVersionRequest.prototype.setGatewayId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string software_version = 2;
 * @return {string}
 */
proto.locator.SetGatewaySoftwareVersionRequest.prototype.getSoftwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SetGatewaySoftwareVersionRequest} returns this
 */
proto.locator.SetGatewaySoftwareVersionRequest.prototype.setSoftwareVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetGatewaySoftwareVersionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetGatewaySoftwareVersionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetGatewaySoftwareVersionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewaySoftwareVersionReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetGatewaySoftwareVersionReply}
 */
proto.locator.SetGatewaySoftwareVersionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetGatewaySoftwareVersionReply;
  return proto.locator.SetGatewaySoftwareVersionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetGatewaySoftwareVersionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetGatewaySoftwareVersionReply}
 */
proto.locator.SetGatewaySoftwareVersionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetGatewaySoftwareVersionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetGatewaySoftwareVersionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetGatewaySoftwareVersionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewaySoftwareVersionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.SetGatewayTagsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetGatewayTagsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetGatewayTagsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetGatewayTagsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayTagsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetGatewayTagsRequest}
 */
proto.locator.SetGatewayTagsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetGatewayTagsRequest;
  return proto.locator.SetGatewayTagsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetGatewayTagsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetGatewayTagsRequest}
 */
proto.locator.SetGatewayTagsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGatewayId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetGatewayTagsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetGatewayTagsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetGatewayTagsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayTagsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional uint64 gateway_id = 1;
 * @return {number}
 */
proto.locator.SetGatewayTagsRequest.prototype.getGatewayId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.SetGatewayTagsRequest} returns this
 */
proto.locator.SetGatewayTagsRequest.prototype.setGatewayId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string tags = 2;
 * @return {!Array<string>}
 */
proto.locator.SetGatewayTagsRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.locator.SetGatewayTagsRequest} returns this
 */
proto.locator.SetGatewayTagsRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.locator.SetGatewayTagsRequest} returns this
 */
proto.locator.SetGatewayTagsRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.SetGatewayTagsRequest} returns this
 */
proto.locator.SetGatewayTagsRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetGatewayTagsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetGatewayTagsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetGatewayTagsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayTagsReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetGatewayTagsReply}
 */
proto.locator.SetGatewayTagsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetGatewayTagsReply;
  return proto.locator.SetGatewayTagsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetGatewayTagsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetGatewayTagsReply}
 */
proto.locator.SetGatewayTagsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetGatewayTagsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetGatewayTagsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetGatewayTagsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayTagsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetGatewayPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetGatewayPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetGatewayPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayPositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    position: (f = msg.getPosition()) && domain_domain_pb.Point.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetGatewayPositionRequest}
 */
proto.locator.SetGatewayPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetGatewayPositionRequest;
  return proto.locator.SetGatewayPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetGatewayPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetGatewayPositionRequest}
 */
proto.locator.SetGatewayPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGatewayId(value);
      break;
    case 2:
      var value = new domain_domain_pb.Point;
      reader.readMessage(value,domain_domain_pb.Point.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetGatewayPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetGatewayPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetGatewayPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayPositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      domain_domain_pb.Point.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 gateway_id = 1;
 * @return {number}
 */
proto.locator.SetGatewayPositionRequest.prototype.getGatewayId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.SetGatewayPositionRequest} returns this
 */
proto.locator.SetGatewayPositionRequest.prototype.setGatewayId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional domain.Point position = 2;
 * @return {?proto.domain.Point}
 */
proto.locator.SetGatewayPositionRequest.prototype.getPosition = function() {
  return /** @type{?proto.domain.Point} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.Point, 2));
};


/**
 * @param {?proto.domain.Point|undefined} value
 * @return {!proto.locator.SetGatewayPositionRequest} returns this
*/
proto.locator.SetGatewayPositionRequest.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.SetGatewayPositionRequest} returns this
 */
proto.locator.SetGatewayPositionRequest.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.SetGatewayPositionRequest.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetGatewayPositionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetGatewayPositionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetGatewayPositionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayPositionReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetGatewayPositionReply}
 */
proto.locator.SetGatewayPositionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetGatewayPositionReply;
  return proto.locator.SetGatewayPositionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetGatewayPositionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetGatewayPositionReply}
 */
proto.locator.SetGatewayPositionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetGatewayPositionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetGatewayPositionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetGatewayPositionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetGatewayPositionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GatewayLogDto.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GatewayLogDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GatewayLogDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayLogDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gatewayId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gatewayTick: jspb.Message.getFieldWithDefault(msg, 3, 0),
    namespace: jspb.Message.getFieldWithDefault(msg, 4, ""),
    message: jspb.Message.getFieldWithDefault(msg, 5, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 6, ""),
    severity: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GatewayLogDto}
 */
proto.locator.GatewayLogDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GatewayLogDto;
  return proto.locator.GatewayLogDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GatewayLogDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GatewayLogDto}
 */
proto.locator.GatewayLogDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGatewayId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGatewayTick(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeverity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GatewayLogDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GatewayLogDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GatewayLogDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayLogDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGatewayId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getGatewayTick();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSeverity();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.locator.GatewayLogDto.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.GatewayLogDto} returns this
 */
proto.locator.GatewayLogDto.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 gateway_id = 2;
 * @return {number}
 */
proto.locator.GatewayLogDto.prototype.getGatewayId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GatewayLogDto} returns this
 */
proto.locator.GatewayLogDto.prototype.setGatewayId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 gateway_tick = 3;
 * @return {number}
 */
proto.locator.GatewayLogDto.prototype.getGatewayTick = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GatewayLogDto} returns this
 */
proto.locator.GatewayLogDto.prototype.setGatewayTick = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string namespace = 4;
 * @return {string}
 */
proto.locator.GatewayLogDto.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.GatewayLogDto} returns this
 */
proto.locator.GatewayLogDto.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.locator.GatewayLogDto.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.GatewayLogDto} returns this
 */
proto.locator.GatewayLogDto.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string timestamp = 6;
 * @return {string}
 */
proto.locator.GatewayLogDto.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.GatewayLogDto} returns this
 */
proto.locator.GatewayLogDto.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string severity = 7;
 * @return {string}
 */
proto.locator.GatewayLogDto.prototype.getSeverity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.GatewayLogDto} returns this
 */
proto.locator.GatewayLogDto.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GetGatewayLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GetGatewayLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GetGatewayLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewayLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timestampCursor: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GetGatewayLogsRequest}
 */
proto.locator.GetGatewayLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GetGatewayLogsRequest;
  return proto.locator.GetGatewayLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GetGatewayLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GetGatewayLogsRequest}
 */
proto.locator.GetGatewayLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGatewayId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestampCursor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GetGatewayLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GetGatewayLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GetGatewayLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewayLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTimestampCursor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.locator.GetGatewayLogsRequest.Direction = {
  BEFORE: 0,
  AFTER: 1
};

/**
 * optional uint64 gateway_id = 1;
 * @return {number}
 */
proto.locator.GetGatewayLogsRequest.prototype.getGatewayId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GetGatewayLogsRequest} returns this
 */
proto.locator.GetGatewayLogsRequest.prototype.setGatewayId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 limit = 3;
 * @return {number}
 */
proto.locator.GetGatewayLogsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GetGatewayLogsRequest} returns this
 */
proto.locator.GetGatewayLogsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string timestamp_cursor = 4;
 * @return {string}
 */
proto.locator.GetGatewayLogsRequest.prototype.getTimestampCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.GetGatewayLogsRequest} returns this
 */
proto.locator.GetGatewayLogsRequest.prototype.setTimestampCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.GetGatewayLogsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GetGatewayLogsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GetGatewayLogsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GetGatewayLogsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewayLogsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayLogsList: jspb.Message.toObjectList(msg.getGatewayLogsList(),
    proto.locator.GatewayLogDto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GetGatewayLogsReply}
 */
proto.locator.GetGatewayLogsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GetGatewayLogsReply;
  return proto.locator.GetGatewayLogsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GetGatewayLogsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GetGatewayLogsReply}
 */
proto.locator.GetGatewayLogsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.locator.GatewayLogDto;
      reader.readMessage(value,proto.locator.GatewayLogDto.deserializeBinaryFromReader);
      msg.addGatewayLogs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GetGatewayLogsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GetGatewayLogsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GetGatewayLogsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetGatewayLogsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.locator.GatewayLogDto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GatewayLogDto gateway_logs = 1;
 * @return {!Array<!proto.locator.GatewayLogDto>}
 */
proto.locator.GetGatewayLogsReply.prototype.getGatewayLogsList = function() {
  return /** @type{!Array<!proto.locator.GatewayLogDto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.locator.GatewayLogDto, 1));
};


/**
 * @param {!Array<!proto.locator.GatewayLogDto>} value
 * @return {!proto.locator.GetGatewayLogsReply} returns this
*/
proto.locator.GetGatewayLogsReply.prototype.setGatewayLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.locator.GatewayLogDto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.locator.GatewayLogDto}
 */
proto.locator.GetGatewayLogsReply.prototype.addGatewayLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.locator.GatewayLogDto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.GetGatewayLogsReply} returns this
 */
proto.locator.GetGatewayLogsReply.prototype.clearGatewayLogsList = function() {
  return this.setGatewayLogsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GatewayLogStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GatewayLogStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GatewayLogStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayLogStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GatewayLogStreamRequest}
 */
proto.locator.GatewayLogStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GatewayLogStreamRequest;
  return proto.locator.GatewayLogStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GatewayLogStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GatewayLogStreamRequest}
 */
proto.locator.GatewayLogStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGatewayId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GatewayLogStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GatewayLogStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GatewayLogStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayLogStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 gateway_id = 1;
 * @return {number}
 */
proto.locator.GatewayLogStreamRequest.prototype.getGatewayId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.GatewayLogStreamRequest} returns this
 */
proto.locator.GatewayLogStreamRequest.prototype.setGatewayId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GatewayLogStreamReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GatewayLogStreamReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GatewayLogStreamReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayLogStreamReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayLog: (f = msg.getGatewayLog()) && proto.locator.GatewayLogDto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GatewayLogStreamReply}
 */
proto.locator.GatewayLogStreamReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GatewayLogStreamReply;
  return proto.locator.GatewayLogStreamReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GatewayLogStreamReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GatewayLogStreamReply}
 */
proto.locator.GatewayLogStreamReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.locator.GatewayLogDto;
      reader.readMessage(value,proto.locator.GatewayLogDto.deserializeBinaryFromReader);
      msg.setGatewayLog(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GatewayLogStreamReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GatewayLogStreamReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GatewayLogStreamReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GatewayLogStreamReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatewayLog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.locator.GatewayLogDto.serializeBinaryToWriter
    );
  }
};


/**
 * optional GatewayLogDto gateway_log = 1;
 * @return {?proto.locator.GatewayLogDto}
 */
proto.locator.GatewayLogStreamReply.prototype.getGatewayLog = function() {
  return /** @type{?proto.locator.GatewayLogDto} */ (
    jspb.Message.getWrapperField(this, proto.locator.GatewayLogDto, 1));
};


/**
 * @param {?proto.locator.GatewayLogDto|undefined} value
 * @return {!proto.locator.GatewayLogStreamReply} returns this
*/
proto.locator.GatewayLogStreamReply.prototype.setGatewayLog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.GatewayLogStreamReply} returns this
 */
proto.locator.GatewayLogStreamReply.prototype.clearGatewayLog = function() {
  return this.setGatewayLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.GatewayLogStreamReply.prototype.hasGatewayLog = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetDeploymentMapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetDeploymentMapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetDeploymentMapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentMapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    map: (f = msg.getMap()) && domain_domain_pb.DeploymentDto.Map.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetDeploymentMapRequest}
 */
proto.locator.SetDeploymentMapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetDeploymentMapRequest;
  return proto.locator.SetDeploymentMapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetDeploymentMapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetDeploymentMapRequest}
 */
proto.locator.SetDeploymentMapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeploymentid(value);
      break;
    case 2:
      var value = new domain_domain_pb.DeploymentDto.Map;
      reader.readMessage(value,domain_domain_pb.DeploymentDto.Map.deserializeBinaryFromReader);
      msg.setMap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetDeploymentMapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetDeploymentMapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetDeploymentMapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentMapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      domain_domain_pb.DeploymentDto.Map.serializeBinaryToWriter
    );
  }
};


/**
 * optional string deploymentId = 1;
 * @return {string}
 */
proto.locator.SetDeploymentMapRequest.prototype.getDeploymentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SetDeploymentMapRequest} returns this
 */
proto.locator.SetDeploymentMapRequest.prototype.setDeploymentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional domain.DeploymentDto.Map map = 2;
 * @return {?proto.domain.DeploymentDto.Map}
 */
proto.locator.SetDeploymentMapRequest.prototype.getMap = function() {
  return /** @type{?proto.domain.DeploymentDto.Map} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.DeploymentDto.Map, 2));
};


/**
 * @param {?proto.domain.DeploymentDto.Map|undefined} value
 * @return {!proto.locator.SetDeploymentMapRequest} returns this
*/
proto.locator.SetDeploymentMapRequest.prototype.setMap = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.SetDeploymentMapRequest} returns this
 */
proto.locator.SetDeploymentMapRequest.prototype.clearMap = function() {
  return this.setMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.SetDeploymentMapRequest.prototype.hasMap = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetDeploymentMapReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetDeploymentMapReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetDeploymentMapReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentMapReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    deployment: (f = msg.getDeployment()) && domain_domain_pb.DeploymentDto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetDeploymentMapReply}
 */
proto.locator.SetDeploymentMapReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetDeploymentMapReply;
  return proto.locator.SetDeploymentMapReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetDeploymentMapReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetDeploymentMapReply}
 */
proto.locator.SetDeploymentMapReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.DeploymentDto;
      reader.readMessage(value,domain_domain_pb.DeploymentDto.deserializeBinaryFromReader);
      msg.setDeployment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetDeploymentMapReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetDeploymentMapReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetDeploymentMapReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentMapReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeployment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      domain_domain_pb.DeploymentDto.serializeBinaryToWriter
    );
  }
};


/**
 * optional domain.DeploymentDto deployment = 1;
 * @return {?proto.domain.DeploymentDto}
 */
proto.locator.SetDeploymentMapReply.prototype.getDeployment = function() {
  return /** @type{?proto.domain.DeploymentDto} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.DeploymentDto, 1));
};


/**
 * @param {?proto.domain.DeploymentDto|undefined} value
 * @return {!proto.locator.SetDeploymentMapReply} returns this
*/
proto.locator.SetDeploymentMapReply.prototype.setDeployment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.SetDeploymentMapReply} returns this
 */
proto.locator.SetDeploymentMapReply.prototype.clearDeployment = function() {
  return this.setDeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.SetDeploymentMapReply.prototype.hasDeployment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateDeploymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateDeploymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateDeploymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateDeploymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateDeploymentRequest}
 */
proto.locator.CreateDeploymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateDeploymentRequest;
  return proto.locator.CreateDeploymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateDeploymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateDeploymentRequest}
 */
proto.locator.CreateDeploymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateDeploymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateDeploymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateDeploymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateDeploymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.locator.CreateDeploymentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateDeploymentRequest} returns this
 */
proto.locator.CreateDeploymentRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar = 2;
 * @return {string}
 */
proto.locator.CreateDeploymentRequest.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateDeploymentRequest} returns this
 */
proto.locator.CreateDeploymentRequest.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateDeploymentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateDeploymentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateDeploymentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateDeploymentReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    deployment: (f = msg.getDeployment()) && domain_domain_pb.DeploymentDto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateDeploymentReply}
 */
proto.locator.CreateDeploymentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateDeploymentReply;
  return proto.locator.CreateDeploymentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateDeploymentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateDeploymentReply}
 */
proto.locator.CreateDeploymentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.DeploymentDto;
      reader.readMessage(value,domain_domain_pb.DeploymentDto.deserializeBinaryFromReader);
      msg.setDeployment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateDeploymentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateDeploymentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateDeploymentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateDeploymentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeployment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      domain_domain_pb.DeploymentDto.serializeBinaryToWriter
    );
  }
};


/**
 * optional domain.DeploymentDto deployment = 1;
 * @return {?proto.domain.DeploymentDto}
 */
proto.locator.CreateDeploymentReply.prototype.getDeployment = function() {
  return /** @type{?proto.domain.DeploymentDto} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.DeploymentDto, 1));
};


/**
 * @param {?proto.domain.DeploymentDto|undefined} value
 * @return {!proto.locator.CreateDeploymentReply} returns this
*/
proto.locator.CreateDeploymentReply.prototype.setDeployment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.CreateDeploymentReply} returns this
 */
proto.locator.CreateDeploymentReply.prototype.clearDeployment = function() {
  return this.setDeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.CreateDeploymentReply.prototype.hasDeployment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GetDeploymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GetDeploymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GetDeploymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetDeploymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GetDeploymentsRequest}
 */
proto.locator.GetDeploymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GetDeploymentsRequest;
  return proto.locator.GetDeploymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GetDeploymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GetDeploymentsRequest}
 */
proto.locator.GetDeploymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GetDeploymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GetDeploymentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GetDeploymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetDeploymentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.GetDeploymentsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.GetDeploymentsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.GetDeploymentsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.GetDeploymentsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetDeploymentsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentsList: jspb.Message.toObjectList(msg.getDeploymentsList(),
    domain_domain_pb.DeploymentDto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.GetDeploymentsReply}
 */
proto.locator.GetDeploymentsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.GetDeploymentsReply;
  return proto.locator.GetDeploymentsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.GetDeploymentsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.GetDeploymentsReply}
 */
proto.locator.GetDeploymentsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.DeploymentDto;
      reader.readMessage(value,domain_domain_pb.DeploymentDto.deserializeBinaryFromReader);
      msg.addDeployments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.GetDeploymentsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.GetDeploymentsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.GetDeploymentsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.GetDeploymentsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      domain_domain_pb.DeploymentDto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated domain.DeploymentDto deployments = 1;
 * @return {!Array<!proto.domain.DeploymentDto>}
 */
proto.locator.GetDeploymentsReply.prototype.getDeploymentsList = function() {
  return /** @type{!Array<!proto.domain.DeploymentDto>} */ (
    jspb.Message.getRepeatedWrapperField(this, domain_domain_pb.DeploymentDto, 1));
};


/**
 * @param {!Array<!proto.domain.DeploymentDto>} value
 * @return {!proto.locator.GetDeploymentsReply} returns this
*/
proto.locator.GetDeploymentsReply.prototype.setDeploymentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.domain.DeploymentDto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.domain.DeploymentDto}
 */
proto.locator.GetDeploymentsReply.prototype.addDeployments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.domain.DeploymentDto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.GetDeploymentsReply} returns this
 */
proto.locator.GetDeploymentsReply.prototype.clearDeploymentsList = function() {
  return this.setDeploymentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetDeploymentConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetDeploymentConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetDeploymentConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && domain_domain_pb.DeploymentDto.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetDeploymentConfigRequest}
 */
proto.locator.SetDeploymentConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetDeploymentConfigRequest;
  return proto.locator.SetDeploymentConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetDeploymentConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetDeploymentConfigRequest}
 */
proto.locator.SetDeploymentConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeploymentId(value);
      break;
    case 2:
      var value = new domain_domain_pb.DeploymentDto.Config;
      reader.readMessage(value,domain_domain_pb.DeploymentDto.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetDeploymentConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetDeploymentConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetDeploymentConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      domain_domain_pb.DeploymentDto.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional string deployment_id = 1;
 * @return {string}
 */
proto.locator.SetDeploymentConfigRequest.prototype.getDeploymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SetDeploymentConfigRequest} returns this
 */
proto.locator.SetDeploymentConfigRequest.prototype.setDeploymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional domain.DeploymentDto.Config config = 2;
 * @return {?proto.domain.DeploymentDto.Config}
 */
proto.locator.SetDeploymentConfigRequest.prototype.getConfig = function() {
  return /** @type{?proto.domain.DeploymentDto.Config} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.DeploymentDto.Config, 2));
};


/**
 * @param {?proto.domain.DeploymentDto.Config|undefined} value
 * @return {!proto.locator.SetDeploymentConfigRequest} returns this
*/
proto.locator.SetDeploymentConfigRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.SetDeploymentConfigRequest} returns this
 */
proto.locator.SetDeploymentConfigRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.SetDeploymentConfigRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetDeploymentConfigReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetDeploymentConfigReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetDeploymentConfigReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentConfigReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    deployment: (f = msg.getDeployment()) && domain_domain_pb.DeploymentDto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetDeploymentConfigReply}
 */
proto.locator.SetDeploymentConfigReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetDeploymentConfigReply;
  return proto.locator.SetDeploymentConfigReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetDeploymentConfigReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetDeploymentConfigReply}
 */
proto.locator.SetDeploymentConfigReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.DeploymentDto;
      reader.readMessage(value,domain_domain_pb.DeploymentDto.deserializeBinaryFromReader);
      msg.setDeployment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetDeploymentConfigReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetDeploymentConfigReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetDeploymentConfigReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentConfigReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeployment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      domain_domain_pb.DeploymentDto.serializeBinaryToWriter
    );
  }
};


/**
 * optional domain.DeploymentDto deployment = 1;
 * @return {?proto.domain.DeploymentDto}
 */
proto.locator.SetDeploymentConfigReply.prototype.getDeployment = function() {
  return /** @type{?proto.domain.DeploymentDto} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.DeploymentDto, 1));
};


/**
 * @param {?proto.domain.DeploymentDto|undefined} value
 * @return {!proto.locator.SetDeploymentConfigReply} returns this
*/
proto.locator.SetDeploymentConfigReply.prototype.setDeployment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.SetDeploymentConfigReply} returns this
 */
proto.locator.SetDeploymentConfigReply.prototype.clearDeployment = function() {
  return this.setDeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.SetDeploymentConfigReply.prototype.hasDeployment = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.SetDeploymentGatewaysRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetDeploymentGatewaysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetDeploymentGatewaysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetDeploymentGatewaysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentGatewaysRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gatewaysList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetDeploymentGatewaysRequest}
 */
proto.locator.SetDeploymentGatewaysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetDeploymentGatewaysRequest;
  return proto.locator.SetDeploymentGatewaysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetDeploymentGatewaysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetDeploymentGatewaysRequest}
 */
proto.locator.SetDeploymentGatewaysRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeploymentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addGateways(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetDeploymentGatewaysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetDeploymentGatewaysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetDeploymentGatewaysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentGatewaysRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGatewaysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string deployment_id = 1;
 * @return {string}
 */
proto.locator.SetDeploymentGatewaysRequest.prototype.getDeploymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SetDeploymentGatewaysRequest} returns this
 */
proto.locator.SetDeploymentGatewaysRequest.prototype.setDeploymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string gateways = 2;
 * @return {!Array<string>}
 */
proto.locator.SetDeploymentGatewaysRequest.prototype.getGatewaysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.locator.SetDeploymentGatewaysRequest} returns this
 */
proto.locator.SetDeploymentGatewaysRequest.prototype.setGatewaysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.locator.SetDeploymentGatewaysRequest} returns this
 */
proto.locator.SetDeploymentGatewaysRequest.prototype.addGateways = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.SetDeploymentGatewaysRequest} returns this
 */
proto.locator.SetDeploymentGatewaysRequest.prototype.clearGatewaysList = function() {
  return this.setGatewaysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetDeploymentGatewaysReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetDeploymentGatewaysReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetDeploymentGatewaysReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentGatewaysReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    deployment: (f = msg.getDeployment()) && domain_domain_pb.DeploymentDto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetDeploymentGatewaysReply}
 */
proto.locator.SetDeploymentGatewaysReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetDeploymentGatewaysReply;
  return proto.locator.SetDeploymentGatewaysReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetDeploymentGatewaysReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetDeploymentGatewaysReply}
 */
proto.locator.SetDeploymentGatewaysReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.DeploymentDto;
      reader.readMessage(value,domain_domain_pb.DeploymentDto.deserializeBinaryFromReader);
      msg.setDeployment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetDeploymentGatewaysReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetDeploymentGatewaysReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetDeploymentGatewaysReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentGatewaysReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeployment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      domain_domain_pb.DeploymentDto.serializeBinaryToWriter
    );
  }
};


/**
 * optional domain.DeploymentDto deployment = 1;
 * @return {?proto.domain.DeploymentDto}
 */
proto.locator.SetDeploymentGatewaysReply.prototype.getDeployment = function() {
  return /** @type{?proto.domain.DeploymentDto} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.DeploymentDto, 1));
};


/**
 * @param {?proto.domain.DeploymentDto|undefined} value
 * @return {!proto.locator.SetDeploymentGatewaysReply} returns this
*/
proto.locator.SetDeploymentGatewaysReply.prototype.setDeployment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.SetDeploymentGatewaysReply} returns this
 */
proto.locator.SetDeploymentGatewaysReply.prototype.clearDeployment = function() {
  return this.setDeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.SetDeploymentGatewaysReply.prototype.hasDeployment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateDeploymentApiKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateDeploymentApiKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateDeploymentApiKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateDeploymentApiKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateDeploymentApiKeyRequest}
 */
proto.locator.CreateDeploymentApiKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateDeploymentApiKeyRequest;
  return proto.locator.CreateDeploymentApiKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateDeploymentApiKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateDeploymentApiKeyRequest}
 */
proto.locator.CreateDeploymentApiKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeploymentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateDeploymentApiKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateDeploymentApiKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateDeploymentApiKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateDeploymentApiKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string deployment_id = 1;
 * @return {string}
 */
proto.locator.CreateDeploymentApiKeyRequest.prototype.getDeploymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateDeploymentApiKeyRequest} returns this
 */
proto.locator.CreateDeploymentApiKeyRequest.prototype.setDeploymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.locator.CreateDeploymentApiKeyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateDeploymentApiKeyRequest} returns this
 */
proto.locator.CreateDeploymentApiKeyRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateDeploymentApiKeyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateDeploymentApiKeyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateDeploymentApiKeyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateDeploymentApiKeyReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    apiKey: (f = msg.getApiKey()) && domain_domain_pb.DeploymentDto.ApiKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateDeploymentApiKeyReply}
 */
proto.locator.CreateDeploymentApiKeyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateDeploymentApiKeyReply;
  return proto.locator.CreateDeploymentApiKeyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateDeploymentApiKeyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateDeploymentApiKeyReply}
 */
proto.locator.CreateDeploymentApiKeyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.DeploymentDto.ApiKey;
      reader.readMessage(value,domain_domain_pb.DeploymentDto.ApiKey.deserializeBinaryFromReader);
      msg.setApiKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateDeploymentApiKeyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateDeploymentApiKeyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateDeploymentApiKeyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateDeploymentApiKeyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      domain_domain_pb.DeploymentDto.ApiKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional domain.DeploymentDto.ApiKey api_key = 1;
 * @return {?proto.domain.DeploymentDto.ApiKey}
 */
proto.locator.CreateDeploymentApiKeyReply.prototype.getApiKey = function() {
  return /** @type{?proto.domain.DeploymentDto.ApiKey} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.DeploymentDto.ApiKey, 1));
};


/**
 * @param {?proto.domain.DeploymentDto.ApiKey|undefined} value
 * @return {!proto.locator.CreateDeploymentApiKeyReply} returns this
*/
proto.locator.CreateDeploymentApiKeyReply.prototype.setApiKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.CreateDeploymentApiKeyReply} returns this
 */
proto.locator.CreateDeploymentApiKeyReply.prototype.clearApiKey = function() {
  return this.setApiKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.CreateDeploymentApiKeyReply.prototype.hasApiKey = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.DeleteDeploymentApiKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.DeleteDeploymentApiKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.DeleteDeploymentApiKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.DeleteDeploymentApiKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apiKeyId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.DeleteDeploymentApiKeyRequest}
 */
proto.locator.DeleteDeploymentApiKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.DeleteDeploymentApiKeyRequest;
  return proto.locator.DeleteDeploymentApiKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.DeleteDeploymentApiKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.DeleteDeploymentApiKeyRequest}
 */
proto.locator.DeleteDeploymentApiKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeploymentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKeyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.DeleteDeploymentApiKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.DeleteDeploymentApiKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.DeleteDeploymentApiKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.DeleteDeploymentApiKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApiKeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string deployment_id = 1;
 * @return {string}
 */
proto.locator.DeleteDeploymentApiKeyRequest.prototype.getDeploymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.DeleteDeploymentApiKeyRequest} returns this
 */
proto.locator.DeleteDeploymentApiKeyRequest.prototype.setDeploymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string api_key_id = 2;
 * @return {string}
 */
proto.locator.DeleteDeploymentApiKeyRequest.prototype.getApiKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.DeleteDeploymentApiKeyRequest} returns this
 */
proto.locator.DeleteDeploymentApiKeyRequest.prototype.setApiKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.DeleteDeploymentApiKeyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.DeleteDeploymentApiKeyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.DeleteDeploymentApiKeyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.DeleteDeploymentApiKeyReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.DeleteDeploymentApiKeyReply}
 */
proto.locator.DeleteDeploymentApiKeyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.DeleteDeploymentApiKeyReply;
  return proto.locator.DeleteDeploymentApiKeyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.DeleteDeploymentApiKeyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.DeleteDeploymentApiKeyReply}
 */
proto.locator.DeleteDeploymentApiKeyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.DeleteDeploymentApiKeyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.DeleteDeploymentApiKeyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.DeleteDeploymentApiKeyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.DeleteDeploymentApiKeyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.RegenerateDeploymentApiKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.RegenerateDeploymentApiKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.RegenerateDeploymentApiKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.RegenerateDeploymentApiKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apiKeyId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.RegenerateDeploymentApiKeyRequest}
 */
proto.locator.RegenerateDeploymentApiKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.RegenerateDeploymentApiKeyRequest;
  return proto.locator.RegenerateDeploymentApiKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.RegenerateDeploymentApiKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.RegenerateDeploymentApiKeyRequest}
 */
proto.locator.RegenerateDeploymentApiKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeploymentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKeyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.RegenerateDeploymentApiKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.RegenerateDeploymentApiKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.RegenerateDeploymentApiKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.RegenerateDeploymentApiKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApiKeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string deployment_id = 1;
 * @return {string}
 */
proto.locator.RegenerateDeploymentApiKeyRequest.prototype.getDeploymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.RegenerateDeploymentApiKeyRequest} returns this
 */
proto.locator.RegenerateDeploymentApiKeyRequest.prototype.setDeploymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string api_key_id = 2;
 * @return {string}
 */
proto.locator.RegenerateDeploymentApiKeyRequest.prototype.getApiKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.RegenerateDeploymentApiKeyRequest} returns this
 */
proto.locator.RegenerateDeploymentApiKeyRequest.prototype.setApiKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.RegenerateDeploymentApiKeyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.RegenerateDeploymentApiKeyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.RegenerateDeploymentApiKeyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.RegenerateDeploymentApiKeyReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    accessKey: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.RegenerateDeploymentApiKeyReply}
 */
proto.locator.RegenerateDeploymentApiKeyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.RegenerateDeploymentApiKeyReply;
  return proto.locator.RegenerateDeploymentApiKeyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.RegenerateDeploymentApiKeyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.RegenerateDeploymentApiKeyReply}
 */
proto.locator.RegenerateDeploymentApiKeyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.RegenerateDeploymentApiKeyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.RegenerateDeploymentApiKeyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.RegenerateDeploymentApiKeyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.RegenerateDeploymentApiKeyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccessKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string access_key = 1;
 * @return {string}
 */
proto.locator.RegenerateDeploymentApiKeyReply.prototype.getAccessKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.RegenerateDeploymentApiKeyReply} returns this
 */
proto.locator.RegenerateDeploymentApiKeyReply.prototype.setAccessKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.BeaconPositionStreamRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.BeaconPositionStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.BeaconPositionStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.BeaconPositionStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.BeaconPositionStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    beaconFilterList: jspb.Message.toObjectList(msg.getBeaconFilterList(),
    domain_domain_pb.Beacon.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.BeaconPositionStreamRequest}
 */
proto.locator.BeaconPositionStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.BeaconPositionStreamRequest;
  return proto.locator.BeaconPositionStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.BeaconPositionStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.BeaconPositionStreamRequest}
 */
proto.locator.BeaconPositionStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeploymentId(value);
      break;
    case 2:
      var value = new domain_domain_pb.Beacon;
      reader.readMessage(value,domain_domain_pb.Beacon.deserializeBinaryFromReader);
      msg.addBeaconFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.BeaconPositionStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.BeaconPositionStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.BeaconPositionStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.BeaconPositionStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBeaconFilterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      domain_domain_pb.Beacon.serializeBinaryToWriter
    );
  }
};


/**
 * optional string deployment_id = 1;
 * @return {string}
 */
proto.locator.BeaconPositionStreamRequest.prototype.getDeploymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.BeaconPositionStreamRequest} returns this
 */
proto.locator.BeaconPositionStreamRequest.prototype.setDeploymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated domain.Beacon beacon_filter = 2;
 * @return {!Array<!proto.domain.Beacon>}
 */
proto.locator.BeaconPositionStreamRequest.prototype.getBeaconFilterList = function() {
  return /** @type{!Array<!proto.domain.Beacon>} */ (
    jspb.Message.getRepeatedWrapperField(this, domain_domain_pb.Beacon, 2));
};


/**
 * @param {!Array<!proto.domain.Beacon>} value
 * @return {!proto.locator.BeaconPositionStreamRequest} returns this
*/
proto.locator.BeaconPositionStreamRequest.prototype.setBeaconFilterList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.domain.Beacon=} opt_value
 * @param {number=} opt_index
 * @return {!proto.domain.Beacon}
 */
proto.locator.BeaconPositionStreamRequest.prototype.addBeaconFilter = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.domain.Beacon, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.BeaconPositionStreamRequest} returns this
 */
proto.locator.BeaconPositionStreamRequest.prototype.clearBeaconFilterList = function() {
  return this.setBeaconFilterList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.BeaconPositionStreamMessage.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.BeaconPositionStreamMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.BeaconPositionStreamMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.BeaconPositionStreamMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.BeaconPositionStreamMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionsList: jspb.Message.toObjectList(msg.getPositionsList(),
    domain_domain_pb.BeaconPosition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.BeaconPositionStreamMessage}
 */
proto.locator.BeaconPositionStreamMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.BeaconPositionStreamMessage;
  return proto.locator.BeaconPositionStreamMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.BeaconPositionStreamMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.BeaconPositionStreamMessage}
 */
proto.locator.BeaconPositionStreamMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new domain_domain_pb.BeaconPosition;
      reader.readMessage(value,domain_domain_pb.BeaconPosition.deserializeBinaryFromReader);
      msg.addPositions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.BeaconPositionStreamMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.BeaconPositionStreamMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.BeaconPositionStreamMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.BeaconPositionStreamMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      domain_domain_pb.BeaconPosition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated domain.BeaconPosition positions = 3;
 * @return {!Array<!proto.domain.BeaconPosition>}
 */
proto.locator.BeaconPositionStreamMessage.prototype.getPositionsList = function() {
  return /** @type{!Array<!proto.domain.BeaconPosition>} */ (
    jspb.Message.getRepeatedWrapperField(this, domain_domain_pb.BeaconPosition, 3));
};


/**
 * @param {!Array<!proto.domain.BeaconPosition>} value
 * @return {!proto.locator.BeaconPositionStreamMessage} returns this
*/
proto.locator.BeaconPositionStreamMessage.prototype.setPositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.domain.BeaconPosition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.domain.BeaconPosition}
 */
proto.locator.BeaconPositionStreamMessage.prototype.addPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.domain.BeaconPosition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.BeaconPositionStreamMessage} returns this
 */
proto.locator.BeaconPositionStreamMessage.prototype.clearPositionsList = function() {
  return this.setPositionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.PipelineLifecycleEventStreamRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.PipelineLifecycleEventStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.PipelineLifecycleEventStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.PipelineLifecycleEventStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.PipelineLifecycleEventStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.PipelineLifecycleEventStreamRequest}
 */
proto.locator.PipelineLifecycleEventStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.PipelineLifecycleEventStreamRequest;
  return proto.locator.PipelineLifecycleEventStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.PipelineLifecycleEventStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.PipelineLifecycleEventStreamRequest}
 */
proto.locator.PipelineLifecycleEventStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeploymentIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.PipelineLifecycleEventStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.PipelineLifecycleEventStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.PipelineLifecycleEventStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.PipelineLifecycleEventStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string deployment_ids = 1;
 * @return {!Array<string>}
 */
proto.locator.PipelineLifecycleEventStreamRequest.prototype.getDeploymentIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.locator.PipelineLifecycleEventStreamRequest} returns this
 */
proto.locator.PipelineLifecycleEventStreamRequest.prototype.setDeploymentIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.locator.PipelineLifecycleEventStreamRequest} returns this
 */
proto.locator.PipelineLifecycleEventStreamRequest.prototype.addDeploymentIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.PipelineLifecycleEventStreamRequest} returns this
 */
proto.locator.PipelineLifecycleEventStreamRequest.prototype.clearDeploymentIdsList = function() {
  return this.setDeploymentIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.PipelineLifecycleEventMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.PipelineLifecycleEventMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.PipelineLifecycleEventMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.PipelineLifecycleEventMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.PipelineLifecycleEventMessage}
 */
proto.locator.PipelineLifecycleEventMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.PipelineLifecycleEventMessage;
  return proto.locator.PipelineLifecycleEventMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.PipelineLifecycleEventMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.PipelineLifecycleEventMessage}
 */
proto.locator.PipelineLifecycleEventMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeploymentId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.PipelineLifecycleEventMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.PipelineLifecycleEventMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.PipelineLifecycleEventMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.PipelineLifecycleEventMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string deployment_id = 1;
 * @return {string}
 */
proto.locator.PipelineLifecycleEventMessage.prototype.getDeploymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.PipelineLifecycleEventMessage} returns this
 */
proto.locator.PipelineLifecycleEventMessage.prototype.setDeploymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetDeploymentBeaconMajorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetDeploymentBeaconMajorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetDeploymentBeaconMajorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentBeaconMajorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    beaconMajor: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetDeploymentBeaconMajorRequest}
 */
proto.locator.SetDeploymentBeaconMajorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetDeploymentBeaconMajorRequest;
  return proto.locator.SetDeploymentBeaconMajorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetDeploymentBeaconMajorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetDeploymentBeaconMajorRequest}
 */
proto.locator.SetDeploymentBeaconMajorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeploymentId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBeaconMajor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetDeploymentBeaconMajorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetDeploymentBeaconMajorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetDeploymentBeaconMajorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentBeaconMajorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBeaconMajor();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string deployment_id = 1;
 * @return {string}
 */
proto.locator.SetDeploymentBeaconMajorRequest.prototype.getDeploymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SetDeploymentBeaconMajorRequest} returns this
 */
proto.locator.SetDeploymentBeaconMajorRequest.prototype.setDeploymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 beacon_major = 2;
 * @return {number}
 */
proto.locator.SetDeploymentBeaconMajorRequest.prototype.getBeaconMajor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.SetDeploymentBeaconMajorRequest} returns this
 */
proto.locator.SetDeploymentBeaconMajorRequest.prototype.setBeaconMajor = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SetDeploymentBeaconMajorReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SetDeploymentBeaconMajorReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SetDeploymentBeaconMajorReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentBeaconMajorReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    deployment: (f = msg.getDeployment()) && domain_domain_pb.DeploymentDto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SetDeploymentBeaconMajorReply}
 */
proto.locator.SetDeploymentBeaconMajorReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SetDeploymentBeaconMajorReply;
  return proto.locator.SetDeploymentBeaconMajorReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SetDeploymentBeaconMajorReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SetDeploymentBeaconMajorReply}
 */
proto.locator.SetDeploymentBeaconMajorReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.DeploymentDto;
      reader.readMessage(value,domain_domain_pb.DeploymentDto.deserializeBinaryFromReader);
      msg.setDeployment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SetDeploymentBeaconMajorReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SetDeploymentBeaconMajorReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SetDeploymentBeaconMajorReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SetDeploymentBeaconMajorReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeployment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      domain_domain_pb.DeploymentDto.serializeBinaryToWriter
    );
  }
};


/**
 * optional domain.DeploymentDto deployment = 1;
 * @return {?proto.domain.DeploymentDto}
 */
proto.locator.SetDeploymentBeaconMajorReply.prototype.getDeployment = function() {
  return /** @type{?proto.domain.DeploymentDto} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.DeploymentDto, 1));
};


/**
 * @param {?proto.domain.DeploymentDto|undefined} value
 * @return {!proto.locator.SetDeploymentBeaconMajorReply} returns this
*/
proto.locator.SetDeploymentBeaconMajorReply.prototype.setDeployment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.SetDeploymentBeaconMajorReply} returns this
 */
proto.locator.SetDeploymentBeaconMajorReply.prototype.clearDeployment = function() {
  return this.setDeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.SetDeploymentBeaconMajorReply.prototype.hasDeployment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.AuthData.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.AuthData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.AuthData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.AuthData.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.AuthData}
 */
proto.locator.AuthData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.AuthData;
  return proto.locator.AuthData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.AuthData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.AuthData}
 */
proto.locator.AuthData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.AuthData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.AuthData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.AuthData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.AuthData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.locator.AuthData.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.AuthData} returns this
 */
proto.locator.AuthData.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SignUpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SignUpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SignUpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SignUpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    firstName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 4, ""),
    password: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SignUpRequest}
 */
proto.locator.SignUpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SignUpRequest;
  return proto.locator.SignUpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SignUpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SignUpRequest}
 */
proto.locator.SignUpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SignUpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SignUpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SignUpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SignUpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string first_name = 1;
 * @return {string}
 */
proto.locator.SignUpRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SignUpRequest} returns this
 */
proto.locator.SignUpRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last_name = 2;
 * @return {string}
 */
proto.locator.SignUpRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SignUpRequest} returns this
 */
proto.locator.SignUpRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.locator.SignUpRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SignUpRequest} returns this
 */
proto.locator.SignUpRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string phone = 4;
 * @return {string}
 */
proto.locator.SignUpRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SignUpRequest} returns this
 */
proto.locator.SignUpRequest.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.locator.SignUpRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SignUpRequest} returns this
 */
proto.locator.SignUpRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SignUpReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SignUpReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SignUpReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SignUpReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    authData: (f = msg.getAuthData()) && proto.locator.AuthData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SignUpReply}
 */
proto.locator.SignUpReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SignUpReply;
  return proto.locator.SignUpReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SignUpReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SignUpReply}
 */
proto.locator.SignUpReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.locator.AuthData;
      reader.readMessage(value,proto.locator.AuthData.deserializeBinaryFromReader);
      msg.setAuthData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SignUpReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SignUpReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SignUpReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SignUpReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.locator.AuthData.serializeBinaryToWriter
    );
  }
};


/**
 * optional AuthData auth_data = 1;
 * @return {?proto.locator.AuthData}
 */
proto.locator.SignUpReply.prototype.getAuthData = function() {
  return /** @type{?proto.locator.AuthData} */ (
    jspb.Message.getWrapperField(this, proto.locator.AuthData, 1));
};


/**
 * @param {?proto.locator.AuthData|undefined} value
 * @return {!proto.locator.SignUpReply} returns this
*/
proto.locator.SignUpReply.prototype.setAuthData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.SignUpReply} returns this
 */
proto.locator.SignUpReply.prototype.clearAuthData = function() {
  return this.setAuthData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.SignUpReply.prototype.hasAuthData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SignInRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SignInRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SignInRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SignInRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SignInRequest}
 */
proto.locator.SignInRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SignInRequest;
  return proto.locator.SignInRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SignInRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SignInRequest}
 */
proto.locator.SignInRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SignInRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SignInRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SignInRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SignInRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.locator.SignInRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SignInRequest} returns this
 */
proto.locator.SignInRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.locator.SignInRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.SignInRequest} returns this
 */
proto.locator.SignInRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.SignInReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.SignInReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.SignInReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SignInReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    authData: (f = msg.getAuthData()) && proto.locator.AuthData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.SignInReply}
 */
proto.locator.SignInReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.SignInReply;
  return proto.locator.SignInReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.SignInReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.SignInReply}
 */
proto.locator.SignInReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.locator.AuthData;
      reader.readMessage(value,proto.locator.AuthData.deserializeBinaryFromReader);
      msg.setAuthData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.SignInReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.SignInReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.SignInReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.SignInReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.locator.AuthData.serializeBinaryToWriter
    );
  }
};


/**
 * optional AuthData auth_data = 1;
 * @return {?proto.locator.AuthData}
 */
proto.locator.SignInReply.prototype.getAuthData = function() {
  return /** @type{?proto.locator.AuthData} */ (
    jspb.Message.getWrapperField(this, proto.locator.AuthData, 1));
};


/**
 * @param {?proto.locator.AuthData|undefined} value
 * @return {!proto.locator.SignInReply} returns this
*/
proto.locator.SignInReply.prototype.setAuthData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.locator.SignInReply} returns this
 */
proto.locator.SignInReply.prototype.clearAuthData = function() {
  return this.setAuthData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.locator.SignInReply.prototype.hasAuthData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateOrganizationRequest}
 */
proto.locator.CreateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateOrganizationRequest;
  return proto.locator.CreateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateOrganizationRequest}
 */
proto.locator.CreateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_name = 1;
 * @return {string}
 */
proto.locator.CreateOrganizationRequest.prototype.getOrganizationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateOrganizationRequest} returns this
 */
proto.locator.CreateOrganizationRequest.prototype.setOrganizationName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateOrganizationReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateOrganizationReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateOrganizationReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateOrganizationReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateOrganizationReply}
 */
proto.locator.CreateOrganizationReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateOrganizationReply;
  return proto.locator.CreateOrganizationReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateOrganizationReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateOrganizationReply}
 */
proto.locator.CreateOrganizationReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateOrganizationReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateOrganizationReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateOrganizationReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateOrganizationReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 organization_id = 1;
 * @return {number}
 */
proto.locator.CreateOrganizationReply.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.CreateOrganizationReply} returns this
 */
proto.locator.CreateOrganizationReply.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateOrganizationInviteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateOrganizationInviteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateOrganizationInviteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateOrganizationInviteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateOrganizationInviteRequest}
 */
proto.locator.CreateOrganizationInviteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateOrganizationInviteRequest;
  return proto.locator.CreateOrganizationInviteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateOrganizationInviteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateOrganizationInviteRequest}
 */
proto.locator.CreateOrganizationInviteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateOrganizationInviteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateOrganizationInviteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateOrganizationInviteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateOrganizationInviteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 organization_id = 1;
 * @return {number}
 */
proto.locator.CreateOrganizationInviteRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.CreateOrganizationInviteRequest} returns this
 */
proto.locator.CreateOrganizationInviteRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateOrganizationInviteReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateOrganizationInviteReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateOrganizationInviteReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateOrganizationInviteReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    inviteLink: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateOrganizationInviteReply}
 */
proto.locator.CreateOrganizationInviteReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateOrganizationInviteReply;
  return proto.locator.CreateOrganizationInviteReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateOrganizationInviteReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateOrganizationInviteReply}
 */
proto.locator.CreateOrganizationInviteReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInviteLink(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateOrganizationInviteReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateOrganizationInviteReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateOrganizationInviteReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateOrganizationInviteReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInviteLink();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string invite_link = 1;
 * @return {string}
 */
proto.locator.CreateOrganizationInviteReply.prototype.getInviteLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateOrganizationInviteReply} returns this
 */
proto.locator.CreateOrganizationInviteReply.prototype.setInviteLink = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.RemoveOrganizationUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.RemoveOrganizationUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.RemoveOrganizationUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.RemoveOrganizationUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.RemoveOrganizationUserRequest}
 */
proto.locator.RemoveOrganizationUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.RemoveOrganizationUserRequest;
  return proto.locator.RemoveOrganizationUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.RemoveOrganizationUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.RemoveOrganizationUserRequest}
 */
proto.locator.RemoveOrganizationUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.RemoveOrganizationUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.RemoveOrganizationUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.RemoveOrganizationUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.RemoveOrganizationUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 organization_id = 1;
 * @return {number}
 */
proto.locator.RemoveOrganizationUserRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.RemoveOrganizationUserRequest} returns this
 */
proto.locator.RemoveOrganizationUserRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 user_id = 2;
 * @return {number}
 */
proto.locator.RemoveOrganizationUserRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.locator.RemoveOrganizationUserRequest} returns this
 */
proto.locator.RemoveOrganizationUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.RemoveOrganizationUserReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.RemoveOrganizationUserReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.RemoveOrganizationUserReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.RemoveOrganizationUserReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.RemoveOrganizationUserReply}
 */
proto.locator.RemoveOrganizationUserReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.RemoveOrganizationUserReply;
  return proto.locator.RemoveOrganizationUserReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.RemoveOrganizationUserReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.RemoveOrganizationUserReply}
 */
proto.locator.RemoveOrganizationUserReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.RemoveOrganizationUserReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.RemoveOrganizationUserReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.RemoveOrganizationUserReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.RemoveOrganizationUserReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.locator.CreateAppRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateAppRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateAppRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateAppRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateAppRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    appName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appDescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    appType: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateAppRequest}
 */
proto.locator.CreateAppRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateAppRequest;
  return proto.locator.CreateAppRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateAppRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateAppRequest}
 */
proto.locator.CreateAppRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addScope(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateAppRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateAppRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateAppRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateAppRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAppName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAppDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAppType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated string scope = 1;
 * @return {!Array<string>}
 */
proto.locator.CreateAppRequest.prototype.getScopeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.locator.CreateAppRequest} returns this
 */
proto.locator.CreateAppRequest.prototype.setScopeList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.locator.CreateAppRequest} returns this
 */
proto.locator.CreateAppRequest.prototype.addScope = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.locator.CreateAppRequest} returns this
 */
proto.locator.CreateAppRequest.prototype.clearScopeList = function() {
  return this.setScopeList([]);
};


/**
 * optional string app_name = 2;
 * @return {string}
 */
proto.locator.CreateAppRequest.prototype.getAppName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateAppRequest} returns this
 */
proto.locator.CreateAppRequest.prototype.setAppName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string app_description = 3;
 * @return {string}
 */
proto.locator.CreateAppRequest.prototype.getAppDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateAppRequest} returns this
 */
proto.locator.CreateAppRequest.prototype.setAppDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string app_type = 4;
 * @return {string}
 */
proto.locator.CreateAppRequest.prototype.getAppType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateAppRequest} returns this
 */
proto.locator.CreateAppRequest.prototype.setAppType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.locator.CreateAppReply.prototype.toObject = function(opt_includeInstance) {
  return proto.locator.CreateAppReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.locator.CreateAppReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateAppReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    appToken: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.locator.CreateAppReply}
 */
proto.locator.CreateAppReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.locator.CreateAppReply;
  return proto.locator.CreateAppReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.locator.CreateAppReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.locator.CreateAppReply}
 */
proto.locator.CreateAppReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.locator.CreateAppReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.locator.CreateAppReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.locator.CreateAppReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.locator.CreateAppReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string app_token = 1;
 * @return {string}
 */
proto.locator.CreateAppReply.prototype.getAppToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.locator.CreateAppReply} returns this
 */
proto.locator.CreateAppReply.prototype.setAppToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.locator.GatewayActionType = {
  NOOP: 0,
  RESTART: 1
};

goog.object.extend(exports, proto.locator);

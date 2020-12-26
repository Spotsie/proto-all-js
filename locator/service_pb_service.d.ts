// package: locator
// file: locator/service.proto

import * as locator_service_pb from "../locator/service_pb";
import * as domain_domain_pb from "../domain/domain_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LocatorServicegetGateways = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.GetGatewaysRequest;
  readonly responseType: typeof locator_service_pb.GetGatewaysReply;
};

type LocatorServiceGatewayNotificationStream = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof locator_service_pb.GatewayNotificationStreamRequest;
  readonly responseType: typeof locator_service_pb.GatewayNotification;
};

type LocatorServiceGatewayAction = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.GatewayActionRequest;
  readonly responseType: typeof locator_service_pb.GatewayActionResponse;
};

type LocatorServiceGetGatewayConfigurations = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.GetGatewayConfigurationsRequest;
  readonly responseType: typeof locator_service_pb.GetGatewayConfigurationsResponse;
};

type LocatorServiceSaveGatewayConfiguration = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.SaveGatewayConfigurationRequest;
  readonly responseType: typeof locator_service_pb.SaveGatewayConfigurationResponse;
};

type LocatorServiceObservationStream = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof locator_service_pb.ObservationStreamRequest;
  readonly responseType: typeof locator_service_pb.ObservationStreamMessage;
};

type LocatorServiceBeaconPositionStream = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof locator_service_pb.BeaconPositionStreamRequest;
  readonly responseType: typeof locator_service_pb.BeaconPositionStreamMessage;
};

type LocatorServiceCreateBinary = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.CreateBinaryRequest;
  readonly responseType: typeof locator_service_pb.CreateBinaryReply;
};

type LocatorServiceGetBinaries = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.GetBinariesRequest;
  readonly responseType: typeof locator_service_pb.GetBinariesReply;
};

type LocatorServiceSetGatewayParamsConfig = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.SetGatewayParamsConfigRequest;
  readonly responseType: typeof locator_service_pb.SetGatewayParamsConfigReply;
};

type LocatorServiceSetGatewaySoftwareVersion = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.SetGatewaySoftwareVersionRequest;
  readonly responseType: typeof locator_service_pb.SetGatewaySoftwareVersionReply;
};

type LocatorServiceSetGatewayTags = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.SetGatewayTagsRequest;
  readonly responseType: typeof locator_service_pb.SetGatewayTagsReply;
};

type LocatorServiceSetGatewayPosition = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.SetGatewayPositionRequest;
  readonly responseType: typeof locator_service_pb.SetGatewayPositionReply;
};

type LocatorServiceGetGatewayLogs = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.GetGatewayLogsRequest;
  readonly responseType: typeof locator_service_pb.GetGatewayLogsReply;
};

type LocatorServiceGatewayLogStream = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof locator_service_pb.GatewayLogStreamRequest;
  readonly responseType: typeof locator_service_pb.GatewayLogDto;
};

type LocatorServiceSetDeploymentMap = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.SetDeploymentMapRequest;
  readonly responseType: typeof locator_service_pb.SetDeploymentMapReply;
};

type LocatorServiceCreateDeployment = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.CreateDeploymentRequest;
  readonly responseType: typeof locator_service_pb.CreateDeploymentReply;
};

type LocatorServiceGetDeployments = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.GetDeploymentsRequest;
  readonly responseType: typeof locator_service_pb.GetDeploymentsReply;
};

type LocatorServiceSetDeploymentConfig = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.SetDeploymentConfigRequest;
  readonly responseType: typeof locator_service_pb.SetDeploymentConfigReply;
};

type LocatorServiceSetDeploymentGateways = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.SetDeploymentGatewaysRequest;
  readonly responseType: typeof locator_service_pb.SetDeploymentGatewaysReply;
};

type LocatorServiceSetDeploymentBeaconMajor = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.SetDeploymentBeaconMajorRequest;
  readonly responseType: typeof locator_service_pb.SetDeploymentBeaconMajorReply;
};

type LocatorServiceCreateDeploymentApiKey = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.CreateDeploymentApiKeyRequest;
  readonly responseType: typeof locator_service_pb.CreateDeploymentApiKeyReply;
};

type LocatorServiceDeleteDeploymentApiKey = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.DeleteDeploymentApiKeyRequest;
  readonly responseType: typeof locator_service_pb.DeleteDeploymentApiKeyReply;
};

type LocatorServiceRegenerateDeploymentApiKey = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.RegenerateDeploymentApiKeyRequest;
  readonly responseType: typeof locator_service_pb.RegenerateDeploymentApiKeyReply;
};

type LocatorServiceSignUp = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.SignUpRequest;
  readonly responseType: typeof locator_service_pb.SignUpReply;
};

type LocatorServiceSignIn = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.SignInRequest;
  readonly responseType: typeof locator_service_pb.SignInReply;
};

type LocatorServiceCreateOrganization = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.CreateOrganizationRequest;
  readonly responseType: typeof locator_service_pb.CreateOrganizationReply;
};

type LocatorServiceCreateOrganizationInvite = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.CreateOrganizationInviteRequest;
  readonly responseType: typeof locator_service_pb.CreateOrganizationInviteReply;
};

type LocatorServiceRemoveOrganizationUser = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.RemoveOrganizationUserRequest;
  readonly responseType: typeof locator_service_pb.RemoveOrganizationUserReply;
};

type LocatorServiceCreateApp = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof locator_service_pb.CreateAppRequest;
  readonly responseType: typeof locator_service_pb.CreateAppReply;
};

type LocatorServicePipelineLifecycleEventStream = {
  readonly methodName: string;
  readonly service: typeof LocatorService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof locator_service_pb.PipelineLifecycleEventStreamRequest;
  readonly responseType: typeof domain_domain_pb.SystemEvent.PipelineEvent;
};

export class LocatorService {
  static readonly serviceName: string;
  static readonly getGateways: LocatorServicegetGateways;
  static readonly GatewayNotificationStream: LocatorServiceGatewayNotificationStream;
  static readonly GatewayAction: LocatorServiceGatewayAction;
  static readonly GetGatewayConfigurations: LocatorServiceGetGatewayConfigurations;
  static readonly SaveGatewayConfiguration: LocatorServiceSaveGatewayConfiguration;
  static readonly ObservationStream: LocatorServiceObservationStream;
  static readonly BeaconPositionStream: LocatorServiceBeaconPositionStream;
  static readonly CreateBinary: LocatorServiceCreateBinary;
  static readonly GetBinaries: LocatorServiceGetBinaries;
  static readonly SetGatewayParamsConfig: LocatorServiceSetGatewayParamsConfig;
  static readonly SetGatewaySoftwareVersion: LocatorServiceSetGatewaySoftwareVersion;
  static readonly SetGatewayTags: LocatorServiceSetGatewayTags;
  static readonly SetGatewayPosition: LocatorServiceSetGatewayPosition;
  static readonly GetGatewayLogs: LocatorServiceGetGatewayLogs;
  static readonly GatewayLogStream: LocatorServiceGatewayLogStream;
  static readonly SetDeploymentMap: LocatorServiceSetDeploymentMap;
  static readonly CreateDeployment: LocatorServiceCreateDeployment;
  static readonly GetDeployments: LocatorServiceGetDeployments;
  static readonly SetDeploymentConfig: LocatorServiceSetDeploymentConfig;
  static readonly SetDeploymentGateways: LocatorServiceSetDeploymentGateways;
  static readonly SetDeploymentBeaconMajor: LocatorServiceSetDeploymentBeaconMajor;
  static readonly CreateDeploymentApiKey: LocatorServiceCreateDeploymentApiKey;
  static readonly DeleteDeploymentApiKey: LocatorServiceDeleteDeploymentApiKey;
  static readonly RegenerateDeploymentApiKey: LocatorServiceRegenerateDeploymentApiKey;
  static readonly SignUp: LocatorServiceSignUp;
  static readonly SignIn: LocatorServiceSignIn;
  static readonly CreateOrganization: LocatorServiceCreateOrganization;
  static readonly CreateOrganizationInvite: LocatorServiceCreateOrganizationInvite;
  static readonly RemoveOrganizationUser: LocatorServiceRemoveOrganizationUser;
  static readonly CreateApp: LocatorServiceCreateApp;
  static readonly PipelineLifecycleEventStream: LocatorServicePipelineLifecycleEventStream;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class LocatorServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getGateways(
    requestMessage: locator_service_pb.GetGatewaysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GetGatewaysReply|null) => void
  ): UnaryResponse;
  getGateways(
    requestMessage: locator_service_pb.GetGatewaysRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GetGatewaysReply|null) => void
  ): UnaryResponse;
  gatewayNotificationStream(requestMessage: locator_service_pb.GatewayNotificationStreamRequest, metadata?: grpc.Metadata): ResponseStream<locator_service_pb.GatewayNotification>;
  gatewayAction(
    requestMessage: locator_service_pb.GatewayActionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GatewayActionResponse|null) => void
  ): UnaryResponse;
  gatewayAction(
    requestMessage: locator_service_pb.GatewayActionRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GatewayActionResponse|null) => void
  ): UnaryResponse;
  getGatewayConfigurations(
    requestMessage: locator_service_pb.GetGatewayConfigurationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GetGatewayConfigurationsResponse|null) => void
  ): UnaryResponse;
  getGatewayConfigurations(
    requestMessage: locator_service_pb.GetGatewayConfigurationsRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GetGatewayConfigurationsResponse|null) => void
  ): UnaryResponse;
  saveGatewayConfiguration(
    requestMessage: locator_service_pb.SaveGatewayConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SaveGatewayConfigurationResponse|null) => void
  ): UnaryResponse;
  saveGatewayConfiguration(
    requestMessage: locator_service_pb.SaveGatewayConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SaveGatewayConfigurationResponse|null) => void
  ): UnaryResponse;
  observationStream(requestMessage: locator_service_pb.ObservationStreamRequest, metadata?: grpc.Metadata): ResponseStream<locator_service_pb.ObservationStreamMessage>;
  beaconPositionStream(requestMessage: locator_service_pb.BeaconPositionStreamRequest, metadata?: grpc.Metadata): ResponseStream<locator_service_pb.BeaconPositionStreamMessage>;
  createBinary(
    requestMessage: locator_service_pb.CreateBinaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateBinaryReply|null) => void
  ): UnaryResponse;
  createBinary(
    requestMessage: locator_service_pb.CreateBinaryRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateBinaryReply|null) => void
  ): UnaryResponse;
  getBinaries(
    requestMessage: locator_service_pb.GetBinariesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GetBinariesReply|null) => void
  ): UnaryResponse;
  getBinaries(
    requestMessage: locator_service_pb.GetBinariesRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GetBinariesReply|null) => void
  ): UnaryResponse;
  setGatewayParamsConfig(
    requestMessage: locator_service_pb.SetGatewayParamsConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetGatewayParamsConfigReply|null) => void
  ): UnaryResponse;
  setGatewayParamsConfig(
    requestMessage: locator_service_pb.SetGatewayParamsConfigRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetGatewayParamsConfigReply|null) => void
  ): UnaryResponse;
  setGatewaySoftwareVersion(
    requestMessage: locator_service_pb.SetGatewaySoftwareVersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetGatewaySoftwareVersionReply|null) => void
  ): UnaryResponse;
  setGatewaySoftwareVersion(
    requestMessage: locator_service_pb.SetGatewaySoftwareVersionRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetGatewaySoftwareVersionReply|null) => void
  ): UnaryResponse;
  setGatewayTags(
    requestMessage: locator_service_pb.SetGatewayTagsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetGatewayTagsReply|null) => void
  ): UnaryResponse;
  setGatewayTags(
    requestMessage: locator_service_pb.SetGatewayTagsRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetGatewayTagsReply|null) => void
  ): UnaryResponse;
  setGatewayPosition(
    requestMessage: locator_service_pb.SetGatewayPositionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetGatewayPositionReply|null) => void
  ): UnaryResponse;
  setGatewayPosition(
    requestMessage: locator_service_pb.SetGatewayPositionRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetGatewayPositionReply|null) => void
  ): UnaryResponse;
  getGatewayLogs(
    requestMessage: locator_service_pb.GetGatewayLogsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GetGatewayLogsReply|null) => void
  ): UnaryResponse;
  getGatewayLogs(
    requestMessage: locator_service_pb.GetGatewayLogsRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GetGatewayLogsReply|null) => void
  ): UnaryResponse;
  gatewayLogStream(requestMessage: locator_service_pb.GatewayLogStreamRequest, metadata?: grpc.Metadata): ResponseStream<locator_service_pb.GatewayLogDto>;
  setDeploymentMap(
    requestMessage: locator_service_pb.SetDeploymentMapRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetDeploymentMapReply|null) => void
  ): UnaryResponse;
  setDeploymentMap(
    requestMessage: locator_service_pb.SetDeploymentMapRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetDeploymentMapReply|null) => void
  ): UnaryResponse;
  createDeployment(
    requestMessage: locator_service_pb.CreateDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateDeploymentReply|null) => void
  ): UnaryResponse;
  createDeployment(
    requestMessage: locator_service_pb.CreateDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateDeploymentReply|null) => void
  ): UnaryResponse;
  getDeployments(
    requestMessage: locator_service_pb.GetDeploymentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GetDeploymentsReply|null) => void
  ): UnaryResponse;
  getDeployments(
    requestMessage: locator_service_pb.GetDeploymentsRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.GetDeploymentsReply|null) => void
  ): UnaryResponse;
  setDeploymentConfig(
    requestMessage: locator_service_pb.SetDeploymentConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetDeploymentConfigReply|null) => void
  ): UnaryResponse;
  setDeploymentConfig(
    requestMessage: locator_service_pb.SetDeploymentConfigRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetDeploymentConfigReply|null) => void
  ): UnaryResponse;
  setDeploymentGateways(
    requestMessage: locator_service_pb.SetDeploymentGatewaysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetDeploymentGatewaysReply|null) => void
  ): UnaryResponse;
  setDeploymentGateways(
    requestMessage: locator_service_pb.SetDeploymentGatewaysRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetDeploymentGatewaysReply|null) => void
  ): UnaryResponse;
  setDeploymentBeaconMajor(
    requestMessage: locator_service_pb.SetDeploymentBeaconMajorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetDeploymentBeaconMajorReply|null) => void
  ): UnaryResponse;
  setDeploymentBeaconMajor(
    requestMessage: locator_service_pb.SetDeploymentBeaconMajorRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SetDeploymentBeaconMajorReply|null) => void
  ): UnaryResponse;
  createDeploymentApiKey(
    requestMessage: locator_service_pb.CreateDeploymentApiKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateDeploymentApiKeyReply|null) => void
  ): UnaryResponse;
  createDeploymentApiKey(
    requestMessage: locator_service_pb.CreateDeploymentApiKeyRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateDeploymentApiKeyReply|null) => void
  ): UnaryResponse;
  deleteDeploymentApiKey(
    requestMessage: locator_service_pb.DeleteDeploymentApiKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.DeleteDeploymentApiKeyReply|null) => void
  ): UnaryResponse;
  deleteDeploymentApiKey(
    requestMessage: locator_service_pb.DeleteDeploymentApiKeyRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.DeleteDeploymentApiKeyReply|null) => void
  ): UnaryResponse;
  regenerateDeploymentApiKey(
    requestMessage: locator_service_pb.RegenerateDeploymentApiKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.RegenerateDeploymentApiKeyReply|null) => void
  ): UnaryResponse;
  regenerateDeploymentApiKey(
    requestMessage: locator_service_pb.RegenerateDeploymentApiKeyRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.RegenerateDeploymentApiKeyReply|null) => void
  ): UnaryResponse;
  signUp(
    requestMessage: locator_service_pb.SignUpRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SignUpReply|null) => void
  ): UnaryResponse;
  signUp(
    requestMessage: locator_service_pb.SignUpRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SignUpReply|null) => void
  ): UnaryResponse;
  signIn(
    requestMessage: locator_service_pb.SignInRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SignInReply|null) => void
  ): UnaryResponse;
  signIn(
    requestMessage: locator_service_pb.SignInRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.SignInReply|null) => void
  ): UnaryResponse;
  createOrganization(
    requestMessage: locator_service_pb.CreateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateOrganizationReply|null) => void
  ): UnaryResponse;
  createOrganization(
    requestMessage: locator_service_pb.CreateOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateOrganizationReply|null) => void
  ): UnaryResponse;
  createOrganizationInvite(
    requestMessage: locator_service_pb.CreateOrganizationInviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateOrganizationInviteReply|null) => void
  ): UnaryResponse;
  createOrganizationInvite(
    requestMessage: locator_service_pb.CreateOrganizationInviteRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateOrganizationInviteReply|null) => void
  ): UnaryResponse;
  removeOrganizationUser(
    requestMessage: locator_service_pb.RemoveOrganizationUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.RemoveOrganizationUserReply|null) => void
  ): UnaryResponse;
  removeOrganizationUser(
    requestMessage: locator_service_pb.RemoveOrganizationUserRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.RemoveOrganizationUserReply|null) => void
  ): UnaryResponse;
  createApp(
    requestMessage: locator_service_pb.CreateAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateAppReply|null) => void
  ): UnaryResponse;
  createApp(
    requestMessage: locator_service_pb.CreateAppRequest,
    callback: (error: ServiceError|null, responseMessage: locator_service_pb.CreateAppReply|null) => void
  ): UnaryResponse;
  pipelineLifecycleEventStream(requestMessage: locator_service_pb.PipelineLifecycleEventStreamRequest, metadata?: grpc.Metadata): ResponseStream<domain_domain_pb.SystemEvent.PipelineEvent>;
}


// package: deployment
// file: deployment/service.proto

import * as deployment_service_pb from "../deployment/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DeploymentApiGetDeployments = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.GetDeploymentsRequest;
  readonly responseType: typeof deployment_service_pb.GetDeploymentsResponse;
};

type DeploymentApiCreateDeployment = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.CreateDeploymentRequest;
  readonly responseType: typeof deployment_service_pb.CreateDeploymentResponse;
};

type DeploymentApiUpdateDeployment = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.UpdateDeploymentRequest;
  readonly responseType: typeof deployment_service_pb.UpdateDeploymentResponse;
};

type DeploymentApiCreateZone = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.CreateZoneRequest;
  readonly responseType: typeof deployment_service_pb.CreateZoneResponse;
};

type DeploymentApiDeleteZone = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.DeleteZoneRequest;
  readonly responseType: typeof deployment_service_pb.DeleteZoneResponse;
};

type DeploymentApiUpdateZone = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.UpdateZoneRequest;
  readonly responseType: typeof deployment_service_pb.UpdateZoneResponse;
};

type DeploymentApiGetZones = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.GetZonesRequest;
  readonly responseType: typeof deployment_service_pb.GetZonesResponse;
};

type DeploymentApiAddPositioningReferent = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.AddPositioningReferentRequest;
  readonly responseType: typeof deployment_service_pb.AddPositioningReferentResponse;
};

type DeploymentApiUpdatePositioningReferent = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.UpdatePositioningReferentRequest;
  readonly responseType: typeof deployment_service_pb.UpdatePositioningReferentResponse;
};

type DeploymentApiGetPositioningReferents = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.GetPositioningReferentsRequest;
  readonly responseType: typeof deployment_service_pb.GetPositioningReferentsResponse;
};

type DeploymentApiCreateOrganization = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.CreateOrganizationRequest;
  readonly responseType: typeof deployment_service_pb.CreateOrganizationResponse;
};

type DeploymentApiGetOrganization = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.GetOrganizationRequest;
  readonly responseType: typeof deployment_service_pb.GetOrganizationResponse;
};

type DeploymentApiGetOrganizations = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.GetOrganizationsRequest;
  readonly responseType: typeof deployment_service_pb.GetOrganizationsResponse;
};

type DeploymentApiGetMembers = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.GetMembersRequest;
  readonly responseType: typeof deployment_service_pb.GetMembersResponse;
};

type DeploymentApiCreateMemberInvite = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.CreateMemberInviteRequest;
  readonly responseType: typeof deployment_service_pb.CreateMemberInviteResponse;
};

type DeploymentApiSignIn = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.SignInRequest;
  readonly responseType: typeof deployment_service_pb.SignInResponse;
};

type DeploymentApiSignUp = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.SignUpRequest;
  readonly responseType: typeof deployment_service_pb.SignUpResponse;
};

type DeploymentApiGetSignUpInvite = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.GetSignUpInviteRequest;
  readonly responseType: typeof deployment_service_pb.GetSignupInviteResponse;
};

type DeploymentApiPasswordRecovery = {
  readonly methodName: string;
  readonly service: typeof DeploymentApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.PasswordRecoveryRequest;
  readonly responseType: typeof deployment_service_pb.PasswordRecoveryResponse;
};

export class DeploymentApi {
  static readonly serviceName: string;
  static readonly GetDeployments: DeploymentApiGetDeployments;
  static readonly CreateDeployment: DeploymentApiCreateDeployment;
  static readonly UpdateDeployment: DeploymentApiUpdateDeployment;
  static readonly CreateZone: DeploymentApiCreateZone;
  static readonly DeleteZone: DeploymentApiDeleteZone;
  static readonly UpdateZone: DeploymentApiUpdateZone;
  static readonly GetZones: DeploymentApiGetZones;
  static readonly AddPositioningReferent: DeploymentApiAddPositioningReferent;
  static readonly UpdatePositioningReferent: DeploymentApiUpdatePositioningReferent;
  static readonly GetPositioningReferents: DeploymentApiGetPositioningReferents;
  static readonly CreateOrganization: DeploymentApiCreateOrganization;
  static readonly GetOrganization: DeploymentApiGetOrganization;
  static readonly GetOrganizations: DeploymentApiGetOrganizations;
  static readonly GetMembers: DeploymentApiGetMembers;
  static readonly CreateMemberInvite: DeploymentApiCreateMemberInvite;
  static readonly SignIn: DeploymentApiSignIn;
  static readonly SignUp: DeploymentApiSignUp;
  static readonly GetSignUpInvite: DeploymentApiGetSignUpInvite;
  static readonly PasswordRecovery: DeploymentApiPasswordRecovery;
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

export class DeploymentApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getDeployments(
    requestMessage: deployment_service_pb.GetDeploymentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetDeploymentsResponse|null) => void
  ): UnaryResponse;
  getDeployments(
    requestMessage: deployment_service_pb.GetDeploymentsRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetDeploymentsResponse|null) => void
  ): UnaryResponse;
  createDeployment(
    requestMessage: deployment_service_pb.CreateDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.CreateDeploymentResponse|null) => void
  ): UnaryResponse;
  createDeployment(
    requestMessage: deployment_service_pb.CreateDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.CreateDeploymentResponse|null) => void
  ): UnaryResponse;
  updateDeployment(
    requestMessage: deployment_service_pb.UpdateDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.UpdateDeploymentResponse|null) => void
  ): UnaryResponse;
  updateDeployment(
    requestMessage: deployment_service_pb.UpdateDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.UpdateDeploymentResponse|null) => void
  ): UnaryResponse;
  createZone(
    requestMessage: deployment_service_pb.CreateZoneRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.CreateZoneResponse|null) => void
  ): UnaryResponse;
  createZone(
    requestMessage: deployment_service_pb.CreateZoneRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.CreateZoneResponse|null) => void
  ): UnaryResponse;
  deleteZone(
    requestMessage: deployment_service_pb.DeleteZoneRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.DeleteZoneResponse|null) => void
  ): UnaryResponse;
  deleteZone(
    requestMessage: deployment_service_pb.DeleteZoneRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.DeleteZoneResponse|null) => void
  ): UnaryResponse;
  updateZone(
    requestMessage: deployment_service_pb.UpdateZoneRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.UpdateZoneResponse|null) => void
  ): UnaryResponse;
  updateZone(
    requestMessage: deployment_service_pb.UpdateZoneRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.UpdateZoneResponse|null) => void
  ): UnaryResponse;
  getZones(
    requestMessage: deployment_service_pb.GetZonesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetZonesResponse|null) => void
  ): UnaryResponse;
  getZones(
    requestMessage: deployment_service_pb.GetZonesRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetZonesResponse|null) => void
  ): UnaryResponse;
  addPositioningReferent(
    requestMessage: deployment_service_pb.AddPositioningReferentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.AddPositioningReferentResponse|null) => void
  ): UnaryResponse;
  addPositioningReferent(
    requestMessage: deployment_service_pb.AddPositioningReferentRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.AddPositioningReferentResponse|null) => void
  ): UnaryResponse;
  updatePositioningReferent(
    requestMessage: deployment_service_pb.UpdatePositioningReferentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.UpdatePositioningReferentResponse|null) => void
  ): UnaryResponse;
  updatePositioningReferent(
    requestMessage: deployment_service_pb.UpdatePositioningReferentRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.UpdatePositioningReferentResponse|null) => void
  ): UnaryResponse;
  getPositioningReferents(
    requestMessage: deployment_service_pb.GetPositioningReferentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetPositioningReferentsResponse|null) => void
  ): UnaryResponse;
  getPositioningReferents(
    requestMessage: deployment_service_pb.GetPositioningReferentsRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetPositioningReferentsResponse|null) => void
  ): UnaryResponse;
  createOrganization(
    requestMessage: deployment_service_pb.CreateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.CreateOrganizationResponse|null) => void
  ): UnaryResponse;
  createOrganization(
    requestMessage: deployment_service_pb.CreateOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.CreateOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganization(
    requestMessage: deployment_service_pb.GetOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganization(
    requestMessage: deployment_service_pb.GetOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganizations(
    requestMessage: deployment_service_pb.GetOrganizationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetOrganizationsResponse|null) => void
  ): UnaryResponse;
  getOrganizations(
    requestMessage: deployment_service_pb.GetOrganizationsRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetOrganizationsResponse|null) => void
  ): UnaryResponse;
  getMembers(
    requestMessage: deployment_service_pb.GetMembersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetMembersResponse|null) => void
  ): UnaryResponse;
  getMembers(
    requestMessage: deployment_service_pb.GetMembersRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetMembersResponse|null) => void
  ): UnaryResponse;
  createMemberInvite(
    requestMessage: deployment_service_pb.CreateMemberInviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.CreateMemberInviteResponse|null) => void
  ): UnaryResponse;
  createMemberInvite(
    requestMessage: deployment_service_pb.CreateMemberInviteRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.CreateMemberInviteResponse|null) => void
  ): UnaryResponse;
  signIn(
    requestMessage: deployment_service_pb.SignInRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.SignInResponse|null) => void
  ): UnaryResponse;
  signIn(
    requestMessage: deployment_service_pb.SignInRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.SignInResponse|null) => void
  ): UnaryResponse;
  signUp(
    requestMessage: deployment_service_pb.SignUpRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.SignUpResponse|null) => void
  ): UnaryResponse;
  signUp(
    requestMessage: deployment_service_pb.SignUpRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.SignUpResponse|null) => void
  ): UnaryResponse;
  getSignUpInvite(
    requestMessage: deployment_service_pb.GetSignUpInviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetSignupInviteResponse|null) => void
  ): UnaryResponse;
  getSignUpInvite(
    requestMessage: deployment_service_pb.GetSignUpInviteRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetSignupInviteResponse|null) => void
  ): UnaryResponse;
  passwordRecovery(
    requestMessage: deployment_service_pb.PasswordRecoveryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.PasswordRecoveryResponse|null) => void
  ): UnaryResponse;
  passwordRecovery(
    requestMessage: deployment_service_pb.PasswordRecoveryRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.PasswordRecoveryResponse|null) => void
  ): UnaryResponse;
}


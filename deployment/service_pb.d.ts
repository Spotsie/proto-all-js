// package: deployment
// file: deployment/service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as deployment_organization_pb from "../deployment/organization_pb";

export class PasswordRecoveryRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordRecoveryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordRecoveryRequest): PasswordRecoveryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PasswordRecoveryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordRecoveryRequest;
  static deserializeBinaryFromReader(message: PasswordRecoveryRequest, reader: jspb.BinaryReader): PasswordRecoveryRequest;
}

export namespace PasswordRecoveryRequest {
  export type AsObject = {
    email: string,
  }
}

export class PasswordRecoveryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordRecoveryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordRecoveryResponse): PasswordRecoveryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PasswordRecoveryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordRecoveryResponse;
  static deserializeBinaryFromReader(message: PasswordRecoveryResponse, reader: jspb.BinaryReader): PasswordRecoveryResponse;
}

export namespace PasswordRecoveryResponse {
  export type AsObject = {
  }
}

export class SignInRequest extends jspb.Message {
  hasUserCredentials(): boolean;
  clearUserCredentials(): void;
  getUserCredentials(): SignInRequest.UserCredentials | undefined;
  setUserCredentials(value?: SignInRequest.UserCredentials): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): string;
  setToken(value: string): void;

  getCredentialsCase(): SignInRequest.CredentialsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignInRequest): SignInRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInRequest;
  static deserializeBinaryFromReader(message: SignInRequest, reader: jspb.BinaryReader): SignInRequest;
}

export namespace SignInRequest {
  export type AsObject = {
    userCredentials?: SignInRequest.UserCredentials.AsObject,
    token: string,
  }

  export class UserCredentials extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserCredentials.AsObject;
    static toObject(includeInstance: boolean, msg: UserCredentials): UserCredentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserCredentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserCredentials;
    static deserializeBinaryFromReader(message: UserCredentials, reader: jspb.BinaryReader): UserCredentials;
  }

  export namespace UserCredentials {
    export type AsObject = {
      email: string,
      password: string,
    }
  }

  export enum CredentialsCase {
    CREDENTIALS_NOT_SET = 0,
    USER_CREDENTIALS = 1,
    TOKEN = 2,
  }
}

export class SignInResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignInResponse): SignInResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInResponse;
  static deserializeBinaryFromReader(message: SignInResponse, reader: jspb.BinaryReader): SignInResponse;
}

export namespace SignInResponse {
  export type AsObject = {
    accessToken: string,
  }
}

export class SignUpRequest extends jspb.Message {
  getInviteToken(): string;
  setInviteToken(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpRequest;
  static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
  export type AsObject = {
    inviteToken: string,
    password: string,
    firstName: string,
    lastName: string,
  }
}

export class GetSignUpInviteRequest extends jspb.Message {
  getInviteToken(): string;
  setInviteToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSignUpInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSignUpInviteRequest): GetSignUpInviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSignUpInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSignUpInviteRequest;
  static deserializeBinaryFromReader(message: GetSignUpInviteRequest, reader: jspb.BinaryReader): GetSignUpInviteRequest;
}

export namespace GetSignUpInviteRequest {
  export type AsObject = {
    inviteToken: string,
  }
}

export class GetSignupInviteResponse extends jspb.Message {
  getOrganizationName(): string;
  setOrganizationName(value: string): void;

  getUserEmail(): string;
  setUserEmail(value: string): void;

  getUserRole(): string;
  setUserRole(value: string): void;

  getInvitedByUser(): string;
  setInvitedByUser(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSignupInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSignupInviteResponse): GetSignupInviteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSignupInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSignupInviteResponse;
  static deserializeBinaryFromReader(message: GetSignupInviteResponse, reader: jspb.BinaryReader): GetSignupInviteResponse;
}

export namespace GetSignupInviteResponse {
  export type AsObject = {
    organizationName: string,
    userEmail: string,
    userRole: string,
    invitedByUser: string,
  }
}

export class SignUpResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpResponse): SignUpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignUpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpResponse;
  static deserializeBinaryFromReader(message: SignUpResponse, reader: jspb.BinaryReader): SignUpResponse;
}

export namespace SignUpResponse {
  export type AsObject = {
  }
}

export class GetZonesRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetZonesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetZonesRequest): GetZonesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetZonesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZonesRequest;
  static deserializeBinaryFromReader(message: GetZonesRequest, reader: jspb.BinaryReader): GetZonesRequest;
}

export namespace GetZonesRequest {
  export type AsObject = {
    organizationId: number,
  }
}

export class GetZonesResponse extends jspb.Message {
  clearZonesList(): void;
  getZonesList(): Array<deployment_organization_pb.Zone>;
  setZonesList(value: Array<deployment_organization_pb.Zone>): void;
  addZones(value?: deployment_organization_pb.Zone, index?: number): deployment_organization_pb.Zone;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetZonesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetZonesResponse): GetZonesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetZonesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZonesResponse;
  static deserializeBinaryFromReader(message: GetZonesResponse, reader: jspb.BinaryReader): GetZonesResponse;
}

export namespace GetZonesResponse {
  export type AsObject = {
    zonesList: Array<deployment_organization_pb.Zone.AsObject>,
  }
}

export class UpdateDeploymentRequest extends jspb.Message {
  getDeploymentName(): string;
  setDeploymentName(value: string): void;

  getDeploymentType(): deployment_organization_pb.Deployment.TypeMap[keyof deployment_organization_pb.Deployment.TypeMap];
  setDeploymentType(value: deployment_organization_pb.Deployment.TypeMap[keyof deployment_organization_pb.Deployment.TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeploymentRequest): UpdateDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeploymentRequest;
  static deserializeBinaryFromReader(message: UpdateDeploymentRequest, reader: jspb.BinaryReader): UpdateDeploymentRequest;
}

export namespace UpdateDeploymentRequest {
  export type AsObject = {
    deploymentName: string,
    deploymentType: deployment_organization_pb.Deployment.TypeMap[keyof deployment_organization_pb.Deployment.TypeMap],
  }
}

export class UpdateDeploymentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeploymentResponse): UpdateDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeploymentResponse;
  static deserializeBinaryFromReader(message: UpdateDeploymentResponse, reader: jspb.BinaryReader): UpdateDeploymentResponse;
}

export namespace UpdateDeploymentResponse {
  export type AsObject = {
  }
}

export class CreateDeploymentRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getDeploymentName(): string;
  setDeploymentName(value: string): void;

  getDeploymentType(): deployment_organization_pb.Deployment.TypeMap[keyof deployment_organization_pb.Deployment.TypeMap];
  setDeploymentType(value: deployment_organization_pb.Deployment.TypeMap[keyof deployment_organization_pb.Deployment.TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeploymentRequest): CreateDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeploymentRequest;
  static deserializeBinaryFromReader(message: CreateDeploymentRequest, reader: jspb.BinaryReader): CreateDeploymentRequest;
}

export namespace CreateDeploymentRequest {
  export type AsObject = {
    organizationId: number,
    deploymentName: string,
    deploymentType: deployment_organization_pb.Deployment.TypeMap[keyof deployment_organization_pb.Deployment.TypeMap],
  }
}

export class CreateDeploymentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeploymentResponse): CreateDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeploymentResponse;
  static deserializeBinaryFromReader(message: CreateDeploymentResponse, reader: jspb.BinaryReader): CreateDeploymentResponse;
}

export namespace CreateDeploymentResponse {
  export type AsObject = {
  }
}

export class GetDeploymentsRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentsRequest): GetDeploymentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeploymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentsRequest;
  static deserializeBinaryFromReader(message: GetDeploymentsRequest, reader: jspb.BinaryReader): GetDeploymentsRequest;
}

export namespace GetDeploymentsRequest {
  export type AsObject = {
    organizationId: number,
  }
}

export class GetDeploymentsResponse extends jspb.Message {
  clearDeploymentsList(): void;
  getDeploymentsList(): Array<deployment_organization_pb.Deployment>;
  setDeploymentsList(value: Array<deployment_organization_pb.Deployment>): void;
  addDeployments(value?: deployment_organization_pb.Deployment, index?: number): deployment_organization_pb.Deployment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentsResponse): GetDeploymentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeploymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentsResponse;
  static deserializeBinaryFromReader(message: GetDeploymentsResponse, reader: jspb.BinaryReader): GetDeploymentsResponse;
}

export namespace GetDeploymentsResponse {
  export type AsObject = {
    deploymentsList: Array<deployment_organization_pb.Deployment.AsObject>,
  }
}

export class CreateZoneRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): deployment_organization_pb.Zone.Config | undefined;
  setConfig(value?: deployment_organization_pb.Zone.Config): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateZoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateZoneRequest): CreateZoneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateZoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateZoneRequest;
  static deserializeBinaryFromReader(message: CreateZoneRequest, reader: jspb.BinaryReader): CreateZoneRequest;
}

export namespace CreateZoneRequest {
  export type AsObject = {
    config?: deployment_organization_pb.Zone.Config.AsObject,
  }
}

export class CreateZoneResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateZoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateZoneResponse): CreateZoneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateZoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateZoneResponse;
  static deserializeBinaryFromReader(message: CreateZoneResponse, reader: jspb.BinaryReader): CreateZoneResponse;
}

export namespace CreateZoneResponse {
  export type AsObject = {
  }
}

export class UpdateZoneRequest extends jspb.Message {
  getZoneId(): number;
  setZoneId(value: number): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): deployment_organization_pb.Zone.Config | undefined;
  setConfig(value?: deployment_organization_pb.Zone.Config): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateZoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateZoneRequest): UpdateZoneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateZoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateZoneRequest;
  static deserializeBinaryFromReader(message: UpdateZoneRequest, reader: jspb.BinaryReader): UpdateZoneRequest;
}

export namespace UpdateZoneRequest {
  export type AsObject = {
    zoneId: number,
    config?: deployment_organization_pb.Zone.Config.AsObject,
  }
}

export class UpdateZoneResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateZoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateZoneResponse): UpdateZoneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateZoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateZoneResponse;
  static deserializeBinaryFromReader(message: UpdateZoneResponse, reader: jspb.BinaryReader): UpdateZoneResponse;
}

export namespace UpdateZoneResponse {
  export type AsObject = {
  }
}

export class DeleteZoneRequest extends jspb.Message {
  getZoneId(): number;
  setZoneId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteZoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteZoneRequest): DeleteZoneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteZoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteZoneRequest;
  static deserializeBinaryFromReader(message: DeleteZoneRequest, reader: jspb.BinaryReader): DeleteZoneRequest;
}

export namespace DeleteZoneRequest {
  export type AsObject = {
    zoneId: number,
  }
}

export class DeleteZoneResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteZoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteZoneResponse): DeleteZoneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteZoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteZoneResponse;
  static deserializeBinaryFromReader(message: DeleteZoneResponse, reader: jspb.BinaryReader): DeleteZoneResponse;
}

export namespace DeleteZoneResponse {
  export type AsObject = {
  }
}

export class AddPositioningReferentRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getDeviceId(): number;
  setDeviceId(value: number): void;

  getDeviceType(): deployment_organization_pb.PositioningReferent.DeviceTypeMap[keyof deployment_organization_pb.PositioningReferent.DeviceTypeMap];
  setDeviceType(value: deployment_organization_pb.PositioningReferent.DeviceTypeMap[keyof deployment_organization_pb.PositioningReferent.DeviceTypeMap]): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): deployment_organization_pb.GeoPoint | undefined;
  setLocation(value?: deployment_organization_pb.GeoPoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPositioningReferentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddPositioningReferentRequest): AddPositioningReferentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPositioningReferentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPositioningReferentRequest;
  static deserializeBinaryFromReader(message: AddPositioningReferentRequest, reader: jspb.BinaryReader): AddPositioningReferentRequest;
}

export namespace AddPositioningReferentRequest {
  export type AsObject = {
    organizationId: number,
    deviceId: number,
    deviceType: deployment_organization_pb.PositioningReferent.DeviceTypeMap[keyof deployment_organization_pb.PositioningReferent.DeviceTypeMap],
    location?: deployment_organization_pb.GeoPoint.AsObject,
  }
}

export class AddPositioningReferentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPositioningReferentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddPositioningReferentResponse): AddPositioningReferentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPositioningReferentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPositioningReferentResponse;
  static deserializeBinaryFromReader(message: AddPositioningReferentResponse, reader: jspb.BinaryReader): AddPositioningReferentResponse;
}

export namespace AddPositioningReferentResponse {
  export type AsObject = {
  }
}

export class UpdatePositioningReferentRequest extends jspb.Message {
  getReferentId(): number;
  setReferentId(value: number): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): deployment_organization_pb.GeoPoint | undefined;
  setLocation(value?: deployment_organization_pb.GeoPoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePositioningReferentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePositioningReferentRequest): UpdatePositioningReferentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePositioningReferentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePositioningReferentRequest;
  static deserializeBinaryFromReader(message: UpdatePositioningReferentRequest, reader: jspb.BinaryReader): UpdatePositioningReferentRequest;
}

export namespace UpdatePositioningReferentRequest {
  export type AsObject = {
    referentId: number,
    organizationId: number,
    location?: deployment_organization_pb.GeoPoint.AsObject,
  }
}

export class UpdatePositioningReferentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePositioningReferentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePositioningReferentResponse): UpdatePositioningReferentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePositioningReferentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePositioningReferentResponse;
  static deserializeBinaryFromReader(message: UpdatePositioningReferentResponse, reader: jspb.BinaryReader): UpdatePositioningReferentResponse;
}

export namespace UpdatePositioningReferentResponse {
  export type AsObject = {
  }
}

export class GetPositioningReferentsRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositioningReferentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositioningReferentsRequest): GetPositioningReferentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositioningReferentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositioningReferentsRequest;
  static deserializeBinaryFromReader(message: GetPositioningReferentsRequest, reader: jspb.BinaryReader): GetPositioningReferentsRequest;
}

export namespace GetPositioningReferentsRequest {
  export type AsObject = {
    organizationId: number,
  }
}

export class GetPositioningReferentsResponse extends jspb.Message {
  clearPositioningReferentsList(): void;
  getPositioningReferentsList(): Array<deployment_organization_pb.PositioningReferent>;
  setPositioningReferentsList(value: Array<deployment_organization_pb.PositioningReferent>): void;
  addPositioningReferents(value?: deployment_organization_pb.PositioningReferent, index?: number): deployment_organization_pb.PositioningReferent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositioningReferentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositioningReferentsResponse): GetPositioningReferentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositioningReferentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositioningReferentsResponse;
  static deserializeBinaryFromReader(message: GetPositioningReferentsResponse, reader: jspb.BinaryReader): GetPositioningReferentsResponse;
}

export namespace GetPositioningReferentsResponse {
  export type AsObject = {
    positioningReferentsList: Array<deployment_organization_pb.PositioningReferent.AsObject>,
  }
}

export class CreateOrganizationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getShortName(): string;
  setShortName(value: string): void;

  getNamespaceId(): number;
  setNamespaceId(value: number): void;

  getWebsite(): string;
  setWebsite(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

export namespace CreateOrganizationRequest {
  export type AsObject = {
    name: string,
    shortName: string,
    namespaceId: number,
    website: string,
  }
}

export class CreateOrganizationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationResponse): CreateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationResponse;
  static deserializeBinaryFromReader(message: CreateOrganizationResponse, reader: jspb.BinaryReader): CreateOrganizationResponse;
}

export namespace CreateOrganizationResponse {
  export type AsObject = {
  }
}

export class GetOrganizationRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationRequest): GetOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationRequest;
  static deserializeBinaryFromReader(message: GetOrganizationRequest, reader: jspb.BinaryReader): GetOrganizationRequest;
}

export namespace GetOrganizationRequest {
  export type AsObject = {
    organizationId: number,
  }
}

export class GetOrganizationResponse extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): deployment_organization_pb.Organization | undefined;
  setOrganization(value?: deployment_organization_pb.Organization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationResponse): GetOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationResponse;
  static deserializeBinaryFromReader(message: GetOrganizationResponse, reader: jspb.BinaryReader): GetOrganizationResponse;
}

export namespace GetOrganizationResponse {
  export type AsObject = {
    organization?: deployment_organization_pb.Organization.AsObject,
  }
}

export class GetOrganizationsRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationsRequest): GetOrganizationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationsRequest;
  static deserializeBinaryFromReader(message: GetOrganizationsRequest, reader: jspb.BinaryReader): GetOrganizationsRequest;
}

export namespace GetOrganizationsRequest {
  export type AsObject = {
    organizationId: number,
  }
}

export class GetOrganizationsResponse extends jspb.Message {
  clearOrganizationsList(): void;
  getOrganizationsList(): Array<deployment_organization_pb.Organization>;
  setOrganizationsList(value: Array<deployment_organization_pb.Organization>): void;
  addOrganizations(value?: deployment_organization_pb.Organization, index?: number): deployment_organization_pb.Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationsResponse): GetOrganizationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationsResponse;
  static deserializeBinaryFromReader(message: GetOrganizationsResponse, reader: jspb.BinaryReader): GetOrganizationsResponse;
}

export namespace GetOrganizationsResponse {
  export type AsObject = {
    organizationsList: Array<deployment_organization_pb.Organization.AsObject>,
  }
}

export class GetMembersRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMembersRequest): GetMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMembersRequest;
  static deserializeBinaryFromReader(message: GetMembersRequest, reader: jspb.BinaryReader): GetMembersRequest;
}

export namespace GetMembersRequest {
  export type AsObject = {
    organizationId: number,
  }
}

export class GetMembersResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMembersResponse): GetMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMembersResponse;
  static deserializeBinaryFromReader(message: GetMembersResponse, reader: jspb.BinaryReader): GetMembersResponse;
}

export namespace GetMembersResponse {
  export type AsObject = {
  }
}

export class CreateMemberInviteRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMemberInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMemberInviteRequest): CreateMemberInviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMemberInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMemberInviteRequest;
  static deserializeBinaryFromReader(message: CreateMemberInviteRequest, reader: jspb.BinaryReader): CreateMemberInviteRequest;
}

export namespace CreateMemberInviteRequest {
  export type AsObject = {
    organizationId: number,
    email: string,
  }
}

export class CreateMemberInviteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMemberInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMemberInviteResponse): CreateMemberInviteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMemberInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMemberInviteResponse;
  static deserializeBinaryFromReader(message: CreateMemberInviteResponse, reader: jspb.BinaryReader): CreateMemberInviteResponse;
}

export namespace CreateMemberInviteResponse {
  export type AsObject = {
  }
}


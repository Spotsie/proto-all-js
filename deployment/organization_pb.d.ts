// package: deployment
// file: deployment/organization.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GeoPoint extends jspb.Message {
  getLongitude(): number;
  setLongitude(value: number): void;

  getLatitude(): number;
  setLatitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoPoint.AsObject;
  static toObject(includeInstance: boolean, msg: GeoPoint): GeoPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoPoint;
  static deserializeBinaryFromReader(message: GeoPoint, reader: jspb.BinaryReader): GeoPoint;
}

export namespace GeoPoint {
  export type AsObject = {
    longitude: number,
    latitude: number,
  }
}

export class Zone extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): Zone.Config | undefined;
  setConfig(value?: Zone.Config): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Zone.AsObject;
  static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Zone;
  static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
}

export namespace Zone {
  export type AsObject = {
    id: number,
    config?: Zone.Config.AsObject,
  }

  export class Config extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getGeoJson(): string;
    setGeoJson(value: string): void;

    clearPositioningReferentsList(): void;
    getPositioningReferentsList(): Array<number>;
    setPositioningReferentsList(value: Array<number>): void;
    addPositioningReferents(value: number, index?: number): number;

    getDeploymentId(): number;
    setDeploymentId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      name: string,
      geoJson: string,
      positioningReferentsList: Array<number>,
      deploymentId: number,
    }
  }
}

export class Deployment extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  clearZonesList(): void;
  getZonesList(): Array<number>;
  setZonesList(value: Array<number>): void;
  addZones(value: number, index?: number): number;

  getType(): Deployment.TypeMap[keyof Deployment.TypeMap];
  setType(value: Deployment.TypeMap[keyof Deployment.TypeMap]): void;

  getNamespaceId(): number;
  setNamespaceId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployment.AsObject;
  static toObject(includeInstance: boolean, msg: Deployment): Deployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Deployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployment;
  static deserializeBinaryFromReader(message: Deployment, reader: jspb.BinaryReader): Deployment;
}

export namespace Deployment {
  export type AsObject = {
    id: number,
    name: string,
    organizationId: number,
    zonesList: Array<number>,
    type: Deployment.TypeMap[keyof Deployment.TypeMap],
    namespaceId: number,
  }

  export interface TypeMap {
    UNKNOWN: 0;
    POINT: 1;
    MULTILATERATION: 2;
  }

  export const Type: TypeMap;
}

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getEmail(): string;
  setEmail(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
  }
}

export class PositioningReferent extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getDeviceId(): number;
  setDeviceId(value: number): void;

  getReferentType(): PositioningReferent.DeviceTypeMap[keyof PositioningReferent.DeviceTypeMap];
  setReferentType(value: PositioningReferent.DeviceTypeMap[keyof PositioningReferent.DeviceTypeMap]): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): GeoPoint | undefined;
  setLocation(value?: GeoPoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositioningReferent.AsObject;
  static toObject(includeInstance: boolean, msg: PositioningReferent): PositioningReferent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositioningReferent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositioningReferent;
  static deserializeBinaryFromReader(message: PositioningReferent, reader: jspb.BinaryReader): PositioningReferent;
}

export namespace PositioningReferent {
  export type AsObject = {
    id: number,
    deviceId: number,
    referentType: PositioningReferent.DeviceTypeMap[keyof PositioningReferent.DeviceTypeMap],
    organizationId: number,
    location?: GeoPoint.AsObject,
  }

  export interface DeviceTypeMap {
    UNDEFINED: 0;
    BLE_GATEWAY: 1;
    BEACON: 2;
  }

  export const DeviceType: DeviceTypeMap;
}

export class Organization extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getName(): string;
  setName(value: string): void;

  getShortName(): string;
  setShortName(value: string): void;

  getNamespaceId(): number;
  setNamespaceId(value: number): void;

  getWebsite(): string;
  setWebsite(value: string): void;

  clearDeploymentsList(): void;
  getDeploymentsList(): Array<number>;
  setDeploymentsList(value: Array<number>): void;
  addDeployments(value: number, index?: number): number;

  clearMembersList(): void;
  getMembersList(): Array<number>;
  setMembersList(value: Array<number>): void;
  addMembers(value: number, index?: number): number;

  clearPositioningReferentsList(): void;
  getPositioningReferentsList(): Array<number>;
  setPositioningReferentsList(value: Array<number>): void;
  addPositioningReferents(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    shortName: string,
    namespaceId: number,
    website: string,
    deploymentsList: Array<number>,
    membersList: Array<number>,
    positioningReferentsList: Array<number>,
  }

  export class Member extends jspb.Message {
    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): void;

    getRole(): Organization.Member.RoleMap[keyof Organization.Member.RoleMap];
    setRole(value: Organization.Member.RoleMap[keyof Organization.Member.RoleMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Member.AsObject;
    static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Member;
    static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
  }

  export namespace Member {
    export type AsObject = {
      user?: User.AsObject,
      role: Organization.Member.RoleMap[keyof Organization.Member.RoleMap],
    }

    export interface RoleMap {
      UNKNOWN: 0;
      USER: 1;
      ADMIN: 2;
    }

    export const Role: RoleMap;
  }
}


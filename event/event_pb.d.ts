// package: event
// file: event/event.proto

import * as jspb from "google-protobuf";
import * as domain_domain_pb from "../domain/domain_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BeaconObservationsEvent extends jspb.Message {
  getDeploymentId(): number;
  setDeploymentId(value: number): void;

  hasBeacon(): boolean;
  clearBeacon(): void;
  getBeacon(): domain_domain_pb.Beacon | undefined;
  setBeacon(value?: domain_domain_pb.Beacon): void;

  clearObservationsList(): void;
  getObservationsList(): Array<domain_domain_pb.Observation>;
  setObservationsList(value: Array<domain_domain_pb.Observation>): void;
  addObservations(value?: domain_domain_pb.Observation, index?: number): domain_domain_pb.Observation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconObservationsEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconObservationsEvent): BeaconObservationsEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconObservationsEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconObservationsEvent;
  static deserializeBinaryFromReader(message: BeaconObservationsEvent, reader: jspb.BinaryReader): BeaconObservationsEvent;
}

export namespace BeaconObservationsEvent {
  export type AsObject = {
    deploymentId: number,
    beacon?: domain_domain_pb.Beacon.AsObject,
    observationsList: Array<domain_domain_pb.Observation.AsObject>,
  }
}

export class BeaconObservationEvent extends jspb.Message {
  hasObservation(): boolean;
  clearObservation(): void;
  getObservation(): domain_domain_pb.Observation | undefined;
  setObservation(value?: domain_domain_pb.Observation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconObservationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconObservationEvent): BeaconObservationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconObservationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconObservationEvent;
  static deserializeBinaryFromReader(message: BeaconObservationEvent, reader: jspb.BinaryReader): BeaconObservationEvent;
}

export namespace BeaconObservationEvent {
  export type AsObject = {
    observation?: domain_domain_pb.Observation.AsObject,
  }
}

export class SubjectLocationUpdateEvent extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): domain_domain_pb.Subject | undefined;
  setSubject(value?: domain_domain_pb.Subject): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLocationId(): number;
  setLocationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubjectLocationUpdateEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SubjectLocationUpdateEvent): SubjectLocationUpdateEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubjectLocationUpdateEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubjectLocationUpdateEvent;
  static deserializeBinaryFromReader(message: SubjectLocationUpdateEvent, reader: jspb.BinaryReader): SubjectLocationUpdateEvent;
}

export namespace SubjectLocationUpdateEvent {
  export type AsObject = {
    subject?: domain_domain_pb.Subject.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    locationId: number,
  }
}

export class DeploymentCreatedEvent extends jspb.Message {
  getDeploymentId(): number;
  setDeploymentId(value: number): void;

  hasModel(): boolean;
  clearModel(): void;
  getModel(): domain_domain_pb.DeploymentDto | undefined;
  setModel(value?: domain_domain_pb.DeploymentDto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentCreatedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentCreatedEvent): DeploymentCreatedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentCreatedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentCreatedEvent;
  static deserializeBinaryFromReader(message: DeploymentCreatedEvent, reader: jspb.BinaryReader): DeploymentCreatedEvent;
}

export namespace DeploymentCreatedEvent {
  export type AsObject = {
    deploymentId: number,
    model?: domain_domain_pb.DeploymentDto.AsObject,
  }
}

export class DeploymentDeletedEvent extends jspb.Message {
  getDeploymentId(): number;
  setDeploymentId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentDeletedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentDeletedEvent): DeploymentDeletedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentDeletedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentDeletedEvent;
  static deserializeBinaryFromReader(message: DeploymentDeletedEvent, reader: jspb.BinaryReader): DeploymentDeletedEvent;
}

export namespace DeploymentDeletedEvent {
  export type AsObject = {
    deploymentId: number,
  }
}

export class DeploymentUpdatedEvent extends jspb.Message {
  getDeploymentId(): number;
  setDeploymentId(value: number): void;

  hasModel(): boolean;
  clearModel(): void;
  getModel(): domain_domain_pb.DeploymentDto | undefined;
  setModel(value?: domain_domain_pb.DeploymentDto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentUpdatedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentUpdatedEvent): DeploymentUpdatedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentUpdatedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentUpdatedEvent;
  static deserializeBinaryFromReader(message: DeploymentUpdatedEvent, reader: jspb.BinaryReader): DeploymentUpdatedEvent;
}

export namespace DeploymentUpdatedEvent {
  export type AsObject = {
    deploymentId: number,
    model?: domain_domain_pb.DeploymentDto.AsObject,
  }
}

export class DeviceDiscovery extends jspb.Message {
  getDeploymentId(): number;
  setDeploymentId(value: number): void;

  hasModel(): boolean;
  clearModel(): void;
  getModel(): domain_domain_pb.DeploymentDto | undefined;
  setModel(value?: domain_domain_pb.DeploymentDto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceDiscovery.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceDiscovery): DeviceDiscovery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceDiscovery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceDiscovery;
  static deserializeBinaryFromReader(message: DeviceDiscovery, reader: jspb.BinaryReader): DeviceDiscovery;
}

export namespace DeviceDiscovery {
  export type AsObject = {
    deploymentId: number,
    model?: domain_domain_pb.DeploymentDto.AsObject,
  }
}


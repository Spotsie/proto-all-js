// package: event
// file: event/event.proto

import * as jspb from "google-protobuf";
import * as domain_domain_pb from "../domain/domain_pb";

export class Observation extends jspb.Message {
  getGatewayid(): number;
  setGatewayid(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getDeltaus(): number;
  setDeltaus(value: number): void;

  getRssi(): number;
  setRssi(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Observation.AsObject;
  static toObject(includeInstance: boolean, msg: Observation): Observation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Observation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Observation;
  static deserializeBinaryFromReader(message: Observation, reader: jspb.BinaryReader): Observation;
}

export namespace Observation {
  export type AsObject = {
    gatewayid: number,
    timestamp: number,
    deltaus: number,
    rssi: number,
  }
}

export class BeaconObservationsEvent extends jspb.Message {
  getDeploymentid(): string;
  setDeploymentid(value: string): void;

  hasBeacon(): boolean;
  clearBeacon(): void;
  getBeacon(): domain_domain_pb.Beacon | undefined;
  setBeacon(value?: domain_domain_pb.Beacon): void;

  clearObservationsList(): void;
  getObservationsList(): Array<Observation>;
  setObservationsList(value: Array<Observation>): void;
  addObservations(value?: Observation, index?: number): Observation;

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
    deploymentid: string,
    beacon?: domain_domain_pb.Beacon.AsObject,
    observationsList: Array<Observation.AsObject>,
  }
}

export class RawBeaconObservationEvent extends jspb.Message {
  getDeploymentid(): string;
  setDeploymentid(value: string): void;

  hasObservation(): boolean;
  clearObservation(): void;
  getObservation(): domain_domain_pb.ObservationDto | undefined;
  setObservation(value?: domain_domain_pb.ObservationDto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawBeaconObservationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: RawBeaconObservationEvent): RawBeaconObservationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RawBeaconObservationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawBeaconObservationEvent;
  static deserializeBinaryFromReader(message: RawBeaconObservationEvent, reader: jspb.BinaryReader): RawBeaconObservationEvent;
}

export namespace RawBeaconObservationEvent {
  export type AsObject = {
    deploymentid: string,
    observation?: domain_domain_pb.ObservationDto.AsObject,
  }
}

export class BeaconPositionUpdateEvent extends jspb.Message {
  hasBeacon(): boolean;
  clearBeacon(): void;
  getBeacon(): domain_domain_pb.Beacon | undefined;
  setBeacon(value?: domain_domain_pb.Beacon): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): domain_domain_pb.Point | undefined;
  setPosition(value?: domain_domain_pb.Point): void;

  getZoneid(): string;
  setZoneid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconPositionUpdateEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconPositionUpdateEvent): BeaconPositionUpdateEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconPositionUpdateEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconPositionUpdateEvent;
  static deserializeBinaryFromReader(message: BeaconPositionUpdateEvent, reader: jspb.BinaryReader): BeaconPositionUpdateEvent;
}

export namespace BeaconPositionUpdateEvent {
  export type AsObject = {
    beacon?: domain_domain_pb.Beacon.AsObject,
    position?: domain_domain_pb.Point.AsObject,
    zoneid: string,
  }
}

export class DeploymentCreatedEvent extends jspb.Message {
  getDeploymentid(): string;
  setDeploymentid(value: string): void;

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
    deploymentid: string,
    model?: domain_domain_pb.DeploymentDto.AsObject,
  }
}

export class DeploymentDeletedEvent extends jspb.Message {
  getDeploymentid(): string;
  setDeploymentid(value: string): void;

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
    deploymentid: string,
  }
}

export class DeploymentUpdatedEvent extends jspb.Message {
  getDeploymentid(): string;
  setDeploymentid(value: string): void;

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
    deploymentid: string,
    model?: domain_domain_pb.DeploymentDto.AsObject,
  }
}


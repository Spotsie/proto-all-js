// package: device
// file: device/device.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Device extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getHardwareId(): number;
  setHardwareId(value: number): void;

  hasLastPing(): boolean;
  clearLastPing(): void;
  getLastPing(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastPing(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearSessionsList(): void;
  getSessionsList(): Array<Session>;
  setSessionsList(value: Array<Session>): void;
  addSessions(value?: Session, index?: number): Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    id: number,
    hardwareId: number,
    lastPing?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sessionsList: Array<Session.AsObject>,
  }
}

export class Session extends jspb.Message {
  getDeviceId(): number;
  setDeviceId(value: number): void;

  hasFirstPingAt(): boolean;
  clearFirstPingAt(): void;
  getFirstPingAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstPingAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastPingAt(): boolean;
  clearLastPingAt(): void;
  getLastPingAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastPingAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTest(): number;
  setTest(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    deviceId: number,
    firstPingAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastPingAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    test: number,
  }
}


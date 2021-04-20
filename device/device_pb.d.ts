// package: device
// file: device/device.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Device extends jspb.Message {
  getInt(): number;
  setInt(value: number): void;

  getSerialId(): number;
  setSerialId(value: number): void;

  getLastPing(): number;
  setLastPing(value: number): void;

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
    pb_int: number,
    serialId: number,
    lastPing: number,
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
  }
}


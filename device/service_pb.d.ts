// package: device
// file: device/service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as device_device_pb from "../device/device_pb";

export class GetDevicesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevicesRequest): GetDevicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevicesRequest;
  static deserializeBinaryFromReader(message: GetDevicesRequest, reader: jspb.BinaryReader): GetDevicesRequest;
}

export namespace GetDevicesRequest {
  export type AsObject = {
  }
}

export class GetDevicesResponse extends jspb.Message {
  clearDevicesList(): void;
  getDevicesList(): Array<device_device_pb.Device>;
  setDevicesList(value: Array<device_device_pb.Device>): void;
  addDevices(value?: device_device_pb.Device, index?: number): device_device_pb.Device;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevicesResponse): GetDevicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevicesResponse;
  static deserializeBinaryFromReader(message: GetDevicesResponse, reader: jspb.BinaryReader): GetDevicesResponse;
}

export namespace GetDevicesResponse {
  export type AsObject = {
    devicesList: Array<device_device_pb.Device.AsObject>,
  }
}

export class AddDeviceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddDeviceRequest): AddDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDeviceRequest;
  static deserializeBinaryFromReader(message: AddDeviceRequest, reader: jspb.BinaryReader): AddDeviceRequest;
}

export namespace AddDeviceRequest {
  export type AsObject = {
  }
}

export class AddDeviceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddDeviceResponse): AddDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDeviceResponse;
  static deserializeBinaryFromReader(message: AddDeviceResponse, reader: jspb.BinaryReader): AddDeviceResponse;
}

export namespace AddDeviceResponse {
  export type AsObject = {
  }
}


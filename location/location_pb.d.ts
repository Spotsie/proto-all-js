// package: location
// file: location/location.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as domain_domain_pb from "../domain/domain_pb";

export class LocationHistoryRecord extends jspb.Message {
  getZone(): number;
  setZone(value: number): void;

  hasFromTime(): boolean;
  clearFromTime(): void;
  getFromTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasToTime(): boolean;
  clearToTime(): void;
  getToTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setToTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationHistoryRecord.AsObject;
  static toObject(includeInstance: boolean, msg: LocationHistoryRecord): LocationHistoryRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationHistoryRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationHistoryRecord;
  static deserializeBinaryFromReader(message: LocationHistoryRecord, reader: jspb.BinaryReader): LocationHistoryRecord;
}

export namespace LocationHistoryRecord {
  export type AsObject = {
    zone: number,
    fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class LatLng extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LatLng.AsObject;
  static toObject(includeInstance: boolean, msg: LatLng): LatLng.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LatLng, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LatLng;
  static deserializeBinaryFromReader(message: LatLng, reader: jspb.BinaryReader): LatLng;
}

export namespace LatLng {
  export type AsObject = {
    latitude: number,
    longitude: number,
  }
}

export class GeoLocationHistoryRecord extends jspb.Message {
  hasCoordinates(): boolean;
  clearCoordinates(): void;
  getCoordinates(): LatLng | undefined;
  setCoordinates(value?: LatLng): void;

  hasFromTime(): boolean;
  clearFromTime(): void;
  getFromTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasToTime(): boolean;
  clearToTime(): void;
  getToTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setToTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoLocationHistoryRecord.AsObject;
  static toObject(includeInstance: boolean, msg: GeoLocationHistoryRecord): GeoLocationHistoryRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoLocationHistoryRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoLocationHistoryRecord;
  static deserializeBinaryFromReader(message: GeoLocationHistoryRecord, reader: jspb.BinaryReader): GeoLocationHistoryRecord;
}

export namespace GeoLocationHistoryRecord {
  export type AsObject = {
    coordinates?: LatLng.AsObject,
    fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}


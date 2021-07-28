// package: domain
// file: domain/service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as domain_domain_pb from "../domain/domain_pb";

export class GetBeaconTimelineRequest extends jspb.Message {
  hasBeacon(): boolean;
  clearBeacon(): void;
  getBeacon(): domain_domain_pb.Beacon | undefined;
  setBeacon(value?: domain_domain_pb.Beacon): void;

  hasFromTime(): boolean;
  clearFromTime(): void;
  getFromTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasToTime(): boolean;
  clearToTime(): void;
  getToTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setToTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBeaconTimelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBeaconTimelineRequest): GetBeaconTimelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBeaconTimelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBeaconTimelineRequest;
  static deserializeBinaryFromReader(message: GetBeaconTimelineRequest, reader: jspb.BinaryReader): GetBeaconTimelineRequest;
}

export namespace GetBeaconTimelineRequest {
  export type AsObject = {
    beacon?: domain_domain_pb.Beacon.AsObject,
    fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetBeaconTimelineResponse extends jspb.Message {
  clearRecordsList(): void;
  getRecordsList(): Array<LocationRecord>;
  setRecordsList(value: Array<LocationRecord>): void;
  addRecords(value?: LocationRecord, index?: number): LocationRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBeaconTimelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBeaconTimelineResponse): GetBeaconTimelineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBeaconTimelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBeaconTimelineResponse;
  static deserializeBinaryFromReader(message: GetBeaconTimelineResponse, reader: jspb.BinaryReader): GetBeaconTimelineResponse;
}

export namespace GetBeaconTimelineResponse {
  export type AsObject = {
    recordsList: Array<LocationRecord.AsObject>,
  }
}

export class LocationRecord extends jspb.Message {
  getZone(): string;
  setZone(value: string): void;

  hasFromTime(): boolean;
  clearFromTime(): void;
  getFromTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasToTime(): boolean;
  clearToTime(): void;
  getToTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setToTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationRecord.AsObject;
  static toObject(includeInstance: boolean, msg: LocationRecord): LocationRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationRecord;
  static deserializeBinaryFromReader(message: LocationRecord, reader: jspb.BinaryReader): LocationRecord;
}

export namespace LocationRecord {
  export type AsObject = {
    zone: string,
    fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class BeaconTimeline extends jspb.Message {
  hasBeacon(): boolean;
  clearBeacon(): void;
  getBeacon(): domain_domain_pb.Beacon | undefined;
  setBeacon(value?: domain_domain_pb.Beacon): void;

  clearRecordsList(): void;
  getRecordsList(): Array<LocationRecord>;
  setRecordsList(value: Array<LocationRecord>): void;
  addRecords(value?: LocationRecord, index?: number): LocationRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconTimeline.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconTimeline): BeaconTimeline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconTimeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconTimeline;
  static deserializeBinaryFromReader(message: BeaconTimeline, reader: jspb.BinaryReader): BeaconTimeline;
}

export namespace BeaconTimeline {
  export type AsObject = {
    beacon?: domain_domain_pb.Beacon.AsObject,
    recordsList: Array<LocationRecord.AsObject>,
  }
}


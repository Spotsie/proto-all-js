// package: location
// file: location/service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as domain_domain_pb from "../domain/domain_pb";
import * as location_location_pb from "../location/location_pb";

export class GetLocationHistoryRequest extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): domain_domain_pb.Subject | undefined;
  setSubject(value?: domain_domain_pb.Subject): void;

  hasFromTime(): boolean;
  clearFromTime(): void;
  getFromTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasToTime(): boolean;
  clearToTime(): void;
  getToTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setToTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationHistoryRequest): GetLocationHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLocationHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationHistoryRequest;
  static deserializeBinaryFromReader(message: GetLocationHistoryRequest, reader: jspb.BinaryReader): GetLocationHistoryRequest;
}

export namespace GetLocationHistoryRequest {
  export type AsObject = {
    subject?: domain_domain_pb.Subject.AsObject,
    fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetLocationHistoryResponse extends jspb.Message {
  clearRecordsList(): void;
  getRecordsList(): Array<location_location_pb.LocationHistoryRecord>;
  setRecordsList(value: Array<location_location_pb.LocationHistoryRecord>): void;
  addRecords(value?: location_location_pb.LocationHistoryRecord, index?: number): location_location_pb.LocationHistoryRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationHistoryResponse): GetLocationHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLocationHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationHistoryResponse;
  static deserializeBinaryFromReader(message: GetLocationHistoryResponse, reader: jspb.BinaryReader): GetLocationHistoryResponse;
}

export namespace GetLocationHistoryResponse {
  export type AsObject = {
    recordsList: Array<location_location_pb.LocationHistoryRecord.AsObject>,
  }
}

export class LocationHistory extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): domain_domain_pb.Subject | undefined;
  setSubject(value?: domain_domain_pb.Subject): void;

  clearRecordsList(): void;
  getRecordsList(): Array<location_location_pb.LocationHistoryRecord>;
  setRecordsList(value: Array<location_location_pb.LocationHistoryRecord>): void;
  addRecords(value?: location_location_pb.LocationHistoryRecord, index?: number): location_location_pb.LocationHistoryRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationHistory.AsObject;
  static toObject(includeInstance: boolean, msg: LocationHistory): LocationHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationHistory;
  static deserializeBinaryFromReader(message: LocationHistory, reader: jspb.BinaryReader): LocationHistory;
}

export namespace LocationHistory {
  export type AsObject = {
    subject?: domain_domain_pb.Subject.AsObject,
    recordsList: Array<location_location_pb.LocationHistoryRecord.AsObject>,
  }
}

export class GetRealtimeLocationRequest extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): domain_domain_pb.Subject | undefined;
  setSubject(value?: domain_domain_pb.Subject): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRealtimeLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRealtimeLocationRequest): GetRealtimeLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRealtimeLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRealtimeLocationRequest;
  static deserializeBinaryFromReader(message: GetRealtimeLocationRequest, reader: jspb.BinaryReader): GetRealtimeLocationRequest;
}

export namespace GetRealtimeLocationRequest {
  export type AsObject = {
    subject?: domain_domain_pb.Subject.AsObject,
  }
}

export class GetRealtimeLocationResponse extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetRealtimeLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRealtimeLocationResponse): GetRealtimeLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRealtimeLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRealtimeLocationResponse;
  static deserializeBinaryFromReader(message: GetRealtimeLocationResponse, reader: jspb.BinaryReader): GetRealtimeLocationResponse;
}

export namespace GetRealtimeLocationResponse {
  export type AsObject = {
    subject?: domain_domain_pb.Subject.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    locationId: number,
  }
}


// package: location
// file: location/service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as domain_domain_pb from "../domain/domain_pb";
import * as location_location_pb from "../location/location_pb";

export class GetLocationHistoryRequest extends jspb.Message {
  clearSubjectsList(): void;
  getSubjectsList(): Array<domain_domain_pb.Subject>;
  setSubjectsList(value: Array<domain_domain_pb.Subject>): void;
  addSubjects(value?: domain_domain_pb.Subject, index?: number): domain_domain_pb.Subject;

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
    subjectsList: Array<domain_domain_pb.Subject.AsObject>,
    fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetLocationHistoryResponse extends jspb.Message {
  getSubjectLocationHistoryMap(): jspb.Map<number, LocationHistory>;
  clearSubjectLocationHistoryMap(): void;
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
    subjectLocationHistoryMap: Array<[number, LocationHistory.AsObject]>,
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

export class GeoLocationHistory extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): domain_domain_pb.Subject | undefined;
  setSubject(value?: domain_domain_pb.Subject): void;

  clearRecordsList(): void;
  getRecordsList(): Array<location_location_pb.GeoLocationHistoryRecord>;
  setRecordsList(value: Array<location_location_pb.GeoLocationHistoryRecord>): void;
  addRecords(value?: location_location_pb.GeoLocationHistoryRecord, index?: number): location_location_pb.GeoLocationHistoryRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoLocationHistory.AsObject;
  static toObject(includeInstance: boolean, msg: GeoLocationHistory): GeoLocationHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoLocationHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoLocationHistory;
  static deserializeBinaryFromReader(message: GeoLocationHistory, reader: jspb.BinaryReader): GeoLocationHistory;
}

export namespace GeoLocationHistory {
  export type AsObject = {
    subject?: domain_domain_pb.Subject.AsObject,
    recordsList: Array<location_location_pb.GeoLocationHistoryRecord.AsObject>,
  }
}

export class GetGeoLocationHistoryRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetGeoLocationHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGeoLocationHistoryRequest): GetGeoLocationHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGeoLocationHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGeoLocationHistoryRequest;
  static deserializeBinaryFromReader(message: GetGeoLocationHistoryRequest, reader: jspb.BinaryReader): GetGeoLocationHistoryRequest;
}

export namespace GetGeoLocationHistoryRequest {
  export type AsObject = {
    subject?: domain_domain_pb.Subject.AsObject,
    fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetGeoLocationHistoryResponse extends jspb.Message {
  getSubjectGeoLocationHistoryMap(): jspb.Map<number, GeoLocationHistory>;
  clearSubjectGeoLocationHistoryMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGeoLocationHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGeoLocationHistoryResponse): GetGeoLocationHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGeoLocationHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGeoLocationHistoryResponse;
  static deserializeBinaryFromReader(message: GetGeoLocationHistoryResponse, reader: jspb.BinaryReader): GetGeoLocationHistoryResponse;
}

export namespace GetGeoLocationHistoryResponse {
  export type AsObject = {
    subjectGeoLocationHistoryMap: Array<[number, GeoLocationHistory.AsObject]>,
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

export class GetSubjectLocationsAtRequest extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNamespace(): number;
  setNamespace(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubjectLocationsAtRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubjectLocationsAtRequest): GetSubjectLocationsAtRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSubjectLocationsAtRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubjectLocationsAtRequest;
  static deserializeBinaryFromReader(message: GetSubjectLocationsAtRequest, reader: jspb.BinaryReader): GetSubjectLocationsAtRequest;
}

export namespace GetSubjectLocationsAtRequest {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    namespace: number,
  }
}

export class GetSubjectLocationsAtResponse extends jspb.Message {
  getSubjectLocationsMap(): jspb.Map<number, number>;
  clearSubjectLocationsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubjectLocationsAtResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubjectLocationsAtResponse): GetSubjectLocationsAtResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSubjectLocationsAtResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubjectLocationsAtResponse;
  static deserializeBinaryFromReader(message: GetSubjectLocationsAtResponse, reader: jspb.BinaryReader): GetSubjectLocationsAtResponse;
}

export namespace GetSubjectLocationsAtResponse {
  export type AsObject = {
    subjectLocationsMap: Array<[number, number]>,
  }
}


// package: location
// file: location/service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as domain_domain_pb from "../domain/domain_pb";
import * as location_location_pb from "../location/location_pb";

export class GetSubjectTimelineRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetSubjectTimelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubjectTimelineRequest): GetSubjectTimelineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSubjectTimelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubjectTimelineRequest;
  static deserializeBinaryFromReader(message: GetSubjectTimelineRequest, reader: jspb.BinaryReader): GetSubjectTimelineRequest;
}

export namespace GetSubjectTimelineRequest {
  export type AsObject = {
    subject?: domain_domain_pb.Subject.AsObject,
    fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetSubjectTimelineResponse extends jspb.Message {
  clearRecordsList(): void;
  getRecordsList(): Array<location_location_pb.TimelineRecord>;
  setRecordsList(value: Array<location_location_pb.TimelineRecord>): void;
  addRecords(value?: location_location_pb.TimelineRecord, index?: number): location_location_pb.TimelineRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubjectTimelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubjectTimelineResponse): GetSubjectTimelineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSubjectTimelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubjectTimelineResponse;
  static deserializeBinaryFromReader(message: GetSubjectTimelineResponse, reader: jspb.BinaryReader): GetSubjectTimelineResponse;
}

export namespace GetSubjectTimelineResponse {
  export type AsObject = {
    recordsList: Array<location_location_pb.TimelineRecord.AsObject>,
  }
}

export class SubjectTimeline extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): domain_domain_pb.Subject | undefined;
  setSubject(value?: domain_domain_pb.Subject): void;

  clearRecordsList(): void;
  getRecordsList(): Array<location_location_pb.TimelineRecord>;
  setRecordsList(value: Array<location_location_pb.TimelineRecord>): void;
  addRecords(value?: location_location_pb.TimelineRecord, index?: number): location_location_pb.TimelineRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubjectTimeline.AsObject;
  static toObject(includeInstance: boolean, msg: SubjectTimeline): SubjectTimeline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubjectTimeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubjectTimeline;
  static deserializeBinaryFromReader(message: SubjectTimeline, reader: jspb.BinaryReader): SubjectTimeline;
}

export namespace SubjectTimeline {
  export type AsObject = {
    subject?: domain_domain_pb.Subject.AsObject,
    recordsList: Array<location_location_pb.TimelineRecord.AsObject>,
  }
}


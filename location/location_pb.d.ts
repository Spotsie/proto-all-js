// package: location
// file: location/location.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as domain_domain_pb from "../domain/domain_pb";

export class TimelineRecord extends jspb.Message {
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
  toObject(includeInstance?: boolean): TimelineRecord.AsObject;
  static toObject(includeInstance: boolean, msg: TimelineRecord): TimelineRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimelineRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimelineRecord;
  static deserializeBinaryFromReader(message: TimelineRecord, reader: jspb.BinaryReader): TimelineRecord;
}

export namespace TimelineRecord {
  export type AsObject = {
    zone: string,
    fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}


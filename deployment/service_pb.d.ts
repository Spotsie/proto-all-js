// package: deployment
// file: deployment/service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as domain_domain_pb from "../domain/domain_pb";

export class BeaconLocationUpdateStreamRequest extends jspb.Message {
  clearBeaconFilterList(): void;
  getBeaconFilterList(): Array<domain_domain_pb.Beacon>;
  setBeaconFilterList(value: Array<domain_domain_pb.Beacon>): void;
  addBeaconFilter(value?: domain_domain_pb.Beacon, index?: number): domain_domain_pb.Beacon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconLocationUpdateStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconLocationUpdateStreamRequest): BeaconLocationUpdateStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconLocationUpdateStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconLocationUpdateStreamRequest;
  static deserializeBinaryFromReader(message: BeaconLocationUpdateStreamRequest, reader: jspb.BinaryReader): BeaconLocationUpdateStreamRequest;
}

export namespace BeaconLocationUpdateStreamRequest {
  export type AsObject = {
    beaconFilterList: Array<domain_domain_pb.Beacon.AsObject>,
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

export class LocationHistory extends jspb.Message {
  getZoneStatsMap(): jspb.Map<string, LocationHistory.ZoneStats>;
  clearZoneStatsMap(): void;
  clearLocationRecordsList(): void;
  getLocationRecordsList(): Array<LocationRecord>;
  setLocationRecordsList(value: Array<LocationRecord>): void;
  addLocationRecords(value?: LocationRecord, index?: number): LocationRecord;

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
    zoneStatsMap: Array<[string, LocationHistory.ZoneStats.AsObject]>,
    locationRecordsList: Array<LocationRecord.AsObject>,
  }

  export class ZoneStats extends jspb.Message {
    getZone(): string;
    setZone(value: string): void;

    getPercentage(): number;
    setPercentage(value: number): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZoneStats.AsObject;
    static toObject(includeInstance: boolean, msg: ZoneStats): ZoneStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZoneStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZoneStats;
    static deserializeBinaryFromReader(message: ZoneStats, reader: jspb.BinaryReader): ZoneStats;
  }

  export namespace ZoneStats {
    export type AsObject = {
      zone: string,
      percentage: number,
      duration?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }
}

export class BeaconLocationUpdate extends jspb.Message {
  getZone(): string;
  setZone(value: string): void;

  hasBeacon(): boolean;
  clearBeacon(): void;
  getBeacon(): domain_domain_pb.Beacon | undefined;
  setBeacon(value?: domain_domain_pb.Beacon): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconLocationUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconLocationUpdate): BeaconLocationUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconLocationUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconLocationUpdate;
  static deserializeBinaryFromReader(message: BeaconLocationUpdate, reader: jspb.BinaryReader): BeaconLocationUpdate;
}

export namespace BeaconLocationUpdate {
  export type AsObject = {
    zone: string,
    beacon?: domain_domain_pb.Beacon.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetBeaconLocationHistoryRequest extends jspb.Message {
  hasFromTime(): boolean;
  clearFromTime(): void;
  getFromTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasToTime(): boolean;
  clearToTime(): void;
  getToTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setToTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearBeaconFilterList(): void;
  getBeaconFilterList(): Array<domain_domain_pb.Beacon>;
  setBeaconFilterList(value: Array<domain_domain_pb.Beacon>): void;
  addBeaconFilter(value?: domain_domain_pb.Beacon, index?: number): domain_domain_pb.Beacon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBeaconLocationHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBeaconLocationHistoryRequest): GetBeaconLocationHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBeaconLocationHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBeaconLocationHistoryRequest;
  static deserializeBinaryFromReader(message: GetBeaconLocationHistoryRequest, reader: jspb.BinaryReader): GetBeaconLocationHistoryRequest;
}

export namespace GetBeaconLocationHistoryRequest {
  export type AsObject = {
    fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    beaconFilterList: Array<domain_domain_pb.Beacon.AsObject>,
  }
}

export class GetBeaconLocationHistoryReply extends jspb.Message {
  getLocationhistoryMap(): jspb.Map<number, LocationHistory>;
  clearLocationhistoryMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBeaconLocationHistoryReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetBeaconLocationHistoryReply): GetBeaconLocationHistoryReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBeaconLocationHistoryReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBeaconLocationHistoryReply;
  static deserializeBinaryFromReader(message: GetBeaconLocationHistoryReply, reader: jspb.BinaryReader): GetBeaconLocationHistoryReply;
}

export namespace GetBeaconLocationHistoryReply {
  export type AsObject = {
    locationhistoryMap: Array<[number, LocationHistory.AsObject]>,
  }
}

export class GetNearbyBeaconsRequest extends jspb.Message {
  hasBeacon(): boolean;
  clearBeacon(): void;
  getBeacon(): domain_domain_pb.Beacon | undefined;
  setBeacon(value?: domain_domain_pb.Beacon): void;

  hasAirDistance(): boolean;
  clearAirDistance(): void;
  getAirDistance(): number;
  setAirDistance(value: number): void;

  hasWalkingDistance(): boolean;
  clearWalkingDistance(): void;
  getWalkingDistance(): number;
  setWalkingDistance(value: number): void;

  hasWalkingTime(): boolean;
  clearWalkingTime(): void;
  getWalkingTime(): google_protobuf_duration_pb.Duration | undefined;
  setWalkingTime(value?: google_protobuf_duration_pb.Duration): void;

  getLimit(): number;
  setLimit(value: number): void;

  getFilterCase(): GetNearbyBeaconsRequest.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNearbyBeaconsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNearbyBeaconsRequest): GetNearbyBeaconsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNearbyBeaconsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNearbyBeaconsRequest;
  static deserializeBinaryFromReader(message: GetNearbyBeaconsRequest, reader: jspb.BinaryReader): GetNearbyBeaconsRequest;
}

export namespace GetNearbyBeaconsRequest {
  export type AsObject = {
    beacon?: domain_domain_pb.Beacon.AsObject,
    airDistance: number,
    walkingDistance: number,
    walkingTime?: google_protobuf_duration_pb.Duration.AsObject,
    limit: number,
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    AIR_DISTANCE = 2,
    WALKING_DISTANCE = 3,
    WALKING_TIME = 4,
  }
}

export class GetNearbyBeaconsReply extends jspb.Message {
  clearBeaconList(): void;
  getBeaconList(): Array<domain_domain_pb.Beacon>;
  setBeaconList(value: Array<domain_domain_pb.Beacon>): void;
  addBeacon(value?: domain_domain_pb.Beacon, index?: number): domain_domain_pb.Beacon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNearbyBeaconsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetNearbyBeaconsReply): GetNearbyBeaconsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNearbyBeaconsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNearbyBeaconsReply;
  static deserializeBinaryFromReader(message: GetNearbyBeaconsReply, reader: jspb.BinaryReader): GetNearbyBeaconsReply;
}

export namespace GetNearbyBeaconsReply {
  export type AsObject = {
    beaconList: Array<domain_domain_pb.Beacon.AsObject>,
  }
}

export class BeaconEventStreamRequest extends jspb.Message {
  clearBeaconFilterList(): void;
  getBeaconFilterList(): Array<domain_domain_pb.Beacon>;
  setBeaconFilterList(value: Array<domain_domain_pb.Beacon>): void;
  addBeaconFilter(value?: domain_domain_pb.Beacon, index?: number): domain_domain_pb.Beacon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconEventStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconEventStreamRequest): BeaconEventStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconEventStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconEventStreamRequest;
  static deserializeBinaryFromReader(message: BeaconEventStreamRequest, reader: jspb.BinaryReader): BeaconEventStreamRequest;
}

export namespace BeaconEventStreamRequest {
  export type AsObject = {
    beaconFilterList: Array<domain_domain_pb.Beacon.AsObject>,
  }
}

export class BeaconEvent extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasBeacon(): boolean;
  clearBeacon(): void;
  getBeacon(): domain_domain_pb.Beacon | undefined;
  setBeacon(value?: domain_domain_pb.Beacon): void;

  hasLevelDrop(): boolean;
  clearLevelDrop(): void;
  getLevelDrop(): BeaconEvent.LevelDrop | undefined;
  setLevelDrop(value?: BeaconEvent.LevelDrop): void;

  getEventCase(): BeaconEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconEvent): BeaconEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconEvent;
  static deserializeBinaryFromReader(message: BeaconEvent, reader: jspb.BinaryReader): BeaconEvent;
}

export namespace BeaconEvent {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    beacon?: domain_domain_pb.Beacon.AsObject,
    levelDrop?: BeaconEvent.LevelDrop.AsObject,
  }

  export class LevelDrop extends jspb.Message {
    getPreviousZone(): string;
    setPreviousZone(value: string): void;

    getZone(): string;
    setZone(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LevelDrop.AsObject;
    static toObject(includeInstance: boolean, msg: LevelDrop): LevelDrop.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LevelDrop, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LevelDrop;
    static deserializeBinaryFromReader(message: LevelDrop, reader: jspb.BinaryReader): LevelDrop;
  }

  export namespace LevelDrop {
    export type AsObject = {
      previousZone: string,
      zone: string,
    }
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    LEVEL_DROP = 3,
  }
}

export class BeaconTimelineUpdateStreamRequest extends jspb.Message {
  clearBeaconFilterList(): void;
  getBeaconFilterList(): Array<domain_domain_pb.Beacon>;
  setBeaconFilterList(value: Array<domain_domain_pb.Beacon>): void;
  addBeaconFilter(value?: domain_domain_pb.Beacon, index?: number): domain_domain_pb.Beacon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconTimelineUpdateStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconTimelineUpdateStreamRequest): BeaconTimelineUpdateStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconTimelineUpdateStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconTimelineUpdateStreamRequest;
  static deserializeBinaryFromReader(message: BeaconTimelineUpdateStreamRequest, reader: jspb.BinaryReader): BeaconTimelineUpdateStreamRequest;
}

export namespace BeaconTimelineUpdateStreamRequest {
  export type AsObject = {
    beaconFilterList: Array<domain_domain_pb.Beacon.AsObject>,
  }
}

export class BeaconTimelineUpdateStreamReply extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBeaconTimelineMap(): jspb.Map<number, domain_domain_pb.BeaconTimeline>;
  clearBeaconTimelineMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconTimelineUpdateStreamReply.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconTimelineUpdateStreamReply): BeaconTimelineUpdateStreamReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconTimelineUpdateStreamReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconTimelineUpdateStreamReply;
  static deserializeBinaryFromReader(message: BeaconTimelineUpdateStreamReply, reader: jspb.BinaryReader): BeaconTimelineUpdateStreamReply;
}

export namespace BeaconTimelineUpdateStreamReply {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    beaconTimelineMap: Array<[number, domain_domain_pb.BeaconTimeline.AsObject]>,
  }
}

export class GetZonesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetZonesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetZonesRequest): GetZonesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetZonesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZonesRequest;
  static deserializeBinaryFromReader(message: GetZonesRequest, reader: jspb.BinaryReader): GetZonesRequest;
}

export namespace GetZonesRequest {
  export type AsObject = {
  }
}

export class GetZonesReply extends jspb.Message {
  clearZonesList(): void;
  getZonesList(): Array<string>;
  setZonesList(value: Array<string>): void;
  addZones(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetZonesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetZonesReply): GetZonesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetZonesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZonesReply;
  static deserializeBinaryFromReader(message: GetZonesReply, reader: jspb.BinaryReader): GetZonesReply;
}

export namespace GetZonesReply {
  export type AsObject = {
    zonesList: Array<string>,
  }
}

export class GetZoneHistoryRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): GetZoneHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetZoneHistoryRequest): GetZoneHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetZoneHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZoneHistoryRequest;
  static deserializeBinaryFromReader(message: GetZoneHistoryRequest, reader: jspb.BinaryReader): GetZoneHistoryRequest;
}

export namespace GetZoneHistoryRequest {
  export type AsObject = {
    zone: string,
    fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetZoneHistoryReply extends jspb.Message {
  getBeaconstatsMap(): jspb.Map<number, GetZoneHistoryReply.BeaconStats>;
  clearBeaconstatsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetZoneHistoryReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetZoneHistoryReply): GetZoneHistoryReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetZoneHistoryReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZoneHistoryReply;
  static deserializeBinaryFromReader(message: GetZoneHistoryReply, reader: jspb.BinaryReader): GetZoneHistoryReply;
}

export namespace GetZoneHistoryReply {
  export type AsObject = {
    beaconstatsMap: Array<[number, GetZoneHistoryReply.BeaconStats.AsObject]>,
  }

  export class BeaconStats extends jspb.Message {
    getZone(): string;
    setZone(value: string): void;

    getPercentage(): number;
    setPercentage(value: number): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BeaconStats.AsObject;
    static toObject(includeInstance: boolean, msg: BeaconStats): BeaconStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BeaconStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BeaconStats;
    static deserializeBinaryFromReader(message: BeaconStats, reader: jspb.BinaryReader): BeaconStats;
  }

  export namespace BeaconStats {
    export type AsObject = {
      zone: string,
      percentage: number,
      duration?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }
}

export class SaveImageRequest extends jspb.Message {
  getImageType(): string;
  setImageType(value: string): void;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveImageRequest): SaveImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveImageRequest;
  static deserializeBinaryFromReader(message: SaveImageRequest, reader: jspb.BinaryReader): SaveImageRequest;
}

export namespace SaveImageRequest {
  export type AsObject = {
    imageType: string,
    image: Uint8Array | string,
  }
}

export class SaveImageReply extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveImageReply.AsObject;
  static toObject(includeInstance: boolean, msg: SaveImageReply): SaveImageReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveImageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveImageReply;
  static deserializeBinaryFromReader(message: SaveImageReply, reader: jspb.BinaryReader): SaveImageReply;
}

export namespace SaveImageReply {
  export type AsObject = {
    id: string,
  }
}


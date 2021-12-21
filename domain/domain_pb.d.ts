// package: domain
// file: domain/domain.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Subject extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNamespace(): number;
  setNamespace(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subject.AsObject;
  static toObject(includeInstance: boolean, msg: Subject): Subject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Subject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subject;
  static deserializeBinaryFromReader(message: Subject, reader: jspb.BinaryReader): Subject;
}

export namespace Subject {
  export type AsObject = {
    id: number,
    namespace: number,
  }
}

export class Beacon extends jspb.Message {
  getMajor(): number;
  setMajor(value: number): void;

  getMinor(): number;
  setMinor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Beacon.AsObject;
  static toObject(includeInstance: boolean, msg: Beacon): Beacon.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Beacon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Beacon;
  static deserializeBinaryFromReader(message: Beacon, reader: jspb.BinaryReader): Beacon;
}

export namespace Beacon {
  export type AsObject = {
    major: number,
    minor: number,
  }
}

export class BeaconDto extends jspb.Message {
  getMajor(): number;
  setMajor(value: number): void;

  getMinor(): number;
  setMinor(value: number): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconDto.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconDto): BeaconDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconDto;
  static deserializeBinaryFromReader(message: BeaconDto, reader: jspb.BinaryReader): BeaconDto;
}

export namespace BeaconDto {
  export type AsObject = {
    major: number,
    minor: number,
    labelsMap: Array<[string, string]>,
  }
}

export class BeaconPosition extends jspb.Message {
  hasBeacon(): boolean;
  clearBeacon(): void;
  getBeacon(): Beacon | undefined;
  setBeacon(value?: Beacon): void;

  hasMultilateration(): boolean;
  clearMultilateration(): void;
  getMultilateration(): MultilaterationPosition | undefined;
  setMultilateration(value?: MultilaterationPosition): void;

  hasKalman(): boolean;
  clearKalman(): void;
  getKalman(): KalmanPosition | undefined;
  setKalman(value?: KalmanPosition): void;

  hasTick(): boolean;
  clearTick(): void;
  getTick(): Tick | undefined;
  setTick(value?: Tick): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconPosition.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconPosition): BeaconPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconPosition;
  static deserializeBinaryFromReader(message: BeaconPosition, reader: jspb.BinaryReader): BeaconPosition;
}

export namespace BeaconPosition {
  export type AsObject = {
    beacon?: Beacon.AsObject,
    multilateration?: MultilaterationPosition.AsObject,
    kalman?: KalmanPosition.AsObject,
    tick?: Tick.AsObject,
  }
}

export class MultilaterationPosition extends jspb.Message {
  hasPoint(): boolean;
  clearPoint(): void;
  getPoint(): Point | undefined;
  setPoint(value?: Point): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultilaterationPosition.AsObject;
  static toObject(includeInstance: boolean, msg: MultilaterationPosition): MultilaterationPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultilaterationPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultilaterationPosition;
  static deserializeBinaryFromReader(message: MultilaterationPosition, reader: jspb.BinaryReader): MultilaterationPosition;
}

export namespace MultilaterationPosition {
  export type AsObject = {
    point?: Point.AsObject,
  }
}

export class KalmanPosition extends jspb.Message {
  hasRawPoint(): boolean;
  clearRawPoint(): void;
  getRawPoint(): Point | undefined;
  setRawPoint(value?: Point): void;

  hasFilteredPoint(): boolean;
  clearFilteredPoint(): void;
  getFilteredPoint(): Point | undefined;
  setFilteredPoint(value?: Point): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KalmanPosition.AsObject;
  static toObject(includeInstance: boolean, msg: KalmanPosition): KalmanPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KalmanPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KalmanPosition;
  static deserializeBinaryFromReader(message: KalmanPosition, reader: jspb.BinaryReader): KalmanPosition;
}

export namespace KalmanPosition {
  export type AsObject = {
    rawPoint?: Point.AsObject,
    filteredPoint?: Point.AsObject,
  }
}

export class MeasurementDto extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasurementDto.AsObject;
  static toObject(includeInstance: boolean, msg: MeasurementDto): MeasurementDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasurementDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasurementDto;
  static deserializeBinaryFromReader(message: MeasurementDto, reader: jspb.BinaryReader): MeasurementDto;
}

export namespace MeasurementDto {
  export type AsObject = {
  }
}

export class Observation extends jspb.Message {
  getObserverId(): number;
  setObserverId(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDeltaMicroseconds(): number;
  setDeltaMicroseconds(value: number): void;

  hasBeacon(): boolean;
  clearBeacon(): void;
  getBeacon(): Beacon | undefined;
  setBeacon(value?: Beacon): void;

  getRssi(): number;
  setRssi(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Observation.AsObject;
  static toObject(includeInstance: boolean, msg: Observation): Observation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Observation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Observation;
  static deserializeBinaryFromReader(message: Observation, reader: jspb.BinaryReader): Observation;
}

export namespace Observation {
  export type AsObject = {
    observerId: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deltaMicroseconds: number,
    beacon?: Beacon.AsObject,
    rssi: number,
  }
}

export class GatewayObservationDto extends jspb.Message {
  getGatewayId(): number;
  setGatewayId(value: number): void;

  getAdvertisingGatewayId(): number;
  setAdvertisingGatewayId(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getRssi(): number;
  setRssi(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  getRssimean(): number;
  setRssimean(value: number): void;

  getRssivariance(): number;
  setRssivariance(value: number): void;

  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayObservationDto.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayObservationDto): GatewayObservationDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayObservationDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayObservationDto;
  static deserializeBinaryFromReader(message: GatewayObservationDto, reader: jspb.BinaryReader): GatewayObservationDto;
}

export namespace GatewayObservationDto {
  export type AsObject = {
    gatewayId: number,
    advertisingGatewayId: number,
    timestamp: number,
    rssi: number,
    count: number,
    rssimean: number,
    rssivariance: number,
    dataList: Array<number>,
  }
}

export class Point extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getLevelid(): number;
  setLevelid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    x: number,
    y: number,
    levelid: number,
  }
}

export class Polygon extends jspb.Message {
  clearPointsList(): void;
  getPointsList(): Array<Point>;
  setPointsList(value: Array<Point>): void;
  addPoints(value?: Point, index?: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Polygon.AsObject;
  static toObject(includeInstance: boolean, msg: Polygon): Polygon.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Polygon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Polygon;
  static deserializeBinaryFromReader(message: Polygon, reader: jspb.BinaryReader): Polygon;
}

export namespace Polygon {
  export type AsObject = {
    pointsList: Array<Point.AsObject>,
  }
}

export class DeploymentDto extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): DeploymentDto.Config | undefined;
  setConfig(value?: DeploymentDto.Config): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  clearGatewaysList(): void;
  getGatewaysList(): Array<string>;
  setGatewaysList(value: Array<string>): void;
  addGateways(value: string, index?: number): string;

  hasMap(): boolean;
  clearMap(): void;
  getMap(): DeploymentDto.Map | undefined;
  setMap(value?: DeploymentDto.Map): void;

  clearApiKeysList(): void;
  getApiKeysList(): Array<DeploymentDto.ApiKey>;
  setApiKeysList(value: Array<DeploymentDto.ApiKey>): void;
  addApiKeys(value?: DeploymentDto.ApiKey, index?: number): DeploymentDto.ApiKey;

  getBeaconMajor(): number;
  setBeaconMajor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentDto.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentDto): DeploymentDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentDto;
  static deserializeBinaryFromReader(message: DeploymentDto, reader: jspb.BinaryReader): DeploymentDto;
}

export namespace DeploymentDto {
  export type AsObject = {
    id: string,
    name: string,
    config?: DeploymentDto.Config.AsObject,
    avatar: string,
    gatewaysList: Array<string>,
    map?: DeploymentDto.Map.AsObject,
    apiKeysList: Array<DeploymentDto.ApiKey.AsObject>,
    beaconMajor: number,
  }

  export class ApiKey extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getAccessKey(): string;
    setAccessKey(value: string): void;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasLastUsedAt(): boolean;
    clearLastUsedAt(): void;
    getLastUsedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastUsedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiKey.AsObject;
    static toObject(includeInstance: boolean, msg: ApiKey): ApiKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiKey;
    static deserializeBinaryFromReader(message: ApiKey, reader: jspb.BinaryReader): ApiKey;
  }

  export namespace ApiKey {
    export type AsObject = {
      id: string,
      name: string,
      accessKey: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lastUsedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class Config extends jspb.Message {
    getTickSize(): number;
    setTickSize(value: number): void;

    getCalibrationInterval(): number;
    setCalibrationInterval(value: number): void;

    getPipelineParamsMap(): jspb.Map<string, number>;
    clearPipelineParamsMap(): void;
    getBeaconMajor(): number;
    setBeaconMajor(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      tickSize: number,
      calibrationInterval: number,
      pipelineParamsMap: Array<[string, number]>,
      beaconMajor: number,
    }
  }

  export class Map extends jspb.Message {
    clearZonesList(): void;
    getZonesList(): Array<DeploymentDto.Map.Zone>;
    setZonesList(value: Array<DeploymentDto.Map.Zone>): void;
    addZones(value?: DeploymentDto.Map.Zone, index?: number): DeploymentDto.Map.Zone;

    hasFeatureCollection(): boolean;
    clearFeatureCollection(): void;
    getFeatureCollection(): FeatureCollection | undefined;
    setFeatureCollection(value?: FeatureCollection): void;

    getFeatureCollectionJson(): string;
    setFeatureCollectionJson(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Map.AsObject;
    static toObject(includeInstance: boolean, msg: Map): Map.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Map, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Map;
    static deserializeBinaryFromReader(message: Map, reader: jspb.BinaryReader): Map;
  }

  export namespace Map {
    export type AsObject = {
      zonesList: Array<DeploymentDto.Map.Zone.AsObject>,
      featureCollection?: FeatureCollection.AsObject,
      featureCollectionJson: string,
    }

    export class Zone extends jspb.Message {
      getName(): string;
      setName(value: string): void;

      getCode(): string;
      setCode(value: string): void;

      getColor(): string;
      setColor(value: string): void;

      hasPolygon(): boolean;
      clearPolygon(): void;
      getPolygon(): Polygon | undefined;
      setPolygon(value?: Polygon): void;

      getLevel(): number;
      setLevel(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Zone.AsObject;
      static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Zone;
      static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
    }

    export namespace Zone {
      export type AsObject = {
        name: string,
        code: string,
        color: string,
        polygon?: Polygon.AsObject,
        level: number,
      }
    }
  }
}

export class Tick extends jspb.Message {
  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tick.AsObject;
  static toObject(includeInstance: boolean, msg: Tick): Tick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tick;
  static deserializeBinaryFromReader(message: Tick, reader: jspb.BinaryReader): Tick;
}

export namespace Tick {
  export type AsObject = {
    duration?: google_protobuf_duration_pb.Duration.AsObject,
    value: number,
  }
}

export class FeatureCollection extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearFeaturesList(): void;
  getFeaturesList(): Array<Feature>;
  setFeaturesList(value: Array<Feature>): void;
  addFeatures(value?: Feature, index?: number): Feature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureCollection.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureCollection): FeatureCollection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeatureCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureCollection;
  static deserializeBinaryFromReader(message: FeatureCollection, reader: jspb.BinaryReader): FeatureCollection;
}

export namespace FeatureCollection {
  export type AsObject = {
    type: string,
    featuresList: Array<Feature.AsObject>,
  }
}

export class Feature extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getId(): string;
  setId(value: string): void;

  hasGeometry(): boolean;
  clearGeometry(): void;
  getGeometry(): Geometry | undefined;
  setGeometry(value?: Geometry): void;

  hasProperties(): boolean;
  clearProperties(): void;
  getProperties(): google_protobuf_struct_pb.Struct | undefined;
  setProperties(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feature.AsObject;
  static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feature;
  static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
  export type AsObject = {
    type: string,
    id: string,
    geometry?: Geometry.AsObject,
    properties?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Geometry extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearCoordinatesList(): void;
  getCoordinatesList(): Array<number>;
  setCoordinatesList(value: Array<number>): void;
  addCoordinates(value: number, index?: number): number;

  clearGeometriesList(): void;
  getGeometriesList(): Array<Geometry>;
  setGeometriesList(value: Array<Geometry>): void;
  addGeometries(value?: Geometry, index?: number): Geometry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Geometry.AsObject;
  static toObject(includeInstance: boolean, msg: Geometry): Geometry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Geometry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Geometry;
  static deserializeBinaryFromReader(message: Geometry, reader: jspb.BinaryReader): Geometry;
}

export namespace Geometry {
  export type AsObject = {
    type: string,
    coordinatesList: Array<number>,
    geometriesList: Array<Geometry.AsObject>,
  }
}

export class BeaconEvent extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasBeacon(): boolean;
  clearBeacon(): void;
  getBeacon(): Beacon | undefined;
  setBeacon(value?: Beacon): void;

  hasLocationChange(): boolean;
  clearLocationChange(): void;
  getLocationChange(): BeaconEvent.LocationChange | undefined;
  setLocationChange(value?: BeaconEvent.LocationChange): void;

  hasSpeedError(): boolean;
  clearSpeedError(): void;
  getSpeedError(): BeaconEvent.SpeedError | undefined;
  setSpeedError(value?: BeaconEvent.SpeedError): void;

  hasGatePassError(): boolean;
  clearGatePassError(): void;
  getGatePassError(): BeaconEvent.GatePassError | undefined;
  setGatePassError(value?: BeaconEvent.GatePassError): void;

  hasInvalidLocationChange(): boolean;
  clearInvalidLocationChange(): void;
  getInvalidLocationChange(): BeaconEvent.InvalidLocationChange | undefined;
  setInvalidLocationChange(value?: BeaconEvent.InvalidLocationChange): void;

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
    beacon?: Beacon.AsObject,
    locationChange?: BeaconEvent.LocationChange.AsObject,
    speedError?: BeaconEvent.SpeedError.AsObject,
    gatePassError?: BeaconEvent.GatePassError.AsObject,
    invalidLocationChange?: BeaconEvent.InvalidLocationChange.AsObject,
  }

  export class LocationChange extends jspb.Message {
    getPreviousZone(): string;
    setPreviousZone(value: string): void;

    getZone(): string;
    setZone(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocationChange.AsObject;
    static toObject(includeInstance: boolean, msg: LocationChange): LocationChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocationChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocationChange;
    static deserializeBinaryFromReader(message: LocationChange, reader: jspb.BinaryReader): LocationChange;
  }

  export namespace LocationChange {
    export type AsObject = {
      previousZone: string,
      zone: string,
    }
  }

  export class SpeedError extends jspb.Message {
    getPreviousZone(): string;
    setPreviousZone(value: string): void;

    getZone(): string;
    setZone(value: string): void;

    getSpeed(): number;
    setSpeed(value: number): void;

    getMaxSpeed(): number;
    setMaxSpeed(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpeedError.AsObject;
    static toObject(includeInstance: boolean, msg: SpeedError): SpeedError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpeedError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpeedError;
    static deserializeBinaryFromReader(message: SpeedError, reader: jspb.BinaryReader): SpeedError;
  }

  export namespace SpeedError {
    export type AsObject = {
      previousZone: string,
      zone: string,
      speed: number,
      maxSpeed: number,
    }
  }

  export class GatePassError extends jspb.Message {
    getPreviousZone(): string;
    setPreviousZone(value: string): void;

    getZone(): string;
    setZone(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GatePassError.AsObject;
    static toObject(includeInstance: boolean, msg: GatePassError): GatePassError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GatePassError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GatePassError;
    static deserializeBinaryFromReader(message: GatePassError, reader: jspb.BinaryReader): GatePassError;
  }

  export namespace GatePassError {
    export type AsObject = {
      previousZone: string,
      zone: string,
    }
  }

  export class InvalidLocationChange extends jspb.Message {
    getPreviousZone(): string;
    setPreviousZone(value: string): void;

    getZone(): string;
    setZone(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvalidLocationChange.AsObject;
    static toObject(includeInstance: boolean, msg: InvalidLocationChange): InvalidLocationChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvalidLocationChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvalidLocationChange;
    static deserializeBinaryFromReader(message: InvalidLocationChange, reader: jspb.BinaryReader): InvalidLocationChange;
  }

  export namespace InvalidLocationChange {
    export type AsObject = {
      previousZone: string,
      zone: string,
    }
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    LOCATION_CHANGE = 3,
    SPEED_ERROR = 4,
    GATE_PASS_ERROR = 5,
    INVALID_LOCATION_CHANGE = 6,
  }
}

export class User extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
  }
}


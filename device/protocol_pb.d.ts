// package: device
// file: device/protocol.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GatewayFeature extends jspb.Message {
  hasMqtt(): boolean;
  clearMqtt(): void;
  getMqtt(): GatewayFeature.Mqtt | undefined;
  setMqtt(value?: GatewayFeature.Mqtt): void;

  hasWifi(): boolean;
  clearWifi(): void;
  getWifi(): GatewayFeature.Wifi | undefined;
  setWifi(value?: GatewayFeature.Wifi): void;

  hasSntp(): boolean;
  clearSntp(): void;
  getSntp(): GatewayFeature.Sntp | undefined;
  setSntp(value?: GatewayFeature.Sntp): void;

  hasLog(): boolean;
  clearLog(): void;
  getLog(): GatewayFeature.Log | undefined;
  setLog(value?: GatewayFeature.Log): void;

  hasOta(): boolean;
  clearOta(): void;
  getOta(): GatewayFeature.Ota | undefined;
  setOta(value?: GatewayFeature.Ota): void;

  hasKeepAlive(): boolean;
  clearKeepAlive(): void;
  getKeepAlive(): GatewayFeature.KeepAlive | undefined;
  setKeepAlive(value?: GatewayFeature.KeepAlive): void;

  hasBle(): boolean;
  clearBle(): void;
  getBle(): GatewayFeature.Ble | undefined;
  setBle(value?: GatewayFeature.Ble): void;

  getConfigCase(): GatewayFeature.ConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayFeature.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayFeature): GatewayFeature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayFeature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayFeature;
  static deserializeBinaryFromReader(message: GatewayFeature, reader: jspb.BinaryReader): GatewayFeature;
}

export namespace GatewayFeature {
  export type AsObject = {
    mqtt?: GatewayFeature.Mqtt.AsObject,
    wifi?: GatewayFeature.Wifi.AsObject,
    sntp?: GatewayFeature.Sntp.AsObject,
    log?: GatewayFeature.Log.AsObject,
    ota?: GatewayFeature.Ota.AsObject,
    keepAlive?: GatewayFeature.KeepAlive.AsObject,
    ble?: GatewayFeature.Ble.AsObject,
  }

  export class Mqtt extends jspb.Message {
    getUri(): string;
    setUri(value: string): void;

    getPort(): string;
    setPort(value: string): void;

    getUsername(): string;
    setUsername(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mqtt.AsObject;
    static toObject(includeInstance: boolean, msg: Mqtt): Mqtt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mqtt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mqtt;
    static deserializeBinaryFromReader(message: Mqtt, reader: jspb.BinaryReader): Mqtt;
  }

  export namespace Mqtt {
    export type AsObject = {
      uri: string,
      port: string,
      username: string,
      password: string,
    }
  }

  export class Wifi extends jspb.Message {
    getSsid(): string;
    setSsid(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    getMaxRetry(): number;
    setMaxRetry(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Wifi.AsObject;
    static toObject(includeInstance: boolean, msg: Wifi): Wifi.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Wifi, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Wifi;
    static deserializeBinaryFromReader(message: Wifi, reader: jspb.BinaryReader): Wifi;
  }

  export namespace Wifi {
    export type AsObject = {
      ssid: string,
      password: string,
      maxRetry: number,
    }
  }

  export class Sntp extends jspb.Message {
    getServerUrl(): string;
    setServerUrl(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sntp.AsObject;
    static toObject(includeInstance: boolean, msg: Sntp): Sntp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sntp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sntp;
    static deserializeBinaryFromReader(message: Sntp, reader: jspb.BinaryReader): Sntp;
  }

  export namespace Sntp {
    export type AsObject = {
      serverUrl: string,
    }
  }

  export class Log extends jspb.Message {
    getLevel(): GatewayFeature.Log.LevelMap[keyof GatewayFeature.Log.LevelMap];
    setLevel(value: GatewayFeature.Log.LevelMap[keyof GatewayFeature.Log.LevelMap]): void;

    getUdpHost(): string;
    setUdpHost(value: string): void;

    getUdpPort(): string;
    setUdpPort(value: string): void;

    getUdpEnable(): boolean;
    setUdpEnable(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Log.AsObject;
    static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Log;
    static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
  }

  export namespace Log {
    export type AsObject = {
      level: GatewayFeature.Log.LevelMap[keyof GatewayFeature.Log.LevelMap],
      udpHost: string,
      udpPort: string,
      udpEnable: boolean,
    }

    export interface LevelMap {
      UNDEFINED: 0;
      ERROR: 1;
      INFO: 2;
      DEBUG: 3;
    }

    export const Level: LevelMap;
  }

  export class Ota extends jspb.Message {
    getTimeout(): number;
    setTimeout(value: number): void;

    getUrl(): string;
    setUrl(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ota.AsObject;
    static toObject(includeInstance: boolean, msg: Ota): Ota.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ota, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ota;
    static deserializeBinaryFromReader(message: Ota, reader: jspb.BinaryReader): Ota;
  }

  export namespace Ota {
    export type AsObject = {
      timeout: number,
      url: string,
    }
  }

  export class KeepAlive extends jspb.Message {
    getTimeout(): number;
    setTimeout(value: number): void;

    getOnTimeout(): GatewayFeature.KeepAlive.OnTimeoutMap[keyof GatewayFeature.KeepAlive.OnTimeoutMap];
    setOnTimeout(value: GatewayFeature.KeepAlive.OnTimeoutMap[keyof GatewayFeature.KeepAlive.OnTimeoutMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeepAlive.AsObject;
    static toObject(includeInstance: boolean, msg: KeepAlive): KeepAlive.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeepAlive, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeepAlive;
    static deserializeBinaryFromReader(message: KeepAlive, reader: jspb.BinaryReader): KeepAlive;
  }

  export namespace KeepAlive {
    export type AsObject = {
      timeout: number,
      onTimeout: GatewayFeature.KeepAlive.OnTimeoutMap[keyof GatewayFeature.KeepAlive.OnTimeoutMap],
    }

    export interface OnTimeoutMap {
      UNDEFINED: 0;
      RESTART: 1;
      IGNORE: 2;
    }

    export const OnTimeout: OnTimeoutMap;
  }

  export class Ble extends jspb.Message {
    getScanDuration(): number;
    setScanDuration(value: number): void;

    getScanInterval(): number;
    setScanInterval(value: number): void;

    getScanWindow(): number;
    setScanWindow(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ble.AsObject;
    static toObject(includeInstance: boolean, msg: Ble): Ble.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ble, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ble;
    static deserializeBinaryFromReader(message: Ble, reader: jspb.BinaryReader): Ble;
  }

  export namespace Ble {
    export type AsObject = {
      scanDuration: number,
      scanInterval: number,
      scanWindow: number,
    }
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    MQTT = 1,
    WIFI = 2,
    SNTP = 3,
    LOG = 4,
    OTA = 5,
    KEEP_ALIVE = 6,
    BLE = 7,
  }
}

export class ClientMessage extends jspb.Message {
  getClientType(): ClientTypeMap[keyof ClientTypeMap];
  setClientType(value: ClientTypeMap[keyof ClientTypeMap]): void;

  getDeviceId(): number;
  setDeviceId(value: number): void;

  hasDiscovery(): boolean;
  clearDiscovery(): void;
  getDiscovery(): ClientMessage.Discovery | undefined;
  setDiscovery(value?: ClientMessage.Discovery): void;

  hasBleScan(): boolean;
  clearBleScan(): void;
  getBleScan(): ClientMessage.BleScan | undefined;
  setBleScan(value?: ClientMessage.BleScan): void;

  hasError(): boolean;
  clearError(): void;
  getError(): ClientMessage.Error | undefined;
  setError(value?: ClientMessage.Error): void;

  getPayloadCase(): ClientMessage.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessage): ClientMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessage;
  static deserializeBinaryFromReader(message: ClientMessage, reader: jspb.BinaryReader): ClientMessage;
}

export namespace ClientMessage {
  export type AsObject = {
    clientType: ClientTypeMap[keyof ClientTypeMap],
    deviceId: number,
    discovery?: ClientMessage.Discovery.AsObject,
    bleScan?: ClientMessage.BleScan.AsObject,
    error?: ClientMessage.Error.AsObject,
  }

  export class Error extends jspb.Message {
    getErrorCode(): ClientMessage.ErrorCodeMap[keyof ClientMessage.ErrorCodeMap];
    setErrorCode(value: ClientMessage.ErrorCodeMap[keyof ClientMessage.ErrorCodeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      errorCode: ClientMessage.ErrorCodeMap[keyof ClientMessage.ErrorCodeMap],
    }
  }

  export class Discovery extends jspb.Message {
    getSoftwareId(): string;
    setSoftwareId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Discovery.AsObject;
    static toObject(includeInstance: boolean, msg: Discovery): Discovery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Discovery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Discovery;
    static deserializeBinaryFromReader(message: Discovery, reader: jspb.BinaryReader): Discovery;
  }

  export namespace Discovery {
    export type AsObject = {
      softwareId: string,
    }
  }

  export class BleScan extends jspb.Message {
    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasIbeacon(): boolean;
    clearIbeacon(): void;
    getIbeacon(): ClientMessage.BleScan.IBeacon | undefined;
    setIbeacon(value?: ClientMessage.BleScan.IBeacon): void;

    hasEddystone(): boolean;
    clearEddystone(): void;
    getEddystone(): ClientMessage.BleScan.Eddystone | undefined;
    setEddystone(value?: ClientMessage.BleScan.Eddystone): void;

    getResultsCase(): BleScan.ResultsCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BleScan.AsObject;
    static toObject(includeInstance: boolean, msg: BleScan): BleScan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BleScan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BleScan;
    static deserializeBinaryFromReader(message: BleScan, reader: jspb.BinaryReader): BleScan;
  }

  export namespace BleScan {
    export type AsObject = {
      timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      ibeacon?: ClientMessage.BleScan.IBeacon.AsObject,
      eddystone?: ClientMessage.BleScan.Eddystone.AsObject,
    }

    export class IBeacon extends jspb.Message {
      clearDataList(): void;
      getDataList(): Array<ClientMessage.BleScan.IBeacon.AdvertisingData>;
      setDataList(value: Array<ClientMessage.BleScan.IBeacon.AdvertisingData>): void;
      addData(value?: ClientMessage.BleScan.IBeacon.AdvertisingData, index?: number): ClientMessage.BleScan.IBeacon.AdvertisingData;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): IBeacon.AsObject;
      static toObject(includeInstance: boolean, msg: IBeacon): IBeacon.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: IBeacon, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): IBeacon;
      static deserializeBinaryFromReader(message: IBeacon, reader: jspb.BinaryReader): IBeacon;
    }

    export namespace IBeacon {
      export type AsObject = {
        dataList: Array<ClientMessage.BleScan.IBeacon.AdvertisingData.AsObject>,
      }

      export class AdvertisingData extends jspb.Message {
        getMajor(): number;
        setMajor(value: number): void;

        getMinor(): number;
        setMinor(value: number): void;

        getRssi(): number;
        setRssi(value: number): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AdvertisingData.AsObject;
        static toObject(includeInstance: boolean, msg: AdvertisingData): AdvertisingData.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AdvertisingData, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AdvertisingData;
        static deserializeBinaryFromReader(message: AdvertisingData, reader: jspb.BinaryReader): AdvertisingData;
      }

      export namespace AdvertisingData {
        export type AsObject = {
          major: number,
          minor: number,
          rssi: number,
        }
      }
    }

    export class Eddystone extends jspb.Message {
      clearDataList(): void;
      getDataList(): Array<ClientMessage.BleScan.Eddystone.AdvertisingData>;
      setDataList(value: Array<ClientMessage.BleScan.Eddystone.AdvertisingData>): void;
      addData(value?: ClientMessage.BleScan.Eddystone.AdvertisingData, index?: number): ClientMessage.BleScan.Eddystone.AdvertisingData;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Eddystone.AsObject;
      static toObject(includeInstance: boolean, msg: Eddystone): Eddystone.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Eddystone, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Eddystone;
      static deserializeBinaryFromReader(message: Eddystone, reader: jspb.BinaryReader): Eddystone;
    }

    export namespace Eddystone {
      export type AsObject = {
        dataList: Array<ClientMessage.BleScan.Eddystone.AdvertisingData.AsObject>,
      }

      export class AdvertisingData extends jspb.Message {
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AdvertisingData.AsObject;
        static toObject(includeInstance: boolean, msg: AdvertisingData): AdvertisingData.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AdvertisingData, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AdvertisingData;
        static deserializeBinaryFromReader(message: AdvertisingData, reader: jspb.BinaryReader): AdvertisingData;
      }

      export namespace AdvertisingData {
        export type AsObject = {
        }
      }
    }

    export enum ResultsCase {
      RESULTS_NOT_SET = 0,
      IBEACON = 3,
      EDDYSTONE = 4,
    }
  }

  export interface ErrorCodeMap {
    UNDEFINED: 0;
    ERR_CODE_OTA_UPDATE: 1;
  }

  export const ErrorCode: ErrorCodeMap;

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    DISCOVERY = 10,
    BLE_SCAN = 11,
    ERROR = 12,
  }
}

export class BackendMessage extends jspb.Message {
  hasPing(): boolean;
  clearPing(): void;
  getPing(): BackendMessage.Ping | undefined;
  setPing(value?: BackendMessage.Ping): void;

  hasConfigure(): boolean;
  clearConfigure(): void;
  getConfigure(): BackendMessage.Configure | undefined;
  setConfigure(value?: BackendMessage.Configure): void;

  hasOta(): boolean;
  clearOta(): void;
  getOta(): BackendMessage.Ota | undefined;
  setOta(value?: BackendMessage.Ota): void;

  hasRestart(): boolean;
  clearRestart(): void;
  getRestart(): BackendMessage.Restart | undefined;
  setRestart(value?: BackendMessage.Restart): void;

  getPayloadCase(): BackendMessage.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackendMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BackendMessage): BackendMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BackendMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackendMessage;
  static deserializeBinaryFromReader(message: BackendMessage, reader: jspb.BinaryReader): BackendMessage;
}

export namespace BackendMessage {
  export type AsObject = {
    ping?: BackendMessage.Ping.AsObject,
    configure?: BackendMessage.Configure.AsObject,
    ota?: BackendMessage.Ota.AsObject,
    restart?: BackendMessage.Restart.AsObject,
  }

  export class Ping extends jspb.Message {
    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ping.AsObject;
    static toObject(includeInstance: boolean, msg: Ping): Ping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ping;
    static deserializeBinaryFromReader(message: Ping, reader: jspb.BinaryReader): Ping;
  }

  export namespace Ping {
    export type AsObject = {
      timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class Configure extends jspb.Message {
    hasGatewayFeature(): boolean;
    clearGatewayFeature(): void;
    getGatewayFeature(): GatewayFeature | undefined;
    setGatewayFeature(value?: GatewayFeature): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Configure.AsObject;
    static toObject(includeInstance: boolean, msg: Configure): Configure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Configure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Configure;
    static deserializeBinaryFromReader(message: Configure, reader: jspb.BinaryReader): Configure;
  }

  export namespace Configure {
    export type AsObject = {
      gatewayFeature?: GatewayFeature.AsObject,
    }
  }

  export class Ota extends jspb.Message {
    getUri(): string;
    setUri(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ota.AsObject;
    static toObject(includeInstance: boolean, msg: Ota): Ota.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ota, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ota;
    static deserializeBinaryFromReader(message: Ota, reader: jspb.BinaryReader): Ota;
  }

  export namespace Ota {
    export type AsObject = {
      uri: string,
    }
  }

  export class Restart extends jspb.Message {
    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Restart.AsObject;
    static toObject(includeInstance: boolean, msg: Restart): Restart.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Restart, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Restart;
    static deserializeBinaryFromReader(message: Restart, reader: jspb.BinaryReader): Restart;
  }

  export namespace Restart {
    export type AsObject = {
      timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    PING = 1,
    CONFIGURE = 2,
    OTA = 3,
    RESTART = 4,
  }
}

export class Message extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasClientMessage(): boolean;
  clearClientMessage(): void;
  getClientMessage(): ClientMessage | undefined;
  setClientMessage(value?: ClientMessage): void;

  hasBackendMessage(): boolean;
  clearBackendMessage(): void;
  getBackendMessage(): BackendMessage | undefined;
  setBackendMessage(value?: BackendMessage): void;

  getPayloadCase(): Message.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: number,
    clientMessage?: ClientMessage.AsObject,
    backendMessage?: BackendMessage.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    CLIENT_MESSAGE = 10,
    BACKEND_MESSAGE = 11,
  }
}

export class MessageAck extends jspb.Message {
  getMessageId(): number;
  setMessageId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageAck.AsObject;
  static toObject(includeInstance: boolean, msg: MessageAck): MessageAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageAck;
  static deserializeBinaryFromReader(message: MessageAck, reader: jspb.BinaryReader): MessageAck;
}

export namespace MessageAck {
  export type AsObject = {
    messageId: number,
  }
}

export interface ClientTypeMap {
  UNDEFINED: 0;
  GATEWAY: 1;
}

export const ClientType: ClientTypeMap;


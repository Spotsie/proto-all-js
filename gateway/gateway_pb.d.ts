// package: gateway
// file: gateway/gateway.proto

import * as jspb from "google-protobuf";

export class IBeaconTickMessage extends jspb.Message {
  getMajor(): number;
  setMajor(value: number): void;

  getMinor(): number;
  setMinor(value: number): void;

  getRssi(): number;
  setRssi(value: number): void;

  getDeltaUs(): number;
  setDeltaUs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IBeaconTickMessage.AsObject;
  static toObject(includeInstance: boolean, msg: IBeaconTickMessage): IBeaconTickMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IBeaconTickMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IBeaconTickMessage;
  static deserializeBinaryFromReader(message: IBeaconTickMessage, reader: jspb.BinaryReader): IBeaconTickMessage;
}

export namespace IBeaconTickMessage {
  export type AsObject = {
    major: number,
    minor: number,
    rssi: number,
    deltaUs: number,
  }
}

export class GatewayMessage extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getGatewayid(): number;
  setGatewayid(value: number): void;

  getType(): GatewayScanTypeMap[keyof GatewayScanTypeMap];
  setType(value: GatewayScanTypeMap[keyof GatewayScanTypeMap]): void;

  clearTicksList(): void;
  getTicksList(): Array<IBeaconTickMessage>;
  setTicksList(value: Array<IBeaconTickMessage>): void;
  addTicks(value?: IBeaconTickMessage, index?: number): IBeaconTickMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayMessage): GatewayMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayMessage;
  static deserializeBinaryFromReader(message: GatewayMessage, reader: jspb.BinaryReader): GatewayMessage;
}

export namespace GatewayMessage {
  export type AsObject = {
    status: number,
    timestamp: number,
    gatewayid: number,
    type: GatewayScanTypeMap[keyof GatewayScanTypeMap],
    ticksList: Array<IBeaconTickMessage.AsObject>,
  }
}

export class GatewayCalibrationMessage extends jspb.Message {
  getMessageid(): number;
  setMessageid(value: number): void;

  getGatewayid(): number;
  setGatewayid(value: number): void;

  getAdvertisinggatewayid(): number;
  setAdvertisinggatewayid(value: number): void;

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
  toObject(includeInstance?: boolean): GatewayCalibrationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayCalibrationMessage): GatewayCalibrationMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayCalibrationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayCalibrationMessage;
  static deserializeBinaryFromReader(message: GatewayCalibrationMessage, reader: jspb.BinaryReader): GatewayCalibrationMessage;
}

export namespace GatewayCalibrationMessage {
  export type AsObject = {
    messageid: number,
    gatewayid: number,
    advertisinggatewayid: number,
    timestamp: number,
    rssi: number,
    count: number,
    rssimean: number,
    rssivariance: number,
    dataList: Array<number>,
  }
}

export class GatewayDiscoveryMessage extends jspb.Message {
  getMessageid(): number;
  setMessageid(value: number): void;

  getGatewayid(): number;
  setGatewayid(value: number): void;

  getSoftwareversion(): string;
  setSoftwareversion(value: string): void;

  getConfigId(): number;
  setConfigId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayDiscoveryMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayDiscoveryMessage): GatewayDiscoveryMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayDiscoveryMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayDiscoveryMessage;
  static deserializeBinaryFromReader(message: GatewayDiscoveryMessage, reader: jspb.BinaryReader): GatewayDiscoveryMessage;
}

export namespace GatewayDiscoveryMessage {
  export type AsObject = {
    messageid: number,
    gatewayid: number,
    softwareversion: string,
    configId: number,
  }
}

export class GatewayEventMessage extends jspb.Message {
  getMessageid(): number;
  setMessageid(value: number): void;

  getGatewayid(): number;
  setGatewayid(value: number): void;

  getEventid(): GatewayEventIDMap[keyof GatewayEventIDMap];
  setEventid(value: GatewayEventIDMap[keyof GatewayEventIDMap]): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayEventMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayEventMessage): GatewayEventMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayEventMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayEventMessage;
  static deserializeBinaryFromReader(message: GatewayEventMessage, reader: jspb.BinaryReader): GatewayEventMessage;
}

export namespace GatewayEventMessage {
  export type AsObject = {
    messageid: number,
    gatewayid: number,
    eventid: GatewayEventIDMap[keyof GatewayEventIDMap],
    timestamp: number,
    msg: string,
  }
}

export class GatewayTaskMessage extends jspb.Message {
  getMessageid(): number;
  setMessageid(value: number): void;

  getTaskid(): GatewayTaskIDMap[keyof GatewayTaskIDMap];
  setTaskid(value: GatewayTaskIDMap[keyof GatewayTaskIDMap]): void;

  getDelayexecution(): boolean;
  setDelayexecution(value: boolean): void;

  getExecutiontime(): number;
  setExecutiontime(value: number): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): GatewayParams | undefined;
  setParams(value?: GatewayParams): void;

  hasAdvertisinggatewayid(): boolean;
  clearAdvertisinggatewayid(): void;
  getAdvertisinggatewayid(): number;
  setAdvertisinggatewayid(value: number): void;

  hasSleepparams(): boolean;
  clearSleepparams(): void;
  getSleepparams(): GatewaySleepParams | undefined;
  setSleepparams(value?: GatewaySleepParams): void;

  hasCalibrateParams(): boolean;
  clearCalibrateParams(): void;
  getCalibrateParams(): GatewayCalibrateParams | undefined;
  setCalibrateParams(value?: GatewayCalibrateParams): void;

  getPayloadCase(): GatewayTaskMessage.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayTaskMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayTaskMessage): GatewayTaskMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayTaskMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayTaskMessage;
  static deserializeBinaryFromReader(message: GatewayTaskMessage, reader: jspb.BinaryReader): GatewayTaskMessage;
}

export namespace GatewayTaskMessage {
  export type AsObject = {
    messageid: number,
    taskid: GatewayTaskIDMap[keyof GatewayTaskIDMap],
    delayexecution: boolean,
    executiontime: number,
    params?: GatewayParams.AsObject,
    advertisinggatewayid: number,
    sleepparams?: GatewaySleepParams.AsObject,
    calibrateParams?: GatewayCalibrateParams.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    PARAMS = 5,
    ADVERTISINGGATEWAYID = 7,
    SLEEPPARAMS = 8,
  }
}

export class GatewaySleepParams extends jspb.Message {
  getType(): GatewaySleepTypeMap[keyof GatewaySleepTypeMap];
  setType(value: GatewaySleepTypeMap[keyof GatewaySleepTypeMap]): void;

  getDurationMs(): number;
  setDurationMs(value: number): void;

  getBlocking(): boolean;
  setBlocking(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewaySleepParams.AsObject;
  static toObject(includeInstance: boolean, msg: GatewaySleepParams): GatewaySleepParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewaySleepParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewaySleepParams;
  static deserializeBinaryFromReader(message: GatewaySleepParams, reader: jspb.BinaryReader): GatewaySleepParams;
}

export namespace GatewaySleepParams {
  export type AsObject = {
    type: GatewaySleepTypeMap[keyof GatewaySleepTypeMap],
    durationMs: number,
    blocking: boolean,
  }
}

export class GatewayCalibrateParams extends jspb.Message {
  getNumOfPhases(): number;
  setNumOfPhases(value: number): void;

  getPhaseDurationMs(): number;
  setPhaseDurationMs(value: number): void;

  getAdvScanVector(): number;
  setAdvScanVector(value: number): void;

  clearZoneGatewayIdsList(): void;
  getZoneGatewayIdsList(): Array<number>;
  setZoneGatewayIdsList(value: Array<number>): void;
  addZoneGatewayIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayCalibrateParams.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayCalibrateParams): GatewayCalibrateParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayCalibrateParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayCalibrateParams;
  static deserializeBinaryFromReader(message: GatewayCalibrateParams, reader: jspb.BinaryReader): GatewayCalibrateParams;
}

export namespace GatewayCalibrateParams {
  export type AsObject = {
    numOfPhases: number,
    phaseDurationMs: number,
    advScanVector: number,
    zoneGatewayIdsList: Array<number>,
  }
}

export class GatewayTaskResponseMessage extends jspb.Message {
  getMessageid(): number;
  setMessageid(value: number): void;

  getGatewayid(): number;
  setGatewayid(value: number): void;

  getResponsecode(): GatewayResponseCodeMap[keyof GatewayResponseCodeMap];
  setResponsecode(value: GatewayResponseCodeMap[keyof GatewayResponseCodeMap]): void;

  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayTaskResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayTaskResponseMessage): GatewayTaskResponseMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayTaskResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayTaskResponseMessage;
  static deserializeBinaryFromReader(message: GatewayTaskResponseMessage, reader: jspb.BinaryReader): GatewayTaskResponseMessage;
}

export namespace GatewayTaskResponseMessage {
  export type AsObject = {
    messageid: number,
    gatewayid: number,
    responsecode: GatewayResponseCodeMap[keyof GatewayResponseCodeMap],
    msg: string,
  }
}

export class GatewayParams extends jspb.Message {
  getConfigId(): number;
  setConfigId(value: number): void;

  getPersistReboot(): boolean;
  setPersistReboot(value: boolean): void;

  getBleEnable(): boolean;
  setBleEnable(value: boolean): void;

  getBleFastUnsyncedScanDuration(): number;
  setBleFastUnsyncedScanDuration(value: number): void;

  getBleScanDuration(): number;
  setBleScanDuration(value: number): void;

  getBleScanInterval(): number;
  setBleScanInterval(value: number): void;

  getBleScanWindow(): number;
  setBleScanWindow(value: number): void;

  getBleMaxDevices(): number;
  setBleMaxDevices(value: number): void;

  getBleCalibAdvDuration(): number;
  setBleCalibAdvDuration(value: number): void;

  getBleCalibScanDuration(): number;
  setBleCalibScanDuration(value: number): void;

  getWifiEnable(): boolean;
  setWifiEnable(value: boolean): void;

  getWifiSsid(): string;
  setWifiSsid(value: string): void;

  getWifiPassword(): string;
  setWifiPassword(value: string): void;

  getWifiMaxRetry(): number;
  setWifiMaxRetry(value: number): void;

  getMqttEnable(): boolean;
  setMqttEnable(value: boolean): void;

  getMqttUri(): string;
  setMqttUri(value: string): void;

  getMqttPort(): number;
  setMqttPort(value: number): void;

  getMqttUsername(): string;
  setMqttUsername(value: string): void;

  getMqttPassword(): string;
  setMqttPassword(value: string): void;

  getMqttRequestTopic(): string;
  setMqttRequestTopic(value: string): void;

  getMqttDiscoveryTopic(): string;
  setMqttDiscoveryTopic(value: string): void;

  getMqttResponseTopic(): string;
  setMqttResponseTopic(value: string): void;

  getMqttStatusTopic(): string;
  setMqttStatusTopic(value: string): void;

  getMqttCalibrationTopic(): string;
  setMqttCalibrationTopic(value: string): void;

  getMqttPingTopic(): string;
  setMqttPingTopic(value: string): void;

  getSntpEnable(): boolean;
  setSntpEnable(value: boolean): void;

  getSntpServerName(): string;
  setSntpServerName(value: string): void;

  getSchedulerQueueSize(): number;
  setSchedulerQueueSize(value: number): void;

  getSchedulerStartLoopOnBoot(): boolean;
  setSchedulerStartLoopOnBoot(value: boolean): void;

  getSchedulerRespondToRequests(): boolean;
  setSchedulerRespondToRequests(value: boolean): void;

  getSchedulerStartMainLoopWithoutBackend(): boolean;
  setSchedulerStartMainLoopWithoutBackend(value: boolean): void;

  getMainLoopQueueSize(): number;
  setMainLoopQueueSize(value: number): void;

  getMainLoopReportStatus(): boolean;
  setMainLoopReportStatus(value: boolean): void;

  getMainLoopDtStart(): number;
  setMainLoopDtStart(value: number): void;

  getMainLoopDtPub(): number;
  setMainLoopDtPub(value: number): void;

  getMainLoopDtEnd(): number;
  setMainLoopDtEnd(value: number): void;

  getMainLoopLog(): boolean;
  setMainLoopLog(value: boolean): void;

  getFaultHandlerRestartOnFatal(): boolean;
  setFaultHandlerRestartOnFatal(value: boolean): void;

  getFaultHandlerBlobSize(): number;
  setFaultHandlerBlobSize(value: number): void;

  getFaultHandlerTimeoutMin(): number;
  setFaultHandlerTimeoutMin(value: number): void;

  getFaultHandlerMaxFaults(): number;
  setFaultHandlerMaxFaults(value: number): void;

  getFaultHandlerRestartOnTimeout(): boolean;
  setFaultHandlerRestartOnTimeout(value: boolean): void;

  getStatusHandlerRaiseFaultOnWaitTimeout(): boolean;
  setStatusHandlerRaiseFaultOnWaitTimeout(value: boolean): void;

  getLogLevel(): number;
  setLogLevel(value: number): void;

  getOtaServerUrl(): string;
  setOtaServerUrl(value: string): void;

  getCalibEnable(): boolean;
  setCalibEnable(value: boolean): void;

  getLinkHandlerPingTimeoutMin(): number;
  setLinkHandlerPingTimeoutMin(value: number): void;

  getLinkHandlerRestartOnTimeout(): boolean;
  setLinkHandlerRestartOnTimeout(value: boolean): void;

  getMqttAckRespond(): boolean;
  setMqttAckRespond(value: boolean): void;

  getMqttEventTopic(): string;
  setMqttEventTopic(value: string): void;

  getFaultHandlerPublishEvents(): boolean;
  setFaultHandlerPublishEvents(value: boolean): void;

  getUdpLoggerEnable(): boolean;
  setUdpLoggerEnable(value: boolean): void;

  getUdpLoggerUrl(): string;
  setUdpLoggerUrl(value: string): void;

  getUdpLoggerPort(): number;
  setUdpLoggerPort(value: number): void;

  getOtaEnableRollback(): boolean;
  setOtaEnableRollback(value: boolean): void;

  getOtaUpdateTimeoutMin(): number;
  setOtaUpdateTimeoutMin(value: number): void;

  getEventHandlerLevel(): number;
  setEventHandlerLevel(value: number): void;

  getSyncHandlerPublishEvents(): boolean;
  setSyncHandlerPublishEvents(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayParams.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayParams): GatewayParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayParams;
  static deserializeBinaryFromReader(message: GatewayParams, reader: jspb.BinaryReader): GatewayParams;
}

export namespace GatewayParams {
  export type AsObject = {
    configId: number,
    persistReboot: boolean,
    bleEnable: boolean,
    bleFastUnsyncedScanDuration: number,
    bleScanDuration: number,
    bleScanInterval: number,
    bleScanWindow: number,
    bleMaxDevices: number,
    bleCalibAdvDuration: number,
    bleCalibScanDuration: number,
    wifiEnable: boolean,
    wifiSsid: string,
    wifiPassword: string,
    wifiMaxRetry: number,
    mqttEnable: boolean,
    mqttUri: string,
    mqttPort: number,
    mqttUsername: string,
    mqttPassword: string,
    mqttRequestTopic: string,
    mqttDiscoveryTopic: string,
    mqttResponseTopic: string,
    mqttStatusTopic: string,
    mqttCalibrationTopic: string,
    mqttPingTopic: string,
    sntpEnable: boolean,
    sntpServerName: string,
    schedulerQueueSize: number,
    schedulerStartLoopOnBoot: boolean,
    schedulerRespondToRequests: boolean,
    schedulerStartMainLoopWithoutBackend: boolean,
    mainLoopQueueSize: number,
    mainLoopReportStatus: boolean,
    mainLoopDtStart: number,
    mainLoopDtPub: number,
    mainLoopDtEnd: number,
    mainLoopLog: boolean,
    faultHandlerRestartOnFatal: boolean,
    faultHandlerBlobSize: number,
    faultHandlerTimeoutMin: number,
    faultHandlerMaxFaults: number,
    faultHandlerRestartOnTimeout: boolean,
    statusHandlerRaiseFaultOnWaitTimeout: boolean,
    logLevel: number,
    otaServerUrl: string,
    calibEnable: boolean,
    linkHandlerPingTimeoutMin: number,
    linkHandlerRestartOnTimeout: boolean,
    mqttAckRespond: boolean,
    mqttEventTopic: string,
    faultHandlerPublishEvents: boolean,
    udpLoggerEnable: boolean,
    udpLoggerUrl: string,
    udpLoggerPort: number,
    otaEnableRollback: boolean,
    otaUpdateTimeoutMin: number,
    eventHandlerLevel: number,
    syncHandlerPublishEvents: boolean,
  }
}

export class GatewayStatus extends jspb.Message {
  getMessageid(): number;
  setMessageid(value: number): void;

  getGatewayid(): number;
  setGatewayid(value: number): void;

  getWifiUp(): number;
  setWifiUp(value: number): void;

  getBleUp(): number;
  setBleUp(value: number): void;

  getMqttUp(): number;
  setMqttUp(value: number): void;

  getSntpUp(): number;
  setSntpUp(value: number): void;

  getFreeHeap(): number;
  setFreeHeap(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayStatus.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayStatus): GatewayStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayStatus;
  static deserializeBinaryFromReader(message: GatewayStatus, reader: jspb.BinaryReader): GatewayStatus;
}

export namespace GatewayStatus {
  export type AsObject = {
    messageid: number,
    gatewayid: number,
    wifiUp: number,
    bleUp: number,
    mqttUp: number,
    sntpUp: number,
    freeHeap: number,
  }
}

export interface GatewayScanTypeMap {
  NONESCAN: 0;
  SYNCED: 1;
  UNSYNCED: 2;
}

export const GatewayScanType: GatewayScanTypeMap;

export interface GatewayEventIDMap {
  NONE: 0;
  FAULT: 1;
  SYSTEM_UP: 2;
  MAIN_LOOP_STARTED: 3;
  MAIN_LOOP_STOPED: 4;
  RESTART: 5;
  CONFIGURE: 6;
  OTA_START: 7;
  OTA_SUCCESS: 8;
  OTA_FAIL: 9;
  BROWNOUT: 10;
  MASTER_TICK: 11;
  SLEEP_ENTER: 12;
  SLEEP_WAKEUP: 13;
}

export const GatewayEventID: GatewayEventIDMap;

export interface GatewayTaskIDMap {
  SCHEDULER_TASK_ID_NONE: 0;
  SCHEDULER_TASK_ID_RESTART_GW: 1;
  SCHEDULER_TASK_ID_START: 2;
  SCHEDULER_TASK_ID_STOP: 3;
  SCHEDULER_TASK_ID_HANDSHAKE: 4;
  SCHEDULER_TASK_ID_CONFIGURE: 5;
  SCHEDULER_TASK_ID_PRINT_FAULTS: 6;
  SCHEDULER_TASK_ID_START_ADV: 7;
  SCHEDULER_TASK_ID_READ_RSSI: 8;
  SCHEDULER_TASK_ID_CALIBRATE: 9;
  SCHEDULER_TASK_ID_OTA_UPDATE: 10;
  SCHEDULER_TASK_ID_PING: 11;
  SCHEDULER_TASK_ID_RESET_SYNC_HANDLER: 12;
  SCHEDULER_TASK_ID_SLEEP: 13;
}

export const GatewayTaskID: GatewayTaskIDMap;

export interface GatewayResponseCodeMap {
  RESPONSE_CODE_NONE: 0;
  RESPONSE_CODE_OK: 1;
  RESPONSE_CODE_ERROR: 2;
  RESPONSE_CODE_ERROR_UNKOWN_TASK: 3;
  RESPONSE_CODE_PING_PONG: 4;
  RESPONSE_CODE_OTA_UPDATE_COMPLETE: 5;
  RESPONSE_CODE_OTA_UPDATE_FAILED: 6;
  RESPONSE_CODE_ACK: 7;
}

export const GatewayResponseCode: GatewayResponseCodeMap;

export interface GatewaySleepTypeMap {
  NO_SLEEP: 0;
  LIGHT_SLEEP: 1;
}

export const GatewaySleepType: GatewaySleepTypeMap;


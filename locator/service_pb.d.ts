// package: locator
// file: locator/service.proto

import * as jspb from "google-protobuf";
import * as gateway_gateway_pb from "../gateway/gateway_pb";
import * as domain_domain_pb from "../domain/domain_pb";

export class GetGatewaysRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewaysRequest): GetGatewaysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewaysRequest;
  static deserializeBinaryFromReader(message: GetGatewaysRequest, reader: jspb.BinaryReader): GetGatewaysRequest;
}

export namespace GetGatewaysRequest {
  export type AsObject = {
  }
}

export class GetGatewaysReply extends jspb.Message {
  clearGatewaysList(): void;
  getGatewaysList(): Array<Gateway>;
  setGatewaysList(value: Array<Gateway>): void;
  addGateways(value?: Gateway, index?: number): Gateway;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewaysReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewaysReply): GetGatewaysReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewaysReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewaysReply;
  static deserializeBinaryFromReader(message: GetGatewaysReply, reader: jspb.BinaryReader): GetGatewaysReply;
}

export namespace GetGatewaysReply {
  export type AsObject = {
    gatewaysList: Array<Gateway.AsObject>,
  }
}

export class GatewayNotificationStreamRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayNotificationStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayNotificationStreamRequest): GatewayNotificationStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayNotificationStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayNotificationStreamRequest;
  static deserializeBinaryFromReader(message: GatewayNotificationStreamRequest, reader: jspb.BinaryReader): GatewayNotificationStreamRequest;
}

export namespace GatewayNotificationStreamRequest {
  export type AsObject = {
  }
}

export class Gateway extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSerialId(): number;
  setSerialId(value: number): void;

  getLastPing(): string;
  setLastPing(value: string): void;

  getLastDiscovery(): string;
  setLastDiscovery(value: string): void;

  clearRequestsList(): void;
  getRequestsList(): Array<Gateway.Request>;
  setRequestsList(value: Array<Gateway.Request>): void;
  addRequests(value?: Gateway.Request, index?: number): Gateway.Request;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): domain_domain_pb.Point | undefined;
  setPosition(value?: domain_domain_pb.Point): void;

  getParamsConfigId(): number;
  setParamsConfigId(value: number): void;

  getSoftwareVersion(): string;
  setSoftwareVersion(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getDeployment(): string;
  setDeployment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Gateway.AsObject;
  static toObject(includeInstance: boolean, msg: Gateway): Gateway.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Gateway, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Gateway;
  static deserializeBinaryFromReader(message: Gateway, reader: jspb.BinaryReader): Gateway;
}

export namespace Gateway {
  export type AsObject = {
    id: string,
    serialId: number,
    lastPing: string,
    lastDiscovery: string,
    requestsList: Array<Gateway.Request.AsObject>,
    position?: domain_domain_pb.Point.AsObject,
    paramsConfigId: number,
    softwareVersion: string,
    tagsList: Array<string>,
    deployment: string,
  }

  export class Request extends jspb.Message {
    getMessageId(): number;
    setMessageId(value: number): void;

    getLastAttemptDate(): string;
    setLastAttemptDate(value: string): void;

    getAttempts(): number;
    setAttempts(value: number): void;

    getMaxAttempts(): number;
    setMaxAttempts(value: number): void;

    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): Gateway.Request.Response | undefined;
    setResponse(value?: Gateway.Request.Response): void;

    getFinished(): boolean;
    setFinished(value: boolean): void;

    getTimeout(): number;
    setTimeout(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      messageId: number,
      lastAttemptDate: string,
      attempts: number,
      maxAttempts: number,
      response?: Gateway.Request.Response.AsObject,
      finished: boolean,
      timeout: number,
    }

    export class Response extends jspb.Message {
      getCode(): gateway_gateway_pb.GatewayResponseCodeMap[keyof gateway_gateway_pb.GatewayResponseCodeMap];
      setCode(value: gateway_gateway_pb.GatewayResponseCodeMap[keyof gateway_gateway_pb.GatewayResponseCodeMap]): void;

      getMessage(): string;
      setMessage(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Response.AsObject;
      static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Response;
      static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
      export type AsObject = {
        code: gateway_gateway_pb.GatewayResponseCodeMap[keyof gateway_gateway_pb.GatewayResponseCodeMap],
        message: string,
      }
    }
  }
}

export class GatewayNotification extends jspb.Message {
  hasLastPingUpdate(): boolean;
  clearLastPingUpdate(): void;
  getLastPingUpdate(): GatewayNotification.LastPingUpdate | undefined;
  setLastPingUpdate(value?: GatewayNotification.LastPingUpdate): void;

  hasLastDiscoveryUpdate(): boolean;
  clearLastDiscoveryUpdate(): void;
  getLastDiscoveryUpdate(): GatewayNotification.LastDiscoveryUpdate | undefined;
  setLastDiscoveryUpdate(value?: GatewayNotification.LastDiscoveryUpdate): void;

  hasRequestUpdate(): boolean;
  clearRequestUpdate(): void;
  getRequestUpdate(): GatewayNotification.RequestUpdate | undefined;
  setRequestUpdate(value?: GatewayNotification.RequestUpdate): void;

  getNotificationCase(): GatewayNotification.NotificationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayNotification.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayNotification): GatewayNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayNotification;
  static deserializeBinaryFromReader(message: GatewayNotification, reader: jspb.BinaryReader): GatewayNotification;
}

export namespace GatewayNotification {
  export type AsObject = {
    lastPingUpdate?: GatewayNotification.LastPingUpdate.AsObject,
    lastDiscoveryUpdate?: GatewayNotification.LastDiscoveryUpdate.AsObject,
    requestUpdate?: GatewayNotification.RequestUpdate.AsObject,
  }

  export class LastPingUpdate extends jspb.Message {
    getGatewayId(): number;
    setGatewayId(value: number): void;

    getLastPing(): string;
    setLastPing(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LastPingUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: LastPingUpdate): LastPingUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LastPingUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LastPingUpdate;
    static deserializeBinaryFromReader(message: LastPingUpdate, reader: jspb.BinaryReader): LastPingUpdate;
  }

  export namespace LastPingUpdate {
    export type AsObject = {
      gatewayId: number,
      lastPing: string,
    }
  }

  export class LastDiscoveryUpdate extends jspb.Message {
    getGatewayId(): number;
    setGatewayId(value: number): void;

    getLastDiscovery(): string;
    setLastDiscovery(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LastDiscoveryUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: LastDiscoveryUpdate): LastDiscoveryUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LastDiscoveryUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LastDiscoveryUpdate;
    static deserializeBinaryFromReader(message: LastDiscoveryUpdate, reader: jspb.BinaryReader): LastDiscoveryUpdate;
  }

  export namespace LastDiscoveryUpdate {
    export type AsObject = {
      gatewayId: number,
      lastDiscovery: string,
    }
  }

  export class RequestUpdate extends jspb.Message {
    getGatewayId(): number;
    setGatewayId(value: number): void;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): Gateway.Request | undefined;
    setRequest(value?: Gateway.Request): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: RequestUpdate): RequestUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestUpdate;
    static deserializeBinaryFromReader(message: RequestUpdate, reader: jspb.BinaryReader): RequestUpdate;
  }

  export namespace RequestUpdate {
    export type AsObject = {
      gatewayId: number,
      request?: Gateway.Request.AsObject,
    }
  }

  export enum NotificationCase {
    NOTIFICATION_NOT_SET = 0,
    LAST_PING_UPDATE = 1,
    LAST_DISCOVERY_UPDATE = 2,
    REQUEST_UPDATE = 3,
  }
}

export class RestartGatewayAction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartGatewayAction.AsObject;
  static toObject(includeInstance: boolean, msg: RestartGatewayAction): RestartGatewayAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestartGatewayAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartGatewayAction;
  static deserializeBinaryFromReader(message: RestartGatewayAction, reader: jspb.BinaryReader): RestartGatewayAction;
}

export namespace RestartGatewayAction {
  export type AsObject = {
  }
}

export class ConfigureGatewayAction extends jspb.Message {
  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): gateway_gateway_pb.GatewayParams | undefined;
  setConfiguration(value?: gateway_gateway_pb.GatewayParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigureGatewayAction.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigureGatewayAction): ConfigureGatewayAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigureGatewayAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigureGatewayAction;
  static deserializeBinaryFromReader(message: ConfigureGatewayAction, reader: jspb.BinaryReader): ConfigureGatewayAction;
}

export namespace ConfigureGatewayAction {
  export type AsObject = {
    configuration?: gateway_gateway_pb.GatewayParams.AsObject,
  }
}

export class StartBleScan extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartBleScan.AsObject;
  static toObject(includeInstance: boolean, msg: StartBleScan): StartBleScan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartBleScan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartBleScan;
  static deserializeBinaryFromReader(message: StartBleScan, reader: jspb.BinaryReader): StartBleScan;
}

export namespace StartBleScan {
  export type AsObject = {
  }
}

export class StopBleScan extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopBleScan.AsObject;
  static toObject(includeInstance: boolean, msg: StopBleScan): StopBleScan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopBleScan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopBleScan;
  static deserializeBinaryFromReader(message: StopBleScan, reader: jspb.BinaryReader): StopBleScan;
}

export namespace StopBleScan {
  export type AsObject = {
  }
}

export class SoftwareUpdateAction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SoftwareUpdateAction.AsObject;
  static toObject(includeInstance: boolean, msg: SoftwareUpdateAction): SoftwareUpdateAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SoftwareUpdateAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SoftwareUpdateAction;
  static deserializeBinaryFromReader(message: SoftwareUpdateAction, reader: jspb.BinaryReader): SoftwareUpdateAction;
}

export namespace SoftwareUpdateAction {
  export type AsObject = {
  }
}

export class PingAction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingAction.AsObject;
  static toObject(includeInstance: boolean, msg: PingAction): PingAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingAction;
  static deserializeBinaryFromReader(message: PingAction, reader: jspb.BinaryReader): PingAction;
}

export namespace PingAction {
  export type AsObject = {
  }
}

export class GatewayActionRequest extends jspb.Message {
  getSerialId(): number;
  setSerialId(value: number): void;

  getMaxAttempts(): number;
  setMaxAttempts(value: number): void;

  getTimeout(): number;
  setTimeout(value: number): void;

  hasRestart(): boolean;
  clearRestart(): void;
  getRestart(): RestartGatewayAction | undefined;
  setRestart(value?: RestartGatewayAction): void;

  hasConfigure(): boolean;
  clearConfigure(): void;
  getConfigure(): ConfigureGatewayAction | undefined;
  setConfigure(value?: ConfigureGatewayAction): void;

  hasStartBleScan(): boolean;
  clearStartBleScan(): void;
  getStartBleScan(): StartBleScan | undefined;
  setStartBleScan(value?: StartBleScan): void;

  hasStopBleScan(): boolean;
  clearStopBleScan(): void;
  getStopBleScan(): StopBleScan | undefined;
  setStopBleScan(value?: StopBleScan): void;

  hasCalibrate(): boolean;
  clearCalibrate(): void;
  getCalibrate(): gateway_gateway_pb.GatewayCalibrateParams | undefined;
  setCalibrate(value?: gateway_gateway_pb.GatewayCalibrateParams): void;

  hasSoftwareupdate(): boolean;
  clearSoftwareupdate(): void;
  getSoftwareupdate(): SoftwareUpdateAction | undefined;
  setSoftwareupdate(value?: SoftwareUpdateAction): void;

  hasPing(): boolean;
  clearPing(): void;
  getPing(): PingAction | undefined;
  setPing(value?: PingAction): void;

  getGatewayactionCase(): GatewayActionRequest.GatewayactionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayActionRequest): GatewayActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayActionRequest;
  static deserializeBinaryFromReader(message: GatewayActionRequest, reader: jspb.BinaryReader): GatewayActionRequest;
}

export namespace GatewayActionRequest {
  export type AsObject = {
    serialId: number,
    maxAttempts: number,
    timeout: number,
    restart?: RestartGatewayAction.AsObject,
    configure?: ConfigureGatewayAction.AsObject,
    startBleScan?: StartBleScan.AsObject,
    stopBleScan?: StopBleScan.AsObject,
    calibrate?: gateway_gateway_pb.GatewayCalibrateParams.AsObject,
    softwareupdate?: SoftwareUpdateAction.AsObject,
    ping?: PingAction.AsObject,
  }

  export enum GatewayactionCase {
    GATEWAYACTION_NOT_SET = 0,
    RESTART = 4,
    CONFIGURE = 5,
    START_BLE_SCAN = 6,
    STOP_BLE_SCAN = 7,
    CALIBRATE = 8,
    SOFTWAREUPDATE = 9,
    PING = 10,
  }
}

export class GatewayActionResponse extends jspb.Message {
  getMessageId(): number;
  setMessageId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayActionResponse): GatewayActionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayActionResponse;
  static deserializeBinaryFromReader(message: GatewayActionResponse, reader: jspb.BinaryReader): GatewayActionResponse;
}

export namespace GatewayActionResponse {
  export type AsObject = {
    messageId: number,
  }
}

export class GatewayParamsConfigDto extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getAlias(): string;
  setAlias(value: string): void;

  getCreatedAtDate(): string;
  setCreatedAtDate(value: string): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): gateway_gateway_pb.GatewayParams | undefined;
  setConfiguration(value?: gateway_gateway_pb.GatewayParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayParamsConfigDto.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayParamsConfigDto): GatewayParamsConfigDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayParamsConfigDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayParamsConfigDto;
  static deserializeBinaryFromReader(message: GatewayParamsConfigDto, reader: jspb.BinaryReader): GatewayParamsConfigDto;
}

export namespace GatewayParamsConfigDto {
  export type AsObject = {
    id: number,
    alias: string,
    createdAtDate: string,
    configuration?: gateway_gateway_pb.GatewayParams.AsObject,
  }
}

export class GetGatewayConfigurationsRequest extends jspb.Message {
  getAlias(): string;
  setAlias(value: string): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): gateway_gateway_pb.GatewayParams | undefined;
  setConfiguration(value?: gateway_gateway_pb.GatewayParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayConfigurationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayConfigurationsRequest): GetGatewayConfigurationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewayConfigurationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayConfigurationsRequest;
  static deserializeBinaryFromReader(message: GetGatewayConfigurationsRequest, reader: jspb.BinaryReader): GetGatewayConfigurationsRequest;
}

export namespace GetGatewayConfigurationsRequest {
  export type AsObject = {
    alias: string,
    configuration?: gateway_gateway_pb.GatewayParams.AsObject,
  }
}

export class GetGatewayConfigurationsResponse extends jspb.Message {
  clearConfigurationsList(): void;
  getConfigurationsList(): Array<GatewayParamsConfigDto>;
  setConfigurationsList(value: Array<GatewayParamsConfigDto>): void;
  addConfigurations(value?: GatewayParamsConfigDto, index?: number): GatewayParamsConfigDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayConfigurationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayConfigurationsResponse): GetGatewayConfigurationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewayConfigurationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayConfigurationsResponse;
  static deserializeBinaryFromReader(message: GetGatewayConfigurationsResponse, reader: jspb.BinaryReader): GetGatewayConfigurationsResponse;
}

export namespace GetGatewayConfigurationsResponse {
  export type AsObject = {
    configurationsList: Array<GatewayParamsConfigDto.AsObject>,
  }
}

export class SaveGatewayConfigurationRequest extends jspb.Message {
  getAlias(): string;
  setAlias(value: string): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): gateway_gateway_pb.GatewayParams | undefined;
  setConfiguration(value?: gateway_gateway_pb.GatewayParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveGatewayConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveGatewayConfigurationRequest): SaveGatewayConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveGatewayConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveGatewayConfigurationRequest;
  static deserializeBinaryFromReader(message: SaveGatewayConfigurationRequest, reader: jspb.BinaryReader): SaveGatewayConfigurationRequest;
}

export namespace SaveGatewayConfigurationRequest {
  export type AsObject = {
    alias: string,
    configuration?: gateway_gateway_pb.GatewayParams.AsObject,
  }
}

export class SaveGatewayConfigurationResponse extends jspb.Message {
  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): GatewayParamsConfigDto | undefined;
  setConfiguration(value?: GatewayParamsConfigDto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveGatewayConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveGatewayConfigurationResponse): SaveGatewayConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveGatewayConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveGatewayConfigurationResponse;
  static deserializeBinaryFromReader(message: SaveGatewayConfigurationResponse, reader: jspb.BinaryReader): SaveGatewayConfigurationResponse;
}

export namespace SaveGatewayConfigurationResponse {
  export type AsObject = {
    configuration?: GatewayParamsConfigDto.AsObject,
  }
}

export class ObservationStreamRequest extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): void;

  clearBeaconFilterList(): void;
  getBeaconFilterList(): Array<domain_domain_pb.Beacon>;
  setBeaconFilterList(value: Array<domain_domain_pb.Beacon>): void;
  addBeaconFilter(value?: domain_domain_pb.Beacon, index?: number): domain_domain_pb.Beacon;

  clearGatewayFilterList(): void;
  getGatewayFilterList(): Array<number>;
  setGatewayFilterList(value: Array<number>): void;
  addGatewayFilter(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationStreamRequest): ObservationStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationStreamRequest;
  static deserializeBinaryFromReader(message: ObservationStreamRequest, reader: jspb.BinaryReader): ObservationStreamRequest;
}

export namespace ObservationStreamRequest {
  export type AsObject = {
    deploymentId: string,
    beaconFilterList: Array<domain_domain_pb.Beacon.AsObject>,
    gatewayFilterList: Array<number>,
  }
}

export class ObservationStreamMessage extends jspb.Message {
  clearObservationsList(): void;
  getObservationsList(): Array<domain_domain_pb.ObservationDto>;
  setObservationsList(value: Array<domain_domain_pb.ObservationDto>): void;
  addObservations(value?: domain_domain_pb.ObservationDto, index?: number): domain_domain_pb.ObservationDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationStreamMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationStreamMessage): ObservationStreamMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationStreamMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationStreamMessage;
  static deserializeBinaryFromReader(message: ObservationStreamMessage, reader: jspb.BinaryReader): ObservationStreamMessage;
}

export namespace ObservationStreamMessage {
  export type AsObject = {
    observationsList: Array<domain_domain_pb.ObservationDto.AsObject>,
  }
}

export class BinaryDto extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryDto.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryDto): BinaryDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BinaryDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryDto;
  static deserializeBinaryFromReader(message: BinaryDto, reader: jspb.BinaryReader): BinaryDto;
}

export namespace BinaryDto {
  export type AsObject = {
    name: string,
    version: string,
    createdAt: string,
  }
}

export class CreateBinaryRequest extends jspb.Message {
  getBinaryName(): string;
  setBinaryName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getBinaryFile(): Uint8Array | string;
  getBinaryFile_asU8(): Uint8Array;
  getBinaryFile_asB64(): string;
  setBinaryFile(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBinaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBinaryRequest): CreateBinaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBinaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBinaryRequest;
  static deserializeBinaryFromReader(message: CreateBinaryRequest, reader: jspb.BinaryReader): CreateBinaryRequest;
}

export namespace CreateBinaryRequest {
  export type AsObject = {
    binaryName: string,
    version: string,
    binaryFile: Uint8Array | string,
  }
}

export class CreateBinaryReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBinaryReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBinaryReply): CreateBinaryReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBinaryReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBinaryReply;
  static deserializeBinaryFromReader(message: CreateBinaryReply, reader: jspb.BinaryReader): CreateBinaryReply;
}

export namespace CreateBinaryReply {
  export type AsObject = {
  }
}

export class GetBinariesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBinariesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBinariesRequest): GetBinariesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBinariesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBinariesRequest;
  static deserializeBinaryFromReader(message: GetBinariesRequest, reader: jspb.BinaryReader): GetBinariesRequest;
}

export namespace GetBinariesRequest {
  export type AsObject = {
  }
}

export class GetBinariesReply extends jspb.Message {
  clearBinaryListList(): void;
  getBinaryListList(): Array<BinaryDto>;
  setBinaryListList(value: Array<BinaryDto>): void;
  addBinaryList(value?: BinaryDto, index?: number): BinaryDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBinariesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetBinariesReply): GetBinariesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBinariesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBinariesReply;
  static deserializeBinaryFromReader(message: GetBinariesReply, reader: jspb.BinaryReader): GetBinariesReply;
}

export namespace GetBinariesReply {
  export type AsObject = {
    binaryListList: Array<BinaryDto.AsObject>,
  }
}

export class SetGatewayParamsConfigRequest extends jspb.Message {
  getConfigHash(): number;
  setConfigHash(value: number): void;

  getGatewayId(): number;
  setGatewayId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGatewayParamsConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetGatewayParamsConfigRequest): SetGatewayParamsConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGatewayParamsConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGatewayParamsConfigRequest;
  static deserializeBinaryFromReader(message: SetGatewayParamsConfigRequest, reader: jspb.BinaryReader): SetGatewayParamsConfigRequest;
}

export namespace SetGatewayParamsConfigRequest {
  export type AsObject = {
    configHash: number,
    gatewayId: number,
  }
}

export class SetGatewayParamsConfigReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGatewayParamsConfigReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetGatewayParamsConfigReply): SetGatewayParamsConfigReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGatewayParamsConfigReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGatewayParamsConfigReply;
  static deserializeBinaryFromReader(message: SetGatewayParamsConfigReply, reader: jspb.BinaryReader): SetGatewayParamsConfigReply;
}

export namespace SetGatewayParamsConfigReply {
  export type AsObject = {
  }
}

export class SetGatewaySoftwareVersionRequest extends jspb.Message {
  getGatewayId(): number;
  setGatewayId(value: number): void;

  getSoftwareVersion(): string;
  setSoftwareVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGatewaySoftwareVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetGatewaySoftwareVersionRequest): SetGatewaySoftwareVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGatewaySoftwareVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGatewaySoftwareVersionRequest;
  static deserializeBinaryFromReader(message: SetGatewaySoftwareVersionRequest, reader: jspb.BinaryReader): SetGatewaySoftwareVersionRequest;
}

export namespace SetGatewaySoftwareVersionRequest {
  export type AsObject = {
    gatewayId: number,
    softwareVersion: string,
  }
}

export class SetGatewaySoftwareVersionReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGatewaySoftwareVersionReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetGatewaySoftwareVersionReply): SetGatewaySoftwareVersionReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGatewaySoftwareVersionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGatewaySoftwareVersionReply;
  static deserializeBinaryFromReader(message: SetGatewaySoftwareVersionReply, reader: jspb.BinaryReader): SetGatewaySoftwareVersionReply;
}

export namespace SetGatewaySoftwareVersionReply {
  export type AsObject = {
  }
}

export class SetGatewayTagsRequest extends jspb.Message {
  getGatewayId(): number;
  setGatewayId(value: number): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGatewayTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetGatewayTagsRequest): SetGatewayTagsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGatewayTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGatewayTagsRequest;
  static deserializeBinaryFromReader(message: SetGatewayTagsRequest, reader: jspb.BinaryReader): SetGatewayTagsRequest;
}

export namespace SetGatewayTagsRequest {
  export type AsObject = {
    gatewayId: number,
    tagsList: Array<string>,
  }
}

export class SetGatewayTagsReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGatewayTagsReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetGatewayTagsReply): SetGatewayTagsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGatewayTagsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGatewayTagsReply;
  static deserializeBinaryFromReader(message: SetGatewayTagsReply, reader: jspb.BinaryReader): SetGatewayTagsReply;
}

export namespace SetGatewayTagsReply {
  export type AsObject = {
  }
}

export class SetGatewayPositionRequest extends jspb.Message {
  getGatewayId(): number;
  setGatewayId(value: number): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): domain_domain_pb.Point | undefined;
  setPosition(value?: domain_domain_pb.Point): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGatewayPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetGatewayPositionRequest): SetGatewayPositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGatewayPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGatewayPositionRequest;
  static deserializeBinaryFromReader(message: SetGatewayPositionRequest, reader: jspb.BinaryReader): SetGatewayPositionRequest;
}

export namespace SetGatewayPositionRequest {
  export type AsObject = {
    gatewayId: number,
    position?: domain_domain_pb.Point.AsObject,
  }
}

export class SetGatewayPositionReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGatewayPositionReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetGatewayPositionReply): SetGatewayPositionReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGatewayPositionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGatewayPositionReply;
  static deserializeBinaryFromReader(message: SetGatewayPositionReply, reader: jspb.BinaryReader): SetGatewayPositionReply;
}

export namespace SetGatewayPositionReply {
  export type AsObject = {
  }
}

export class GatewayLogDto extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getGatewayId(): number;
  setGatewayId(value: number): void;

  getGatewayTick(): number;
  setGatewayTick(value: number): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  getSeverity(): string;
  setSeverity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayLogDto.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayLogDto): GatewayLogDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayLogDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayLogDto;
  static deserializeBinaryFromReader(message: GatewayLogDto, reader: jspb.BinaryReader): GatewayLogDto;
}

export namespace GatewayLogDto {
  export type AsObject = {
    id: string,
    gatewayId: number,
    gatewayTick: number,
    namespace: string,
    message: string,
    timestamp: string,
    severity: string,
  }
}

export class GetGatewayLogsRequest extends jspb.Message {
  getGatewayId(): number;
  setGatewayId(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getTimestampCursor(): string;
  setTimestampCursor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayLogsRequest): GetGatewayLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewayLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayLogsRequest;
  static deserializeBinaryFromReader(message: GetGatewayLogsRequest, reader: jspb.BinaryReader): GetGatewayLogsRequest;
}

export namespace GetGatewayLogsRequest {
  export type AsObject = {
    gatewayId: number,
    limit: number,
    timestampCursor: string,
  }

  export interface DirectionMap {
    BEFORE: 0;
    AFTER: 1;
  }

  export const Direction: DirectionMap;
}

export class GetGatewayLogsReply extends jspb.Message {
  clearGatewayLogsList(): void;
  getGatewayLogsList(): Array<GatewayLogDto>;
  setGatewayLogsList(value: Array<GatewayLogDto>): void;
  addGatewayLogs(value?: GatewayLogDto, index?: number): GatewayLogDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayLogsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayLogsReply): GetGatewayLogsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewayLogsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayLogsReply;
  static deserializeBinaryFromReader(message: GetGatewayLogsReply, reader: jspb.BinaryReader): GetGatewayLogsReply;
}

export namespace GetGatewayLogsReply {
  export type AsObject = {
    gatewayLogsList: Array<GatewayLogDto.AsObject>,
  }
}

export class GatewayLogStreamRequest extends jspb.Message {
  getGatewayId(): number;
  setGatewayId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayLogStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayLogStreamRequest): GatewayLogStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayLogStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayLogStreamRequest;
  static deserializeBinaryFromReader(message: GatewayLogStreamRequest, reader: jspb.BinaryReader): GatewayLogStreamRequest;
}

export namespace GatewayLogStreamRequest {
  export type AsObject = {
    gatewayId: number,
  }
}

export class GatewayLogStreamReply extends jspb.Message {
  hasGatewayLog(): boolean;
  clearGatewayLog(): void;
  getGatewayLog(): GatewayLogDto | undefined;
  setGatewayLog(value?: GatewayLogDto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayLogStreamReply.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayLogStreamReply): GatewayLogStreamReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayLogStreamReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayLogStreamReply;
  static deserializeBinaryFromReader(message: GatewayLogStreamReply, reader: jspb.BinaryReader): GatewayLogStreamReply;
}

export namespace GatewayLogStreamReply {
  export type AsObject = {
    gatewayLog?: GatewayLogDto.AsObject,
  }
}

export class SetDeploymentMapRequest extends jspb.Message {
  getDeploymentid(): string;
  setDeploymentid(value: string): void;

  hasMap(): boolean;
  clearMap(): void;
  getMap(): domain_domain_pb.DeploymentDto.Map | undefined;
  setMap(value?: domain_domain_pb.DeploymentDto.Map): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeploymentMapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeploymentMapRequest): SetDeploymentMapRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDeploymentMapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeploymentMapRequest;
  static deserializeBinaryFromReader(message: SetDeploymentMapRequest, reader: jspb.BinaryReader): SetDeploymentMapRequest;
}

export namespace SetDeploymentMapRequest {
  export type AsObject = {
    deploymentid: string,
    map?: domain_domain_pb.DeploymentDto.Map.AsObject,
  }
}

export class SetDeploymentMapReply extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): domain_domain_pb.DeploymentDto | undefined;
  setDeployment(value?: domain_domain_pb.DeploymentDto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeploymentMapReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeploymentMapReply): SetDeploymentMapReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDeploymentMapReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeploymentMapReply;
  static deserializeBinaryFromReader(message: SetDeploymentMapReply, reader: jspb.BinaryReader): SetDeploymentMapReply;
}

export namespace SetDeploymentMapReply {
  export type AsObject = {
    deployment?: domain_domain_pb.DeploymentDto.AsObject,
  }
}

export class CreateDeploymentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeploymentRequest): CreateDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeploymentRequest;
  static deserializeBinaryFromReader(message: CreateDeploymentRequest, reader: jspb.BinaryReader): CreateDeploymentRequest;
}

export namespace CreateDeploymentRequest {
  export type AsObject = {
    name: string,
    avatar: string,
  }
}

export class CreateDeploymentReply extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): domain_domain_pb.DeploymentDto | undefined;
  setDeployment(value?: domain_domain_pb.DeploymentDto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeploymentReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeploymentReply): CreateDeploymentReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeploymentReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeploymentReply;
  static deserializeBinaryFromReader(message: CreateDeploymentReply, reader: jspb.BinaryReader): CreateDeploymentReply;
}

export namespace CreateDeploymentReply {
  export type AsObject = {
    deployment?: domain_domain_pb.DeploymentDto.AsObject,
  }
}

export class GetDeploymentsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentsRequest): GetDeploymentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeploymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentsRequest;
  static deserializeBinaryFromReader(message: GetDeploymentsRequest, reader: jspb.BinaryReader): GetDeploymentsRequest;
}

export namespace GetDeploymentsRequest {
  export type AsObject = {
  }
}

export class GetDeploymentsReply extends jspb.Message {
  clearDeploymentsList(): void;
  getDeploymentsList(): Array<domain_domain_pb.DeploymentDto>;
  setDeploymentsList(value: Array<domain_domain_pb.DeploymentDto>): void;
  addDeployments(value?: domain_domain_pb.DeploymentDto, index?: number): domain_domain_pb.DeploymentDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentsReply): GetDeploymentsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeploymentsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentsReply;
  static deserializeBinaryFromReader(message: GetDeploymentsReply, reader: jspb.BinaryReader): GetDeploymentsReply;
}

export namespace GetDeploymentsReply {
  export type AsObject = {
    deploymentsList: Array<domain_domain_pb.DeploymentDto.AsObject>,
  }
}

export class SetDeploymentConfigRequest extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): domain_domain_pb.DeploymentDto.Config | undefined;
  setConfig(value?: domain_domain_pb.DeploymentDto.Config): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeploymentConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeploymentConfigRequest): SetDeploymentConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDeploymentConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeploymentConfigRequest;
  static deserializeBinaryFromReader(message: SetDeploymentConfigRequest, reader: jspb.BinaryReader): SetDeploymentConfigRequest;
}

export namespace SetDeploymentConfigRequest {
  export type AsObject = {
    deploymentId: string,
    config?: domain_domain_pb.DeploymentDto.Config.AsObject,
  }
}

export class SetDeploymentConfigReply extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): domain_domain_pb.DeploymentDto | undefined;
  setDeployment(value?: domain_domain_pb.DeploymentDto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeploymentConfigReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeploymentConfigReply): SetDeploymentConfigReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDeploymentConfigReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeploymentConfigReply;
  static deserializeBinaryFromReader(message: SetDeploymentConfigReply, reader: jspb.BinaryReader): SetDeploymentConfigReply;
}

export namespace SetDeploymentConfigReply {
  export type AsObject = {
    deployment?: domain_domain_pb.DeploymentDto.AsObject,
  }
}

export class SetDeploymentGatewaysRequest extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): void;

  clearGatewaysList(): void;
  getGatewaysList(): Array<string>;
  setGatewaysList(value: Array<string>): void;
  addGateways(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeploymentGatewaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeploymentGatewaysRequest): SetDeploymentGatewaysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDeploymentGatewaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeploymentGatewaysRequest;
  static deserializeBinaryFromReader(message: SetDeploymentGatewaysRequest, reader: jspb.BinaryReader): SetDeploymentGatewaysRequest;
}

export namespace SetDeploymentGatewaysRequest {
  export type AsObject = {
    deploymentId: string,
    gatewaysList: Array<string>,
  }
}

export class SetDeploymentGatewaysReply extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): domain_domain_pb.DeploymentDto | undefined;
  setDeployment(value?: domain_domain_pb.DeploymentDto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeploymentGatewaysReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeploymentGatewaysReply): SetDeploymentGatewaysReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDeploymentGatewaysReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeploymentGatewaysReply;
  static deserializeBinaryFromReader(message: SetDeploymentGatewaysReply, reader: jspb.BinaryReader): SetDeploymentGatewaysReply;
}

export namespace SetDeploymentGatewaysReply {
  export type AsObject = {
    deployment?: domain_domain_pb.DeploymentDto.AsObject,
  }
}

export class CreateDeploymentApiKeyRequest extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeploymentApiKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeploymentApiKeyRequest): CreateDeploymentApiKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeploymentApiKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeploymentApiKeyRequest;
  static deserializeBinaryFromReader(message: CreateDeploymentApiKeyRequest, reader: jspb.BinaryReader): CreateDeploymentApiKeyRequest;
}

export namespace CreateDeploymentApiKeyRequest {
  export type AsObject = {
    deploymentId: string,
    name: string,
  }
}

export class CreateDeploymentApiKeyReply extends jspb.Message {
  hasApiKey(): boolean;
  clearApiKey(): void;
  getApiKey(): domain_domain_pb.DeploymentDto.ApiKey | undefined;
  setApiKey(value?: domain_domain_pb.DeploymentDto.ApiKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeploymentApiKeyReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeploymentApiKeyReply): CreateDeploymentApiKeyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeploymentApiKeyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeploymentApiKeyReply;
  static deserializeBinaryFromReader(message: CreateDeploymentApiKeyReply, reader: jspb.BinaryReader): CreateDeploymentApiKeyReply;
}

export namespace CreateDeploymentApiKeyReply {
  export type AsObject = {
    apiKey?: domain_domain_pb.DeploymentDto.ApiKey.AsObject,
  }
}

export class DeleteDeploymentApiKeyRequest extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): void;

  getApiKeyId(): string;
  setApiKeyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeploymentApiKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeploymentApiKeyRequest): DeleteDeploymentApiKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeploymentApiKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeploymentApiKeyRequest;
  static deserializeBinaryFromReader(message: DeleteDeploymentApiKeyRequest, reader: jspb.BinaryReader): DeleteDeploymentApiKeyRequest;
}

export namespace DeleteDeploymentApiKeyRequest {
  export type AsObject = {
    deploymentId: string,
    apiKeyId: string,
  }
}

export class DeleteDeploymentApiKeyReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeploymentApiKeyReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeploymentApiKeyReply): DeleteDeploymentApiKeyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeploymentApiKeyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeploymentApiKeyReply;
  static deserializeBinaryFromReader(message: DeleteDeploymentApiKeyReply, reader: jspb.BinaryReader): DeleteDeploymentApiKeyReply;
}

export namespace DeleteDeploymentApiKeyReply {
  export type AsObject = {
  }
}

export class RegenerateDeploymentApiKeyRequest extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): void;

  getApiKeyId(): string;
  setApiKeyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegenerateDeploymentApiKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegenerateDeploymentApiKeyRequest): RegenerateDeploymentApiKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegenerateDeploymentApiKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegenerateDeploymentApiKeyRequest;
  static deserializeBinaryFromReader(message: RegenerateDeploymentApiKeyRequest, reader: jspb.BinaryReader): RegenerateDeploymentApiKeyRequest;
}

export namespace RegenerateDeploymentApiKeyRequest {
  export type AsObject = {
    deploymentId: string,
    apiKeyId: string,
  }
}

export class RegenerateDeploymentApiKeyReply extends jspb.Message {
  getAccessKey(): string;
  setAccessKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegenerateDeploymentApiKeyReply.AsObject;
  static toObject(includeInstance: boolean, msg: RegenerateDeploymentApiKeyReply): RegenerateDeploymentApiKeyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegenerateDeploymentApiKeyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegenerateDeploymentApiKeyReply;
  static deserializeBinaryFromReader(message: RegenerateDeploymentApiKeyReply, reader: jspb.BinaryReader): RegenerateDeploymentApiKeyReply;
}

export namespace RegenerateDeploymentApiKeyReply {
  export type AsObject = {
    accessKey: string,
  }
}

export class BeaconPositionStreamRequest extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): void;

  clearBeaconFilterList(): void;
  getBeaconFilterList(): Array<domain_domain_pb.Beacon>;
  setBeaconFilterList(value: Array<domain_domain_pb.Beacon>): void;
  addBeaconFilter(value?: domain_domain_pb.Beacon, index?: number): domain_domain_pb.Beacon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconPositionStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconPositionStreamRequest): BeaconPositionStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconPositionStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconPositionStreamRequest;
  static deserializeBinaryFromReader(message: BeaconPositionStreamRequest, reader: jspb.BinaryReader): BeaconPositionStreamRequest;
}

export namespace BeaconPositionStreamRequest {
  export type AsObject = {
    deploymentId: string,
    beaconFilterList: Array<domain_domain_pb.Beacon.AsObject>,
  }
}

export class BeaconPositionStreamMessage extends jspb.Message {
  clearPositionsList(): void;
  getPositionsList(): Array<domain_domain_pb.BeaconPosition>;
  setPositionsList(value: Array<domain_domain_pb.BeaconPosition>): void;
  addPositions(value?: domain_domain_pb.BeaconPosition, index?: number): domain_domain_pb.BeaconPosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeaconPositionStreamMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BeaconPositionStreamMessage): BeaconPositionStreamMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeaconPositionStreamMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeaconPositionStreamMessage;
  static deserializeBinaryFromReader(message: BeaconPositionStreamMessage, reader: jspb.BinaryReader): BeaconPositionStreamMessage;
}

export namespace BeaconPositionStreamMessage {
  export type AsObject = {
    positionsList: Array<domain_domain_pb.BeaconPosition.AsObject>,
  }
}

export class PipelineLifecycleEventStreamRequest extends jspb.Message {
  clearDeploymentIdsList(): void;
  getDeploymentIdsList(): Array<string>;
  setDeploymentIdsList(value: Array<string>): void;
  addDeploymentIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PipelineLifecycleEventStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PipelineLifecycleEventStreamRequest): PipelineLifecycleEventStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PipelineLifecycleEventStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PipelineLifecycleEventStreamRequest;
  static deserializeBinaryFromReader(message: PipelineLifecycleEventStreamRequest, reader: jspb.BinaryReader): PipelineLifecycleEventStreamRequest;
}

export namespace PipelineLifecycleEventStreamRequest {
  export type AsObject = {
    deploymentIdsList: Array<string>,
  }
}

export class PipelineLifecycleEventMessage extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PipelineLifecycleEventMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PipelineLifecycleEventMessage): PipelineLifecycleEventMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PipelineLifecycleEventMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PipelineLifecycleEventMessage;
  static deserializeBinaryFromReader(message: PipelineLifecycleEventMessage, reader: jspb.BinaryReader): PipelineLifecycleEventMessage;
}

export namespace PipelineLifecycleEventMessage {
  export type AsObject = {
    deploymentId: string,
  }
}

export class SetDeploymentBeaconMajorRequest extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): void;

  getBeaconMajor(): number;
  setBeaconMajor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeploymentBeaconMajorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeploymentBeaconMajorRequest): SetDeploymentBeaconMajorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDeploymentBeaconMajorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeploymentBeaconMajorRequest;
  static deserializeBinaryFromReader(message: SetDeploymentBeaconMajorRequest, reader: jspb.BinaryReader): SetDeploymentBeaconMajorRequest;
}

export namespace SetDeploymentBeaconMajorRequest {
  export type AsObject = {
    deploymentId: string,
    beaconMajor: number,
  }
}

export class SetDeploymentBeaconMajorReply extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): domain_domain_pb.DeploymentDto | undefined;
  setDeployment(value?: domain_domain_pb.DeploymentDto): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeploymentBeaconMajorReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeploymentBeaconMajorReply): SetDeploymentBeaconMajorReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDeploymentBeaconMajorReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeploymentBeaconMajorReply;
  static deserializeBinaryFromReader(message: SetDeploymentBeaconMajorReply, reader: jspb.BinaryReader): SetDeploymentBeaconMajorReply;
}

export namespace SetDeploymentBeaconMajorReply {
  export type AsObject = {
    deployment?: domain_domain_pb.DeploymentDto.AsObject,
  }
}

export class AuthData extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthData.AsObject;
  static toObject(includeInstance: boolean, msg: AuthData): AuthData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthData;
  static deserializeBinaryFromReader(message: AuthData, reader: jspb.BinaryReader): AuthData;
}

export namespace AuthData {
  export type AsObject = {
    token: string,
  }
}

export class SignUpRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpRequest;
  static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
  export type AsObject = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
  }
}

export class SignUpReply extends jspb.Message {
  hasAuthData(): boolean;
  clearAuthData(): void;
  getAuthData(): AuthData | undefined;
  setAuthData(value?: AuthData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpReply.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpReply): SignUpReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignUpReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpReply;
  static deserializeBinaryFromReader(message: SignUpReply, reader: jspb.BinaryReader): SignUpReply;
}

export namespace SignUpReply {
  export type AsObject = {
    authData?: AuthData.AsObject,
  }
}

export class SignInRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignInRequest): SignInRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInRequest;
  static deserializeBinaryFromReader(message: SignInRequest, reader: jspb.BinaryReader): SignInRequest;
}

export namespace SignInRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class SignInReply extends jspb.Message {
  hasAuthData(): boolean;
  clearAuthData(): void;
  getAuthData(): AuthData | undefined;
  setAuthData(value?: AuthData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInReply.AsObject;
  static toObject(includeInstance: boolean, msg: SignInReply): SignInReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignInReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInReply;
  static deserializeBinaryFromReader(message: SignInReply, reader: jspb.BinaryReader): SignInReply;
}

export namespace SignInReply {
  export type AsObject = {
    authData?: AuthData.AsObject,
  }
}

export class CreateOrganizationRequest extends jspb.Message {
  getOrganizationName(): string;
  setOrganizationName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

export namespace CreateOrganizationRequest {
  export type AsObject = {
    organizationName: string,
  }
}

export class CreateOrganizationReply extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationReply): CreateOrganizationReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationReply;
  static deserializeBinaryFromReader(message: CreateOrganizationReply, reader: jspb.BinaryReader): CreateOrganizationReply;
}

export namespace CreateOrganizationReply {
  export type AsObject = {
    organizationId: number,
  }
}

export class CreateOrganizationInviteRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationInviteRequest): CreateOrganizationInviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationInviteRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationInviteRequest, reader: jspb.BinaryReader): CreateOrganizationInviteRequest;
}

export namespace CreateOrganizationInviteRequest {
  export type AsObject = {
    organizationId: number,
  }
}

export class CreateOrganizationInviteReply extends jspb.Message {
  getInviteLink(): string;
  setInviteLink(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationInviteReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationInviteReply): CreateOrganizationInviteReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationInviteReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationInviteReply;
  static deserializeBinaryFromReader(message: CreateOrganizationInviteReply, reader: jspb.BinaryReader): CreateOrganizationInviteReply;
}

export namespace CreateOrganizationInviteReply {
  export type AsObject = {
    inviteLink: string,
  }
}

export class RemoveOrganizationUserRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOrganizationUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOrganizationUserRequest): RemoveOrganizationUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveOrganizationUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOrganizationUserRequest;
  static deserializeBinaryFromReader(message: RemoveOrganizationUserRequest, reader: jspb.BinaryReader): RemoveOrganizationUserRequest;
}

export namespace RemoveOrganizationUserRequest {
  export type AsObject = {
    organizationId: number,
    userId: number,
  }
}

export class RemoveOrganizationUserReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOrganizationUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOrganizationUserReply): RemoveOrganizationUserReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveOrganizationUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOrganizationUserReply;
  static deserializeBinaryFromReader(message: RemoveOrganizationUserReply, reader: jspb.BinaryReader): RemoveOrganizationUserReply;
}

export namespace RemoveOrganizationUserReply {
  export type AsObject = {
  }
}

export class CreateAppRequest extends jspb.Message {
  clearScopeList(): void;
  getScopeList(): Array<string>;
  setScopeList(value: Array<string>): void;
  addScope(value: string, index?: number): string;

  getAppName(): string;
  setAppName(value: string): void;

  getAppDescription(): string;
  setAppDescription(value: string): void;

  getAppType(): string;
  setAppType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAppRequest): CreateAppRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAppRequest;
  static deserializeBinaryFromReader(message: CreateAppRequest, reader: jspb.BinaryReader): CreateAppRequest;
}

export namespace CreateAppRequest {
  export type AsObject = {
    scopeList: Array<string>,
    appName: string,
    appDescription: string,
    appType: string,
  }
}

export class CreateAppReply extends jspb.Message {
  getAppToken(): string;
  setAppToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAppReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAppReply): CreateAppReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAppReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAppReply;
  static deserializeBinaryFromReader(message: CreateAppReply, reader: jspb.BinaryReader): CreateAppReply;
}

export namespace CreateAppReply {
  export type AsObject = {
    appToken: string,
  }
}

export interface GatewayActionTypeMap {
  NOOP: 0;
  RESTART: 1;
}

export const GatewayActionType: GatewayActionTypeMap;


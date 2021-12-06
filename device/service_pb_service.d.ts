// package: device
// file: device/service.proto

import * as device_service_pb from "../device/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DeviceServicegetDevices = {
  readonly methodName: string;
  readonly service: typeof DeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof device_service_pb.GetDevicesRequest;
  readonly responseType: typeof device_service_pb.GetDevicesResponse;
};

type DeviceServiceaddDevice = {
  readonly methodName: string;
  readonly service: typeof DeviceService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof device_service_pb.AddDeviceRequest;
  readonly responseType: typeof device_service_pb.AddDeviceResponse;
};

export class DeviceService {
  static readonly serviceName: string;
  static readonly getDevices: DeviceServicegetDevices;
  static readonly addDevice: DeviceServiceaddDevice;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class DeviceServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getDevices(
    requestMessage: device_service_pb.GetDevicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: device_service_pb.GetDevicesResponse|null) => void
  ): UnaryResponse;
  getDevices(
    requestMessage: device_service_pb.GetDevicesRequest,
    callback: (error: ServiceError|null, responseMessage: device_service_pb.GetDevicesResponse|null) => void
  ): UnaryResponse;
  addDevice(
    requestMessage: device_service_pb.AddDeviceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: device_service_pb.AddDeviceResponse|null) => void
  ): UnaryResponse;
  addDevice(
    requestMessage: device_service_pb.AddDeviceRequest,
    callback: (error: ServiceError|null, responseMessage: device_service_pb.AddDeviceResponse|null) => void
  ): UnaryResponse;
}


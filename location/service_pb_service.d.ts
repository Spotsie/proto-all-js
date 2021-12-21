// package: location
// file: location/service.proto

import * as location_service_pb from "../location/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LocationApiGetLocationHistory = {
  readonly methodName: string;
  readonly service: typeof LocationApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof location_service_pb.GetLocationHistoryRequest;
  readonly responseType: typeof location_service_pb.GetLocationHistoryResponse;
};

type LocationApiGetRealtimeLocation = {
  readonly methodName: string;
  readonly service: typeof LocationApi;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof location_service_pb.GetRealtimeLocationRequest;
  readonly responseType: typeof location_service_pb.GetRealtimeLocationResponse;
};

export class LocationApi {
  static readonly serviceName: string;
  static readonly GetLocationHistory: LocationApiGetLocationHistory;
  static readonly GetRealtimeLocation: LocationApiGetRealtimeLocation;
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

export class LocationApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getLocationHistory(
    requestMessage: location_service_pb.GetLocationHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: location_service_pb.GetLocationHistoryResponse|null) => void
  ): UnaryResponse;
  getLocationHistory(
    requestMessage: location_service_pb.GetLocationHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: location_service_pb.GetLocationHistoryResponse|null) => void
  ): UnaryResponse;
  getRealtimeLocation(requestMessage: location_service_pb.GetRealtimeLocationRequest, metadata?: grpc.Metadata): ResponseStream<location_service_pb.GetRealtimeLocationResponse>;
}


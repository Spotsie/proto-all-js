// package: domain
// file: domain/service.proto

import * as domain_service_pb from "../domain/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LocationApiGetBeaconTimeline = {
  readonly methodName: string;
  readonly service: typeof LocationApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof domain_service_pb.GetBeaconTimelineRequest;
  readonly responseType: typeof domain_service_pb.GetBeaconTimelineResponse;
};

export class LocationApi {
  static readonly serviceName: string;
  static readonly GetBeaconTimeline: LocationApiGetBeaconTimeline;
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
  getBeaconTimeline(
    requestMessage: domain_service_pb.GetBeaconTimelineRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: domain_service_pb.GetBeaconTimelineResponse|null) => void
  ): UnaryResponse;
  getBeaconTimeline(
    requestMessage: domain_service_pb.GetBeaconTimelineRequest,
    callback: (error: ServiceError|null, responseMessage: domain_service_pb.GetBeaconTimelineResponse|null) => void
  ): UnaryResponse;
}


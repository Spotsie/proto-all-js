// package: deployment
// file: deployment/service.proto

import * as deployment_service_pb from "../deployment/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DeploymentServiceBeaconLocationUpdateStream = {
  readonly methodName: string;
  readonly service: typeof DeploymentService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof deployment_service_pb.BeaconLocationUpdateStreamRequest;
  readonly responseType: typeof deployment_service_pb.BeaconLocationUpdate;
};

type DeploymentServiceBeaconTimelineUpdateStream = {
  readonly methodName: string;
  readonly service: typeof DeploymentService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof deployment_service_pb.BeaconTimelineUpdateStreamRequest;
  readonly responseType: typeof deployment_service_pb.BeaconTimelineUpdateStreamReply;
};

type DeploymentServiceBeaconEventStream = {
  readonly methodName: string;
  readonly service: typeof DeploymentService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof deployment_service_pb.BeaconEventStreamRequest;
  readonly responseType: typeof deployment_service_pb.BeaconEvent;
};

type DeploymentServiceGetBeaconLocationHistory = {
  readonly methodName: string;
  readonly service: typeof DeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.GetBeaconLocationHistoryRequest;
  readonly responseType: typeof deployment_service_pb.GetBeaconLocationHistoryReply;
};

type DeploymentServiceGetNearbyBeacons = {
  readonly methodName: string;
  readonly service: typeof DeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.GetNearbyBeaconsRequest;
  readonly responseType: typeof deployment_service_pb.GetNearbyBeaconsReply;
};

type DeploymentServiceGetZones = {
  readonly methodName: string;
  readonly service: typeof DeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.GetZonesRequest;
  readonly responseType: typeof deployment_service_pb.GetZonesReply;
};

type DeploymentServiceGetZoneHistory = {
  readonly methodName: string;
  readonly service: typeof DeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.GetZoneHistoryRequest;
  readonly responseType: typeof deployment_service_pb.GetZoneHistoryReply;
};

type DeploymentServiceSaveImage = {
  readonly methodName: string;
  readonly service: typeof DeploymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof deployment_service_pb.SaveImageRequest;
  readonly responseType: typeof deployment_service_pb.SaveImageReply;
};

export class DeploymentService {
  static readonly serviceName: string;
  static readonly BeaconLocationUpdateStream: DeploymentServiceBeaconLocationUpdateStream;
  static readonly BeaconTimelineUpdateStream: DeploymentServiceBeaconTimelineUpdateStream;
  static readonly BeaconEventStream: DeploymentServiceBeaconEventStream;
  static readonly GetBeaconLocationHistory: DeploymentServiceGetBeaconLocationHistory;
  static readonly GetNearbyBeacons: DeploymentServiceGetNearbyBeacons;
  static readonly GetZones: DeploymentServiceGetZones;
  static readonly GetZoneHistory: DeploymentServiceGetZoneHistory;
  static readonly SaveImage: DeploymentServiceSaveImage;
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

export class DeploymentServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  beaconLocationUpdateStream(requestMessage: deployment_service_pb.BeaconLocationUpdateStreamRequest, metadata?: grpc.Metadata): ResponseStream<deployment_service_pb.BeaconLocationUpdate>;
  beaconTimelineUpdateStream(requestMessage: deployment_service_pb.BeaconTimelineUpdateStreamRequest, metadata?: grpc.Metadata): ResponseStream<deployment_service_pb.BeaconTimelineUpdateStreamReply>;
  beaconEventStream(requestMessage: deployment_service_pb.BeaconEventStreamRequest, metadata?: grpc.Metadata): ResponseStream<deployment_service_pb.BeaconEvent>;
  getBeaconLocationHistory(
    requestMessage: deployment_service_pb.GetBeaconLocationHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetBeaconLocationHistoryReply|null) => void
  ): UnaryResponse;
  getBeaconLocationHistory(
    requestMessage: deployment_service_pb.GetBeaconLocationHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetBeaconLocationHistoryReply|null) => void
  ): UnaryResponse;
  getNearbyBeacons(
    requestMessage: deployment_service_pb.GetNearbyBeaconsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetNearbyBeaconsReply|null) => void
  ): UnaryResponse;
  getNearbyBeacons(
    requestMessage: deployment_service_pb.GetNearbyBeaconsRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetNearbyBeaconsReply|null) => void
  ): UnaryResponse;
  getZones(
    requestMessage: deployment_service_pb.GetZonesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetZonesReply|null) => void
  ): UnaryResponse;
  getZones(
    requestMessage: deployment_service_pb.GetZonesRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetZonesReply|null) => void
  ): UnaryResponse;
  getZoneHistory(
    requestMessage: deployment_service_pb.GetZoneHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetZoneHistoryReply|null) => void
  ): UnaryResponse;
  getZoneHistory(
    requestMessage: deployment_service_pb.GetZoneHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.GetZoneHistoryReply|null) => void
  ): UnaryResponse;
  saveImage(
    requestMessage: deployment_service_pb.SaveImageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.SaveImageReply|null) => void
  ): UnaryResponse;
  saveImage(
    requestMessage: deployment_service_pb.SaveImageRequest,
    callback: (error: ServiceError|null, responseMessage: deployment_service_pb.SaveImageReply|null) => void
  ): UnaryResponse;
}


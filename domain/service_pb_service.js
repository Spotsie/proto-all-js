// package: domain
// file: domain/service.proto

var domain_service_pb = require("../domain/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DomainService = (function () {
  function DomainService() {}
  DomainService.serviceName = "domain.DomainService";
  return DomainService;
}());

exports.DomainService = DomainService;

function DomainServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

exports.DomainServiceClient = DomainServiceClient;


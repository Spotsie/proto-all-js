// source: location/service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var domain_domain_pb = require('../domain/domain_pb.js');
goog.object.extend(proto, domain_domain_pb);
var location_location_pb = require('../location/location_pb.js');
goog.object.extend(proto, location_location_pb);
goog.exportSymbol('proto.location.GetLocationHistoryRequest', null, global);
goog.exportSymbol('proto.location.GetLocationHistoryResponse', null, global);
goog.exportSymbol('proto.location.GetRealtimeLocationRequest', null, global);
goog.exportSymbol('proto.location.GetRealtimeLocationResponse', null, global);
goog.exportSymbol('proto.location.LocationHistory', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.location.GetLocationHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.location.GetLocationHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.location.GetLocationHistoryRequest.displayName = 'proto.location.GetLocationHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.location.GetLocationHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.location.GetLocationHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.location.GetLocationHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.location.GetLocationHistoryResponse.displayName = 'proto.location.GetLocationHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.location.LocationHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.location.LocationHistory.repeatedFields_, null);
};
goog.inherits(proto.location.LocationHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.location.LocationHistory.displayName = 'proto.location.LocationHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.location.GetRealtimeLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.location.GetRealtimeLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.location.GetRealtimeLocationRequest.displayName = 'proto.location.GetRealtimeLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.location.GetRealtimeLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.location.GetRealtimeLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.location.GetRealtimeLocationResponse.displayName = 'proto.location.GetRealtimeLocationResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.location.GetLocationHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.location.GetLocationHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.location.GetLocationHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.location.GetLocationHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subject: (f = msg.getSubject()) && domain_domain_pb.Subject.toObject(includeInstance, f),
    fromTime: (f = msg.getFromTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    toTime: (f = msg.getToTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.location.GetLocationHistoryRequest}
 */
proto.location.GetLocationHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.location.GetLocationHistoryRequest;
  return proto.location.GetLocationHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.location.GetLocationHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.location.GetLocationHistoryRequest}
 */
proto.location.GetLocationHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.Subject;
      reader.readMessage(value,domain_domain_pb.Subject.deserializeBinaryFromReader);
      msg.setSubject(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setToTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.location.GetLocationHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.location.GetLocationHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.location.GetLocationHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.location.GetLocationHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      domain_domain_pb.Subject.serializeBinaryToWriter
    );
  }
  f = message.getFromTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional domain.Subject subject = 1;
 * @return {?proto.domain.Subject}
 */
proto.location.GetLocationHistoryRequest.prototype.getSubject = function() {
  return /** @type{?proto.domain.Subject} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.Subject, 1));
};


/**
 * @param {?proto.domain.Subject|undefined} value
 * @return {!proto.location.GetLocationHistoryRequest} returns this
*/
proto.location.GetLocationHistoryRequest.prototype.setSubject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.location.GetLocationHistoryRequest} returns this
 */
proto.location.GetLocationHistoryRequest.prototype.clearSubject = function() {
  return this.setSubject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.location.GetLocationHistoryRequest.prototype.hasSubject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp from_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.location.GetLocationHistoryRequest.prototype.getFromTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.location.GetLocationHistoryRequest} returns this
*/
proto.location.GetLocationHistoryRequest.prototype.setFromTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.location.GetLocationHistoryRequest} returns this
 */
proto.location.GetLocationHistoryRequest.prototype.clearFromTime = function() {
  return this.setFromTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.location.GetLocationHistoryRequest.prototype.hasFromTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp to_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.location.GetLocationHistoryRequest.prototype.getToTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.location.GetLocationHistoryRequest} returns this
*/
proto.location.GetLocationHistoryRequest.prototype.setToTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.location.GetLocationHistoryRequest} returns this
 */
proto.location.GetLocationHistoryRequest.prototype.clearToTime = function() {
  return this.setToTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.location.GetLocationHistoryRequest.prototype.hasToTime = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.location.GetLocationHistoryResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.location.GetLocationHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.location.GetLocationHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.location.GetLocationHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.location.GetLocationHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    location_location_pb.LocationHistoryRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.location.GetLocationHistoryResponse}
 */
proto.location.GetLocationHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.location.GetLocationHistoryResponse;
  return proto.location.GetLocationHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.location.GetLocationHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.location.GetLocationHistoryResponse}
 */
proto.location.GetLocationHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new location_location_pb.LocationHistoryRecord;
      reader.readMessage(value,location_location_pb.LocationHistoryRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.location.GetLocationHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.location.GetLocationHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.location.GetLocationHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.location.GetLocationHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      location_location_pb.LocationHistoryRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LocationHistoryRecord records = 2;
 * @return {!Array<!proto.location.LocationHistoryRecord>}
 */
proto.location.GetLocationHistoryResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.location.LocationHistoryRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, location_location_pb.LocationHistoryRecord, 2));
};


/**
 * @param {!Array<!proto.location.LocationHistoryRecord>} value
 * @return {!proto.location.GetLocationHistoryResponse} returns this
*/
proto.location.GetLocationHistoryResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.location.LocationHistoryRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.location.LocationHistoryRecord}
 */
proto.location.GetLocationHistoryResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.location.LocationHistoryRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.location.GetLocationHistoryResponse} returns this
 */
proto.location.GetLocationHistoryResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.location.LocationHistory.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.location.LocationHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.location.LocationHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.location.LocationHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.location.LocationHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    subject: (f = msg.getSubject()) && domain_domain_pb.Subject.toObject(includeInstance, f),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    location_location_pb.LocationHistoryRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.location.LocationHistory}
 */
proto.location.LocationHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.location.LocationHistory;
  return proto.location.LocationHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.location.LocationHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.location.LocationHistory}
 */
proto.location.LocationHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.Subject;
      reader.readMessage(value,domain_domain_pb.Subject.deserializeBinaryFromReader);
      msg.setSubject(value);
      break;
    case 2:
      var value = new location_location_pb.LocationHistoryRecord;
      reader.readMessage(value,location_location_pb.LocationHistoryRecord.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.location.LocationHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.location.LocationHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.location.LocationHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.location.LocationHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      domain_domain_pb.Subject.serializeBinaryToWriter
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      location_location_pb.LocationHistoryRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional domain.Subject subject = 1;
 * @return {?proto.domain.Subject}
 */
proto.location.LocationHistory.prototype.getSubject = function() {
  return /** @type{?proto.domain.Subject} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.Subject, 1));
};


/**
 * @param {?proto.domain.Subject|undefined} value
 * @return {!proto.location.LocationHistory} returns this
*/
proto.location.LocationHistory.prototype.setSubject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.location.LocationHistory} returns this
 */
proto.location.LocationHistory.prototype.clearSubject = function() {
  return this.setSubject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.location.LocationHistory.prototype.hasSubject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated LocationHistoryRecord records = 2;
 * @return {!Array<!proto.location.LocationHistoryRecord>}
 */
proto.location.LocationHistory.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.location.LocationHistoryRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, location_location_pb.LocationHistoryRecord, 2));
};


/**
 * @param {!Array<!proto.location.LocationHistoryRecord>} value
 * @return {!proto.location.LocationHistory} returns this
*/
proto.location.LocationHistory.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.location.LocationHistoryRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.location.LocationHistoryRecord}
 */
proto.location.LocationHistory.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.location.LocationHistoryRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.location.LocationHistory} returns this
 */
proto.location.LocationHistory.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.location.GetRealtimeLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.location.GetRealtimeLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.location.GetRealtimeLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.location.GetRealtimeLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subject: (f = msg.getSubject()) && domain_domain_pb.Subject.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.location.GetRealtimeLocationRequest}
 */
proto.location.GetRealtimeLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.location.GetRealtimeLocationRequest;
  return proto.location.GetRealtimeLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.location.GetRealtimeLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.location.GetRealtimeLocationRequest}
 */
proto.location.GetRealtimeLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.Subject;
      reader.readMessage(value,domain_domain_pb.Subject.deserializeBinaryFromReader);
      msg.setSubject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.location.GetRealtimeLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.location.GetRealtimeLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.location.GetRealtimeLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.location.GetRealtimeLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      domain_domain_pb.Subject.serializeBinaryToWriter
    );
  }
};


/**
 * optional domain.Subject subject = 1;
 * @return {?proto.domain.Subject}
 */
proto.location.GetRealtimeLocationRequest.prototype.getSubject = function() {
  return /** @type{?proto.domain.Subject} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.Subject, 1));
};


/**
 * @param {?proto.domain.Subject|undefined} value
 * @return {!proto.location.GetRealtimeLocationRequest} returns this
*/
proto.location.GetRealtimeLocationRequest.prototype.setSubject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.location.GetRealtimeLocationRequest} returns this
 */
proto.location.GetRealtimeLocationRequest.prototype.clearSubject = function() {
  return this.setSubject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.location.GetRealtimeLocationRequest.prototype.hasSubject = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.location.GetRealtimeLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.location.GetRealtimeLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.location.GetRealtimeLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.location.GetRealtimeLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    subject: (f = msg.getSubject()) && domain_domain_pb.Subject.toObject(includeInstance, f),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    locationId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.location.GetRealtimeLocationResponse}
 */
proto.location.GetRealtimeLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.location.GetRealtimeLocationResponse;
  return proto.location.GetRealtimeLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.location.GetRealtimeLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.location.GetRealtimeLocationResponse}
 */
proto.location.GetRealtimeLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new domain_domain_pb.Subject;
      reader.readMessage(value,domain_domain_pb.Subject.deserializeBinaryFromReader);
      msg.setSubject(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLocationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.location.GetRealtimeLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.location.GetRealtimeLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.location.GetRealtimeLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.location.GetRealtimeLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      domain_domain_pb.Subject.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLocationId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional domain.Subject subject = 1;
 * @return {?proto.domain.Subject}
 */
proto.location.GetRealtimeLocationResponse.prototype.getSubject = function() {
  return /** @type{?proto.domain.Subject} */ (
    jspb.Message.getWrapperField(this, domain_domain_pb.Subject, 1));
};


/**
 * @param {?proto.domain.Subject|undefined} value
 * @return {!proto.location.GetRealtimeLocationResponse} returns this
*/
proto.location.GetRealtimeLocationResponse.prototype.setSubject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.location.GetRealtimeLocationResponse} returns this
 */
proto.location.GetRealtimeLocationResponse.prototype.clearSubject = function() {
  return this.setSubject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.location.GetRealtimeLocationResponse.prototype.hasSubject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.location.GetRealtimeLocationResponse.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.location.GetRealtimeLocationResponse} returns this
*/
proto.location.GetRealtimeLocationResponse.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.location.GetRealtimeLocationResponse} returns this
 */
proto.location.GetRealtimeLocationResponse.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.location.GetRealtimeLocationResponse.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 location_id = 3;
 * @return {number}
 */
proto.location.GetRealtimeLocationResponse.prototype.getLocationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.location.GetRealtimeLocationResponse} returns this
 */
proto.location.GetRealtimeLocationResponse.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.location);

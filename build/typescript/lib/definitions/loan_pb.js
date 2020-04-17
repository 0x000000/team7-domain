// source: definitions/loan.proto
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

var definitions_types_date_pb = require('../definitions/types/date_pb.js');
goog.object.extend(proto, definitions_types_date_pb);
var definitions_user_pb = require('../definitions/user_pb.js');
goog.object.extend(proto, definitions_user_pb);
goog.exportSymbol('proto.domain.Loan', null, global);
goog.exportSymbol('proto.domain.Loan.State', null, global);
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
proto.domain.Loan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.domain.Loan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.domain.Loan.displayName = 'proto.domain.Loan';
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
proto.domain.Loan.prototype.toObject = function(opt_includeInstance) {
  return proto.domain.Loan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.domain.Loan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.domain.Loan.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    notes: jspb.Message.getFieldWithDefault(msg, 2, ""),
    user: (f = msg.getUser()) && definitions_user_pb.User.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 4, 0),
    createdAt: (f = msg.getCreatedAt()) && definitions_types_date_pb.DateTimeUTC.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && definitions_types_date_pb.DateTimeUTC.toObject(includeInstance, f)
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
 * @return {!proto.domain.Loan}
 */
proto.domain.Loan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.domain.Loan;
  return proto.domain.Loan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.domain.Loan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.domain.Loan}
 */
proto.domain.Loan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 3:
      var value = new definitions_user_pb.User;
      reader.readMessage(value,definitions_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 4:
      var value = /** @type {!proto.domain.Loan.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 5:
      var value = new definitions_types_date_pb.DateTimeUTC;
      reader.readMessage(value,definitions_types_date_pb.DateTimeUTC.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = new definitions_types_date_pb.DateTimeUTC;
      reader.readMessage(value,definitions_types_date_pb.DateTimeUTC.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
proto.domain.Loan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.domain.Loan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.domain.Loan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.domain.Loan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      definitions_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      definitions_types_date_pb.DateTimeUTC.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      definitions_types_date_pb.DateTimeUTC.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.domain.Loan.State = {
  DRAFT: 0,
  SUBMITTED: 10,
  APPROVED: 20,
  REJECTED: 100
};

/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.domain.Loan.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.domain.Loan} returns this
 */
proto.domain.Loan.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string notes = 2;
 * @return {string}
 */
proto.domain.Loan.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.domain.Loan} returns this
 */
proto.domain.Loan.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional User user = 3;
 * @return {?proto.domain.User}
 */
proto.domain.Loan.prototype.getUser = function() {
  return /** @type{?proto.domain.User} */ (
    jspb.Message.getWrapperField(this, definitions_user_pb.User, 3));
};


/**
 * @param {?proto.domain.User|undefined} value
 * @return {!proto.domain.Loan} returns this
*/
proto.domain.Loan.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.domain.Loan} returns this
 */
proto.domain.Loan.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.domain.Loan.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional State state = 4;
 * @return {!proto.domain.Loan.State}
 */
proto.domain.Loan.prototype.getState = function() {
  return /** @type {!proto.domain.Loan.State} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.domain.Loan.State} value
 * @return {!proto.domain.Loan} returns this
 */
proto.domain.Loan.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional types.DateTimeUTC created_at = 5;
 * @return {?proto.domain.types.DateTimeUTC}
 */
proto.domain.Loan.prototype.getCreatedAt = function() {
  return /** @type{?proto.domain.types.DateTimeUTC} */ (
    jspb.Message.getWrapperField(this, definitions_types_date_pb.DateTimeUTC, 5));
};


/**
 * @param {?proto.domain.types.DateTimeUTC|undefined} value
 * @return {!proto.domain.Loan} returns this
*/
proto.domain.Loan.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.domain.Loan} returns this
 */
proto.domain.Loan.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.domain.Loan.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional types.DateTimeUTC updated_at = 6;
 * @return {?proto.domain.types.DateTimeUTC}
 */
proto.domain.Loan.prototype.getUpdatedAt = function() {
  return /** @type{?proto.domain.types.DateTimeUTC} */ (
    jspb.Message.getWrapperField(this, definitions_types_date_pb.DateTimeUTC, 6));
};


/**
 * @param {?proto.domain.types.DateTimeUTC|undefined} value
 * @return {!proto.domain.Loan} returns this
*/
proto.domain.Loan.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.domain.Loan} returns this
 */
proto.domain.Loan.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.domain.Loan.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.domain);
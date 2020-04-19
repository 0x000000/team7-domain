# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: definitions/api/private/loans_service.proto for package 'domain.api.private'

require 'grpc'
require 'definitions/api/private/loans_service_pb'

module Domain
  module Api
    module Private
      module LoansService
        class Service

          include GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'domain.api.private.LoansService'

          rpc :LoadAll, Google::Protobuf::Empty, stream(Domain::Loan)
          rpc :Update, Domain::Loan, Google::Protobuf::Empty
          rpc :ListenToUpdates, Domain::Api::WebClient, stream(Domain::Loan)
        end

        Stub = Service.rpc_stub_class
      end
    end
  end
end

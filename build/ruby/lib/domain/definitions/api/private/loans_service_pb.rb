# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: definitions/api/private/loans_service.proto

require 'google/protobuf'

require 'google/protobuf/empty_pb'
require 'definitions/loan_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("definitions/api/private/loans_service.proto", :syntax => :proto3) do
    add_message "domain.api.private.AllLoansResponse" do
      repeated :loans, :message, 1, "domain.Loan"
    end
    add_message "domain.api.private.ClientData" do
      optional :id, :uint64, 1
    end
  end
end

module Domain
  module Api
    module Private
      AllLoansResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("domain.api.private.AllLoansResponse").msgclass
      ClientData = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("domain.api.private.ClientData").msgclass
    end
  end
end

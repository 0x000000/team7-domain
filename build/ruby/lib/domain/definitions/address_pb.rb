# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: definitions/address.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("definitions/address.proto", :syntax => :proto3) do
    add_message "domain.Address" do
      optional :id, :uint32, 1
      optional :street, :string, 2
      optional :city, :string, 3
      optional :state, :string, 4
      optional :zip, :string, 5
    end
  end
end

module Domain
  Address = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("domain.Address").msgclass
end
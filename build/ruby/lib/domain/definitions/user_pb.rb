# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: definitions/user.proto

require 'google/protobuf'

require 'definitions/role_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("definitions/user.proto", :syntax => :proto3) do
    add_message "domain.User" do
      optional :id, :uint32, 1
      optional :name, :string, 2
      repeated :roles, :message, 3, "domain.Role"
    end
  end
end

module Domain
  User = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("domain.User").msgclass
end
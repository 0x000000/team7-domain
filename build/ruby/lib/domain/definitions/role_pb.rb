# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: definitions/role.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("definitions/role.proto", :syntax => :proto3) do
    add_message "domain.Role" do
      optional :id, :uint32, 1
      optional :type, :enum, 2, "domain.Role.Type"
    end
    add_enum "domain.Role.Type" do
      value :Admin, 0
      value :Lender, 1
    end
  end
end

module Domain
  Role = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("domain.Role").msgclass
  Role::Type = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("domain.Role.Type").enummodule
end
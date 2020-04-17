lib = File.expand_path("lib", __dir__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "domain/version"

Gem::Specification.new do |spec|
  spec.name          = "domain-ruby"
  spec.version       = Domain::VERSION
  spec.authors       = ["Alexander Rudenka"]
  spec.email         = ["mur.mailbox@gmail.com"]

  spec.summary       = ""
  spec.description   = ""
  spec.license       = "UNLICENSED"

  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "google-protobuf", "~> 3.11.2"
  spec.add_runtime_dependency "grpc", "~> 1.27.0"
  spec.add_development_dependency "bundler", "~> 2.1.a"
end

require 'fileutils'

namespace :build do
  BUILD_DIR = File.join('.', 'build')
  TEMPLATES_DIR = File.join('.', 'templates')

  RUBY_DEFINITIONS_DIR = File.join('lib', 'domain')
  TYPESCRIPT_DEFINITIONS_DIR = File.join('lib')

  def proto_files
    @proto_files ||= Dir['./definitions/**/*.proto'].join(' ')
  end

  def prepare_lib(lang)
    target_dir = File.join(BUILD_DIR, lang)

    FileUtils.rm_rf(target_dir)
    FileUtils.mkdir_p(target_dir)

    FileUtils.cp_r(File.join(TEMPLATES_DIR, lang), BUILD_DIR)
  end

  def compile_ruby_defs
    ruby_dir = File.join(BUILD_DIR, 'ruby', RUBY_DEFINITIONS_DIR)
    `grpc_tools_ruby_protoc -I ./ --ruby_out=#{ruby_dir} --grpc_out=#{ruby_dir} #{proto_files}`
  end

  def compile_ts_defs
    ts_dir = File.join(BUILD_DIR, 'typescript', TYPESCRIPT_DEFINITIONS_DIR)
    `protoc  -I ./ --plugin=protoc-gen-ts=./node_modules/ts-protoc-gen/bin/protoc-gen-ts --js_out=import_style=commonjs,binary:#{ts_dir} --ts_out=service=grpc-web:#{ts_dir} #{proto_files}`
  end


  task all: [:ruby, :typescript]

  task :ruby do
    prepare_lib('ruby')
    compile_ruby_defs
  end

  task :typescript do
    prepare_lib('typescript')
    compile_ts_defs
  end
end

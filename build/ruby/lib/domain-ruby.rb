current = File.expand_path(File.dirname(__FILE__))
lib_dir = File.join(File.dirname(current), 'lib', 'domain')

$LOAD_PATH.unshift(lib_dir) unless $LOAD_PATH.include?(lib_dir)

load_dir = File.join(lib_dir, 'definitions', '**', '*.rb')

Dir[load_dir].each do |path|
  require path
end

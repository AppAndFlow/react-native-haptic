require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name          = package['name']
  s.version       = package['version']
  s.source_files  = 'ios/*.{h,m}'
  s.platform      = :ios, '7.0'
  s.authors       = package['author']
  s.license       = package['license']
  s.summary       = package['description']
  s.homepage      = 'https://github.com/charlesvinette/react-native-haptic#readme'
  s.source        = { :git => 'https://github.com/charlesvinette/react-native-haptic.git', tag: "v#{s.version}" }

  s.dependency 'React'
end

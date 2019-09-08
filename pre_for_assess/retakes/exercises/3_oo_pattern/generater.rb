copy_and_paste = <<~NAMES
1	Ancestors	completed
2	Delegate	completed
3	Classical Object Creation	completed
4	Classical Object Creation with Mixin	completed
5	Anonymizer	completed
6	Mini Inventory Management System	completed
NAMES

require 'fileutils'

def generate_file_names(copies, file_type)
  copies.split(/\s+completed\n/).each do |file|
    FileUtils.touch(p file.gsub(/\s+/, '_') + file_type)
  end
end

generate_file_names(copy_and_paste, '.js')

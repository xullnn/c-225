copy_and_paste = <<~NAMES
1	Buggy Code 1	Not completed
2	Buggy Code 2	Not completed
3	Testing Object Equality	Not completed
4	Student	Not completed
5	School	Not completed
NAMES

require 'fileutils'

def generate_file_names(copies, file_type)
  copies.split(/\s+Not completed\n/).each do |file|
    FileUtils.touch(p file.gsub(/\s+/, '_') + file_type)
  end
end

generate_file_names(copy_and_paste, '.js')

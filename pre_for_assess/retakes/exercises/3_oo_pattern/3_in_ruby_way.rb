class Person

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  def full_name
    puts (@first_name + ' ' + @last_name)
  end

end

class Student < Person

  def initialize(first_name, last_name, degree)
    super(first_name, last_name)
    @degree = degree
  end

  def study
  end
  
end

student = Student.new('Bob', 'Noice', 10)
student.full_name;

class Person
  # def initialize(age, name)
  #   @age = age;
  #   @name = name;
  # end

  def initialize(age, name)
    @age = age;
    @name = name;
    class << self
      def act
        puts "hello"
      end
    end
  end

  def act
    behavior = @name + " is " + @age.to_s + " years old and he is walking.";
    puts behavior;
  end
end

p = Person.new(18, 'Bob')
p.act

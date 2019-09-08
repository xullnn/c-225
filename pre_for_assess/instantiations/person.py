class Person:
    def __init__(self, age, name):
        self.age = age
        self.name = name

    def act(self):
        behavior = self.name + " is " + str(self.age) + " years old and he is walking.";
        print(behavior)

p = Person(18, 'Bob')
p.act()

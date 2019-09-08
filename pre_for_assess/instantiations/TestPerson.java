public class TestPerson {
  public static void main(String[] args) {
    class Person {
      int age;
      String name;

      public Person(int age, String name) {
        this.age = age;
        this.name = name;
      };

      public void act() {
        String behavior = name + " is " + Integer.toString(age) + " years old and he is walking.";
        System.out.println(behavior);
      };
    }

    Person p = new Person(18, "Bob");
    p.act();
  }
}

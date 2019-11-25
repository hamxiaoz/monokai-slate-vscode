interface Person {
  firstName: string;
  lastName: string;
}

class Student implements Person {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = this.formatFullName();
  }

  private formatFullName(): string {
    return this.firstName + " " + this.middleInitial + " " + this.lastName;
  }
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
const greet = greeter(user);
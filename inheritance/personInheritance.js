// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  birthday(birthdate) {
    this.birthdate = birthdate;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }

  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

let adi = new Student("Adi", "I can whistle through my throat.", "123456789@hotmail.com");
adi.enroll("Sept 22, 2018");
adi.birthday("Feb 25, 1995");

let mentor = new Mentor("Mentor", "I am not actually a mentor.",  "mentor@hotmail.com")
mentor.goOnShift();
mentor.birthday("Apr 20, 1984");

console.log(adi.bio());
console.log(mentor.bio());
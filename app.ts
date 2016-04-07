interface IPerson {
  firstname:string;
  lastname:string;
  sayHi?: () => void;
}

class Person implements IPerson {
  firstname:string;
  lastname:string;
  constructor(firstname:string, lastname:string = "DefaultLastname"){
    this.firstname = firstname;
    this.lastname = lastname;
  }
  sayHi = () => console.log("Hi " + this.firstname + " " + this.lastname);
}

var person = new Person("Two", "Softveloper");
person.sayHi();

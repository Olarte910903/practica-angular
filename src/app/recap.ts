const username: string = 'Olarte91';
const sum = (a: number, b: number) =>{
  return a + b;
}

sum(1,1);

class Person {
  age: number;
  lastName: string;

  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName;
  }
}

const nico = new Person(31, 'Olarte');

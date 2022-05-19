class Student {
  constructor(name, age) {
    let name = name;
    let age = age;

    this.showName = () => {
      return name;
    };
  }
}

let sname = new Student("bharath", 28);

console.log(Student);
console.log(sname);


//error :Uncaught SyntaxError: Identifier 'name' has already been declared why?
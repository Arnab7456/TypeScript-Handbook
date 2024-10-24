class Person {
    name: string;
    age: number;
    occupation: string;

    constructor(name: string, age: number, occupation: string) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
}

const emp1 = new Person("Arnab", 22, "Backend Developer");

console.log(emp1.occupation, emp1.name);

export {};
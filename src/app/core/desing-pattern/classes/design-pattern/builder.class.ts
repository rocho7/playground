export interface IPersonBuilder {
  name: string;
  lastName: string;
  age: number;
  city: string;
  country: string;
  hobbies: string[];
  setName(name: string): IPersonBuilder;
  setLastname(lastName: string): IPersonBuilder;
  setAge(age: number): IPersonBuilder;
  setCity(city: string): IPersonBuilder;
  setCountry(country: string): IPersonBuilder;
  setHobbies(hobby: string): IPersonBuilder;
  build(): Person;
}

export class PersonBuilder implements IPersonBuilder {
  public name: string;
  public lastName: string;
  public age: number;
  public city: string;
  public country: string;
  public hobbies: string[];

  constructor() {}

  reset(): void {
    this.name = "";
    this.lastName = "";
    this.age = 0;
    this.city = "";
    this.country = "";
    this.hobbies = [];
  }

  setName(name: string): IPersonBuilder {
    this.name = name;
    return this;
  }
  setLastname(lastName: string): IPersonBuilder {
    this.lastName = lastName;
    return this;
  }
  setAge(age: number): IPersonBuilder {
    this.age = age;
    return this;
  }
  setCity(city: string): IPersonBuilder {
    this.city = city;
    return this;
  }
  setCountry(country: string): IPersonBuilder {
    this.country = country;
    return this;
  }
  setHobbies(hobby: string): IPersonBuilder {
    this.hobbies.push(hobby);
    return this;
  }

  build(): Person {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.city,
      this.country,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

export class Person {
  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public city: string,
    public country: string,
    public hobbies: string[]
  ) {}
}

export class PersonDirector {
  constructor(private personBuilder: IPersonBuilder) {}

  setPersonBuilder(personBuilder: IPersonBuilder) {
    this.personBuilder = personBuilder;
  }

  createSimplePerson(name: string, lastName: string) {
    this.personBuilder.setName(name).setLastname(lastName);
  }

  createFullPerson(
    name: string,
    lastName: string,
    age: number,
    city: string,
    country: string,
    hobbies: string[]
  ) {
    this.personBuilder
      .setName(name)
      .setLastname(lastName)
      .setAge(age)
      .setCity(city)
      .setCountry(country);
    hobbies.forEach((it) => this.personBuilder.setHobbies(it));
  }
}

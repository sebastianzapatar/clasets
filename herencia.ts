abstract class Animal {
    constructor(protected name: string) {}
  
    abstract makeSound(): void; // Método abstracto
  
    move(): void {
      console.log(`${this.name} se está moviendo`);
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log(`${this.name} dice: Guau Guau`);
    }
  }
  
  class Cat extends Animal {
    makeSound(): void {
      console.log(`${this.name} dice: Miau`);
    }
  }
  
  // 🔥 Uso
 const dog = new Dog("Rex");
  dog.makeSound(); // Rex dice: Guau Guau
  dog.move(); // Rex se está moviendo
  
  const cat = new Cat("Michi");
  cat.makeSound(); // Michi dice: Miau
  export default dog;
  
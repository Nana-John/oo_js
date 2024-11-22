// 1. Classe Abstrata
class Vehicle {
    constructor(name, speed) {
    if (new.target === Vehicle) {
        throw new Error("Cannot instantiate an abstract class!");
    }
    this.name = name;
    this.speed = speed;
    }

    // Método comum que pode ser sobrescrito
    move() {
    return `${this.name} is moving at a speed of ${this.speed} km/h.`;
    }
}

  // 2. Classes que herdam da classe abstrata
    class Car extends Vehicle {
    constructor(name, speed, doors) {
    super(name, speed);
    this.doors = doors;
    }

    // Sobrescrevendo o método
    move() {
    return `${this.name} (a car) is cruising at ${this.speed} km/h with ${this.doors} doors.`;
    }
}

    class Bike extends Vehicle {
    constructor(name, speed, type) {
    super(name, speed);
    this.type = type;
    }

    // Sobrescrevendo o método
    move() {
    return `${this.name} (a ${this.type} bike) is zooming at ${this.speed} km/h.`;
    }
}

  // 3. Criando instâncias de objetos
    const car1 = new Car("Sedan", 120, 4);
    const car2 = new Car("SUV", 150, 5);
    const bike1 = new Bike("Mountain Bike", 30, "mountain");

  // Testando os objetos
    console.log(car1.move()); 
    console.log(car2.move()); 
    console.log(bike1.move());
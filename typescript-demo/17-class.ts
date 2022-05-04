class Car {
  // public, private variable here
  carMake: string; // public var
  public carModel: string = ''; // public var
  fuel: string = ''; 
  private mileage: number = 0; // private variable

  constructor( make: string, model: string, fuel?: string){
    this.carMake = make;
    this.carModel = model;
    this.fuel = fuel;
  }

  getCarInfo(): never { // public method 
    // public and private vars can be accessible
    console.log(`${this.carMake} ${this.carModel} gives a mileage of ${this.mileage} kmpl`); 
  }

  drive(){ // public method 
    console.log("Driving");
  }

  getMileage(){ // public method 
  
  }
}

let myCar: Car = new Car("BMW", "7 Series");
myCar.getCarInfo(); 

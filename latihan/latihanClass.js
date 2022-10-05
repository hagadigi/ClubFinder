class Vehicle{
    constructor(licensePlate, manufacture){
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }

    startEngines(){
        console.log(`Mesin kendaraan ${this.licensePlate} menyala!`);
    }

    info(){
        console.log(`Nomor kendaraan: ${this.licensePlate}`);
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Mesin: ${this.engineActive}`);
    }
}

class Mobil extends Vehicle{
    constructor(licensePlate, manufacture, wheels){
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }

    droveOff(){
        console.log(`Kendaraan ${this.licensePlate} melaju!`);
    }
}

//static method
class VehicleFactory {
    static repair(vehicles) {
      vehicles.forEach(vehicle => {
        console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`)
      });
    }
}

const haraCar = new Mobil('H232S', 'Honda', 4);
const gamaCar = new Mobil('S244G', 'Yamaha', 6);
haraCar.startEngines();
haraCar.droveOff();

//pemanggilan method repair
VehicleFactory.repair([haraCar, gamaCar]);
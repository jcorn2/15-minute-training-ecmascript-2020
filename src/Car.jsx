class Car {
    constructor() {
        this.drive = this.#drive.bind(this);
    }
    #year = 2020;
    #drive = () => 'car is driving';

    getYear = () => this.#year;
    driveCar = () => this.drive();
}

export default Car;

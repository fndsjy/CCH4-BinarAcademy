class App {
  constructor(count) {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.filterByDriver = document.getElementById("driver");
    this.filterByDate = document.getElementById("date");
    this.filterByTime = document.getElementById("time");
    this.filterByCapacity = document.getElementById("capacity");
    this.count = count;
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    this.clear();
    this.count = 0;

    Car.list.forEach((car) => {
      let driverValue = this.filterByDriver.value;
      const dateValue = this.filterByDate.value;
      const timeValue = this.filterByTime.value;
      const dateTimeValue = dateValue + 'T' + timeValue;
      const formDate = Date.parse(dateTimeValue);
      const available = Date.parse(car.availableAt);
      const capacityValue = this.filterByCapacity.value;

      if(driverValue == "true"){
        driverValue = true;
      }
      else{
        driverValue = false;
      }

      console.log(this.count);
      if(car.available == driverValue && car.capacity >= capacityValue && available >= formDate){
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
        this.count++;
      }
    });

    if (this.count === 0) {
      const node = document.createElement("div");
      node.innerHTML = '<p style="margin-inline-start: 27em; color: grey;"> No Cars Available </p>';
      this.carContainerElement.appendChild(node);
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}

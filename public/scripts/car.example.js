class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="col-lg-4 col-md-4 col-sm-12 m-2">
        <div class="card" style="width: 18.8rem;">
            <img src="${this.image}" class="card-img-top img-fluid" alt="${this.manufacture}" style="height: 190px; object-fit: cover" />
            <div class="card-body">
                <p class="card-title" style="font-family: 'Helvetica'; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; height: 20px;">${this.manufacture} ${this.model}</p>
                <p class="fw-bold" style="font-family: 'Helvetica'; font-style: normal; font-weight: 700; font-size: 16px; line-height: 24px; height: 24px;">Rp ${this.rentPerDay} / hari</p>
                <p class="card-text" style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 20px; height: 60px; margin-bottom: 29px;">${this.description}</p>
                <div class="row my-0 py-0">
                  <div class="col-md-1">
                    <img src="./images/fi_users.png" style="width: 25px; height: 25px">
                  </div>
                  <div class="col-md-11">
                    <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 20px; margin-top: 5px;">&nbsp;&nbsp;&nbsp;${this.capacity} Orang</p>
                  </div>
                </div>
                <div class="row my-0 py-0">
                  <div class="col-md-1">
                    <img src="./images/fi_settings.png" style="width: 25px; height: 25px">
                  </div>
                  <div class="col-md-11">
                    <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 20px; margin-top: 5px;">&nbsp;&nbsp;&nbsp;${this.transmission}</p>
                  </div>
                </div>
                <div class="row my-0 py-0">
                  <div class="col-md-1">
                    <img src="./images/fi_calendar.png" style="width: 25px; height: 25px">
                  </div>
                  <div class="col-md-11">
                    <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 20px; margin-top: 5px;">&nbsp;&nbsp;&nbsp;${this.year}</p>
                  </div>
                </div>
                <a href="#" class="btn btn-success text-white w-100 mt-2 fw-bold mt-4" style="font-size: 14px">Pilih Mobil</a>
            </div>
        </div>
      </div>
    `;
  }
}

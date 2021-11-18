/*
Design a parking lot.
- The parking lot has multiple levels, each of
which has multiple rows of parking spots.
- The parking lot can park motorcycles, cars, and
buses.
- The parking lot has motorcycle spots, compact
spots, and large spots.
- A motorcycle can park in any spot
- A car can park in either a single compact spot
or a single large spot.
- A bus can park in five large spots that are
consecutive and within the same row. It cannot
park in small spots.
*/

const vehicleHub = {
  init: function(licensePlate, spotsNeeded, size) {
    this.parkingSpot = [];
    this.licensePlate = licensePlate;
    this.spotsNeeded = spotsNeeded;
    this.size = size;
  },
  getSpotsNeeded: function() {
    return this.spotsNeeded;
  },
  getSize: function() {
    return this.size;
  },
  park: function(spot) {
    this.parkingSpot.push(spot);
  },
  clearSpot: function() {

  },
  fitsInSpot: function(spot) {

  }
}

const bus1 = Object.create(vehicleHub).init("", 5, "large");
const car1 = Object.create(vehicleHub).init("", 1, "compact");
const moto1 = Object.create(vehicleHub).init("", 1, "moto");

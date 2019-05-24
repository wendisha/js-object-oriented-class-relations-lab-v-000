let store = { drivers: [], passengers: [], trips: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
    constructor(name) {
        this.name = name;
        this.id = ++driverId;
        store.drivers.push(this);
    } 
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
    }
    passengers() {
        return store.passengers.filter(
            function(passenger) {
                return passenger.tripId === this.tripId;
            }.bind(this)
        );
    }
}

class Passenger {
    constructor(name) {
        this.name = name;
        this.id = ++passengerId;
        store.passengers.push(this);
    } 
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        );
    }
    drivers() {
        return store.drivers.filter(
            function(driver) {
                return driver.tripId === this.tripId;
            }.bind(this)
        );
    }
}

class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId;
        if (driver && passenger) {
            this.setDriverAndPassenger(driver, passenger)
        } 
        store.trips.push(this);
    } 
    setDriverAndPassenger(driver, passenger) {
        this.driverId = driver.id;
        this.passengerId = passenger.id;
    }
    driver() {
        return store.drivers.find(
            function(driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
    }
    passenger() {
        return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        );
    }
}
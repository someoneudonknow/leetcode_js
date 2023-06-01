/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
    this.space = {
        big: 0,
        medium: 0,
        small: 0,
    }
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    switch(carType) {
        case 1:
            if (this.space.big === this.big) {
                return false;
            }
            this.space.big = this.space.big+1;
            return true;
        case 2:
            if (this.space.medium === this.medium) {
                return false;
            }
            this.space.medium = this.space.medium+1;
            return true;
        case 3:
            if (this.space.small === this.small) {
                return false;
            }
            this.space.small = this.space.small+1;
            return true;
        default: return false;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
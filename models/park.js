const Dinosaur = require('./dinosaur.js')


const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
}

Park.prototype.numberOfDinosaurs = function () {
    return this.collectionOfDinosaurs.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.mostPopularDinosaurInCollection = function () {
    
    let mostPopular = this.collectionOfDinosaurs.reduce((max, dinosaur) => 
    max.guestsAttractedPerDay > dinosaur.guestsAttractedPerDay ? max : dinosaur);
    return mostPopular
}

Park.prototype.countDinosaursOfASpecies = function (dinosaurSpecies) {
    let total = 0;
    for (dinosaur of this.collectionOfDinosaurs) {
        if (dinosaur.species == dinosaurSpecies) {
            total += 1
        return total
        } else {
            return;
        }
    }
}

Park.prototype.visitorsPerDay = function () {
    let total = 0
    for (dinosaur of this.collectionOfDinosaurs) {
        total += dinosaur.guestsAttractedPerDay  
    } 
    return total;   
}

Park.prototype.visitorsPerYear = function () {
    let total = 0
    for (dinosaur of this.collectionOfDinosaurs) {
        total += dinosaur.guestsAttractedPerDay  
    } 
    return total * 365;   
}

Park.prototype.yearlyRevenue = function () {
    let visitors = this.visitorsPerYear ()
    let revenue = visitors * 1000
    return revenue 
}

module.exports = Park;
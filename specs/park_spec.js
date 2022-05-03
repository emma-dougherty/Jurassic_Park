const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');


describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    dinosaur1 = new Dinosaur ('Velociraptor', 'carnivore', 50);
    dinosaur2 = new Dinosaur ('T-Rex', 'carnivore', 100);
    dinosaur3 = new Dinosaur ('Brontosaurus', 'herbivore', 30);
    dinosaur4 = new Dinosaur ('Stegosaurus', 'herbivore', 20);
    park = new Park('Jurassic Park',1000)
    park.collectionOfDinosaurs = [dinosaur1, dinosaur2, dinosaur3]
  })

  it('should have a name', function () {
      const actual = park.name;
      assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 1000)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.numberOfDinosaurs();
    assert.deepEqual(actual, 3)
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur4);
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 4)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur3)
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.mostPopularDinosaurInCollection()
    assert.strictEqual(actual, dinosaur2)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    
    const expected = 1
    assert.strictEqual (park.countDinosaursOfASpecies(dinosaur1.species), 1)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    const expected = 3
    assert.strictEqual(park.countDinosaursOfASpecies(dinosaur1.species), 1)
  });

  it('should be able to calculate the total number of visitors per day', function (){
    const expected = 180
    assert.strictEqual(park.visitorsPerDay(), expected)
  });

  it('should be able to calculate the total number of visitors per year', function (){
    const expected = 65700
    assert.strictEqual(park.visitorsPerYear(), expected)
  });

  it('should be able to calculate total revenue for one year', function () {
    const expected = 65700000
    assert.strictEqual(park.yearlyRevenue(), expected)
  });


  // it('should be able to remove all dinosaurs of a particular species', function () {
  //   park.removeAllOfParticularSpecies(dinosaur1)
  //   const actual = park.countDinosaursOfASpecies(dinosaur1.species)
  //   assert.strictEqual(actual, 0)
  // });



})
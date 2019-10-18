// 1. Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker2{
constructor(attributes){
    this.length = attributes.length,
    this.width = attributes.width,
    this.height = attributes.height
  }
  
  
    volume(){
    return this.length*this.width*this.height;
  }
  
  surfaceArea(){
    return 2*(this.length * this.width + this.length * this.height + this.width * this.height);
  }
};

  class Child2 extends CuboidMaker2{
  constructor(childattributes){
  super(childattributes);
  }
  };

 class CubeMaker extends CuboidMaker2{
    constructor(childattributes){
    super(childattributes);

    }
    volumeOfCube(){
        return 3*(this.length)
    }
    surfaceAreaOfCube(){
        return 6*(this.length*this.length)
    }
 };

  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  });

  const cube = new CubeMaker({
    length: 4
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
console.log(cube.volumeOfCube());
console.log(cube.surfaceAreaOfCube());
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
function iceBrickVolume(radius, bottleLength, rimLength) {
    // brick dimensions: height =  bottleLength - rimLength;
    // brick diagonal = radius;
    // bricks are square ended so, r^2 = a^2 + a^2; r^2 = 2a^2;
    // area = a^2 so a^2 = r^2/2
        
    
    // volume of cylinder = V = pi x r x 2 x height
    
    // ice height = bottleLength - rimLength;
    
    const height = bottleLength - rimLength; 
    const baseArea = Math.pow(radius, 2)/2;
    const volume = baseArea * height;
    console.log(height  + " : " + baseArea);
    return volume;
  }

//   Test.describe("Basic Tests", function() {
//     Test.assertEquals(iceBrickVolume(1, 10, 2), 16);
//     Test.assertEquals(iceBrickVolume(5, 30, 7), 1150);
//   });
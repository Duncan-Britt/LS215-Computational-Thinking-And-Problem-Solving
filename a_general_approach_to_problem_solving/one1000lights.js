

function lightsOn(nSwitches) {
  const switches = new Array(nSwitches + 1);

  for (let i = 1; i < switches.length; i += 1) {
    switches[i] = false;
  }

  for (let counter = 1; counter <= nSwitches; counter++) {
    for (let i = counter; i < switches.length; i += counter) {
      switches[i] = !switches[i]
    }
  }

  const onLights = [];
  switches.forEach((isOn, i) => isOn && (onLights.push(i)));

  return onLights;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

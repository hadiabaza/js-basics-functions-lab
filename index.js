// Code your solution in this file!
const hq = 42;
const feet = 264;
function distanceFromHqInBlocks(num) {
  if (num >= 42) {
    return num - hq;
  } else {
    return hq - num;
  }
}

function distanceFromHqInFeet(num1) {
  return distanceFromHqInBlocks(num1) * feet;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * feet;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  }
  if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  }
  if (distance <= 2500) {
    return 25;
  }
  if (distance > 2500) {
    return "cannot travel that far";
  }
}

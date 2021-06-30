function calculatesFarePrice(start, end) {
  const feet = distanceTravelledInFeet(start, end);
  const fare = feet <= 400 ? 0
    : feet <= 2000 ? ((feet - 400) * 2) / 100
      : feet <= 2500 ? 25
        : 'cannot travel that far';
  return fare;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function distanceFromHqInFeet(end) {
  return distanceTravelledInFeet(42, end);
}

function distanceFromHqInBlocks(end) {
  return Math.abs(42 - end);
}
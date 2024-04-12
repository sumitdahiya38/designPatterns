class RaceTemplate {
  start() {
    console.log("Starting the race!");
  }

  accelerate() {
    console.log("Accelerating...");
  }

  turn() {
    console.log("Making a turn...");
  }

  brake() {
    console.log("Braking at the finish line.");
  }

  runRace() {
    this.start();
    this.accelerate();
    this.turn();
    this.brake();
  }
}

class StraightRace extends RaceTemplate {
  start() {
    console.log("Straight Race: Starting the race!");
  }

  accelerate() {
    console.log("Straight Race: Accelerating down the straight track.");
  }

  turn() {
    // No turns in a straight race
  }

  brake() {
    console.log("Straight Race: Braking at the finish line.");
  }
}

class CurveRace extends RaceTemplate {
  start() {
    console.log("Curve Race: Starting the race!");
  }

  accelerate() {
    console.log("Curve Race: Accelerating through the curves.");
  }

  turn() {
    console.log("Curve Race: Navigating through the curves.");
  }

  brake() {
    console.log("Curve Race: Braking at the finish line.");
  }
}

class ChicaneRace extends RaceTemplate {
  start() {
    console.log("chicane Race: Starting the race!");
  }

  accelerate() {
    console.log("chicane Race: Accelerating through the chicane.");
  }

  turn() {
    console.log("Navigating through the chicane...");
  }

  brake() {
    console.log("chicane Race: Braking at the finish line.");
  }
}

function testRaceTemplate(race) {
  console.log("\nTesting Race Template:");
  race.runRace();
}

const straightRace = new StraightRace();
const curveRace = new CurveRace();
const chicaneRace = new ChicaneRace();

testRaceTemplate(straightRace);
testRaceTemplate(curveRace);
testRaceTemplate(chicaneRace);

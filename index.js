  //shortcut console log actions below
  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }

  function liftWeights() {
    console.log("Pump Iron");
  }

function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

  //even more shortcuts. below for function that always has running as first activtiy, and takes 2nd activtiy as an argument.

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}



// days of the week functions, using the new shortened exerciseRoutine function.
function Monday() {
    exerciseRoutine(liftWeights);
}

function Tuesday() {
    exerciseRoutine(swimFortyLaps);
}

function Wednesday() {
    exerciseRoutine(runFiveMiles);
}

function Thursday() {
    exerciseRoutine(liftWeights);
}
  
function Friday() {
    exerciseRoutine(swimFortyLaps);
}
/*
exerciseRoutine(function() {
    console.log("Stretch! Work that core!");
});

//another option for exerciseRoutine shortening
exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
});

//even shorter exerciseRoutine!
exerciseRoutine(() => console.log("Stretch! Work that core!"));
*/

function receivesAFunction(cb) {
    return cb();
}
function returnsANamedFunction() {
    return function namedFunction(){};
}

function returnsAnAnonymousFunction() {
    return function(){};
}

//receivesAFunction(cb => return cb);[]
/*
function main (cb) {
    console.log(cb());
  }
main(function () { return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});
// LOG: After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!
*/




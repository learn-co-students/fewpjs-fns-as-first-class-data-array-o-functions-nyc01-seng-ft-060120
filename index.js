function wakeDog(dogName, dogBreed) {
    let dogString = `Wake ${dogName} the ${dogBreed}`;
    console.log(dogString);
    return dogString;
}

function leashDog(dogName, dogBreed) {
    let dogString = `Leash ${dogName} the ${dogBreed}`;
    console.log(dogString);
    return dogString;
}

function walkToPark(dogName, dogBreed) {
    let dogString = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(dogString);
    return dogString;
}

function throwFrisbee(dogName, dogBreed) {
    let dogString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(dogString);
    return dogString;
}

function walkHome(dogName, dogBreed) {
    let dogString = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(dogString);
    return dogString;
}

function unleashDog(dogName, dogBreed) {
    let dogString = `Unleash ${dogName} the ${dogBreed}`;
    console.log(dogString);
    return dogString;
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
];

function exerciseDog(dogName, dogBreed) {
    let output = [];
    for (let i = 0; i < routine.length; i++) {
        let dogString = routine[i](dogName, dogBreed);
        output.push(dogString);
    }
    return output;
}
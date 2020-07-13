function wakeDog(dogName, dogBreed) {
    const activity = `Wake ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
}

function leashDog(dogName, dogBreed) {
    const activity = `Leash ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
}

function walkToPark(dogName, dogBreed) {
    const activity = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
}

function throwFrisbee(dogName, dogBreed) {
    const activity = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
}


function walkHome(dogName, dogBreed) {
    const activity = `Walk home with ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
}

function unleashDog(dogName, dogBreed) {
    const activity = `Unleash ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
}
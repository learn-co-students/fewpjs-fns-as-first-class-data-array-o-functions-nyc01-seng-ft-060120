function wakeDog(dogName="Byron", dogBreed="poodle"){
    // console.log(`wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog(dogName = "Byron", dogBreed = "poodle") {
    return `Leash ${dogName} the ${dogBreed}`;
}

function walkToPark(dogName = "Byron", dogBreed = "poodle") {
    return `Walk to the park with ${dogName} the ${dogBreed}`;
}

function throwFrisbee(dogName = "Byron", dogBreed = "poodle") {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

function walkHome(dogName = "Byron", dogBreed = "poodle") {
    return `Walk home with ${dogName} the ${dogBreed}`;
}

function unleashDog(dogName = "Byron", dogBreed = "poodle") {
    return `Unleash ${dogName} the ${dogBreed}`;
}

// const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

// function exerciseDog(dog, breed){
//     let newArr = [];
//     for (let i = 0; i < routine.length; i++){
//         newArr.push();
//     }
//     return newArr;
// }

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed));
}

console.log(exerciseDog());
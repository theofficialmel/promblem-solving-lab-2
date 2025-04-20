// Problem 1: Favorite Foods

//1. Create an array with 5 of your favorite foods.

//2. Log the first and last food in the array.

//3. Add one more food using .push() and log the new array.

let favoritefoods = ["pizza", "oatmeal", "meatloaf", "tacos","baked macaroni", "chocolate cake"];
favoritefoods.push("sushi")
console.log(favoritefoods)
console.log(favoritefoods[0])
console.log (favoritefoods[5])

let partyguest = ["John", "Mary", "Paul", "Sarah", "Tom"];
partyguest.shift("john")
partyguest.push("jamel")
console.log(partyguest)
console.log(partyguest.length)


let tasks = ["laundry", "groceries", "coding", "naps"];
function printtasks(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
    }
}

let numbers = [1, 2, 3, 4, 5];
function listnumbers(numbers) {
    for (let i = 5; i < numbers.length; i++) {}
        console.log(numbers[i]);
    }
    




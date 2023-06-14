const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let i = 0
while (i < ingredients.length) {
  console.log(ingredients[i])
  i += 1
}

// // Write a for loop that prints out the contents of ingredients:

for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]) 
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
 
let i = ingredients.length - 1
while (i >= 0){
  console.log(ingredients[i]) 
i -= 1
}

// or 

let x = ingredients.reverse()
for (let i = 0; i < ingredients.length; i++){
     console.log(x[i])
  }
  
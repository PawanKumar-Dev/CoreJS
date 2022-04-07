// Callback Hell
// ================
// It's a issue created when we code complex nested callbacks.
// Here, each callback takes an argument that is a result of the previous callbacks.
// In this manner, the code structure looks like a pyramid, making it difficult to read and maintain.

// And if there is error in one function, then all other functions get affected.


setTimeout(() => {
  console.log("Function 1 is running!");
  
  setTimeout(() => {
    console.log("Function 2 is running!");

    setTimeout(() => {
      console.log("Function 3 is running!");

      setTimeout(() => {
        console.log("Function 4 is running!");

        setTimeout(() => {
          console.log("Function 5 is running!");
        }, 2000);

      }, 2000);

    }, 2000);

  }, 2000);
  
}, 2000);
// Accessing DOM
// With JS we have different way to access DOM and manipulate data there

// ===========================================================
// getElementById ---> select the given id element
// innerHTML      ---> gives you the inner html of that element

let handle = document.getElementById("box").innerHTML;
console.log(handle);


// =============================================================
// getElementsByClass   ---> select the given class element
// Gives you "undefined" as inner html. Reason is becoz classname is not unique like id by Javascript.
// To fix this we need to provide an index to class name
// Index start with 0

let clsHandle = document.getElementsByClassName("para")[0].innerHTML;
console.log(clsHandle);


// ==============================================================
// getElementsByTagName   ---> select the given element by tagname
// Just like classname we must provide an index value

let tHandle = document.getElementsByTagName("h3")[0].innerHTML;
console.log(tHandle);


// ===============================================================
// querySelector    ---> all general purpose selector for id, class and tags
// But when selecting with querySelector. We do need to specify the selector type like #id, .class etc

let handle2 = document.querySelector("section").innerHTML;
console.log(handle2);

let handle3 = document.querySelector(".sp").innerHTML;
console.log(handle3);

let handle4 = document.querySelector("#divbox").innerHTML;
console.log(handle4);
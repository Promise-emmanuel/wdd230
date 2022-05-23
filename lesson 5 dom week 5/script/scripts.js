// assign a variable to the list
const myList = document.querySelector("ul");
// assign a variable to the input which houses the text 
const text = document.getElementById("favchap");
// assign a variable to the button
const myButton = document.querySelector("button");

// create a function that listens for when the button is clicked:
myButton.addEventListener("click", function() {
    // logs a message to the console when the function is called successfully
    console.log("clicked again")

    // the .value picks the value of the input assigned a variable "text"
    // if the text value is empty, the program should not display anything.
    if (text.value == '') {
        return false;
    }
    
    // if the text value has this.contentEditable...it does the following
    // create elements 
    const listItem = document.createElement("li");
    // const listText = document.createElement('span')
    const listBtn = document.createElement('button');
    
    // populate texts into the li element and print to console
    console.log(listItem.textContent = text.value);


    // listText.textContent = text;
    listBtn.textContent= "❌";
    
    // appendchild
    listItem.appendChild(listBtn);
    myList.appendChild(listItem);
    
    // if the button that was created is clicked, remove the child
    listBtn.addEventListener("click", function() {
        myList.removeChild(listItem);

    });
    
    text.focus;
    
    text.value = '';
    text.focus;
    

});
    
console.log(data);

// WRITE YOUR CODE BELOW!

// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog



// - Render the top list of dogs using the list item template you'll find on the HTML file

function headerList(element){

    let addButtonList = document.querySelector(".dogs-list__button--add")

    let ulEl = document.querySelector(".dogs-list");
    
        
    let clicked = addButtonList.addEventListener("click", function(){
        
        let listItem = document.createElement("li");
        listItem.className = "dogs-list__button";
        listItem.textContent = element.name;
        
        ulEl.append(listItem)

    })
    
}

for (let element of data){
    headerList(element);
}
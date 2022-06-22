console.log(data);

// WRITE YOUR CODE BELOW!

// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog



// - Render the top list of dogs using the list item template you'll find on the HTML file



function addElement(){
    let liEl = document.querySelector('.dogs-list__button')

    liEl.addEventListener('click', addDog)

    let theUl = document.querySelector('.dogs-list')

    theUl.append(liEl)
}
addElement()

function headerList(dog){
    let theUl = document.querySelector('.dogs-list')

    let liEl = document.createElement('li')

    liEl.className = 'dogs-list__button'

    liEl.textContent = dog.name

    liEl.addEventListener('click', ()=>mainDog(dog))


    theUl.append(liEl)
}
for (let dog of data) {
        headerList(dog)
    }


function mainDog(dog){
    
    let h2El = document.createElement('h2')
    h2El.textContent = dog.name
    let imgEl = document.createElement('img')
    imgEl.src = dog.image

    let divEl = document.createElement('div')
    divEl.className = 'main__dog-section__desc'
    let h3El = document.createElement('h3')
    h3El.textContent = dog.bio
    let pEl = document.createElement('p')
    pEl.textContent = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,  minima voluptates libero cumque rerum consequatur optio aliquid sint eum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum! '

    let div2El = document.createElement('div')
    div2El.className = 'main__dog-section__btn'
    let p2El = document.createElement('p')
    if(dog.isGoodDog === true){
        p2El.textContent = 'Is naughty? Yes!'
    }
    else {
        p2El.textContent = 'Is naughty? No!'
    }
    

    let buttonEl = document.createElement('button')
    if (dog.isGoodDog === true){
        buttonEl.textContent = 'Bad Doggy'
    } else {
        buttonEl.textContent = 'Good Doggy'
    }

    buttonEl.addEventListener('click', function (){
        if(dog.isGoodDog === true){
            dog.isGoodDog = false
            p2El.textContent = 'Is naughty?No!'
            buttonEl.textContent = 'Good Doggy'
        }
        else {
            dog.isGoodDog = true
            p2El.textContent = 'Is naughty?Yes!'
            buttonEl.textContent = 'Bad Doggy'
        }
    })

    
    

    let theSection = document.querySelector('.main__dog-section')
    theSection.textContent = ''
    theSection.append(h2El, imgEl, divEl, h3El, pEl, div2El, p2El, buttonEl)
    divEl.append(h3El, pEl)
    div2El.append(p2El, buttonEl)
    
}

function addDog(){
    let h2El = document.createElement('h2')
    h2El.textContent = 'Add a new Dog'
    let formEl = document.createElement('form')
    formEl.className = 'form'
    
    let labelEl = document.createElement('label')
    labelEl.for = 'name'
    labelEl.textContent = 'Dogs name'
    let inputEl = document.createElement('input')
    inputEl.type = 'text'
    inputEl.id = 'name'
    inputEl.name = 'name'

    let label2El = document.createElement('label')
    label2El.for = 'image'
    label2El.textContent = 'Dogs picture'
    let input2El = document.createElement('input')
    input2El.type = 'url'
    input2El.id = 'image'
    input2El.name = 'image'

    let label3El = document.createElement('label')
    label3El.for = 'bio'
    label3El.textContent = 'Dogs bio'

    let textareaEl = document.createElement('textarea')
    textareaEl.rows = 5
    textareaEl.id = 'bio'
    textareaEl.name = 'bio'

    let input3El = document.createElement('input')
    input3El.type = 'submit'
    input3El.id = 'submit'
    input3El.name = 'submit'
    input3El.value = 'Lets add a dog!'
    input3El.className = 'form__button'

    let thesection = document.querySelector('.main__dog-section')
    thesection.textContent = ''
    thesection.append(h2El, formEl, labelEl, inputEl, label2El , input2El , label3El , textareaEl , input3El)
    formEl.append(labelEl, inputEl, label2El, input2El, label3El, textareaEl, input3El)
}
addDog()
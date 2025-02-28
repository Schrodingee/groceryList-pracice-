// Assign query
const alert = document.querySelector('.alert')
const form = document.querySelector('.textbox')
const grocery = document.getElementById('itemInput')
const submitBtn = document.querySelector('.submit-btn')
const list = document.querySelector('.itemList')
const container = document.querySelector('.itemsContain')
const clearBtn = document.querySelector('.clear-btn')

// edit var
let editElement;
let editFlag = false;
let editID = '';

//  Event Listeners
// submit form
form.addEventListener('submit',addItem)

// Functions
function addItem(e){
    e.preventDefault();
    console.log(grocery.value);
}
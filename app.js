// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const nameInput = document.getElementById('name-input');
const button = document.getElementById('button');
const nameDiv = document.getElementById('name-div');
button.addEventListener('click', () => {
    console.log('clicking the button');
    const value = nameInput.value;
    nameDiv.textContent = value;
    console.log(value);
});

const pronounInput = document.getElementById('pronoun-input');
const button2 = document.getElementById('button2');
const footerDiv = document.getElementById('footer');
button2.addEventListener('click', () => {
    console.log('clicking the button');
    const value = pronounInput.value;
    footerDiv.textContent = value;
});
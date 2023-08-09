// variables for user input
const adj1 = document.getElementById("adj1");
const noun1 = document.getElementById("noun1");
const adj2 = document.getElementById("adj2");
const clothing = document.getElementById("clothing");
const bodyPart = document.getElementById("bodyPart");
const verb1 = document.getElementById("verb1");
const food = document.getElementById("food");

// Variable to display the mad lib
const madLibDisplay = document.querySelector(".mad-lib");

// Variable for the form
const form = document.querySelector("form");

// Variable for the mad lib story
const story = `During a <b>${adj1}</b> afternoon in the park, I could not help but notice a <b>${adj2}</b> <b>${noun1}</b> attempting to <b>${verb1}</b>. It wore a curious <b>${clothing}</b> and occasionally scratched its <b>${bodyPart}</b>. To top it all off, it was munching on a <b>${food}</b> as if it were the most natural thing in the world.`;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (adj1.value == "") {
    alert(`${adj1.name} Must be filled out!`);
    adj1.focus();
  } else if (noun1.value == "") {
    alert(`${noun1.name} Must be filled out!`);
    noun1.focus();
  } else if (adj2.value == "") {
    alert(`${adj2.name} Must be filled out!`);
    adj2.focus();
  } else if (clothing.value == "") {
    alert(`${clothing.name} Must be filled out!`);
    clothing.focus();
  } else if (bodyPart.value == "") {
    alert(`${bodyPart.name} Must be filled out!`);
    bodyPart.focus();
  } else if (verb1.value == "") {
    alert(`${verb1.name} Must be filled out!`);
    verb1.focus();
  } else if (food.value == "") {
    alert(`${food.name} Must be filled out!`);
    food.focus();
  } else {
    madLibStoryDisplay();
  }
});

function madLibStoryDisplay() {
  madLibDisplay.innerHTML = story
    .replace(`${adj1}`, adj1.value)
    .replace(`${noun1}`, noun1.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${bodyPart}`, bodyPart.value)
    .replace(`${verb1}`, verb1.value)
    .replace(`${food}`, food.value);
}

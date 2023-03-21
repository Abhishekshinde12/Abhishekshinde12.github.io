
// .querySelector() - it only acts on the first match
// Select all the buttons
const buttons = document.querySelectorAll(".button");

// Loop through all the buttons and add an event listener to each of them
buttons.forEach(button => {
  button.addEventListener("click", function() {
    button.classList.toggle('active');
    buttonClick("click");
  });
});


// function buttonClick(event) {
//     var button = event.target;
//     var buttonText = button.textContent;
  
//     if (buttonText === "ON/OFF") 
//     { alert("The ON/OFF button was clicked!");}
//     else if (buttonText === "Percentage") {alert("The Percentage button was clicked!");} 
//     else if (buttonText === "Drain") {alert("The Drain button was clicked!");} 
//     else if (buttonText === "Quality") {alert("The Quality button was clicked!");} 
//     else if (buttonText === "Filter check") {alert("The Filter check button was clicked!");}
// }


function onButtonClick(button) {

    if ( button.id === "percentage-button") {
      alert("Percentage button clicked");
    } else if (button.id === "drain-button") {
      alert("Drain button clicked");
    } else if (button.id === "filter-check-button") {
      alert("Filter Check button clicked");
    } else if(button.id == "ph-sensor"){
      alert("Ph sensor has been turned on")  
    } else if(button.id == "turbidity-sensor"){
        alert("Turbidity sensor has been turned on")  
    } else if(button.id == "tds-sensor"){
        alert("TDS sensor has been turned on")  
    }
}









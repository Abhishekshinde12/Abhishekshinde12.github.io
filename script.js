const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    button.classList.toggle('active');
    buttonClick("click");
  });
});



var isPer = false;
var isDrain = false;
var isTur = false;
var isTds = false;
var isPh = false;
var isFil = false;

function onButtonClickPer(button) {
    isPer = !isPer;
    if ( button.id === "percentage-button" ){ 
          if(isPer){{alert("Percentage button clicked");}}
          else{alert("Do you want to turn off the button");} 
    }
}

function onButtonClickDrain(button){

    isDrain = !isDrain;
    if (button.id === "drain-button" ){
          if(isDrain){{alert("Drain button clicked");}}
          else{alert("Do you want to turn off the button");}
    }

}

function onButtonClickFilter(button){

    isFil = !isFil
    if (button.id === "filter-check-button"){
          if(isFil){{alert("Filter Check button clicked");}}
          else{alert("Do you want to turn off the button");}
    }

}

function onButtonClickPh(button){

    isPh = !isPh;
    if(button.id == "ph-sensor" ){
          if(isPh){{alert("Ph sensor has been turned on");}}
          else{alert("Do you want to turn off the button");}
    }

}

function onButtonClickTurbidity(button){

    isTur = !isTur
    if(button.id == "turbidity-sensor" ){
          if(isTur){{alert("Turbidity sensor has been turned on");}}
          else{alert("Do you want to turn off the button");}
    }

}

function onButtonClickTds(button){

    isTds = !isTds;
    if(button.id == "tds-sensor" ){
          if(isTds){{alert("TDS sensor has been turned on");}}
          else{alert("Do you want to turn off the button");}
    }
     
}









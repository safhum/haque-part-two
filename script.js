function suggestion() {
    var eventType = prompt("What's your event?", "");
    var tempFahr = prompt("What's the temperature in Farenheit? ", "");
    var result = "";

    if (eventType == "casual") {
        result = "something comfy";

    } else if (eventType == "semi-formal") {
        result = "a polo";
    } else if (eventType == "formal") {
        result = "a suit";
    } 
    

    if (tempFahr < 54) {
        result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result + " and a coat.";
    }else if(tempFahr >54 && tempFahr <70){
    	result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result + " and a jacket ";

    }
    else if (tempFahr >70){
    	result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + result + " and no jacket";
    }
   


    console.log(result);
    
}
suggestion();
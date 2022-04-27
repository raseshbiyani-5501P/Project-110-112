Webcam.set({

    height : 300,
    width : 300,
    image_format : 'png',
    png_quality : 90
    });
    
    webcamera = document.getElementById("webcamera");
    Webcam.attach("#webcamera");
    
    function Capture(){
    
    Webcam.snap(function(data_uri){
    
    document.getElementById("snapshot").innerHTML = "<img id='cap_pic' src=" +data_uri+ ">";
    
    } );
    
    }

console.log("ml5 Version is" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/39m9hAbCq/model.json", modelLoaded);
function modelLoaded(){

console.log("Model Is Loaded :)");
} 

function Speak(){

    var Synth = window.speechSynthesis;
    
    speak_data1 = "The first prediction is " + prediction_1;
    speak_data2 = "and the second prediction is "+ prediction_2;
    
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2)
    Synth.speak(utterThis);
    }
    
    function predict_gesture(){
    
    i = document.getElementById("cap_pic");   
    
    classifier.classify(i,gotResult);
    
    }
    
    function gotResult(error,results){
    
    if(error){
    
    console.error(error)
    
    }
    else{
    
    console.log(results)
    document.getElementById("prediction_1_name").innerHTML = results[0].label;
    document.getElementById("prediction_2_name").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;

    Speak()

    function predict_gesture(){

    if(results[0].label == "Raising Finger"){

document.getElementById("prediction_1_gesture").innerHTML = "☝"; }

else if(results[0].label == "Fist"){

document.getElementById("prediction_1_gesture").innerHTML = "✊";}

else if(results[0].label == "Raising hand"){

    document.getElementById("prediction_1_gesture").innerHTML = "✋";}

else if(results[0].label == "Victory"){

 document.getElementById("prediction_1_gesture").innerHTML = "✌";}

 else if(results[0].label == "Backhand pointing up index finger"){

    document.getElementById("prediction_1_gesture").innerHTML = "👆";}
    
else if(results[0].label == "Backhand pointing down index finger"){

        document.getElementById("prediction_1_gesture").innerHTML = "👇";}

else if(results[0].label == "Backhand pointing left index finger"){

 document.getElementById("prediction_1_gesture").innerHTML = "👈";}
 
 //------------------------------------------------------------------

 if(results[1].label == "Raising Finger"){

    document.getElementById("prediction_2_gesture").innerHTML = "☝"; }
    
    else if(results[1].label == "Fist"){
    
    document.getElementById("prediction_2_gesture").innerHTML = "✊";}
    
    else if(results[1].label == "Raising hand"){
    
        document.getElementById("prediction_2_gesture").innerHTML = "✋";}
    
    else if(results[1].label == "Victory"){
    
     document.getElementById("prediction_2_gesture").innerHTML = "✌";}
    
     else if(results[1].label == "Backhand pointing up index finger"){
    
        document.getElementById("prediction_2_gesture").innerHTML = "👆";}
        
    else if(results[1].label == "Backhand pointing down index finger"){
    
            document.getElementById("prediction_2_gesture").innerHTML = "👇";}
    
    else if(results[1].label == "Backhand pointing left index finger"){
    
     document.getElementById("prediction_2_gesture").innerHTML = "👈";}
        
}

}
}


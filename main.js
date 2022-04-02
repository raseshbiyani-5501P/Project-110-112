console.log("ml5 Version is" , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/htZrtVHmf/model.json", modelLoaded);
function modelLoaded(){

console.log("Model Is Loaded :)");
} 

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
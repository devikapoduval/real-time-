function play_onload() {
    setInterval(function(){
        document.getElementById("song").play()

    },1000
    )

}
function setup() {
    canvas=createCanvas(300,250)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    video.size(300,250)
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Lq17l_L-p/model.json",modelLoaded);
    
} 

function draw() {
    image(video,0,0,300,250)
classifier.classify(video,gotResult)
}

function modelLoaded() {
    console.log("modelloaded")
}

function gotResult(error,result) {
    if(error){
        console.log(error)
    }else{
        console.log(result)
        document.getElementById("span_result_person").innerHTML=result[0].label
        document.getElementById("span_result_accuracy").innerHTML=result[0].confidence.toFixed(3)
        
    }
}
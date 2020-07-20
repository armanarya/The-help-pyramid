//
var currentLevel = 0;
//
document.getElementById("next-level").addEventListener("click",function(){
    //
    if(currentLevel == 0){
        document.getElementById("level1").innerHTML = "The Duck";
        currentLevel += 1;
    }
    
    else if(currentLevel == 1){
        document.getElementById("level2").innerHTML = "Peer";
        currentLevel += 1;
    }
    
    else if (currentLevel == 2){
        document.getElementById("level3").innerHTML = "coach"
        currentLevel += 1;
    }

    else if (currentLevel == 3){
        document.getElementById("level4").innerHTML= "Tech Team"
        currentLevel += 1;
    }
    //
    else if (currentLevel == 3){
        currentLevel += 1;
        document.getElementById("next-level").innerHTML = "Reset Triangle";
    }
    //
    else{
        // make all levels blank again
        document.getElementById("level1").innerHTML = "";
        document.getElementById("level2").innerHTML = "";
        document.getElementById("level3").innerHTML = "";
        document.getElementById("level4").innerHTML = "";

        // reset button text
        document.getElementById("next-level").innerHTML = "Click for next level of support";
        //
        currentLevel = 0;
    }
})
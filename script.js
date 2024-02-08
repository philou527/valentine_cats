window.addEventListener('load', function () { 

    var noCounter = 1;
    var noButton = document.getElementById("noB"); 
    var yesButton = document.getElementById("yesB");

    var catPic = this.document.getElementById("cat");

    var noList = ["Non", "T'es sûre?", "Pitié réflichis bien", "Repense y fortement", "BEBOUUU", "jvais pleurer..","ottoke appuie sur yes", "Yes"];
    //var kittenPics = []

    noButton.addEventListener("click", function(){

        noCounter += 1;

        if(noCounter<noList.length){
            //document.getElementById("counterAff").textContent = noCounter;
            noButton.textContent = noList[noCounter];
            yesButton.style.transform = "scale("+ noCounter + ")";
            yesButton.style.marginRight = (noCounter*30) + "px";
            yesButton.style.marginTop = (noCounter*30) + "px";
            //yesButton.style.fontSize = (16*noCounter)+"px";
            yesButton.style.fontWeight = "bold";
            noButton.style.fontWeight = "bold";
            catPic.src = "img/cat"+noCounter+".jpg";
        } else{
            noButton.style.backgroundColor = "#4CAF50";
            noButton.remove();
            yesButton.remove();
            document.getElementById("question").textContent = "Ouiiiiiiii!!";
            catPic.src = "img/final.jpg";
        }

        
    });

    yesButton.addEventListener("click", function(){

        noButton.remove();
        yesButton.remove();
        document.getElementById("question").textContent = "Ouiiiiiiii!!";
        catPic.src = "img/final.jpg";
    });

});
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i= 0;i < 6;i++){
        color+= hex[Math.floor(Math.random()* 16)]

    }
    return color;
}

    let intervalId;
    
    const startChanging = function(){
      if(!intervalId){
        intervalId =  setInterval(bgColor, 1000)
      } 
        
        function bgColor(){
        document.body.style.backgroundColor = randomColor()
        document.querySelector("button").style.color = randomColor()

        }
        
    }

    const stopChanging =  function(){
        clearInterval(intervalId);
        intervalId  = null
       
        
        
    }

    function heading(){
        document.querySelector("h1").style.color = randomColor()
    }
    document.querySelector("#start").addEventListener("click", startChanging)
    document.querySelector("#stop").addEventListener("click", stopChanging)
    document.querySelector("h1").addEventListener("mouseover", heading)
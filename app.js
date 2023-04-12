
let bar = document.getElementById("bar") 
let barCon = document.getElementById("barCon") 
let perdiv = document.getElementById("per") 
let lo = document.getElementById("lo")
lo.innerHTML="Loading"
let barNum = 100

let barWidth=String(barNum)+"px"

bar.style.width=barWidth

let counter = 1;

function myLoop() {   
  let per = (counter/5)*100
  let perToCal=per*0.01 
  barCon.style.width=String(barNum*perToCal)+"px"       
  perdiv.innerHTML=String(per)+"%"
  setTimeout(function() {
      
     counter++;                    
    if (counter < 6) {           
      myLoop();             
    }   
    else{
      counter = 1
      myLoop(); 
    }                    
  }, 1000)
}

function alo(){
  setTimeout(function(){
    switch(lo.innerHTML){
      case "Loading": 
      lo.innerHTML="Loading."
      break
      case "Loading.": 
      lo.innerHTML="Loading.."
      break
      case "Loading..": 
      lo.innerHTML="Loading..."
      break
      case "Loading...": 
      lo.innerHTML="Loading"
      break
      default:
    }

      if (counter < 6 && barCon.style.width!=="100px") {        
      alo();        
    }
    else{
      counter=0
      alo()
    }     

   },550)
}

myLoop()
alo()




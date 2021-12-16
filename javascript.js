var h = 0 ; 
var m = 0 ; 
var s = 0 ; 

var count = 0 ; 

var timer = true ; 

// let startElem = document.getElementById("start") ; 
// let stopElem = document.getElementById("stop") ; 
// let resetElem = document.getElementById("reset") ; 




function start() {
    timer = true ;
    document.getElementById("stop").disabled = false ;
    document.getElementById("reset").disabled = false ;
    document.getElementById("start").disabled = true ; 
    stopwatch()  ;
}

function stop() {
    timer = false ; 
    document.getElementById("start").disabled = false ;
}

function reset() {
    timer = false ; 
    h = 0 ; 
    m = 0 ; 
    s = 0 ; 
    count = 0 ; 
    document.getElementById("count").innerHTML = "00" ;
    document.getElementById("sec").innerHTML = "00" ; 
    document.getElementById("min").innerHTML = "00" ; 
    document.getElementById("hour").innerHTML = "00" ; 

    document.getElementById("stop").disabled = true ;
    document.getElementById("reset").disabled = true ;
    document.getElementById("start").disabled = false ; 
    
}

function stopwatch() {
    if(timer == true){
        count++ ; 
        document.getElementById("count").innerHTML = count ; 
        if(count == 100){
            s++ ; 
            count = 0 ;
            document.getElementById("sec").innerHTML = s ;
        } 
        if(s == 60){
            s = 0 ; 
            m++ ;  
            document.getElementById("min").innerHTML = m ; 
        }
        if(m == 60) {
            h++ ; 
            m = 0 ;
            s = 0 ;  
            document.getElementById("hour").innerHTML = h ; 
        }
        

        setTimeout("stopwatch()" , 10) ; 
    }
}

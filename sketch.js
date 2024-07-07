var bday, monthBD, dayBD, yearBD;
var cday, monthNow, dayNow, yearNow;
var daysInYear = 365

var years=0;
var months =0 
var days =0
var d, e, f, g, h

function submit(){
    bday = document.getElementById("a").value;
    var dob = new Date(bday)
    monthBD = dob.getMonth()
    dayBD=dob.getDate()
    yearBD=dob.getFullYear()
    
    cday = document.getElementById("b").value;
    var CD = new Date(cday)
    monthNow = CD.getMonth()
    dayNow = CD.getDate()
    yearNow = CD.getFullYear()

    
    years = yearNow-yearBD
    months = monthNow-monthBD
    days = dayNow-dayBD

    console.log(dayBD, dayNow)

    if (years < 0){
        console.log("invalid")
    }
    else if(months > 0){
        console.log(years)
    }
    else if(months == 0 && days >= 0 ){
        console.log(years)
    }
    else{
        years= years-1;
        if(months <= 0){
            if(days > 0){
                months = 12 + months
            }
            else{
                months = 11 - months 
            }
        }
        
    }

    

    if(days < 0){
        days = 30 + days
        months = months-1;
    }

    if(years < 0){
        var m= "Invalid Input !"
        document.getElementById("c").innerHTML= m;
        var msg = new SpeechSynthesisUtterance();
        msg.text = m;
        window.speechSynthesis.speak(msg);
    }
    else{
        var m = "You are " + years + " years, " + months + " months, and " + days + " days old";
        document.getElementById("c").innerHTML= m;
        var msg = new SpeechSynthesisUtterance();
        msg.text = m;
        window.speechSynthesis.speak(msg);
    }
        
   
   

}


var money = 0
var co2 = 0
$(document).ready(function() {
    $("#moneyamount").html(money)
    $("#co2amount").html(co2)
    
    $(".start").click(function() {
        $("#counter").show()
        $("#intro").hide() 
        $(".questions").show()
    })
    
    $(".answer").click(function callmewhenclicked(event){
    
    if($(event.target).text() === "Environmentalist"){
        changequestion (chooseyourtransportation);
        
    }
    if($(event.target).text() === "Insulated"){
        changequestion (chooseyourprotest);
        
    }  
    if($(event.target).text() === "Imported"){
        changequestion (chooseyourhousing);
        
    }  
    if($(event.target).text() === "Local"){
        changequestion (chooseyourhousing);    
    }
    if($(event.target).text() === "Businessman"){
        changequestion (chooseyourtransportation);
    }  
    if($(event.target).text() === "Protest"){
        //invoke go to end state function
        renderendpage()
    if($(event.target).text() === "Counter-Protest"){
       //invoke go to end state function
       renderendpage()
    }  
    if($(event.target).text() === "Car"){
        changequestion (chooseyourfood);
    }
    
    if($(event.target).text() === "Bus"){
        changequestion (chooseyourfood);
    }
    
    if($(event.target).text() === "Non-Insulated"){
        changequestion (chooseyourprotest);
    }

});

function changequestion(object) {
    $("#answer1").text(object.answer1);
    $("#answer2").text(object.answer2);
    $("h1").text(object.h1);
    $("#answer1d").text(object.answer1d);
    $("#answer2d").text(object.answer2d);
}

var chooseyourrole = {
 name: 'chooseyourrole',
 h1: 'Choose your Role',
 answer1: 'Enviornmentalist',
 answer2: 'Businessman',
 answer1d: 'Description',
 answer2d: 'Description',
};

var chooseyourtransportation = {
 name: 'transportation',
 h1: 'Choose your Transportation',
 answer1: 'Bus',
 answer2: 'Car',
 answer1d: 'Ride a bus',
 answer2d: 'Drive a car',
};

 var chooseyourfood = {
 name: 'Food',
 h1: 'Choose your Food',
 answer1: 'Local',
 answer2: 'Imported',
 answer1d: 'Grow your food',
 answer2d: 'Buy from local Walmart',
};

var chooseyourhousing= {
 name: 'Housing',
 h1: 'Choose your House',
 answer1: 'Insulated',
 answer2: 'Non-Insulated',
 answer1d: 'Buy a Insulated House',
 answer2d: 'Buy a Non-Insulated House',
};

var chooseyourprotest= {
 name: 'Protest',
 h1: 'Choose to go to the Protest',
 answer1: 'Protest',
 answer2: 'Counter-Protest',
 answer1d: 'Choose to not go to the protest',
 answer2d: 'Choose to counter-protest',
};

})
function renderendpage() {
   
    if (money > 10) {
        moneytospend = "lots money"
    }
    else if (money > 0) {
        moneytospend = "some money"
    }
    else {
        moneytospend = "no money"
    }
     if (co2 > 10) {
        amountofcarbon = "lots carbon"
    }
    else if (co2 > 0) {
        amountofcarbon = "some carbon"
    }
    else {
        amountofcarbon = "no carbon"
    }
    
    
    if (moneytospend === "no money" && amountofcarbon==="no carbon") {
        $("#results").html("You sacrifice yourself for a free carbon world.");
        $("body").css("background-color", "blue");    
    } else if (moneytospend === "no money" && amountofcarbon==="some carbon") {
        $("#results").html("you sacrifice yourself to maintain a decent amount of carbon world.");
        $("body").css("background-color", "purple");
    } else if (moneytospend === "no money" && amountofcarbon === "lots carbon") {
        $("#results").html("End of the world");
        $("body").css("background-color", "red");
    } else if (moneytospend === "some money" && amountofcarbon === "lots carbon") {
        $("#results").html("Not good enough");
        $("body").css("background-color", "tan");
    } else if (moneytospend === "some money" && amountofcarbon === "no carbon") {
        $("#results").html("You maintain a normal life and less carbon at the same time");
        $("body").css("background-color", "lightblue");
    } else if (moneytospend === "some money" && amountofcarbon === "some carbon") {
        $("#results").html("You maintained the original situation");
        $("body").css("background-color", "gainsboro");
    } else if (moneytospend === "lots money" && amountofcarbon === "lots carbon") {
        $("#results").html("Doesn't care about the environment");
        $("body").css("background-color", "yellow");
    } else if (moneytospend === "lots money" && amountofcarbon === "no carbon") {
        $("#results").html("You benefited and get rich in the meantime.");
        $("body").css("background-color", "green");
    } else if (moneytospend === "lots money" && amountofcarbon === "some carbon") {
        $("#results").html("You maintain the carbon and become rich at the same time");
        $("body").css("background-color", "orange");
    }
}


 
     



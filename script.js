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
    
    $("#answer2").click(function() {
        $(".questions").hide()  
        $("#end").show()
        money = money + 20
        co2 = co2 + 20
        $("#moneyamount").html(money)
        $("#co2amount").html(co2)
    })
    
    $("#answer1").click(function(){
        $("#job").hide()
        money = money + 10
        co2 = co2 + 10
        $("#moneyamount").html(money)
        $("#co2amount").html(co2)
    })
})
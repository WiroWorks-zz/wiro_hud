$(document).ready(function(){

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "arac") {
            if (item.bool) {
                aracici()
            }
            else {
                aracdisi()
            }
        }
        else if (item.type === "updateStatusHudmain") {
            $("#yükselcan").attr("height", String(38 - Math.floor(item.health)))
            $("#yükselzirh").attr("height", String(38 - Math.floor(item.armour)))
        }
        else if (item.type === "updateStatusHudOthers") {
            $("#yükselyemek").attr("height", String(38 - Math.floor(item.hunger)))
            $("#yükselsu").attr("height", String(38 - Math.floor(item.thirst)))
        }
        else if (item.type === "kemer") {
            if(item.takili) {
                $("#kemeracik").hide();
                $("#kemertakili").show();
            }
            else {
                $("#kemeracik").show();
                $("#kemertakili").hide();
            }
        }
        else if (item.type === "aracOthers") {
            $(".hiz").text(String(Math.floor(item.speed)))
            $("#yükselbenzin").attr("height", String(38 - Math.floor(item.fuel)))
            var hizint = 255 - Math.floor(item.speed)
            if (hizint < 0) hizint = 0;
            $(".vehicle-holder").css("border-color", "rgba(20, 19, 23, 0.5) rgba(20, 19, 23, 0.5) rgb(" + String(255 - hizint) + ", 40, 40) rgb("+ String(255 - hizint) + ", 40, 40)")
            if (item.engine) {
                $("#motorpath").addClass("yesilparlama")
            }
            else {
                $("#motorpath").removeClass("yesilparlama")
            }
            if (item.light === 1) {
                $(".farr").addClass("sariparlama")
            }
            else {
                $(".farr").removeClass("sariparlama")   
            }
        }
        else if (item.type === "sinyal") {
            if (item.index === "right") {
                $(".sagokk").addClass("sariparlama")
                $(".solokk").removeClass("sariparlama")
            }
            else if (item.index === "left") {
                $(".sagokk").removeClass("sariparlama")
                $(".solokk").addClass("sariparlama")
            }
            else if (item.index === "both") {
                $(".sagokk").addClass("sariparlama")
                $(".solokk").addClass("sariparlama")
            }
            else {
                $(".sagokk").removeClass("sariparlama")
                $(".solokk").removeClass("sariparlama")
            }
        }
    })

    function aracici() {
        $(".vehicle-holder").fadeIn(500);
        // CAN
        $( "#can" ).animate({
            right: "3.8%",
            bottom: "23%"
          }, 400, function() {
            $("#can").addClass("carcan")
        });
        // CAN
        // ZIRH
        $( "#zirh" ).animate({
            right: "2.5%",
            bottom: "17.5%"
          }, 400, function() {
            $("#zirh").addClass("carzirh")
        });
        // ZIRH
        // YEMEK
        $( "#yemek" ).animate({
            right: "2%",
            bottom: "12%"
            }, 400, function() {
            $("#yemek").addClass("caryemek")
        });
        // YEMEK
        // SU
        $( "#su" ).animate({
            right: "2.7%",
            bottom: "6.2%"
            }, 400, function() {
            $("#su").addClass("carsu")
        });
        // SU
        // MİK
        $( "#mik" ).animate({
            right: "4.2%",
            bottom: "1%"
            }, 400, function() {
            $("#mik").addClass("carsmik")
        });
        // MİK
    }

    function aracdisi() {
        $(".vehicle-holder").fadeOut(500);
        // CAN
        $( "#can" ).animate({
            right: "0.1%",
            bottom: "24%"
          }, 400, function() {
            $("#can").removeClass("carcan")
        });
        // CAN
        // ZIRH
        $( "#zirh" ).animate({
            right: "0.1%",
            bottom: "18%"
          }, 400, function() {
            $("#zirh").removeClass("carzirh")
        });
        // ZIRH
        // YEMEK
        $( "#yemek" ).animate({
            right: "0.1%",
            bottom: "12%"
            }, 400, function() {
            $("#yemek").removeClass("caryemek")
        });
        // YEMEK
        // SU
        $( "#su" ).animate({
            right: "0.1%",
            bottom: "6%"
            }, 400, function() {
            $("#su").removeClass("carsu")
        });
        // SU
        // MİK
        $( "#mik" ).animate({
            right: "0.1%",
            bottom: "0.1%"
            }, 400, function() {
            $("#mik").removeClass("carsmik")
        });
        // MİK
    }

});
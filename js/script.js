var currentView = "";
var plantData;

var plantRequest = new XMLHttpRequest();
plantRequest.open("GET", "../plant-info.json");
plantRequest.onload = function () {
    plantData = JSON.parse(plantRequest.responseText);
    renderHTML(plantData);
};
plantRequest.send();

function clickHandler(c, index) {
    var name = plantData[index].name;
    var pro = plantData[index].pronunciation;
    var sci = plantData[index].scientific;
    var icon1 = plantData[index].blurbIcons[0];
    var icon2 = plantData[index].blurbIcons[1];
    var icon3 = plantData[index].blurbIcons[2];
    var blurb1 = plantData[index].blurb[0];
    var blurb2 = plantData[index].blurb[1];
    var blurb3 = plantData[index].blurb[2];
    var blurbInfo1 = plantData[index].blurbInfo[0];
    var blurbInfo2 = plantData[index].blurbInfo[1];
    var blurbInfo3 = plantData[index].blurbInfo[2];

    currentView = c;

    $("#name").html(name)
    $("#pronounce").html(pro)
    $("#sci-name").html(sci)
    $("#main--info-icon1").html(icon1)
    $("#main--info-icon2").html(icon2)
    $("#main--info-icon3").html(icon3)
    $("#blurb1").html(blurb1)
    $("#blurb2").html(blurb2)
    $("#blurb3").html(blurb3)
    $("#blurbDescription1").html(blurbInfo1)
    $("#blurbDescription2").html(blurbInfo2)
    $("#blurbDescription3").html(blurbInfo3)

    if (plantData[index].plantingInfo) {
        for (var i = 0; i < plantData[index].plantingInfo.length; i++) {
            $("#planting-list").append(
                "<li><i class='fab fa-envira'></i>" + plantData[index].plantingInfo[i] + "</li>"
            )
        }
    }

    if (plantData[index].careInfo) {
        for (var i = 0; i < plantData[index].careInfo.length; i++) {
            $("#care-list").append(
                "<li><i class='fab fa-envira'></i>" + plantData[index].careInfo[i] + "</li>"
            )
        }
    }

    $("#nav").removeClass("animation--back-in");
    $("#quote").removeClass("animation--fore-in");
    $("#banner").removeClass("animation--back-in");
    $("#main--content-wrapper").removeClass("main--out");
    $("#main--content-wrapper").removeClass(currentView);
    $("#main--top-image").removeClass(currentView + "-img");
    $("#nav").addClass("animation--back-out");
    $("#quote").addClass("animation--fore-out");
    $("#banner").addClass("animation--back-out");
    setTimeout(function () {
        $("#main--content-wrapper").addClass("main--in");
        $("#main--content-wrapper").addClass(c);
        $("#main--top-image").addClass(c + "-img");
    }, 250)
}

function backHandler() {

    $("#main--content-wrapper").removeClass("main--in");
    $("#main--content-wrapper").removeClass(currentView);
    $("#main--content-wrapper").addClass("main--out");
    setTimeout(function () {
        $("#nav").removeClass("animation--back-out");
        $("#quote").removeClass("animation--fore-out");
        $("#banner").removeClass("animation--back-out");
        $("#nav").addClass("animation--back-in");
        $("#quote").addClass("animation--fore-in");
        $("#banner").addClass("animation--back-in");
        $("#main--top-image").removeClass(currentView + "-img");
        currentView = "";
        $("#planting-list").html('');
        $("#care-list").html('');
    }, 1500)
    setTimeout(function () {
        $("#name").html('');
        $("#pronounce").html('');
        $("#sci-name").html('');
        $("#main--info-icon1").html('');
        $("#main--info-icon2").html('');
        $("#main--info-icon3").html('');
        $("#blurb1").html('');
        $("#blurb2").html('');
        $("#blurb3").html('');
        $("#blurbDescription1").html('');
        $("#blurbDescription2").html('');
        $("#blurbDescription3").html('');
    }, 3000)
}
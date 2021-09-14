var currentView = "";
var plantData;

var plantRequest = new XMLHttpRequest();
plantRequest.open("GET", "../plant-info.json");
plantRequest.onload = function () {
    plantData = JSON.parse(plantRequest.responseText);
    renderHTML(plantData);
};
plantRequest.send();

function renderHTML(data) {
    console.log(data)

}

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

    document.getElementById("name").insertAdjacentHTML("afterbegin", name)
    document.getElementById("pronounce").insertAdjacentHTML("afterbegin", pro)
    document.getElementById("sci-name").insertAdjacentHTML("afterbegin", sci)
    document.getElementById("main--info-icon1").insertAdjacentHTML("afterbegin", icon1)
    document.getElementById("main--info-icon2").insertAdjacentHTML("afterbegin", icon2)
    document.getElementById("main--info-icon3").insertAdjacentHTML("afterbegin", icon3)
    document.getElementById("blurb1").insertAdjacentHTML("afterbegin", blurb1)
    document.getElementById("blurb2").insertAdjacentHTML("afterbegin", blurb2)
    document.getElementById("blurb3").insertAdjacentHTML("afterbegin", blurb3)
    document.getElementById("blurbDescription1").insertAdjacentHTML("afterbegin", blurbInfo1)
    document.getElementById("blurbDescription2").insertAdjacentHTML("afterbegin", blurbInfo2)
    document.getElementById("blurbDescription3").insertAdjacentHTML("afterbegin", blurbInfo3)

    $("#nav").removeClass("animation--back-in");
    document.getElementById("quote").classList.remove("animation--fore-in");
    document.getElementById("banner").classList.remove("animation--back-in");
    $("#main--content-wrapper").removeClass("main--out");
    $("#main--content-wrapper").removeClass(currentView);
    $("#main--top-image").removeClass(currentView + "-img");
    $("#nav").addClass("animation--back-out");
    document.getElementById("quote").classList.add("animation--fore-out");
    document.getElementById("banner").classList.add("animation--back-out");
    setTimeout(function(){
        $("#main--content-wrapper").addClass("main--in");
        $("#main--content-wrapper").addClass(c);
        $("#main--top-image").addClass(c + "-img");
    }, 250)
}

function backHandler() {

    $("#main--content-wrapper").removeClass("main--in");
    $("#main--content-wrapper").removeClass(currentView);
    $("#main--top-image").removeClass(currentView + "-img");
    $("#main--content-wrapper").addClass("main--out");
    setTimeout(function () {
        $("#nav").removeClass("animation--back-out");
        document.getElementById("quote").classList.remove("animation--fore-out");
        document.getElementById("banner").classList.remove("animation--back-out");
        $("#nav").addClass("animation--back-in");
        document.getElementById("quote").classList.add("animation--fore-in");
        document.getElementById("banner").classList.add("animation--back-in");
        currentView = "";
    }, 1500)
    setTimeout(function(){
        document.getElementById("name").innerHTML = "";
        document.getElementById("pronounce").innerHTML = "";
        document.getElementById("sci-name").innerHTML = "";
        document.getElementById("main--info-icon1").innerHTML = "";
        document.getElementById("main--info-icon2").innerHTML = "";
        document.getElementById("main--info-icon3").innerHTML = "";
        document.getElementById("blurb1").innerHTML = "";
        document.getElementById("blurb2").innerHTML = "";
        document.getElementById("blurb3").innerHTML = "";
        document.getElementById("blurbDescription1").innerHTML = "";
        document.getElementById("blurbDescription2").innerHTML = "";
        document.getElementById("blurbDescription3").innerHTML = "";
    }, 3000)
}
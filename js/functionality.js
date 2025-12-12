
[].forEach.call(document.querySelectorAll("[data-title]"), (e) => {
    e.innerHTML = data[activeBusiness].title;
});

let contactStr = "";
for (let i = 0; i < 4; i++) {
    switch (i) {
        case 0:
            contactStr = contactStr + "<li><i class='fa " + data[activeBusiness].contact.addressIcon + "'></i> " + data[activeBusiness].contact.address + " </li>";
            break;
        case 1:
            contactStr = contactStr + "<li><i class='fa " + data[activeBusiness].contact.phoneIcon + "'></i> " + data[activeBusiness].contact.phone + " </li>";
            break;
        case 2:
            contactStr = contactStr + "<li><i class='fa " + data[activeBusiness].contact.emailIcon + "'></i> " + data[activeBusiness].contact.email + " </li>";
            break;
    }

}
[].forEach.call(document.querySelectorAll("[data-contact]"), (e) => {
    e.innerHTML = contactStr;
});

let socialHTML = "";
for (let i = 0; i < data[activeBusiness].social.length; i++) {
    socialHTML = socialHTML + `<a class="px-3" href="${data[activeBusiness].social[i].href}" target="_blank" alt="instagram" title="${data[activeBusiness].social[i].title}"" data-social="${data[activeBusiness].social[i].title}""><i class="fab ${data[activeBusiness].social[i].icon}" animated top"></i></a>`
}

[].forEach.call(document.querySelectorAll("[data-social]"), (e) => {
    e.innerHTML = socialHTML;
});

if (document.getElementById("jumbotronHeading")) {
    document.getElementById("jumbotronHeading").innerHTML = data[activeBusiness].jumbotronHeading;
}

if (document.getElementById("jumbotronImg")) {

    document.getElementById("jumbotronImg").style.backgroundImage = "url('" + data[activeBusiness].jumbotronImg + "')";
    // document.getElementById("jumbotronImg").style.backgroundImage(`url('${data[activeBusiness].jumbotronImg}')`)
}

if (document.getElementById("jumbotronLead")) {
    document.getElementById("jumbotronLead").innerHTML = data[activeBusiness].jumbotronLead;
}




/*START TEASERS ANIMATION*/

/*import React, { Component } from "react";

class MainFocus extends Component {
    constructor() {
        super();
        this.state = {
            selectEdit: "focusTeaser",
            editVal: "",
        };

        this.teaserTransitionOver = this.teaserTransitionOver.bind(this);
        this.teaserTransitionOut = this.teaserTransitionOut.bind(this);
        this.selectEdit = this.selectEdit.bind(this);
    }
*/


let selectEditVar = "focusTeaser";
let editVal = "";
// componentDidMount() {
setTimeout(function () {
    document.querySelector(".mainFocusBg").classList.remove("hide");
    document.querySelector(".mainFocusBg").classList.add("animated");
    document.querySelector(".mainFocusBg").classList.add("fadeIn");
}, 100);
//  }

function teaserTransitionOver(whichTeaser) {
    document
        .querySelector("div[data-teaser='" + whichTeaser + "']")
        .classList.remove("fadeIn");

    document
        .querySelector("img[data-img='" + whichTeaser + "']")
        .classList.add("pulse");

    document
        .querySelector("div[data-focus='" + whichTeaser + "']")
        .classList.remove("fadeOut");

    document
        .querySelector("div[data-teaser='" + whichTeaser + "']")
        .classList.add("fadeOutDown");

    document
        .querySelector("div[data-focus='" + whichTeaser + "']")
        .classList.add("fadeIn");
}

function teaserTransitionOut(whichTeaser) {
    document
        .querySelector("div[data-teaser='" + whichTeaser + "']")
        .classList.remove("fadeOutDown");

    document
        .querySelector("img[data-img='" + whichTeaser + "']")
        .classList.remove("pulse");

    document
        .querySelector("div[data-teaser='" + whichTeaser + "']")
        .classList.add("fadeIn");

    document
        .querySelector("div[data-focus='" + whichTeaser + "']")
        .classList.add("fadeOut");
}

function selectEdit(num) {
    let changeThis = document.querySelector(
        ".selectEdit[data-edit='" + num + "']"
    ).value;

    //this.setState({
    selectEditVar = changeThis;
    //  });
}



/* END MAIN FOCUS*/





let ytVideos = [];
let imageAddresses = [];
if (data[activeBusiness].about[0].media[0].indexOf(".jpg") !== -1) {
    imageAddresses = data[activeBusiness].about[0].media;
} else {
    ytVideos = data[activeBusiness].about[0].media;
}
//START VIDEO CAROUSEL
let activeVideo = 0;
let videoIndexStr = ""
if (document.getElementById("videoCounter")) {
    document.getElementById("videoCounter").innerHTML = activeVideo + 1 + "/" + parseInt(ytVideos.length);
}

for (let i = 0; i < ytVideos.length; i++) {
    let standardClass = 'sliderIndex';
    if (i === 0) {
        standardClass = 'sliderIndex active';
    }
    videoIndexStr = videoIndexStr + "<li class='" + standardClass + "' data-video='" + i + "' onClick='setVideoActive(" + i + ")' ></li>";
}
if (document.querySelector("[data-carousel='video']")) {
    document.querySelector("[data-carousel='video']").innerHTML = videoIndexStr;
}

function setVideoActive(num) {
    activeVideo = num;
    [].forEach.call(document.querySelectorAll(".sliderIndex[data-video]"), (e) => {
        e.classList.remove("active");
    });
    document.querySelector("[data-video='" + num + "']").classList.add("active");
    document.querySelector("#mediaYt").setAttribute("src", "https://www.youtube.com/embed/" + ytVideos[num])
    document.getElementById("videoCounter").innerHTML = (1 + num) + "/" + parseInt(ytVideos.length);
}
///START IMAGE CAROUSEL

let activeImage = 0;
let imageIndexStr = "";
if (document.getElementById("imageCounter")) {
    document.getElementById("imageCounter").innerHTML = activeImage + 1 + "/" + parseInt(imageAddresses.length) + " - " + imageAddresses[activeImage].substring(imageAddresses[activeImage].lastIndexOf("/"), imageAddresses[0].indexOf("."));
}

for (let i = 0; i < imageAddresses.length; i++) {
    let standardClass = 'sliderIndex';
    if (i === 0) {
        standardClass = 'sliderIndex active';
    }
    imageIndexStr = imageIndexStr + "<li class='" + standardClass + "' data-image='" + i + "' onClick='setImageActive(" + i + ")' ></li>";
}

if (document.querySelector("[data-carousel='image']")) {
    document.querySelector("[data-carousel='image']").innerHTML = imageIndexStr;
}


function setImageActive(num) {
    activeImage = num;
    [].forEach.call(document.querySelectorAll(".sliderIndex[data-image]"), (e) => {
        e.classList.remove("active");
    });
    document.querySelector("[data-image='" + num + "']").classList.add("active");
    document.getElementById("imageCounter").innerHTML = (1 + num) + "/" + parseInt(imageAddresses.length);
    document.getElementById("imageCarouselTarget").style.backgroundImage = "url('" + imageAddresses[num] + "')";
}
/*
try {
    document.querySelector("#mediaYt").setAttribute("src", "https://www.youtube.com/embed/" + ytVideos[0])
} catch (error) {
    console.log("No videos: " + error);
}

*/

function carouselMove(direction, media) {
    let videoListLength = parseInt(ytVideos.length);
    let imageListLength = parseInt(imageAddresses.length);
    if (direction === "next") {
        if (media === "video") {
            activeVideo = (parseInt(activeVideo) + 1);
            if (activeVideo >= videoListLength) {
                setVideoActive(0);
            } else {
                setVideoActive(activeVideo);
            }
        }
        if (media === "image") {
            activeImage = (parseInt(activeImage) + 1);
            if (activeImage >= imageListLength) {
                setImageActive(0);
            } else {
                setImageActive(activeImage);
            }
        }
    }

    if (direction === "previous") {
        if (media === "video") {
            let tempActive = activeVideo - 1;
            if (tempActive < 0) {
                setVideoActive(videoListLength - 1);
            } else {
                setVideoActive(activeVideo - 1);
            }
        }
        if (media === "image") {
            let tempActive = activeImage - 1;
            if (tempActive < 0) {
                setImageActive(imageListLength - 1);
            } else {
                setImageActive(activeImage - 1);
            }
        }

    }
}
setImageActive(0);
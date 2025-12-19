
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











[].forEach.call(document.querySelectorAll("[data-imgs]"), (e, i) => {
    /* <div  style="background-image: url('${data[activeBusiness].info[i].media[0]}')" class="img-fluid"  id="imageCarouselTarget-${i}" ></div>    */

    let showMultiple = "hide";
    if (data[activeBusiness].info[i].media.length > 1) {
        showMultiple = "";
    }

    e.innerHTML = `
                <div><img src="${data[activeBusiness].info[i].media[0]}"  class="img-fluid"  id="imageCarouselTarget-${i}" /></div>     
                <span class="${showMultiple}">            
                <label class="sliderIndexCounter">Image:<span id="imageCounter-${i}"></span></label>

                    <ul class="carouselIndexParent txtCenter" data-carousel="image" id="indexIcons-${i}"></ul>

                 
                    <ul class="inline txtCenter block">
                        <li>
                            <button type="button" class="btn btn-secondary mr-2 "
                                onClick="carouselMove('previous','image',${i})">
                                <i class="fas fa-arrow-circle-left"></i> Image</button>

                            <button type="button" class="btn btn-secondary ml-2 "
                                onClick="carouselMove('next','image',${i})">Image <i class="fas fa-arrow-circle-right"></i>
                            </button>
                        </li>

                    </ul>
                    </span>
`
});


let whichTarget = [];
[].forEach.call(document.querySelectorAll("[data-videos]"), (e, i) => {




    whichTarget.push(e.dataset.videos);


});


for (let i = 0; i < whichTarget.length; i++) {
    document.querySelector("[data-videos='" + whichTarget[i] + "']").innerHTML = `<div><iframe src="https://www.youtube.com/embed/${data[activeBusiness].info[whichTarget[i]].media[0]}" title="YouTube video player" class="mediaYt" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen=""></iframe></div>
                            
                            
                    <label class="sliderIndexCounter  text-center">Video:<span id="videoCounter-${whichTarget[i]}">1</span></label>
                     <ul class="carouselIndexParent txtCenter" data-carousel="video" id="videoIndexIcon-${whichTarget[i]}"></ul>
                    <ul class="inline txtCenter block">
                        <li>
                            <button type="button" class="btn btn-secondary mr-2 "
                                onClick="carouselMove('previous','video',${whichTarget[i]})">
                                <i class="fas fa-arrow-circle-left"></i> Video</button>

                            <button type="button" class="btn btn-secondary ml-2 "
                                onClick="carouselMove('next','video',${whichTarget[i]})">Video <i class="fas fa-arrow-circle-right"></i>
                            </button>
                        </li>

                    </ul>
                
`;


    let ytVideos = data[activeBusiness].info[whichTarget[i]].media;

    // if (data[activeBusiness].info[whichTarget[i]].media[0].indexOf(".") === -1 && data[activeBusiness].info[whichTarget[i]].media[0].indexOf("/") === -1) {
    let activeVideo = 0;
    let videoIndexStr = ""
    if (document.getElementById("videoCounter-" + whichTarget[i])) {

        document.getElementById("videoCounter-" + whichTarget[i]).innerHTML = activeVideo + 1 + "/" + parseInt(ytVideos.length);
    } else {
        console.log(`videoCounter-whichTarget[i]: ` + whichTarget[i])
    }

    for (let j = 0; j < ytVideos.length; j++) {
        let standardClass = 'sliderIndex';
        if (j === 0) {
            standardClass = 'sliderIndex active';
        }
        videoIndexStr = videoIndexStr + "<li class='" + standardClass + "' data-video='" + j + "' onClick='setVideoActive(" + j + ")' ></li>";
    }
    if (document.querySelector("[data-carousel='video']#videoIndexIcon-" + whichTarget[i])) {
        document.querySelector("[data-carousel='video']#videoIndexIcon-" + whichTarget[i]).innerHTML = videoIndexStr;
    } else {
        console.log(`whichTarget[i]: ` + whichTarget[i])
    }


    //  }

}

for (let i = 0; i < whichTarget.length; i++) {



    let ytVideos = data[activeBusiness].info[whichTarget[i]].media;
    console.log(`ytVideos: ` + ytVideos)

    // if (data[activeBusiness].info[whichTarget[i]].media[0].indexOf(".") === -1 && data[activeBusiness].info[whichTarget[i]].media[0].indexOf("/") === -1) {
    let activeVideo = 0;
    let videoIndexStr = ""
    if (document.getElementById("videoCounter-" + whichTarget[i])) {

        document.getElementById("videoCounter-" + whichTarget[i]).innerHTML = activeVideo + 1 + "/" + parseInt(ytVideos.length);
    } else {
        console.log(`videoCounter-whichTarget[i]: ` + whichTarget[i])
    }

    for (let j = 0; j < ytVideos.length; j++) {
        let standardClass = 'sliderIndex';
        if (j === 0) {
            standardClass = 'sliderIndex active';
        }
        videoIndexStr = videoIndexStr + "<li class='" + standardClass + "' data-video='" + j + "' onClick='setVideoActive(" + j + ")' ></li>";
    }
    if (document.querySelector("[data-carousel='video']#videoIndexIcon-" + whichTarget[i])) {
        document.querySelector("[data-carousel='video']#videoIndexIcon-" + whichTarget[i]).innerHTML = videoIndexStr;
    } else {
        console.log(`whichTarget[i]: ` + whichTarget[i])
    }


    //  }

}



/*
mediaYt
videoCounter-${i}
videoIndexIcon-${i}
*/













/*START VIDEO CAROUSEL*/



function setVideoActive(num, mediaNum) {
    activeVideo = num;
    [].forEach.call(document.querySelectorAll("#videoIndexIcon-" + mediaNum + " .sliderIndex[data-video]"), (e) => {
        e.classList.remove("active");
    });
    document.querySelector("#videoIndexIcon-" + mediaNum + " [data-video='" + num + "']").classList.add("active");
    document.querySelector("[data-videos='" + mediaNum + "'] .mediaYt").setAttribute("src", "https://www.youtube.com/embed/" + ytVideos[num])
    document.getElementById("videoCounter-" + mediaNum).innerHTML = (1 + num) + "/" + parseInt(ytVideos.length);
}
/*
mediaYt
videoCounter-${i}
videoIndexIcon-${i}
*/
///START IMAGE CAROUSEL

[].forEach.call(document.querySelectorAll("[data-carousel='image']"), (e, i) => {


    imageAddresses = data[activeBusiness].info[i].media;
    /*for (let j = 0; j < data[activeBusiness].info[i].media.length; j++) {
         imageAddresses.push(data[activeBusiness].info[i].media[j]);
         console.log("data[activeBusiness].info[i].media[j]): " + JSON.stringify(data[activeBusiness].info[i].media[j]));
     }*/


    let activeImage = 0;
    let imageIndexStr = "";
    if (document.getElementById("imageCounter-" + i)) {
        document.getElementById("imageCounter-" + i).innerHTML = activeImage + 1 + "/" + parseInt(imageAddresses.length) + " - " + imageAddresses[activeImage].substring(imageAddresses[activeImage].lastIndexOf("/"), imageAddresses[0].indexOf("."));
    }

    for (let j = 0; j < imageAddresses.length; j++) {
        let standardClass = 'sliderIndex';
        if (j === 0) {
            standardClass = 'sliderIndex active';
        }
        imageIndexStr = imageIndexStr + "<li class='" + standardClass + "' data-image='" + j + "' onClick='setImageActive(" + j + "," + i + ")' ></li>";
    }



    if (document.querySelector("#indexIcons-" + i)) {
        document.querySelector("#indexIcons-" + i).innerHTML = imageIndexStr;
    }
});

/*


/*start image carousels

imageCarouselTarget-${i}
imageCounter-${i}
indexIcons-${i}
*/





function setImageActive(num, mediaNum) {


    let imageAddresses = [];

    imageAddresses = data[activeBusiness].info[mediaNum].media;

    console.log("num: " + num + " - mediaNum: " + mediaNum);
    activeImage = num;
    [].forEach.call(document.querySelectorAll("#indexIcons-" + mediaNum + " .sliderIndex[data-image]"), (e) => {
        e.classList.remove("active");
    });//"#indexIcons-" + i +"[data-image]"
    document.querySelector("#indexIcons-" + mediaNum + " [data-image='" + num + "']").classList.add("active");
    document.getElementById("imageCounter-" + mediaNum).innerHTML = (1 + num) + "/" + parseInt(imageAddresses.length);
    document.getElementById("imageCarouselTarget-" + mediaNum).setAttribute("src", imageAddresses[num]);
    document.getElementById("imageCarouselTarget-" + mediaNum).style.backgroundImage = "url('" + imageAddresses[num] + "')";
}
/*
try {
    document.querySelector("#mediaYt").setAttribute("src", "https://www.youtube.com/embed/" + ytVideos[0])
} catch (error) {
    console.log("No videos: " + error);
}

mageCarouselTarget-${i}
imageCounter-${i}
indexIcons-${i}


/*
mediaYt
videoCounter-${i}
videoIndexIcon-${i}

*/

function carouselMove(direction, media, mediaNum) {
    let activeImage = 0;
    let activeVideo = 0;
    let ytVideos = []

    if (media === "image" && document.querySelector("#indexIcons-" + mediaNum + " .sliderIndex.active").dataset.image) {
        activeImage = document.querySelector("#indexIcons-" + mediaNum + " .sliderIndex.active").dataset.image;

    }


    if (media === "video" && document.querySelector("#videoIndexIcon-" + mediaNum + " .sliderIndex.active").dataset.video) {
        activeVideo = document.querySelector("#videoIndexIcon-" + mediaNum + " .sliderIndex.active").dataset.video;

    }

    console.log("activeVideo: " + activeVideo + " media: " + media);


    if (media === "image") {
        imageAddresses = data[activeBusiness].info[mediaNum].media;


    } else {
        ytVideos = data[activeBusiness].info[mediaNum].media;
    }




    let videoListLength = parseInt(ytVideos.length);
    let imageListLength = parseInt(imageAddresses.length);
    if (direction === "next") {
        if (media === "video") {
            activeVideo = (parseInt(activeVideo) + 1);
            if (activeVideo >= videoListLength) {
                setVideoActive(0, mediaNum);
            } else {
                setVideoActive(activeVideo, mediaNum);
            }
        }
        if (media === "image") {
            activeImage = (parseInt(activeImage) + 1);
            if (activeImage >= imageListLength) {
                setImageActive(0, mediaNum);
            } else {
                setImageActive(activeImage, mediaNum);
            }
        }
    }

    if (direction === "previous") {
        if (media === "video") {
            let tempActive = activeVideo - 1;
            if (tempActive < 0) {
                setVideoActive(videoListLength - 1, mediaNum);
            } else {
                setVideoActive(activeVideo - 1, mediaNum);
            }
        }
        if (media === "image") {
            let tempActive = activeImage - 1;
            if (tempActive < 0) {
                setImageActive(imageListLength - 1, mediaNum);
            } else {
                setImageActive(activeImage - 1, mediaNum);
            }
        }

    }
}
setImageActive(0, 0);






/*START NAVIGATION*/
function scrollWindow(num) {
    document
        .querySelector("[data-content='" + num + "']")
        .scrollIntoView({ behavior: "smooth" });

}

/*START BLOG RSS*/

let blogData = "Default blog data";
let activePost = 0;
let blog = [];

function viewPosts(direction) {
    console.log("viePosts: drection: " + direction);


    const blogLength = blog.length;
    if (blogLength > 0) {
        document.getElementById("blogSection").classList.remove("hide");
    }
    if ((typeof direction) === "number") {
        activePost = direction;
    } else {

        if (direction === "Next") {
            activePost = activePost + 1;
            if (activePost >= blogLength) {
                activePost = 0;
            }

        } else {
            activePost = activePost - 1;
            if (activePost < 0) {
                activePost = blogLength - 1;
            }
        }
    }

    document.querySelector("[data-activepost]").innerHTML = (Number(activePost) + 1);
    document.querySelector("[data-blogmax").innerHTML = blogLength;

    document.getElementById("activeBlogTitle").innerHTML = blog[activePost].title;
    document.getElementById("activeBlogPubDate").innerHTML = blog[activePost].pubDate;
    document.getElementById("activeBlogDescription").innerHTML = blog[activePost].description;
    if (document.querySelector(".post[data-num='" + activePost + "']")) {
        document
            .querySelector(".post[data-num='" + activePost + "']")
            .classList.remove("hide");
        document
            .querySelector(".post[data-num='" + activePost + "']")
            .classList.add("fadeIn");
    }
}


async function getBlog(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`error: ${response.status}`);
        }
        const data = await response.json();
        console.log("JSON.stringify(data): " + JSON.stringify(data))
        return data;
    } catch (error) {
        document.getElementById("blogSection").remove();
        console.log("Error: " + error);
        throw error;
    }
}

async function start() {
    const urlStart = data[activeBusiness].rss;
    let phpRelayAddress = "https://mechanized-aesthetics.net/php-relays/any-restaurant-blog-address.php?q=";
    if (urlStart.length === 0) {
        document.getElementById("blogSection").remove();
        console.log("urlStart.length: " + urlStart.length);
    } else {
        try {
            blog = await getBlog(phpRelayAddress + urlStart);
            viewPosts(0);

        } catch (error) {
            console.log("Error: " + error)
        }
    }
}
start();


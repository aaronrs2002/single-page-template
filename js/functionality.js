

let activeBusiness = 1;
let teasersHTML = "";
let mobileTeasersHTML = "";
for (let i = 0; i < data[activeBusiness].teasers.length; i++) {
    teasersHTML = teasersHTML + `<div class="col-md-3 teaser"><div class="card mb-4 shadow-sm img-thumbnail" onClick="scrollWindow('${i}')" onMouseOver="teaserTransitionOver(${i})"
                        onMouseOut="teaserTransitionOut(${i})">
                            <div class="focusTeaser animated center fadeIn fadeOut" data-focus="${i}">
                                <h1>${data[activeBusiness].teasers[i].focusTeaser}</h1>
                            </div>
                            <div class="mainTease animated fadeIn" data-teaser="${i}">
                                <h5>${data[activeBusiness].teasers[i].teaserTitle}</h5>
                                <p>${data[activeBusiness].teasers[i].teaserText}</p>
                            </div><img data-img="${i}" class="animated"
                                src="${data[activeBusiness].teasers[i].teaserImg}">
                        </div></div>`;

    mobileTeasersHTML = mobileTeasersHTML + ` <li class="nav-item" onClick="scrollWindow('${i}')"><strong class="nav-link">${data[activeBusiness].teasers[i].teaserTitle}</strong></li>`
}

document.getElementById("teasers").innerHTML = teasersHTML;
document.getElementById("mobileTeasers").innerHTML = mobileTeasersHTML;
document.querySelector(".contactMap").setAttribute("src", encodeURI(`https://www.google.com/maps/embed/v1/place?key=${data[activeBusiness].map1 + data[activeBusiness].map2}&q=${data[activeBusiness].contact.address}`));

/* START INFO */
let pgSections = [];
let sectionTitles = [];
let infoTarget = "";
for (let i = 0; i < data[activeBusiness].info.length; i++) {
    document.querySelector(".hide[data-section='" + data[activeBusiness].info[i].section + "']").classList.remove("hide");
    let infoIntro = "";
    infoIntro = `<div class="container"><div class="row"><div class="col-md-12"><h2 class="txtCenter">${data[activeBusiness].info[i].title}</h2><hr></div></div></div>`;
    document.querySelector("[data-section='" + data[activeBusiness].info[i].section + "'] .target").innerHTML = infoIntro + `<div class="container"><div class="row equalize1">` + data[activeBusiness].info[i].HTMLcontent + `</div></div>`;

}

/*START EVENTS*/
eventBtListHTML = "";
for (let i = 0; i < data[activeBusiness].events.length; i++) {
    let isActive = "";
    if (i === 0) {
        isActive = "active";
    }
    eventBtListHTML = eventBtListHTML + `<button data-num="${i}" onClick="selectEvent(${i})" class="list-group-item list-group-item-action ${isActive}">${data[activeBusiness].events[i].title}</button>`;
}
document.getElementById("eventTitleBtListTarget").innerHTML = eventBtListHTML;

function selectEvent(whichEvent) {
    [].forEach.call(document.querySelectorAll("#eventTitleBtListTarget button[data-num]"), (e) => {
        if (e.dataset.num == whichEvent) {
            e.classList.add("active");
        } else {
            e.classList.remove("active");
        }
    });

    document.getElementById("eventTitleTarget").innerHTML = data[activeBusiness].events[whichEvent].title;
    document.getElementById("eventDateTimeTarget").innerHTML = data[activeBusiness].events[whichEvent].dateTime;
    document.getElementById("eventAddressTarget").innerHTML = data[activeBusiness].events[whichEvent].address;
    document.getElementById("eventContactTarget").innerHTML = data[activeBusiness].events[whichEvent].contact;
    document.getElementById("eventDetailsTarget").innerHTML = data[activeBusiness].events[whichEvent].details;
    document.getElementById("eventMap").setAttribute("src", `https://www.google.com/maps/embed/v1/place?key=${data[activeBusiness].map1 + data[activeBusiness].map2}&q=${data[activeBusiness].events[whichEvent].address}`);
    //AIzaSyBxvGBPN_lRhoYskabk_lZ5FAo4GIowU6I
}
selectEvent(0);


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

let selectEditVar = "focusTeaser";
let editVal = "";
setTimeout(function () {
    document.querySelector(".mainFocusBg").classList.remove("hide");
    document.querySelector(".mainFocusBg").classList.add("animated");
    document.querySelector(".mainFocusBg").classList.add("fadeIn");
}, 100);

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
    selectEditVar = changeThis;
}
/* END MAIN FOCUS*/
let imageCarousels = [];
[].forEach.call(document.querySelectorAll("[data-imgs"), (e) => {
    imageCarousels.push(e.dataset.imgs);
});

for (let i = 0; i < imageCarousels.length; i++) {
    let showMultiple = "hide";
    if (data[activeBusiness].info[imageCarousels[i]].media.length > 1) {
        showMultiple = "";
    }

    document.querySelector("[data-imgs='" + imageCarousels[i] + "']").innerHTML = `
                <div><img src="${data[activeBusiness].info[imageCarousels[i]].media[0]}"  class="img-fluid"  id="imageCarouselTarget-${imageCarousels[i]}" /></div>     
                <span class="${showMultiple}">            
                <label class="sliderIndexCounter">Image:<span id="imageCounter-${imageCarousels[i]}"></span></label>

                    <ul class="carouselIndexParent txtCenter" data-carousel="image" id="indexIcons-${imageCarousels[i]}"></ul>

                 
                    <ul class="inline txtCenter block">
                        <li>
                            <button type="button" class="btn btn-secondary mr-2 "
                                onClick="carouselMove('previous','image',${imageCarousels[i]})">
                                <i class="fas fa-arrow-circle-left"></i> Image</button>

                            <button type="button" class="btn btn-secondary ml-2 "
                                onClick="carouselMove('next','image',${imageCarousels[i]})">Image <i class="fas fa-arrow-circle-right"></i>
                            </button>
                        </li>

                    </ul>
                    </span>
`
};

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

                    </ul>`;
    let ytVideos = data[activeBusiness].info[whichTarget[i]].media;
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
}

for (let i = 0; i < whichTarget.length; i++) {
    let ytVideos = data[activeBusiness].info[whichTarget[i]].media;
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
}
/*START VIDEO CAROUSEL*/
function setVideoActive(num, mediaNum) {
    let ytVideos = data[activeBusiness].info[mediaNum].media;
    activeVideo = num;
    [].forEach.call(document.querySelectorAll("#videoIndexIcon-" + mediaNum + " .sliderIndex[data-video]"), (e) => {
        e.classList.remove("active");
    });
    document.querySelector("#videoIndexIcon-" + mediaNum + " [data-video='" + num + "']").classList.add("active");
    document.querySelector("[data-videos='" + mediaNum + "'] .mediaYt").setAttribute("src", "https://www.youtube.com/embed/" + ytVideos[num])
    document.getElementById("videoCounter-" + mediaNum).innerHTML = (1 + num) + "/" + parseInt(ytVideos.length);
}

///START IMAGE CAROUSEL
for (let i = 0; i < imageCarousels.length; i++) {
    imageAddresses = data[activeBusiness].info[imageCarousels[i]].media;
    let activeImage = 0;
    let imageIndexStr = "";
    if (document.getElementById("imageCounter-" + imageCarousels[i])) {
        document.getElementById("imageCounter-" + imageCarousels[i]).innerHTML = activeImage + 1 + "/" + parseInt(imageAddresses.length) + " - " + imageAddresses[activeImage].substring(imageAddresses[activeImage].lastIndexOf("/"), imageAddresses[0].indexOf("."));
    }
    for (let j = 0; j < imageAddresses.length; j++) {
        let standardClass = 'sliderIndex';
        if (j === 0) {
            standardClass = 'sliderIndex active';
        }
        imageIndexStr = imageIndexStr + "<li class='" + standardClass + "' data-image='" + j + "' onClick='setImageActive(" + j + "," + imageCarousels[i] + ")' ></li>";
    }
    if (document.querySelector("#indexIcons-" + imageCarousels[i])) {
        document.querySelector("#indexIcons-" + imageCarousels[i]).innerHTML = imageIndexStr;
    }
};

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


const data = [{

    title: "FUNDRAISING EXTRAVAGANZA",
    contact: {
        address: "1401 N. Central Expressway Suite 208 Richardson, TX 75080",
        addressIcon: "fa-home",
        phone: "972.996.0966",
        phoneIcon: "fa-phone",
        email: "mbier@apollostaffing.com",
        emailIcon: "fa-envelope"

    },

    social: [
        {
            title: "instagram",
            href: "https://www.instagram.com/ttudave/",
            icon: "fa-instagram"

        },
        {
            title: "linkedin",
            href: "https://www.linkedin.com/in/david-r-wilson-rpl-06573124/",
            icon: "fa-linkedin"

        },
        {
            title: "youtube",
            href: "https://www.youtube.com/user/ttudave",
            icon: "fa-youtube"

        },
        {
            title: "donate",
            href: "https://www.paypal.me/MarkBier?locale.x=en_US",
            icon: "fa-donate"

        }
    ],
    "jumbotronHeading": "DAVE WILSON 9th ANNUAL FUNDRAISING EXTRAVAGANZA",

    "jumbotronImg": "img/golfBallCloseUp.jpg",

    "jumbotronLead": "This fundraising event will be broken into 2 parts. Hopefully you can attend one or both! ",
    "teasers": [
        {
            "focusTeaser": "Dave's Story",
            "id": 0,
            "teaserImg": "https://www.mechanized-aesthetics.net/TEST/daveWilson/daveBlockBusterCropped.jpg",
            "teaserText": "A bit about Dave",
            "teaserTitle": "Dave Wilson"
        },
        {
            "focusTeaser": "Find Out More!",
            "id": 1,
            "teaserImg": "https://www.mechanized-aesthetics.net/TEST/daveWilson/golfView.jpg",
            "teaserText": "Find out more",
            "teaserTitle": "Info"
        },
        {
            "focusTeaser": "Spend time with Friends",
            "id": 2,
            "teaserImg": "https://www.mechanized-aesthetics.net/TEST/daveWilson/beverage.jpg",
            "teaserText": "Booze it up with us!",
            "teaserTitle": "Events"
        },
        {
            "focusTeaser": "Reach Out",
            "id": 3,
            "teaserImg": "https://www.mechanized-aesthetics.net/TEST/daveWilson/phone.jpg",
            "teaserText": "Reach out for any questions",
            "teaserTitle": "Contact"
        }
    ],
    "about": [

        {
            "media": [
                "img/DaveAndDaughter1.jpg",
                "img/dave2.jpg",
                "img/dave4.jpg",
                "img/dave3.jpg"]
            ,
            "aboutText": "<p>My friend Dave Wilson was in a life altering accident in November 2014. A lady ran a stop sign and Dave's Life changed forever. Not just for Dave...who is now a quadriplegic but for Dave's precious daughter Ella Kate. And for David's entire family.</p><p>The medical expenses have piled up and Dave's family needs help.</p><p>Myself and a few others organize a yearly fundraiser. We will be hosting a Fundraising Golf Tournament at Duck Creek Golf Club Garland, TX Friday November 7th 9:00 AM and then at 7:00 PM that evening we will be hosting a fundraising happy hour at Drinks Saloon  in Richardson where we will be selling raffle tickets for prizes where the proceeds will go entirely to Dave.</p><p>Please RSVP if you will be attending one or both events.</p><p>We could use some help in getting raffle prizes.  So if you would like to help just let me know.</p><p>Look forward to seeing everyone again.</p><h4><u><a href=\"https://www.paypal.me/MarkBier?locale.x=en_US\" target=\"_blank\"> Donate: <i class=\"fab fa-paypal\"></i></a></u></h4><!--<h4><u><a href=\"https://mechanized-aesthetics.net/WILSON-FUNDRAISER/downloads/Dave2024.jpg\" target=\"_blank\"> Information Flyer: <i class=\"fas fa-info-circle\"></i></a></u></h4>-->",
            "aboutTitle": "Dave"
        }]

    ,
}
];
let activeBusiness = 0;

let teasersHTML = "";

let mobileTeasersHTML = "";
for (let i = 0; i < data[activeBusiness].teasers.length; i++) {
    teasersHTML = teasersHTML + `<div class="col-md-3 teaser"><div class="card mb-4 shadow-sm img-thumbnail" onMouseOver="teaserTransitionOver(${i})"
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

    mobileTeasersHTML = mobileTeasersHTML + ` <li class="nav-item"><strong class="nav-link">${data[activeBusiness].teasers[i].teaserTitle}</strong></li>`
}

document.getElementById("teasers").innerHTML = teasersHTML;
document.getElementById("mobileTeasers").innerHTML = mobileTeasersHTML;
document.querySelector("[data-content='0']").innerHTML = data[activeBusiness].teasers[0].teaserTitle;
document.querySelector(".contentTxt[data-scroll='0']").innerHTML = "<h1>" + data[activeBusiness].about[0].aboutTitle + "</h1>" + data[activeBusiness].about[0].aboutText;
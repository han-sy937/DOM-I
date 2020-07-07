const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const anchorTags = document.querySelectorAll("a");
anchorTags[0].textContent = siteContent.nav["nav-item-1"]
anchorTags[1].textContent = siteContent.nav["nav-item-2"]
anchorTags[2].textContent = siteContent.nav["nav-item-3"]
anchorTags[3].textContent = siteContent.nav["nav-item-4"]
anchorTags[4].textContent = siteContent.nav["nav-item-5"]
anchorTags[5].textContent = siteContent.nav["nav-item-6"]


anchorTags[0].style.color = "green"
anchorTags[1].style.color = "green"
anchorTags[2].style.color = "green"
anchorTags[3].style.color = "green"
anchorTags[4].style.color = "green"
anchorTags[5].style.color = "green"

const newAnchor = document.createElement("a")
newAnchor.textContent = "Blog"

const navBar = document.querySelector("nav")
navBar.append(newAnchor)
newAnchor.style.color = "green"

const newAnchorTwo = document.createElement("a")
newAnchorTwo.textContent = "Sign In"

navBar.prepend(newAnchorTwo)
newAnchorTwo.style.color = "green"


// console.log(anchorTags)


const headlineOne = document.querySelector("h1")
headlineOne.innerText = siteContent.cta["h1"]

const buttonText = document.querySelector("button");
buttonText.textContent = siteContent.cta["button"];


const heroImage = document.querySelector("#cta-img");
heroImage.setAttribute('src', siteContent["cta"]["img-src"])



const featureH4 = document.querySelectorAll(".text-content h4");
featureH4[0].textContent = siteContent["main-content"]["features-h4"];
featureH4[1].textContent = siteContent["main-content"]["about-h4"];
featureH4[2].textContent = siteContent["main-content"]["services-h4"];
featureH4[3].textContent = siteContent["main-content"]["product-h4"];
featureH4[4].textContent = siteContent["main-content"]["vision-h4"];


const featureParagraph = document.querySelectorAll(".text-content p");
featureParagraph[0].textContent = siteContent["main-content"]["features-content"];
featureParagraph[1].textContent = siteContent["main-content"]["features-content"];
featureParagraph[2].textContent = siteContent["main-content"]["features-content"];
featureParagraph[3].textContent = siteContent["main-content"]["features-content"];
featureParagraph[4].textContent = siteContent["main-content"]["features-content"];

const featureImage = document.querySelector("#middle-img");
featureImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const contactSection = document.querySelector(".contact h4")
contactSection.textContent = siteContent["contact"]["contact-h4"]

const contactParagraphs = document.querySelectorAll(".contact p")
contactParagraphs[0].textContent = siteContent["contact"]["address"]
contactParagraphs[1].textContent = siteContent["contact"]["phone"]
contactParagraphs[2].textContent = siteContent["contact"]["email"]

const footerSection = document.querySelector("footer")
footerSection.textContent = siteContent.footer["copyright"]


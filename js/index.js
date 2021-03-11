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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Add 2 new nav items
let navItem7 = document.createElement('a');
navItem7.innerHTML = "Careers";
navItem7.setAttribute('href', '#');
document.querySelector("header").children[0].appendChild(navItem7);

let navItem8 = document.createElement('a');
navItem8.innerHTML = "Roots";
navItem8.setAttribute('href', '#');
document.querySelector("header").children[0].prepend(navItem8);

// add the nav bar
const nav = document.querySelectorAll('a');

// Add links to nav
let navItem1 = nav[0].innerHTML = siteContent['nav']['nav-item-1'];
let navItem2 = nav[1].innerHTML = siteContent['nav']['nav-item-2'];
let navItem3 = nav[2].innerHTML = siteContent['nav']['nav-item-3'];
let navItem4 = nav[3].innerHTML = siteContent['nav']['nav-item-4'];
let navItem5 = nav[4].innerHTML = siteContent['nav']['nav-item-5'];
let navItem6 = nav[5].innerHTML = siteContent['nav']['nav-item-6'];

// Change nav text to green
nav.forEach((navChild => {
    console.log(navChild);
    navChild.style.color = "green";
}));

// Update the img src for cta img
const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Add cta header
let ctaHeader = document.querySelector('h1').innerHTML = siteContent["cta"]["h1"];

// Update the get start button
let startButton = document.querySelector('button').innerHTML = siteContent["cta"]["button"];

// create top content
const textContent = document.getElementsByClassName('text-content');

// Add features header
let featuresH4 = textContent[0].children[0].innerHTML = siteContent['main-content']['features-h4'];

// Add features content
let featuresContent = textContent[0].children[1].innerHTML = siteContent['main-content']['features-content'];

// Add about header
let aboutH4 = textContent[1].children[0].innerHTML = siteContent['main-content']['about-h4'];

// Add about content
let aboutContent = textContent[1].children[1].innerHTML = siteContent['main-content']['about-content'];

// Update the img src for middle img
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Add services header
let servicesH4 = textContent[2].children[0].innerHTML = siteContent['main-content']['services-h4'];

// Add services content
let servicesContent = textContent[2].children[1].innerHTML = siteContent['main-content']['services-content'];

// Add product header
let productH4 = textContent[3].children[0].innerHTML = siteContent['main-content']['product-h4'];

// Add product content;
let productContent = textContent[3].children[1].innerHTML = siteContent['main-content']['product-content'];

// Add vision header
let visionH4 = textContent[4].children[0].innerHTML = siteContent['main-content']['vision-h4'];

// Add vision Content
let visionContent = textContent[4].children[1].innerHTML = siteContent['main-content']['vision-content'];

// Add the contact section header
const childContact = document.querySelector('.contact').children;
let contacth4 = childContact[0].innerHTML = siteContent["contact"]["contact-h4"];

// Add contact address
let address = childContact[1].innerHTML = siteContent['contact']['address'];

// Add contact phone number
let phone = childContact[2].innerHTML = siteContent["contact"]["phone"];

let email = childContact[3].innerHTML = siteContent["contact"]["email"];

// Add footer
let footer = document.querySelector('footer').children[0].innerHTML = siteContent['footer']['copyright'];
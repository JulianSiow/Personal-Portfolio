# Julian Siow's Portfolio

## Technologies Used: 
* html, css, and JavaScript
* jQuery
* bootstrap for forms
* Github

## Process:
Starting this project was really difficult because it was hard to find inspiration and ideas to make a website that was uniquely mine.  In the end I settled on finding some effects that stood out to me and set out to create something that looked cool and proffessional, without leaning too hard on css effects or animations.  I am happy with how it turned out for now but I have a lot that I still want to add.  

## High priority on the todo list are:
* adding proper images and descriptions for my projects page

## Unsolved Issues:
* Pages height is inconsistent
* Page breaks on mobile, needs refactoring

## Wins and Struggles: 
* I am really proud of the parrallax effect on the pictures, although I do think they could be inproved with some photoshop to create a layered parrallax movement
* Smooth scrolling on the navbar interaction is something that was pretty important to me and I am glad that I figured it out.  
* I struggled in the past with the transition on the project previews, so I was really happy I got them to work.  

Code Highlights: 

### Parrallax Backgrounds
```
  .hero-container{
  background-position: center;
  background-size: cover;
  background-color: firebrick;
  height: 100vh;
  background-attachment: fixed;
  border-bottom: 50px solid transparent;
}

.hero-img-1{
  background-image: url("../images/graz-uhrturm.jpg");
}

.hero-img-2{
  background-image: url("../images/sf-bay-bridge.jpeg");
}

.hero-img-3{
  background-image: url("../images/desk-background.jpg");
  background-position: left;
}
```

### Smooth Scroll on Navbar click
```
const navHeight = $("div.navbar").height();

$(document).ready(() => {
  $(".navbar-link").on('click', (e) => {
    if(e.hash !== "") {
      event.preventDefault();
      const hash = e.target.hash;
      let scrollPosition = $(hash).offset().top - navHeight
      $('html').animate({
        scrollTop: scrollPosition
      }, 1000);
    }
  });
});
```
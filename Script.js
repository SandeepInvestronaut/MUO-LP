//Placement-Carousel
//------START----------
const imageFilenames = [
  "Assets/p_1.png",
  "Assets/p_2.png",
  "Assets/p_3.png",
  "Assets/p_4.png",
  "Assets/p_5.png",
  "Assets/p_6.png",
  "Assets/p_7.png",
  "Assets/p_8.png",
  "Assets/p_0.png",
  "Assets/p_10.png",
  "Assets/p_11.png",
  "Assets/p_12.png",
  "Assets/p_13.png",
  "Assets/p_14.png",
  "Assets/p_15.png",
  "Assets/p_16.png",
  "Assets/p_17.png",
  "Assets/p_18.png",
  "Assets/p_19.png",
];

const container = document.getElementById("owl-demo");
imageFilenames.forEach((filename) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = filename;
  img.alt = "Image";
  img.className = "image_list";
  div.appendChild(img);
  div.className = "item placement_img";
  container.appendChild(div);
});

$("#owl-demo").owlCarousel({
  items: 5,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});


/* Internation-Placement-Carousel */


const internationalImage = [
  "Assets/Ip_1.png",
  "Assets/Ip_2.png",
  "Assets/Ip_3.png",
  "Assets/Ip_4.png",
  "Assets/Ip_5.png",
  "Assets/Ip_6.png",
  "Assets/Ip_7.png"
];

const internationaContainer = document.getElementById("owl-demo-1");
internationalImage.forEach((filename) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = filename;
  img.alt = "Image";
  img.className = "image_list";
  div.appendChild(img);
  div.className = "item placement_img";
  internationaContainer.appendChild(div);
});

$("#owl-demo-1").owlCarousel({
  items: 5,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});



//------END--------

//----What-Our-Student-Says
//-------START--------

const testimonialData = [
  {
    image: "Assets/testimonial_1.png",
    tName: "Priya Sharma",
    qulification: "MBA HR Graduate",
    info: "Mangalayatan University Online's MBA program provided invaluable career growth. Rigorous curriculum covered modern business management comprehensively. Online format connected me with diverse professionals, enriching learning. Real-world scenarios made concepts highly relevant, boosting leadership confidence.",
  },
  {
    image: "Assets/testimonial_2.png",
    tName: "Mohit",
    qulification: "MBA in Finance",
    info: "I highly recommend Mangalayatan University Online's MBA program to anyone seeking a quality online business education. The program's curriculum is comprehensive and up-to-date, and the online delivery format is convenient and flexible. The faculty is composed of experienced professionals who provided valuable insights and practical applications of business concepts.",
  },
];

const studentTesti = document.getElementById("studentTesti");

const avatar_info_wrapper = document.createElement("div");

testimonialData.forEach((testiData) => {
  const testimonialItem = document.createElement("div");
  testimonialItem.className = "item";

  const avatarContainer = document.createElement("div");
  avatarContainer.className = "avatar_container";

  const imageTitle = document.createElement("div");
  imageTitle.className = "avatar_text";

  const image = document.createElement("img");

  if (testiData.image === "") {
    image.src = "Images/placeholder-avatar.jpeg";
  } else {
    image.src = testiData.image;
  }

  image.alt = "avatar";
  image.className = "testimonial-avatar";

  const pinfo = document.createElement("p");
  pinfo.innerText = testiData.info;

  const pName = document.createElement("p");
  pName.innerText = testiData.tName;

  const pqulification = document.createElement("p");
  pqulification.innerText = testiData.qulification;

  avatarContainer.appendChild(image);
  imageTitle.appendChild(pName);
  imageTitle.appendChild(pqulification);
  testimonialItem.appendChild(pinfo);

  testimonialItem.appendChild(avatarContainer);
  testimonialItem.appendChild(imageTitle);
  studentTesti.appendChild(testimonialItem);
});

$(".owl-carousel").owlCarousel({
  loop: true,
  items: 2,
  margin: 10,
  autoHeight: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
      loop: false,
    },
  },
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
//-------END----------

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    
    gsap.to(".left_box",{
     scrollTrigger:'.left_box',
      
     duration:2
    })
      

  });



  /*FadeIn On Scroll JS*/
// fade in grid items  ==================================

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".fadein")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).offset().top < pageBottom) {
      $(tag).addClass("visible")
      $(tag).addClass("animate__animated animate__backInDown")
    } else {
      $(tag).removeClass("visible")
      $(tag).removeClass("animate__animated animate__backInDown")
    }
  }
})


/*Tab */

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  var btnTarget = el.currentTarget;
  var country = btnTarget.dataset.country;

  tabContent.forEach(function(el) {
     el.classList.remove("active");
  });

  tabLinks.forEach(function(el) {
     el.classList.remove("active");
  });
  document.querySelector("#" + country).classList.add("active");
  
  btnTarget.classList.add("active");
}




/*Back-To-Top JS */

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/*-----END------*/
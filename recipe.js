// const nav = document.querySelector(".nav1");
// const drop = document.querySelector(".drop1");

// nav.addEventListener("mouseover", () => {
//   drop.style.display = "block";
// });

// nav.addEventListener("mouseout", () => {
//   setTimeout(() => {
//     drop.style.display = "none";
//   }, 500);
// });
document.getElementById("newsbtn").addEventListener("click", function () {
  var email = document.getElementById("newsletter").value;
  if (email === "") {
    // do nothing
    alert(
      "Please enter your email address to subscribe to our newsletter !! Thank you for your patience"
    );
  } else {
    alert(
      "Thank you for subscribing for our newsletter!, You will receive updates shortly!"
    );
  }
});
const newWindowFrames = () => {
  let url = "Recipe site.html";

  const winFeatures = `width= 950,
            height=450
            top=100
            left=500
            resizeable=no
            scrollbars=yes
            status=no
            menubar=no
            toolbar=no`;

  let mamudInc = window.open(url, "_blank", winFeatures);

  // mamudInc ? mamudInc.focus() : alert("New window blocked");
};
const mamudInc = document.querySelector(".cert > p > a");
mamudInc.addEventListener("click", newWindowFrames);

// const links = document.querySelectorAll(".card");

// links.forEach(function (link) {
//   link.addEventListener("click", function () {
//     window.location.href = "ingredients.html";
//   });
// });

const cards = document.querySelectorAll(".card, .bg1, .bg2");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");
    setTimeout(() => {
      window.location.href = "ingredients.html";
    }, 500);
  });
});

const ads = document.querySelector(".fa-circle-xmark");

ads.addEventListener("click", () => {
  document.querySelector(
    ".ad-container > img, .ad-container, .ad-container > i"
  ).style.display = "none";
});

// ads.addEventListener("mouseover", () => {
//   ads.style.transform = "scale(1.2)";
//   ads.style.color = "blue";
// });

// ads.addEventListener("mouseout", () => {
//   ads.style.transform = "scale(1)";
//   ads.style.color = "red";
// });
document.querySelector(".ad-container > img").addEventListener("click", () => {
  window.location.href = "https://aptech-nigeria.com/";
});
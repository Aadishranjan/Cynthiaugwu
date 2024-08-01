const scroll = new LocomotiveScroll({
   el: document.querySelector("#main"),
   smooth: true,
});

function mouseeffect(){
  var full = document.querySelector("#main")
  full.addEventListener("mousemove", function (dets) {
    document.querySelector("#minicircle").style.transform = `translate(${dets.x}px, ${dets.y}px)`
    document.querySelector("#minicircle").style.opacity = 1
  })
}

function firstPageAnim() {
  // Animate #nav
  var nav = document.querySelector("#nav");
  nav.classList.add("nav-animate");

  // After #nav animation ends, animate .boundingelem elements
  setTimeout(function() {
    var boundingElems = document.querySelectorAll(".boundingelem");
    boundingElems.forEach(function(elem, index) {
      setTimeout(function() {
        elem.classList.add("boundingelem-animate");
      }, index * 200); // 0.2 second stagger
    });
    setTimeout(function() {
      var mainFooter = document.querySelector("#mainfooter");
      mainFooter.classList.add("mainfooter-animate");
    }, boundingElems.length * 200);
  }, 1000); // delay after #nav animation (1s duration)
}

const imganimation = () => {
  var ielem1 = document.querySelectorAll(".elem");

  ielem1.forEach(function (val) {
    val.addEventListener("mouseenter", () => {
      var ielemimg = val.querySelectorAll(".elemimg");
      ielemimg.forEach(img => {
        img.style.opacity = 1;
      });
    });

    val.addEventListener("mouseleave", () => {
      var ielemimg = val.querySelectorAll(".elemimg");
      ielemimg.forEach(img => {
        img.style.opacity = 0;
        img.style.transform = 'rotate(0deg)';
      });
    });

    val.addEventListener("mousemove", (dets) => {
      var ielemimg = val.querySelectorAll(".elemimg");
      ielemimg.forEach(img => {
        img.style.left = dets.x + "px"
        const rect = val.getBoundingClientRect();
        const mouseX = dets.clientX - rect.left;
        const rotation = (mouseX / rect.width - 0.5) * 40;
        img.style.transform = `rotate(${rotation}deg)`;
      });
    });
  });
};

const time = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  if(hours < 12){
    var ampm = "AM"
  }
  else{
    var ampm = "PM"
  }
  document.querySelector(".timeforweb").innerHTML = `${hours}:${minutes} ${ampm} EST`
}

firstPageAnim()
mouseeffect()
imganimation()
time()

 

const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault(); // avoid the default scroll (vertical scroll)
    scrollContainer.style.scrollBehavior = "auto";
    scrollContainer.scrollLeft += evt.deltaY; // the reason why it is Y as user use vertical scroll most of the time
    // evt.deltaY increases when scrolling down thats why it is going left
    // make the transition faster to look good (immediately jump 100px)

});

backBtn.addEventListener("click", () => { // i want to go to the left so subtract
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

nextBtn.addEventListener("click", () => { 
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900; // i want to go to the right so add
});

// scroll down deltaY increases
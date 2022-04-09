// The data-* attribute is used to store custom data private to the page or application.
// The data-* attribute gives us the ability to embed custom data attributes on all HTML elements.


const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;

  function updateCounter() {
    let finalcounter = counter.getAttribute('data-target');
    let increment = Number(finalcounter / 100);
    let startingcount = Number(counter.innerHTML);

    if (startingcount < finalcounter) {
      counter.innerHTML = Math.round(startingcount + increment);
      setTimeout(updateCounter, 50);
    } else {
      counter.innerHTML = finalcounter;
    }
  }

  updateCounter();
});
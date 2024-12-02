var cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseenter", function () {

    //////for heart icon////////
    var heart=cards[i].querySelector(".fa-heart")    
    heart.addEventListener("click", function () {
      heart.classList.toggle("text-danger");
    });

    //////for heart icon Enter (hover)////////
      heart.addEventListener("mouseenter", function () {
        heart.classList.add("red-heart");
      });

    //////for heart icon Leave (hover)////////
      heart.addEventListener("mouseleave", function () {
        heart.classList.remove("red-heart");
      });

    //////for stars icon////////
    var ratingNumContainer = cards[i].querySelector(".ratingNumContainer");
    var stars = cards[i].querySelectorAll(".fa-star");    
    stars.forEach(function (star, index) {
      star.addEventListener("click", function () {
        for (let i = 0; i <= index; i++) {
          ratingNumContainer.innerHTML = ` <span> ${index + 1} /5</span>`;
          if (!stars[i].classList.contains("text-warning")) {
            stars[i].classList.add("text-warning");
          } else {
            for (let i = index; i < stars.length; i++) {
              if (i == 0) {
                stars[i].classList.add("text-warning");
              } else {
                stars[i].classList.remove("text-warning");
              }
            }
          }
        }
      });
    });

    //////for stars enter (hover)////////
    stars.forEach(function (star, index) {
      star.addEventListener("mouseenter", function () {
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add("fa-star-yallow");
        }
      });
    });

    //////for stars leave (hover)////////
    stars.forEach(function (star, index) {
      star.addEventListener("mouseleave", function () {
        for (let i = 0; i <= index; i++) {
          stars[i].classList.remove("fa-star-yallow");
        }
      });
    });
  });
}

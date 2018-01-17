(function () {
  
  var pageTitle = document.getElementById("page-title"),
      pageTitleText = pageTitle.innerHTML,
      playAgain = document.getElementById("play-again"),
      quiz = document.getElementById("quiz"),
      result = document.getElementById("result"),
      topping = null,
      weapon = null,
      color = null,
      submitButton = document.getElementById("form-submit");
  submitButton.addEventListener("click", processResults);        
  playAgain.addEventListener("click", resetQuiz);
  
  function processResults() {
    topping = document.querySelector('input[name="toppings"]:checked');
    weapon = document.querySelector('input[name="weapons"]:checked');
    color = document.querySelector('input[name="colors"]:checked');
    if(topping === null || weapon === null || color === null){
      alert("Please answer every question!");
    }
    else {
      var personality = getPersonality();
      quiz.style.display = "none";
      result.style.display = "block";
      playAgain.style.display = "block";
      if(personality === 0){
        pageTitle.innerHTML = "You are Leonardo!";
        result.style.backgroundImage = "url('img/leo.png')";
      }
      else if(personality === 1) {
        pageTitle.innerHTML = "You are Donatello!";
        result.style.backgroundImage = "url('img/don.png')";
      }
      else if(personality === 2) {
        pageTitle.innerHTML = "You are Raphael!";
        result.style.backgroundImage = "url('img/raph.png')";
      }
      else {
        pageTitle.innerHTML = "You are Michaelangelo!";
        result.style.backgroundImage = "url('img/mike.png')";
      }
    }
  }
  
  function getPersonality() {
    var leo = 0,
        don = 0,
        raph = 0,
        mike = 0;
    switch(topping.id) {
      case("pepperoni"):
        leo += 1;
        don += 2;
        raph += 3;
        mike += 4;
        break;
      case("mushroom"):
        leo += 4;
        don += 1;
        raph += 2; 
        mike += 3;
        break;
      case("green-peppers"):
        leo += 3;
        don += 4;
        raph += 1;
        mike += 2;
        break;
      case("pineapple"):
        leo += 2;
        don += 3;
        raph += 4;
        mike += 1;
        break;
    }
    switch(weapon.id) {
      case("katana"):
        leo += 4;
        don += 3;
        raph += 2;
        mike += 1;
        break;
      case("bo-staff"):
        leo += 1;
        don += 4;
        raph += 3;
        mike += 2;
        break;
      case("sai-daggers"):
        leo += 2;
        don += 1;
        raph += 4;
        mike += 3;
        break;
      case("nunchucks"):
        leo += 3;
        don += 2;
        raph += 1;
        mike += 4;
        break;
    }
    switch(color.id) {
      case("orange"):
        leo += 1;
        don += 2;
        raph += 3;
        mike += 4;
        break;
      case("red"):
        leo += 2;
        don += 3;
        raph += 4;
        mike += 1;
        break;
      case("purple"):
        leo += 3;
        don += 4;
        raph += 1;
        mike += 2;
        break;
      case("blue"):
        leo += 4;
        don += 1;
        raph += 2;
        mike += 3;
        break;
    }
    return getMax([leo, don, raph, mike]);    
  }
  
  function getMax(array) {
    var maxIndex = 0;
    for(var i = 1; i < array.length; i++) {
      if(array[i] > array[maxIndex]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  }
  
  function resetQuiz() {
    pageTitle.innerHTML = pageTitleText;
    quiz.style.display = "grid";
    result.style.display = "none";
    playAgain.style.display = "none";
    quiz.reset();
  }
  
})();

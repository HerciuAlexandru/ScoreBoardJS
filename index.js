//Guests elements//
const guestScoreEl = document.getElementById("guest-score");
const onePBtnGuest = document.getElementById("onePointBtnGuest");
const twoPBtnGuest = document.getElementById("twoPointsBtnGuest");
const threePBtnGuest = document.getElementById("threePointsBtnGuest");

//Home elements//
const homeScoreEl = document.getElementById("home-score");
const onePBtnHome = document.getElementById("onePointBtnHome");
const twoPBtnHome = document.getElementById("twoPointsBtnHome");
const threePBtnHome = document.getElementById("threePointsBtnHome");

const newGameBtn = document.getElementById("newGameBtn");

let homeScore = 0;
let guestScore = 0;

//Home functions //
onePBtnHome.addEventListener("click", function () {
  homeScore = homeScore + 1;
  homeScoreEl.textContent = homeScore;
});

twoPBtnHome.addEventListener("click", function () {
  homeScore = homeScore + 2;
  homeScoreEl.textContent = homeScore;
});

threePBtnHome.addEventListener("click", function () {
  homeScore = homeScore + 3;
  homeScoreEl.textContent = homeScore;
});

//Guest functions //
onePBtnGuest.addEventListener("click", function () {
  guestScore = guestScore + 1;
  guestScoreEl.textContent = guestScore;
});

twoPBtnGuest.addEventListener("click", function () {
  guestScore = guestScore + 2;
  guestScoreEl.textContent = guestScore;
});

threePBtnGuest.addEventListener("click", function () {
  guestScore = guestScore + 3;
  guestScoreEl.textContent = guestScore;
});

newGameBtn.addEventListener("click", function () {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
});

var sequence = [];
var names = ["red", "yellow", "green", "blue"];
var p = 0;
var level = 1;
var HighScore = 0;
var reqseq = [];
$("body").keypress(function () {
  if (p == 0) {
    $("h1").text("Level " + level);
    p = 1;
    findseq();
  }
});
$(".box").click(function () {
  var caller = $(this).attr("id");
  reqseq.push(names[caller]);
  $(".btn-" + names[caller])
    .fadeIn(50)
    .fadeOut(50)
    .fadeIn(50);
  checkans(reqseq.length);
});
function findseq() {
  reqseq = [];
  var x = Math.floor(Math.random() * 4);
  sequence.push(names[x]);
  $(".btn-" + names[x])
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}
function checkans(level) {
  if (sequence[level - 1] === reqseq[level - 1]) {
    if (sequence.length === reqseq.length) {
      $("h1").text("Level " + level);
      setTimeout(function () {
        findseq();
      }, 1000);
    }
  } else {
    if (HighScore < sequence.length) HighScore = sequence.length;
    console.log(level + " " + HighScore);
    if (p == 1) {
      $("h1").html(
        "Game over you reached <br>Score : " +
          sequence.length +
          "<br>HighScore: " +
          HighScore
      );
    }
    setTimeout(function () {
      $("h1").text("Level 1");
      startnew();
    }, 1000);
  }
}
function startnew() {
  sequence = [];
  reqseq = [];
  level = 1;
  p = 0;
  $("h1").text("Press any key to start");
}

let questionNum = 1;
let score = 0;

$("#next").click(nextQuestion);
$("#prev").click(prevQuestion);
$("#mark").click(markQuiz);
$("#2016").click(button2016);

function nextQuestion() {
  $("#question" + questionNum).hide();

  questionNum++;
  if (questionNum > 5) {
    questionNum = 1;
  }

  $("#question" + questionNum).show();
}

function prevQuestion() {
  $("#question" + questionNum).hide();

  questionNum--;
  if (questionNum < 1) {
    questionNum = 5;
  }

  $("#question" + questionNum).show();
}

function markQuiz() {
  let answer1 = $("input[name='option']:checked").val();
  let answer2 = $("#answer2").val();
  let answer3 = $("#answer3").val();
  let answer4 = $("#answer4").val();

  if (answer1 == "C") {
    score++;
  }

  if (answer2 == "kkOma") {
    score++;
  }

  if (answer3 == "3") {
    score++;
  }

  if (answer4 == "samsung galaxy" || answer4 == "Samsung Galaxy" || answer4 == "SSG" || answer4 == "ssg") {
    score++;
  }

  alert("Your score is " + score + " out of 5 or " + score / 5 * 100 + "%");
  score = 0;
  

}

function button2016() {
  
}

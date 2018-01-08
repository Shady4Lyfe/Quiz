let questionNum = 1;

$("#next").click(nextQuestion);
$("#prev").click(prevQuestion);
$("#mark").click(markQuiz);

function nextQuestion() {
  $("#question" + questionNum).hide();

  questionNum++;
  if (questionNum > 4) {
    questionNum = 1;
  }

  $("#question" + questionNum).show();
}

function prevQuestion() {
  $("#question" + questionNum).hide();

  questionNum--;
  if (questionNum < 1) {
    questionNum = 4;
  }

  $("#question" + questionNum).show();
}

function markQuiz() {
  let answer3 = $("#answer3").val();
  if (answer3 == 3) {
    
  }
}
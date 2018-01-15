let questionNum = 1;

$("#next").click(nextQuestion);
$("#prev").click(prevQuestion);
$("#mark").click(markQuiz);

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
  let answer5 = $("#answer4").val();

  if (answer1 == "C") {
    alert("true")
  } else {
    alert("false")
  }

  if (answer2 == "kkOma") {
    alert("yes")
  } else {
    alert("no")
  }

  if (answer3 == "3") {
    alert("correct")
  } else {
    alert("nein")
  }

  if (answer4 == "samsung galaxy" || answer4 == "Samsung Galaxy" || answer4 == "SSG" || answer4 == "ssg") {
    alert(1)
  } else {
    alert(2)
  }
  
  if (answer5 == "5") {
    alert("correct")
  } else {
    alert("nein")
  }
  
}

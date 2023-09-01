let questionList = [];

const fetchQuestions = async () => {
  try {
    const response = await axios({
      url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const renderQuestions = () => {
  let htmlContents = "";
  // for (let item of questionList) {
  //   htmlContents += item.render(item.id);
  // }
  for (let i in questionList) {
    htmlContents += questionList[i].render(+i + 1);
  }

  document.getElementById("questionsContainer").innerHTML = htmlContents;
};

const mapData = (data = []) => {
  questionList = data.map((item) => {
    const { questionType, id, content, answers } = item;

    if (questionType === 1) {
      return new MultipleChoice(questionType, id, content, answers);
    } else if (questionType === 2) {
      return new FillInBlank(questionType, id, content, answers);
    } else {
      console.log("Wrong input!!!");
    }
  });
};

const submit = () => {
  let result = 0;

  for (let item of questionList) {
    if (item.checkExact()) {
      result ++;
    }
  }

  
   alert("Result: " + result + "/" + questionList.length +
    " You got " + (result/questionList.length*100) + "%")
}

fetchQuestions()
  .then((data) => {
    mapData(data);
    renderQuestions();
  })
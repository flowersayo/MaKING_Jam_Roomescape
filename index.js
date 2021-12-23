var state = 0;
var register_question;
var register_answer;

document.getElementById("button").addEventListener("click", click);

function click() {
  console.log(state);
  if (state == 1) {
    follow();
  } else if (state == 0) {
    talk();
  } else if (state == 2) {
    dontknow();
  } else if (state == 3) {
    learn();
  }
  else if(state==4){
    controled();
  }
}

function talk() {
  var answered = false;
  var value = document.getElementById("input").value;

  console.log(value);

  for (let i = 0; i < json.length; i++) {
    if (value == json[i].question) {
      //만약 입력값이 json에 있는 question 데이터와 일치하면
      document.getElementsByClassName("say")[0].innerHTML = json[i].answer; //챗봇의 대답을 json의 answer로 출력
      answered = true;
    }
  }

  if (value == "바보") {
    alert("뭐야 아닌데요");
  } else if (value == "녹스") {
    var background = document.getElementsByTagName("body");
    background[0].style.backgroundColor = "black";
  } else if (value == "루모스") {
    var background = document.getElementsByTagName("body");
    background[0].style.backgroundColor = "white";
  } else if (value == "오블리비아테") {
    state = 1;
  } else if (value =="아비스"){
    var image= document.getElementsByClassName("image");
    image[0].src="image/dobi_bird.png";

  }else if (value =="임페리오"){
    var image= document.getElementsByClassName("image");
    image[0].src="image/dobi_조종.png";
    state=4;

  }
  else if (value =="세르펜소르티아"){
    var image= document.getElementsByClassName("image");
    image[0].src="image/snake.png";

  }
  else if (value =="소노루스"){
    var image= document.getElementsByClassName("image");
    image[0].src="image/dobi_sad.png";

  }
  else if (value =="리듀시오"){
   
    var image= document.getElementsByClassName("image");
    image[0].src="image/dobi_일반.png";
    image[0].width=100;
    image[0].height=100;
  }
  else if (value =="잉고르지오"){
    var image= document.getElementsByClassName("image");
    image[0].src="image/dobi_일반.png";
    image[0].width=500;
    image[0].height=500;
  }
  else if (value.includes("문")){
    var image= document.getElementsByClassName("image");
    document.getElementsByClassName("say")[0].innerHTML =
        "문을 여는 주문은 절대 안알려줄거야 크하하핳 ";
  }
  else {
    if (!answered) {
      register_question = value;
      document.getElementsByClassName("say")[0].innerHTML =
        "도통 알아들을 수가 없군";
      setTimeout(
        () =>
          (document.getElementsByClassName("say")[0].innerHTML =
            "' " +
            register_question +
            " '" +
            " 라는 말을 가르쳐줄래요? (네/아니오)"),
        2000
      );
      state = 2;
    }
  }
}

//state1
function follow() {
  var value = document.getElementById("input").value;

  if (value == "메디퓨어스") {
    document.getElementsByClassName("say")[0].innerHTML = ".......!!!?!!?!!?! 나한테 무슨짓을 했던거야 !!!!!!(상태해제)";
    var image= document.getElementsByClassName("image");
    image[0].src="image/dobi_일반.png";
    state = 0;
  } else {
    document.getElementsByClassName("say")[0].innerHTML = value + "~";
  }
}

//state2
function dontknow() {

  var value = document.getElementById("input").value;

  if (value == "네") {
    document.getElementsByClassName("say")[0].innerHTML =
      "' " + register_question + " '" + " 라는 말에 대한 대답을 가르쳐주세요";
    state = 3;
  } else if (value == "아니오") {
    document.getElementsByClassName("say")[0].innerHTML = "누가 누굴 가르치려고해";
    state = 0;
  } else {
    alert("네 / 아니오 로 대답해주세요!");
  }
}

//state3
function learn() {
  register_answer = document.getElementById("input").value;
  json.push({ question: `${register_question}`, answer: `${register_answer}` }); //json이라는 데이터에 값을 추가하는 push함수
  document.getElementsByClassName("say")[0].innerHTML =
    "가르쳐주신 말을 배웠습니다!";
  state = 0;
}

//state4
function controled() { //세뇌상태.
  var value = document.getElementById("input").value;

  if (value == "메디퓨어스") {
    document.getElementsByClassName("say")[0].innerHTML = ".......!!!?!!?!!?! 나한테 무슨짓을 한거야 !!!!!!(상태해제)";
     var image= document.getElementsByClassName("image");
    image[0].src="image/dobi_일반.png";
    state = 0;
  }else if (value.includes("문")){
    document.getElementsByClassName("say")[0].innerHTML = "잠겨있는 문을 여는 주문은 '알로호모라' 입니다. (어둠의 마법에 걸린상태)";
    
  } else {
    document.getElementsByClassName("say")[0].innerHTML = "...무엇이든지 알려드리겠습니다.(어둠의 마법에 걸린상태)";
  }
}

var json = [
  {
    question: "문을 여는 주문",
    answer: "절.대.안.알.려.줄.거.야 크하하핳 ",
  },
  {
    question: "도비는 자유에요",
    answer: "Dobby is free!!!!!!!!!!!",
  },
  {
    question: "루모스",
    answer: "밝아져라!",
  },
  {
    question: "녹스",
    answer: "어두워져라!",
  },
  {
    question: "아비스",
    answer: "짹짹짹짹짹",
  },
  {
    question: "오블리비아테",
    answer: "(당신에게 세뇌되었습니다.)",
  },
  {
    question: "임페리오",
    answer: "(당신에게 조종당합니다.)",
  },
  {
    question: "리듀시오",
    answer: "(야!!!!!!!!!!!!!!!!!!!)",
  },
  {
    question: "잉고르지오",
    answer: "(야!!!!!!!!!!!!!!!!!!!)",
  },
  {
    question: "세르펜소르티아",
    answer: "(!#@$!@#%#%#$@%#@@#!$)",
  },
  {
    question: "소노루스",
    answer: "..................아무랑도 이야기하고 싶지않아 ",
  },
  
 
];

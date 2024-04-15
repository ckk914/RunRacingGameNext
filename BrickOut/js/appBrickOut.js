//전역 변수 영역
const $mainContainer = document.querySelector(`.mainContainer`);
const $btnBox = document.querySelector(`.btnBox`);
const $TimerBox = document.querySelector(`.TimerBox`);
const $Timer = document.querySelector(`.Timer`);
const $NumberBox = document.querySelector(`.NumberBox`);
const $ulList = document.querySelector(`.ulList`);

const $StartContainer = document.querySelector(`.StartContainer`);
const $Description = document.querySelector(`.Description`);
const $GameStart = document.querySelector(`.GameStart`);
const $Score = document.querySelector(`.Score`);

const $endContainer = document.querySelector(`.endContainer`);
const $endMessage = document.querySelector(`.endMessage`);
const $applyBtn = document.querySelector(`.applyBtn`);
let clearFlag = false;
let scoreTotal = 0;
const NumList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];
//지울 순서 번호
let deleteNumber = 1;
let addNumber = 26;

 //중복 클릭 방지 
 let lastClickTime = 0;

//함수 정의 영역 ======================================//
// function TimerStart() {
//   let totalTime = 30000; // 30초를 밀리초로 변환

//   const timerId1 = setInterval(() => {
//     let seconds = Math.floor(totalTime / 1000);
//     let milliseconds = Math.floor((totalTime % 1000) / 10); // 밀리초를 0.01초 단위로 표시
//     // 화면에 시간 표시 (sec:msec 형식)
//     // console.log(`${seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`);
//     $Timer.textContent = `${seconds}:${
//       milliseconds < 10 ? "0" + milliseconds : milliseconds
//     }`;

//     totalTime -= 10; // 10밀리초 감소
//     if (totalTime < 0) {
//       clearInterval(timerId1); // 타이머 종료
//       $Timer.textContent = `GAME OVER!`;
//     }
//   }, 10);
// }

// 추가 함수로 할 것
// 배열 랜덤 생성
function randomCard() {
  console.log(`카드생성`);
  for (let Num of NumList) {
    const $CreateLi = document.createElement(`li`);
    $CreateLi.textContent = Num;
    $ulList.appendChild($CreateLi);
  }
}

//클릭하여 삭제 하기!
$ulList.addEventListener(`click`, (e) => {
  //클릭한 텍스트 찾기
  // console.log(`삭제 시퀀스`);

  const clickText = e.target.textContent;

  if (deleteNumber !== +clickText) {
    const liList = $ulList.querySelectorAll(`li`);
    for (let li of liList) {
      if (+clickText === +li.textContent) {
        $Xli = li;
      }
    }
    //틀렸으니 빨강
    $Xli.style.background = `#d1180b`;
    setTimeout(function () {
      $Xli.style.background = `Gold`;
    }, 500);
    return;
  }
  //
  scoreTotal += 10;
  $Score.textContent = scoreTotal;
  const liList = $ulList.querySelectorAll(`li`);

  for (let li of liList) {
    if (+clickText === +li.textContent) {
      console.log(li);
      if (deleteNumber <= 5) {
        li.classList.add(`selected`);

        setTimeout(function () {
          li.parentElement.removeChild(li);
        }, 150);
      } else {
        li.classList.add(`selected`);
        setTimeout(function () {
          li.classList.add(`disable`);
        }, 500);
      }
      // 클리어!
      if (deleteNumber == 30) {
        clearFlag = true;
				// console.log(clearFlag+"+");
        $Timer.textContent = `GAME Clear!`;
        $endContainer.classList.remove(`Hidden`);
        $endContainer.style.background = `gold`;
        $endMessage.style.background = `gold`;
        $endMessage.textContent = `GAME Clear!😁`;
        $endMessage.style.left = `24%`;
        $applyBtn.textContent = `응모하기`;
      }
      deleteNumber++;
      if (addNumber <= 30) {
        const $CreateLi = document.createElement(`li`);
        $CreateLi.textContent = addNumber;
        setTimeout(function () {
          $ulList.appendChild($CreateLi);
        }, 150);

        addNumber++;
      }
    }
  }
});

// 1초 있다가 실행
// function StartContainerOut(){
// 	setTimeout($StartContainer.classList.add(`disable`),10000);
// }

// 게임 시작
$GameStart.addEventListener(`click`, () => {
	
	const currentTime = new Date().getTime();
	const timeDiff = currentTime - lastClickTime;

	// 일정 시간(예: 500ms) 이내에 다시 클릭한 경우 이벤트를 무시
	if (timeDiff < 500) {
			e.preventDefault();
			return;
	}

	lastClickTime = currentTime;
  //카드 섞기
  const shuffledArray = NumList.sort(() => Math.random() - 0.5);
  // 카드 랜덤 생성
  randomCard();

  $Description.style.animation = `fadeInRight 1s`;
  $GameStart.style.animation = `fadeInRight 1s`;
  setTimeout(function () {
    $GameStart.classList.add(`Hidden`);
    $StartContainer.classList.add(`Hidden`);
  }, 1000);
  //  StartContainerOut();
  //  , 5000);
  setTimeout(function () {
    let totalTime = 40000; // 30초를 밀리초로 변환

    const timerId2 = setInterval(() => {
      let seconds = Math.floor(totalTime / 1000);
      let milliseconds = Math.floor((totalTime % 1000) / 10); // 밀리초를 0.01초 단위로 표시
      // 화면에 시간 표시 (sec:msec 형식)
      // console.log(`${seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`);
      $Timer.textContent = `${seconds}:${
        milliseconds < 10 ? "0" + milliseconds : milliseconds
      }`;

      totalTime -= 10; // 10밀리초 감소

      if (clearFlag) {
        clearInterval(timerId2);        
      }
      if (totalTime < 0) {
        if (clearFlag) return;
        clearInterval(timerId2); // 타이머 종료
        if (!clearFlag) {
					console.log(`실행됨.`);
					console.log(clearFlag);
					console.log(typeof clearFlag);
          $Timer.textContent = `GAME OVER!`;
          $endContainer.classList.remove(`Hidden`);
          $endContainer.style.background = `#222`;
          $endMessage.style.background = `#222`;
          $endMessage.textContent = `GAME OVER!😥`;
          $endMessage.style.left = `24%`;
          $applyBtn.textContent = `다시하기`;
          // $applyBtn.classList.add(`Hidden`);
        }
      }
    }, 10);
  }, 2000);
});

// 응모하기 / 다시하기 버튼 클릭
$applyBtn.addEventListener(`click`,()=>{
	// if($applyBtn.textContent===`응모하기`) window.open('../Apply/indexApply.html', '_blank'); //새창에 열기
	if($applyBtn.textContent===`응모하기`)location.href='../Apply/indexApply.html'; //현재창에 열기
  else location.href='./indexBrickOut.html'; //현재창에 열기
  // else window.open('./indexBrickOut.html', '_blank');  //새창에 열기
})
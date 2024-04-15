
var rolLength = 6;
var setNum;
var hiddenInput = document.createElement("input");
hiddenInput.className = "hidden-input";
const $StartContainer = document.querySelector(`.StartContainer`); //시작 컨테이너
const $GameStart = document.querySelector(`.GameStart`); //시작버튼(룰렛)
const $topTitle = document.querySelector(`.topTitle`); //시작버튼
const $endContainer = document.querySelector(`.endContainer`);
const $endMessage = document.querySelector(`.endMessage`);
const $endMessage2 = document.querySelector(`.endMessage2`);
const $applyBtn = document.querySelector(`.applyBtn`); //게임시작

let StartFlag = false;
let StartFlag2 = false;

const rRandom = () => {
  var min = Math.ceil(0);
  var max = Math.floor(rolLength - 1);
  return Math.floor(Math.random() * (max - min)) + min;
};

const rRotate = () => {
  var panel = document.querySelector(".rouletter-wacu");
  var btn = document.querySelector(".rouletter-btn");
  var deg = [];
  for (var i = 1, len = rolLength; i <= len; i++) {
    deg.push((360 / len) * i);
  }

  var num = 0;
  document.body.append(hiddenInput);
  setNum = hiddenInput.value = rRandom();

  var ani = setInterval(() => {
    num++;
    panel.style.transform = "rotate(" + 360 * num + "deg)";
    btn.disabled = true; //button,input
    btn.style.pointerEvents = "none"; //a 태그

    if (num === 50) {
      clearInterval(ani);
      panel.style.transform = "rotate(" + deg[setNum] + "deg)";
    }
  }, 50);
};

//시작 버튼 클릭!(룰렛)
$GameStart.addEventListener(`click`,()=>{
	$GameStart.style.animation = `fadeInRight 1s`;
  $topTitle.style.animation = `fadeInRight 1s`;
  
    // $GameStart.classList.add(`Hidden`);
		setTimeout(function () {
    $StartContainer.classList.add(`Hidden`);
		StartFlag =true;
	}, 1000);

});

// 게임 시작(게임 연결 부)
$applyBtn.addEventListener(`click`,()=>{
	console.log(setNum);
	console.log(typeof setNum);

		switch (setNum) {
			case 1:
location.href='././Whackamole/whack-a-mole.html'; //현재창에 열기
				break;
			case 3:
location.href='././ImageSwipeGame/index.html'; //현재창에 열기
			break;
			case 5:
location.href='././BrickOut/indexBrickOut.html'; //현재창에 열기
			break;
			default:
				
location.href='././game2048/index2048.html'; //현재창에 열기
				break;
		}

});

const rLayerPopup = (num) => {
	switch (num) {
    case 1:
			
$endContainer.classList.remove(`Hidden`);
          $endContainer.style.background = `#222`;
          $endMessage.style.background = `#222`;
          $endMessage2.textContent = `두더지 게임을 진행하세요.`;

          $applyBtn.textContent = `게임 시작`;
					StartFlag2 =true;

// location.href='../Whackamole/whack-a-mole.html'; //현재창에 열기
      break;
    case 3:
			$endContainer.classList.remove(`Hidden`);
          $endContainer.style.background = `#222`;
          $endMessage.style.background = `#222`;
          $endMessage2.textContent = `이미지 맞추기 게임을 진행하세요.`;

          $applyBtn.textContent = `게임 시작`;
					StartFlag2 =true;
      // alert("응모권 당첨!!🎉 이미지 맞추기 게임을 진행하세요.");
			// location.href='../ImageSwipeGame/index.html'; //현재창에 열기

			break;
    case 5:
			$endContainer.classList.remove(`Hidden`);
			$endContainer.style.background = `#222`;
			$endMessage.style.background = `#222`;
			$endMessage2.textContent = `숫자 클릭 게임을 진행하세요.`;

			$applyBtn.textContent = `게임 시작`;
			StartFlag2 =true;
			// location.href='../BrickOut/indexBrickOut.html'; //현재창에 열기
      break;
    default:
			$endContainer.classList.remove(`Hidden`);
			$endContainer.style.background = `#222`;
			$endMessage.style.background = `#222`;
			$endMessage2.textContent = `꽝게임 :2048을 진행하세요.`;
			
			$applyBtn.textContent = `게임 시작`;
			StartFlag2 =true;

      // alert("꽝! 다음기회에...!\n아쉬움에 2048게임을 연결해드립니다.");
			// location.href='../game2048/index2048.html'; //현재창에 열기
  }
};

const rReset = (ele) => {
  setTimeout(() => {
    ele.disabled = false;
    ele.style.pointerEvents = "auto";
    rLayerPopup(setNum);
    hiddenInput.remove();
  }, 5500);
};

document.addEventListener("click", function (e) {
  if(StartFlag===false)return;
	if(StartFlag2===true)return;
	var target = e.target;
  if (target.tagName === "BUTTON") {
    rRotate();
    rReset(target);
  }
});

document.getElementById("app").innerHTML = `
<div class="rouletter">
    <div class="rouletter-bg">
        <div class="rouletter-wacu"></div>
    </div>
    <div class="rouletter-arrow"></div>
    <button class="rouletter-btn">start</button>
</div>
`;

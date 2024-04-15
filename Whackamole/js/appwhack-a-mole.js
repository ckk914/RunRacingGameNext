// ================ 전역변수 정의 영역 ============//


// ================ 함수 정의 영역 ============//

// 1초마다 header가 자동으로 색이 변경되게하는 함수
let time = 0; // 시간을 나타내는 변수

function bling() {
  if (time === 0) {
    document.querySelector('.title').style.color = '#d6806e';
    time++;
  } else if (time === 1) {
    document.querySelector('.title').style.color = '#fbb666';
    time++;
  } else if (time === 2) {
    document.querySelector('.title').style.color = '#f9f871';
    time++;
  } else { 
    document.querySelector('.title').style.color = '#f2ecff';
    time = 0; // 무한 반복
  }
}

// 시작 버튼을 누르면 시작 버튼은 어둡게 변경되고
// 1초 뒤에 게임이 시작되는 함수
let $startBtn = document.querySelector('.start-btn');

let getMolePoint = 0;
let moleCatchTurn = 0;
function startMole() {
  hideModal();
  $startBtn.removeAttribute('click', startMole);
  $startBtn.style.color = '#3d3f43';
  getMolePoint = 0; // 시작시 점수 초기화
  moleCatchTurn = 0; // 시작시 시도 횟수 초기화
  setTimeout(showingMole, 1000); // 1초 마다 showingMole함수 실행
}

// 랜덤한 hole number를 생성하는 함수
let $holeNumber; // hole 번호
let preNum; // 이전 수
let randomNum; // 랜덤 수

function randomHole() {
  randomNum = Math.floor(Math.random() * 9) + 1; // 1 ~ 9
  if (preNum !== randomNum) { 
    preNum = randomNum;
    return randomNum;
  }
  // 이전에 있던 holeNum과 겹치면 다시 실행
  return randomHole();
}

// 랜덤으로 생성된 hole에서 두더지가 나오는 함수
function moleActive(holeNum) {
  holeNum.classList.add('active');
}

// 랜덤으로 생성된 hole에서 두더지가 사라지는 함수
function moleHide(holeNum) {
  holeNum.classList.remove('active');
}



// 두더지가 랜덤한 장소에서 등장하는 함수 (사용자 시도횟수 10번)
// 1. 시도횟수가 10회 미만이면
// 1-1. 두더지가 나오게될 hole 결정
// 1-2. 그 hole에서 두더지가 올라옴
// 1-3. 잡을 수 있는 시간은 총 3초,
//      두더지를 잡으면 1초뒤에 새로운 두더지가 올라옴
// 1-4. count++

// 2. 시도횟수가 10회 이상이 되면
// 2-1. ending-box를 실행
// 2-2. START -> AGAIN
let moleCatch = 0;

function showingMole () {
  if(moleCatchTurn < 10) {
    $holeNumber = document.getElementById(`${randomHole()}`);
    moleActive($holeNumber);
    $holeNumber.addEventListener('click', catchMole); // 클릭시 두더지 잡음
    moleCatch = setTimeout(seeMole, 3000); // 3초의 시간을 줌
    moleCatchTurn++;
  } else {
    modalEvent(); // 엔딩화면
    $startBtn.addEventListener('click', startMole);
    $startBtn.textContent = 'AGAIN';
    $startBtn.style.color = '#f2ecff';
  }
}


// 두더지를 catch 후 새로운 구멍에서 두더지가 올라오는 함수
let $moleCount = document.querySelector('.count');
function seeMole() {
  // 두더지를 잡았다면 그 구멍에는 더 이상 클릭 이벤트가 없어야함
  $holeNumber.removeEventListener('click', catchMole);
  moleHide($holeNumber); // 잡았다면 두더지를 숨김
  clearTimeout(moleCatch); // 3초 제한시간 삭제
  setTimeout(showingMole, 1000); // 1초뒤에 두더지 나옴
}

// 두더지를 잡으면 잡은 횟수가 증가하는 함수
function catchMole() {
  seeMole();
  clearTimeout(moleCatch);
  getMolePoint++; // 두더지 잡은 횟수 증가
  $moleCount.innerHTML = getMolePoint; // 횟수 업데이트
}


// 게임 엔딩 & 다시 하기 버튼 실행 함수
// 70점 이상 획득시 승리, 미만일시 패배
let $ending = document.querySelector('.ending');
let $endingBox = document.querySelector('.ending-box');
let $lottoBox = document.querySelector('.lotto-box');
let $endingBtn = document.querySelector('.ending-bg');
let $finalEnding = document.querySelector('.finalEnding');

// 모달박스를 나오게하면서 점수와 엔딩창이 뜨게하는 함수
function modalEvent() {
  let point = (getMolePoint / 10) * 100; // 1 두더지 = 10점
  if (point <= 70){
    $endingBox.innerHTML = "<span>GAME OVER </span></br>YOUR SCORE IS&nbsp;&nbsp;<span class='last'>" + point + '</span>!';
    $lottoBox.innerHTML = "<span>Apply for</br> an event!</span>";
  } else {
    $endingBox.innerHTML = "<span>YOU WIN</span></br>YOUR SCORE IS&nbsp;&nbsp;<span class='last'>" + point + '</span>!';
    $lottoBox.innerHTML = "<span>Apply for</br> an event!</span>";
  }
  $ending.style.display = 'block';
  $endingBtn.style.display = 'block';
  // $ending.classList.add($finalEnding); // 모달 박스가 나타나게
  // $endingBtn.classList.add($finalEnding);
}

// 모달을 숨기는 함수
function hideModal() {
  $ending.style.display = 'none';
  $endingBtn.style.display = 'none';
  // $ending.classList.remove($finalEnding); // 모달 박스가 사라지게
  // $endingBtn.classList.remove($finalEnding);
}

// 응모하기 / 다시하기 버튼 클릭
$lottoBox.addEventListener(`click`,()=>{
	if($lottoBox.textContent==='Apply for an event!')location.href='../Apply/indexApply.html'; 
  else location.href='./whack-a-mole.html'; 
})

// ================ 함수 실행 영역 ============//
// 1초마다 bling함수 실행
setInterval(bling, 1000); 

// 시작버튼 누를 시 게임시작
$startBtn.addEventListener('click', startMole);

// 엔딩버튼 클릭시 모달 사라짐
$endingBtn.addEventListener('click', hideModal);
const thumbnailsImages = [
  'css/images/pr.jpg',
  'css/images/rp.jpg',
  'css/images/ed.jpg',
  'css/images/pt.jpg',
]
const headImages = [
  'css/images/pr1.jpg',
  'css/images/rp1.jpg',
  'css/images/ed1.jpg',
  'css/images/pt1.jpg'
];
const faceImages = [
  'css/images/pr2.jpg',
  'css/images/rp2.jpg',
  'css/images/ed2.jpg',
  'css/images/pt2.jpg'
];
const bodyImages = [
  'css/images/pr3.jpg',
  'css/images/rp3.jpg',
  'css/images/ed3.jpg',
  'css/images/pt3.jpg'
];
const footImages = [
  'css/images/pr4.jpg',
  'css/images/rp4.jpg',
  'css/images/ed4.jpg',
  'css/images/pt4.jpg'
];
const usedThumbnails = []; // 사용된 썸네일 이미지를 추적하기 위한 배열

const $modal = document.querySelector('.intro');
const $overlay = document.querySelector('.overlay');
const $timeout = document.querySelector('.timeout');
const $winner = document.querySelector('.winner');
const $correct = document.querySelector('.correct');

// 이전, 다음 버튼 클릭 이벤트
const [$prev1, $img1, $next1] = [...document.getElementById('slide1').children];
const [$prev2, $img2, $next2] = [...document.getElementById('slide2').children];
const [$prev3, $img3, $next3] = [...document.getElementById('slide3').children];
const [$prev4, $img4, $next4] = [...document.getElementById('slide4').children];

// 각 슬라이드에 랜덤 이미지 출력
displayRandomImage(headImages, $img1);
displayRandomImage(faceImages, $img2);
displayRandomImage(bodyImages, $img3);
displayRandomImage(footImages, $img4);
displayRandomThumbnails(thumbnailsImages);


let correctAnswers = 0; // 정답 카운트 변수 추가
let timer; // 타이머 변수 선언

function imgDataIdSet() {
  const headImgId = document.getElementById("img1");
  const faceImgId = document.getElementById("img2");
  const bodyImgId = document.getElementById("img3");
  const footImgId = document.getElementById("img4");
  const thumbnailsImgId = document.getElementById("thumbnails1");

  const headsrc = headImgId.getAttribute('src').substring(11, 13);
  const facesrc = faceImgId.getAttribute('src').substring(11, 13);
  const bodysrc = bodyImgId.getAttribute('src').substring(11, 13);
  const footsrc = footImgId.getAttribute('src').substring(11, 13);
  const thumbnailssrc = thumbnailsImgId.getAttribute('src').substring(11, 13);

  // 이미지 data-id 부여
  if (headsrc === "pr") {
    headImgId.setAttribute('data-id', "pr1");
  } else if (headsrc === "rp") {
    headImgId.setAttribute('data-id', "rp1");
  } else if (headsrc === "ed") {
    headImgId.setAttribute('data-id', "ed1");
  } else {
    headImgId.setAttribute('data-id', "pt1");
  }

  if (facesrc === "pr") {
    faceImgId.setAttribute('data-id', "pr2");
  } else if (facesrc === "rp") {
    faceImgId.setAttribute('data-id', "rp2");
  } else if (facesrc === "ed") {
    faceImgId.setAttribute('data-id', "ed2");
  } else {
    faceImgId.setAttribute('data-id', "pt2");
  }

  if (bodysrc === "pr") {
    bodyImgId.setAttribute('data-id', "pr3");
  } else if (bodysrc === "rp") {
    bodyImgId.setAttribute('data-id', "rp3");
  } else if (bodysrc === "ed") {
    bodyImgId.setAttribute('data-id', "ed3");
  } else {
    bodyImgId.setAttribute('data-id', "pt3");
  }

  if (footsrc === "pr") {
    footImgId.setAttribute('data-id', "pr4");
  } else if (footsrc === "rp") {
    footImgId.setAttribute('data-id', "rp4");
  } else if (footsrc === "ed") {
    footImgId.setAttribute('data-id', "ed4");
  } else {
    footImgId.setAttribute('data-id', "pt4");
  }

  const headImgDataId = headImgId.getAttribute('data-id').substring(0, 2);
  const faceImgDataId = faceImgId.getAttribute('data-id').substring(0, 2);
  const bodyImgDataId = bodyImgId.getAttribute('data-id').substring(0, 2);
  const footImgDataId = footImgId.getAttribute('data-id').substring(0, 2);

  if (headImgDataId === faceImgDataId && headImgDataId === bodyImgDataId && headImgDataId === footImgDataId) {
    if (thumbnailssrc === headImgDataId) {
      // 정답 요소를 표시
      $correct.style.display = 'block';
  
      // 애니메이션 종료를 기다린 후에 정답 요소를 화면에서 숨김
      $correct.addEventListener('animationend', function() {
        $correct.style.display = 'none';
      }, {once: true});
  
      correctAnswers++; // 정답일 경우 카운트 증가
      const turns = document.querySelector('.turns');
      turns.textContent = correctAnswers;
  
      if (correctAnswers === 3) { // 정답을 3번 맞췄는지 확인
        $overlay.style.display = 'block';
        $winner.style.display = 'block';
        clearInterval(timer); // 타이머 종료
        // 게임 종료 시 추가적인 작업을 수행할 수 있습니다.
      } else {
        // 정답을 3번 맞추기 전까지 새로운 문제를 제공합니다.
        displayRandomThumbnails(thumbnailsImages);
      }
    }
  }
  
}

// 이미지 배열에서 랜덤으로 인덱스를 선택하는 함수
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

$next1.addEventListener('click', () => {
  currentIndex = getRandomIndex(headImages);
  $img1.setAttribute('src', headImages[currentIndex]);
  imgDataIdSet();
});

$prev1.addEventListener('click', () => {
  currentIndex = getRandomIndex(headImages);
  $img1.setAttribute('src', headImages[currentIndex]);
  imgDataIdSet();
});

$next2.addEventListener('click', () => {
  currentIndex = getRandomIndex(faceImages);
  $img2.setAttribute('src', faceImages[currentIndex]);
  imgDataIdSet();
});

$prev2.addEventListener('click', () => {
  currentIndex = getRandomIndex(faceImages);
  $img2.setAttribute('src', faceImages[currentIndex]);
  imgDataIdSet();
});

$next3.addEventListener('click', () => {
  currentIndex = getRandomIndex(bodyImages);
  $img3.setAttribute('src', bodyImages[currentIndex]);
  imgDataIdSet();
});

$prev3.addEventListener('click', () => {
  currentIndex = getRandomIndex(bodyImages);
  $img3.setAttribute('src', bodyImages[currentIndex]);
  imgDataIdSet();
});

$next4.addEventListener('click', () => {
  currentIndex = getRandomIndex(footImages);
  $img4.setAttribute('src', footImages[currentIndex]);
  imgDataIdSet();
});

$prev4.addEventListener('click', () => {
  currentIndex = getRandomIndex(footImages);
  $img4.setAttribute('src', footImages[currentIndex]);
  imgDataIdSet();
});

// 이미지 랜덤으로 출력하는 함수
function displayRandomImage(imageArray, $imgElement) {
  // 이미지 배열의 길이를 기반으로 랜덤한 인덱스를 생성합니다.
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  // 선택된 랜덤 이미지를 이미지 요소의 src 속성에 설정하여 화면에 표시합니다.
  $imgElement.setAttribute('src', imageArray[randomIndex]);
}


// 썸네일 랜덤 이미지
function displayRandomThumbnails(imageArray) {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * imageArray.length);
  } while (usedThumbnails.includes(imageArray[randomIndex])); // 이미 사용된 썸네일 이미지인지 확인

  usedThumbnails.push(imageArray[randomIndex]); // 사용된 썸네일 이미지를 배열에 추가

  // 선택된 랜덤 이미지를 이미지 요소의 src 속성에 설정하여 화면에 표시합니다.
  document.getElementById('thumbnails1').setAttribute('src', imageArray[randomIndex]);
}



// 시작하기 클릭 이벤트
const startButton = document.querySelector('.start');

const startButtonClickHandler = () => {
  $modal.style.display = 'none';
  $overlay.style.display = 'none';
  $correct.style.display = 'none';

  // 제한시간
  setTimeout(function () {
    let totalTime = 30000; // 30초를 밀리초로 변환
    $timer = document.querySelector(`.timer`);
    timer = setInterval(() => {
      let seconds = Math.floor(totalTime / 1000);

      $timer.textContent = `남은시간: ${seconds}초`;

      totalTime -= 10; // 10밀리초 감소
      if (totalTime < 0) {
        clearInterval(timer); // 타이머 종료
        $overlay.style.display = 'block';
        $timeout.style.display = 'block';
      }
    }, 10);
  });
};

startButton.addEventListener('click', startButtonClickHandler);


// 클릭 이벤트 핸들러 함수 정의
const clickEventHandler = (event, destination) => {
  $modal.style.display = 'none';
  $overlay.style.display = 'none';
  $correct.style.display = 'none';
  destination.style.display = 'block';
  location.href = event;
};

// 응모하기 버튼 클릭 이벤트
const applyButton = document.querySelector('.apply');
applyButton.addEventListener('click', () => clickEventHandler('../Apply/indexApply.html', $winner));

// 다시하기 버튼 클릭 이벤트
const retryButton = document.querySelector('.retry');
retryButton.addEventListener('click', () => clickEventHandler('./indexImageSwipeGame.html', $timeout));

# 팀 명 : 6학년 2반 컴퓨터실
## 프로젝트명 : Lucky Spin Odyssey
<div>

  ![image](https://github.com/roulette-minigame/roulette-minigame-project/assets/86585468/d1240e1c-157d-4274-b24c-5441f12a0e7f)

</div>

## 프로젝트 정보
목적 : 자바스크립트에 대한 이해와 숙달<br>
개발 기간 : 2024.04.04 ~ 2024.04.15

## 프로젝트 소개
- html5, css, javascript를 학습하기 위한 프로젝트
- 룰렛을 통해 4가지의 미니게임을 경험할 수 있고 이벤트 응모까지 가능한 게

## 팀원소개
- 경곤
  - https://github.com/ckk914
  - 숫자클릭게임
  - README
  - 룰렛
- 주성
  - https://github.com/kkimjuseong
  - 2048게임
  - 응모하기
  - README
  - 룰렛
- 요한
  - https://github.com/yocong?tab=repositories
  - 두더지잡기
  - README
  - 룰렛
- 지효
  - https://github.com/zyozal
  - 이미지맞추기
  - 시작화면
  - README
  - 룰렛

## 프로젝트 테이블
- 4월 4일 - 주제선정
- 4월 5일 ~ 9일 - 개인 게임개발
- 4월 9일 ~ 10일 - 룰렛 개발, 시작화면 개발, 응모하기 개발, 게임과 연동
- 4월 11일 - README , 트러블슈팅 작성
- 4월 12일 - ppt 만들기
- 4월 13일 ~ 14일 - 최종정리
- 4월 15일 - 발표

## 기술스택
### 개발
<div>
  <img src="https://img.shields.io/badge/html5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/css3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/Javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232a" />&nbsp

</div>

### 환경
<div>
  <img src="https://img.shields.io/badge/git-007396.svg?style=for-the-badge&logo=git&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/github-181717.svg?style=for-the-badge&logo=github&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/VSCode-2C2C32.svg?style=for-the-badge&logo=visual-studio-code&logoColor=22ABF3" />&nbsp
</div>

## 화면구성
### 시작페이지
![image](https://github.com/roulette-minigame/roulette-minigame-project/assets/86585468/a05dfe61-494b-49af-b621-65ca1108c9d3)

### 메인페이지
![image](https://github.com/roulette-minigame/roulette-minigame-project/assets/86585468/e366d157-e6dc-4f2f-a1eb-ae63573bcc66)

### 게임
#### 숫자클릭게임
![image](https://github.com/roulette-minigame/roulette-minigame-project/assets/86585468/835ac3b4-d5f9-4a3c-a7e1-426ac63d17fc)

#### 2048게임
![image](https://github.com/roulette-minigame/roulette-minigame-project/assets/86585468/83b9cfb2-e3e9-4b8e-bcd8-959decef7b5b)

#### 두더지잡기 게임
![image](https://github.com/roulette-minigame/roulette-minigame-project/assets/86585468/c2a483b1-dab9-4826-a0c3-d3fc32a900e1)

#### 이미지맞추기 게임
![image](https://github.com/roulette-minigame/roulette-minigame-project/assets/86585468/bc6163fd-78de-4052-ad54-19990290f38a)

### 응모하기
![image](https://github.com/roulette-minigame/roulette-minigame-project/assets/86585468/9ea68fab-3456-40c3-848c-583c671cee5c)


## 기능소개
#### 메인
- 개인게임방법 추가
- 시작 버튼을 눌렀을 때 룰렛이 돌아감
- 룰렛에 걸리는 게임이 시작됨

#### 숫자클릭게임
- 🎯 기능
숫자 박스 클릭 시 박스가 제거
시작 화면 숫자 25까지 랜덤으로 생성
26-30은 1~5번 박스 사라질 때 5개 추가 생성 (30까지만 생성)
6번부터 박스 클릭 시 화면에서 박스 안 보이게 처리
게임이 클리어 되면 게임 클리어 화면 팝업
제한 시간 내 게임을 클리어 못하면, 실패 화면을 팝업

- 💫적용 애니메이션
제거될 때 재미를 위해 애니메이션 적용 =>박스가 커졌다가 작아지는 효과
숫자 순서가 틀렸을 때 애니메이션 적용 =>일시적으로 박스 Red로 표시
게임 시작 화면 전환 애니메이션 적용

#### 2048게임
- 키보드 방향키와 wasd 마우스클릭으로 이동가능
|이동방향|상(위)|좌(왼쪽)|하(아래)|우(오른쪽)|
|---|---|---|---|---|
|키보드| W | A | S | D |
|방향키|⬆️|⬅️|⬇️|➡️|
|마우스클릭|⬆️|⬅️|⬇️|➡️|
- 타일끼리 합쳐질때 score에 점수 표시
- 게임이 끝났을때 Best의 최고점수 저장
- 새로고침 했을때 Best에 점수 남기기

#### 두더지잡기
- 9개의 두더지 구멍이 나와야 함
- 게임 시작 버튼이 있어야 함. 게임 시작 버튼을 누를 시 글씨 색 변경
- 게임이 시작되면 1초 후에 두더지가 구멍에서 랜덤하게 나와야 함
- 두더지가 나타난 곳을 클릭할 경우 두더지를 잡은 것으로 처리
- 두더지가 나타난 구멍을 3초 안에 클릭하지 않을 경우 두더지를 잡지 못한 것으로 처리
- 사용자가 두더지를 잡거나 제한 시간(3초)가 초과되었을 경우, 1초의 추가 간격을 두고 랜덤 한 두더지 구멍에서 두더지가 나와야 함
- 다음번에 두더지가 등장하는 구멍은 이전의 구멍과 반드시 다른 구멍이어야 함
- 사용자가 두더지를 잡을 수 있는 기회는 10번으로 제한
- 10번의 기회가 끝난 후 (잡은 두더지 숫자 /10) X 100으로 계산하여 점수를 화면에 표기, 예) 100점
- 점수가 표기된 후, "START" 버튼 대신 "AGAIN" 버튼이 나타나야 함
- "AGAIN" 버튼을 누를 경우, 다시 게임이 시작되어야 함
- "응모하기" 버튼을 클릭 시 응모하기 화면으로 넘어가게 됨
 
#### 이미지 맞추기
- 제시되는 이미지를 보고 4단으로 구성된 이미지를 좌/우로 클릭하여 맞춰야 함
- 정해진 시간 안에 총 3단계의 미션을 수행해야 클리어
- 시작하기 모달에 게임 방법 gif 이미지 제시
- 제한시간 내 게임을 클리어 못하면, 다시하기 버튼 생성
- 좌/우 버튼과 정답 화면에 애니메이션 효과 사용으로 가시성 상향
 
## 향후 업데이트
#### 경곤
- 반응형 화면 구현 - 화면 사이즈 별 대응하기

#### 주성
- 브라우저에 부하를 줄여 키보드 연타에도 버틸 수 있게 만들기
- 디자인 꾸미기
- 타일 이동을 부드럽게 만들기

#### 요한
- 난이도 설정을 통해 동시에 더 많은 숫자의 두더지가 나오게 하고 제한 시간을 짧게 두는 등 세부적인 기능을 업데이트할 예정

#### 지효 
- 슬라이드 좌/우 클릭 시 화면에 제시된 이미지는 연속으로 안 나오게 업데이트 예정

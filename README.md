# 2023-2-OSSProj-MSG_UP-8
2023년 2학기 오픈소스소프트웨어(OSSProj) 8팀 MSG_UP입니다.


## 시연영상
<br>
<br>


## 프로젝트명

Django framework 및 React를 활용하여 동국대학교 ‘eclass’ 기능 개선



## 👥 멤버
|<img width="140" alt="유다현" src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/3eaeced7-7b8d-4734-95d1-b330084e4708">|<img width="140" alt="김현제" src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/4d6fe1c1-a398-44b8-a090-0af11a58124c">|<img width="140" alt="조하연" src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/7737ecc8-fe16-4d9e-9b0b-e8f56b8d08b8">| 
|:---:|:---:|:---:|
| 유다현  | 김현제 | 조하연 |
| 경영정보학과  | 경영정보학과 | 전자전기공학부 |
| *프론트엔드* | *백엔드* | *백엔드* |
| 디자인, 로그인 전 캘린더 구현(학사 일정), 로그인 후 캘린더 구현(과제 및 시험 일정), To do list, 시간표, 강의별 컴포넌트, 로그인, 회원가입, 강의 선택 페이지, 강의 상세 페이지 레이아웃 제작, 모든 페이지 및 컴포넌트 API 연결 | 백엔드 구조 구축, 로그인 및 회원가입, 로그아웃 API구현, 융합소프트웨어 강의 CSV 작성 및 DB반영 로직 구현, 서비스 및 컴포넌트에 대한 접근 권한 로직 구현, 개별 강의실 페이지 API 구현, 시간표 API 및 중복 검사 로직 구현 | 로그인, 회원가입, 로그아웃 API구현, 학사일정 CSV 작성 및 DB반영, 로그인 전 캘린더 API 구현(학사일정), 로그인 후 캘린더 API 구현(과제 및 시험 일정), todo-list API 구현 |

## Tech Stack

<div align=center>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <br>
  
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white">
  <img src="https://img.shields.io/badge/VsCode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

## 개발 환경

### OS


### Virtual Environment


### Backend
- django
- django-restframework

### Frontend
- HTML5, CSS, JavaScript
- React v18.2.0
- Visual Studio Code v1.78.2

## 프로젝트 내용

 기존 elcass의 틀을 기반으로 하여, 학생들의 접근성을 높이며 효율적으로 사용할 수 있도록 기존 요소들을 보완하고 새로운 기능들을 추가하였다.
 eclass 페이지 로그인 전, 학사 일정을 확인할 수 있는 캘린더와 로그인 시 메인 화면에 유저별 시간표, 강의실 페이지 바로가기 메뉴, 학사 일정과 과제 기한이 표시할 수 있는 캘린더 그리고 Todo list의 기능을 추가 및 수정하여 사이트의 편리성 및 효용성을 높이는 방향으로 개발을 하였다. 

## 사용한 오픈소스 코드 및 개선사항
- [TODO: Club 일정 및 사진을 업로드 프로젝트](https://github.com/LikeLion-at-DGU/TGT_back)
  - club의 todo-list를 작성하고 해당 list를 get함수를 이용하여 게시하는 API를 활용
  - 특정 권한을 가진 사용자가 todo를 불러온 후 수정, 삭제하는 API를 활용함
  - @permission_classes을 이용하여 컴포넌트 별 사용 권한의 제한두도록 수정
  - 로그인 한 사용자의 user_id를 todo table에 추가로 반영될 수 있도록 수정
  - get 과정에 필터링을 진행하여 user 개인의 todo-list를 불러올 수 있도록 수정
- [캘린더: 자바 스크립트 기반 오픈소스 웹앱 개발 달력 또는 일정, 스케줄러 구현 라이브러리](https://fullcalendar.io/)
  - [Standard:MIT license.Premium:GPLv3](https://fullcalendar.io/license)
  - Plugin 시스템을 사용하여 여러 기능을 활용함. 
  - 그 중, dayGridPlugin를 통해서 학사일정 db를 불러와 이벤트를 월별로 보여주는 그리드 뷰를 사용
  - 또한, interactionPlugin을 통해 react-modal 라이브러리와 연결하여 상호작용 이벤트 구현, 선택과 드래그 이벤트 기능 구현함으로 접근성 높일 수 있었음
  - @emotion/styled을 사용하여 직접 캘린더 스타일 커스텀
- [시간표: Django/파이썬 프레임워크 기반 대학 강의 시간표를 구현 프로젝트](https://github.com/mHuzefa/TimetableGeneratorApp)
  - [Apache License 2.0](https://github.com/mHuzefa/TimetableGeneratorApp/blob/master/LICENSE)
  - Timetable에 사용자가 입력한 강의 정보를 받아서 시간표를 구조화하는 API를 활용
  - 정보를 잘못 입력하는 경우에 대해 exception 메시지를 생성하는 로직을 활용
  - 선택 강의 수와 수업 일수를 바로 받아서 시간표를 구조화하는 원래의 구조에서, 기본 시간표 격자를 생성한 후 선택 강의를 격자 위에 배치하는 구조로 수정
  - 사용자 시간표를 먼저 생성한 후, 시간표의 시간에 따라 가변적으로 viewset을 생성하는 원래의 구조를, 순서를 바꾸어 고정된 격자에 식별자를 선언하고 강의를 배치하는 구조로 수정



## 웹사이트 소개
**0. 메인페이지-로그인 전(Main page)**
<br>
<img src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/ba327846-b36a-4309-beb5-9a542563568e">
<br>
<br>

**1. 학사일정 캘린더(Calendar)**
<br>
<img src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/59f78812-330a-46ae-9d21-88c8e02c383a">
<br>
- Schedule이라는 테이블 내, 일정 이름(out_title), 시작 날짜(out_startdate), 마지막 날짜(out_enddate) 정보를 저장
- CSV에 학사 일정을 작성한 뒤, database에 해당 내용을 불러와 해당 테이블에 저장
- DB에 저장된 일정들을 fullcalendar오픈소스 라이브러리를 사용하여 이벤트 구현
- 3가지의 색상을 랜덤하게 사용하여 학사일정 가시성 향상
<br>
<br>

**2. 회원가입(Join)**
<br>
<img src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/c53abcfd-2549-48f7-bf3e-13228f24b602">
<br>
<br>

**3. 로그인(Login)**
<br>
<img src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/64bd1393-dd92-436c-b91f-6934037df82c">
<br>
<br>

**4. 수강과목 선택(Subject select)**
<br>
<img src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/e77fd4f2-480b-4d4b-905f-aed2e2b5473e">
<br>
- Django 프레임워크의 기본 라이브러리인 auth-user을 일대일 참조를 통해 회원의 기본 프로필 구조를 생성하여 수강생의 정보를 저장하고 접근 권한을 부여
- 최초 회원가입 시, 회원 가입이 성공한 후 바로 강의실 선택 페이지로 이동
- 이때, 강의 다중 선택 가능하며 클릭된 강의에 배경색과 글자색 변화가 발생
- 강의실 선택페이지에서 각 수강생이 선택한 과목은 데이터베이스에 저장되어 이클래스의 다른 기능들에 사용
<br>
<br>

**2. 메인페이지-로그인 후(Main page)**
<br>
<img src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/55e9947d-1330-460c-9e3a-6678e2046843">
<br>
- 로그인 시나타나는 메인 화면
- 사용자별 시간표, 강의 컴포넌트, todo, 과제 및 시험 캘린더
- 로그아웃 버튼 클릭 시, 로그인 전 메인 화면으로 전환
<br>
<br>

**5. 시간표(Timetable)**
<br>
<img src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/d04456a7-593c-413c-8934-ad341212453e">
<br>
- 시간표 모듈은 사용자의 프로필 정보와, 사용자가 회원 가입하며 저장된 수강 과목 목록을 참조
- 월요일부터 금요일, 오전 9시부터 오후 6시까지의 시간표 격자를 만들고, 각 칸마다 고유 식별자를 붙여 2차원 배열을 구성. 이를 사용자별 수강 과목 객체를 불러와 알맞은 시간에 배치
- 수강 과목 간 시간 중복 검사 로직을 통해, 수강 과목 목록 내에서 중복되는 강의가 있을 경우 시간표가 생성되지 않으며 이에 대한 경고로 안내 문구 표시
- 사용자가 수강중인 과목 목록을 변경할 경우 이에 맞춰 시간표 변경
<br>
<br>

**6. 강의실, 과제란, 학습자료실, 공지사항 바로가기**
<br>
<img src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/5c560723-2e08-4e74-a57d-f47ef2434f72">
<br>
- 편의성 제고를 위해 사용자가 수강중인 과목들의 학습자료실, 공지사항, 과제 제출 버튼을 외부로 노출
- 사용자의 프로필과, 사용자가 수강 중인 과목 목록을 참조하여 강의실 가기 버튼 클릭 시, 각 강의 과목별 세부 페이지로 연결
<br>
<br>

**7. 투두리스트(TodoList)**
<br>
<img src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/cedcac1a-383c-4490-912f-1f91529dfcde">
<br>
- TodoItem이라는 테이블 내, 사용자(owner), 일정 이름(todo_title), 날짜(due_date), 완료여부(completed) 정보를 저장하여 사용자가 todo를 작성하는 경우 해당 정보가 로그인한 유저 id와 함께 저장
-  로그인 시, 필터링을 통해 해당 사용자의 todo 목록을 불러온 후 메인 페이지에 게시하는 방식으로 구현
-   ‘오늘의 할 일을 적어보세요!’ 칸에 할 일을 입력한 후 + 버튼을 누르면 todo 추가, 휴지통 버튼을 클릭시 삭제, 체크 박스를 클릭 시 체크 및 해제 
<br>
<br>

**8. 학사일정 및 시험 캘린더(Calendar)**
<br>
<img src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/739dc20f-84a2-415a-86ce-89c1e2f09a69" width="400" height="300">
<br>
- 사용자가 일정을 추가하고 싶은 날짜 클릭 또는 드래그 시, 모달창 생성
- 위의 사진과 같이, 모달창을 통해 일정의 이름과 배경색을 사용자가 직접 설정하여 추가 가능
- 이는 Event라는 테이블 내, 사용자(owner), 일정 이름(in_title), 시작 날짜(in_startdate), 마지막 날짜(in_enddate), 색상(color) 정보를 저장. 로그인을 시행하면 로그인한 유저 id로 필터링을 진행하여 이벤트 목록을 불러오도록 구현
- 캘린더 내 이벤트 클릭 시, 기존 이름과 색상 선택기, 취소 및 수정 버튼의 모달창이 뜨며 일정의 이름과 배경색 수정과 삭제가 가능
<br>
<br>

## References
- https://fullcalendar.io/
- https://github.com/LikeLion-at-DGU/TGT_back  
- https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7
- https://github.com/CSID-DGU/2023-1-OSSProj-NoQuestionMark-2

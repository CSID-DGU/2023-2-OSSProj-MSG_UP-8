# 2023-2-OSSProj-MSG_UP-8
2023년 2학기 오픈소스소프트웨어(OSSProj) 8팀 MSG_UP입니다.


## 🖥️시연영상



## 프로젝트명

Django framework 및 React를 활용하여 동국대학교 ‘eclass’ 기능 개선



## 👥 멤버
|<img width="140" alt="유다현" src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/3eaeced7-7b8d-4734-95d1-b330084e4708">|<img width="140" alt="김현제" src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/4d6fe1c1-a398-44b8-a090-0af11a58124c">|<img width="140" alt="조하연" src="https://github.com/CSID-DGU/2023-2-OSSProj-MSG_UP-8/assets/113084239/7737ecc8-fe16-4d9e-9b0b-e8f56b8d08b8">| 
|:---:|:---:|:---:|
| 유다현  | 김현제 | 조하연 |
| 경영정보학과  | 경영정보학과 | 전자전기공학부 |
| *프론트엔드* | *백엔드* | *백엔드* |
| 디자인, 로그인 전 캘린더 구현(학사 일정), 로그인 후 캘린더 구현(과제 및 시험 일정), To do list, 시간표, 강의별 컴포넌트, 로그인, 회원가입, 강의 선택 페이지, 강의 상세 페이지 레이아웃 제작, 모든 페이지 및 컴포넌트 API 연결 |  | 로그인, 회원가입, 로그아웃 API구현, 학사일정 CSV 작성 및 DB반영, 로그인 전 캘린더 API 구현(학사일정), 로그인 후 캘린더 API 구현(과제 및 시험 일정), todo-list API 구현 |

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

## 웹사이트 소개

**1. 학사일정 캘린더-로그인전(Calendar)**
<br>
<br>
**2. 회원가입(Join)**
<br>
<br>
**3. 로그인(Login)**
<br>
<br>
**4. 과목선택(Subject select)**
<br>
<br>
**5. 시간표(Timetable)**
<br>
<br>
**6. 강의실, 과제란, 학습자료실, 공지사항 바로가기**
<br>
<br>
**7. 투두리스트(TodoList)**
<br>
<br>
**8. 학사일정 및 시험 캘린더-로그인후(Calendar)**
<br>
<br>

## References
- https://fullcalendar.io/
- https://github.com/LikeLion-at-DGU/TGT_back  
- https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7
- https://github.com/CSID-DGU/2023-1-OSSProj-NoQuestionMark-2

import React from 'react'
import styled from "@emotion/styled";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 

import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    // 캘린더 전체 사이즈 조정
    .fc {
      width: 100%;
      background-color: #F5F5F5;
      border-radius: 10px;
    }
  
    // toolbar container
    .fc .fc-toolbar.fc-header-toolbar {
      margin: 0;
      padding: 0 40px;
      background-color: #F5F5F5;
      height: 10%;
      font-weight: 600;
      font-size: 8px;
      line-height: 29px;
      color: black;
      border-radius: 10px 10px 0 0;
    }
  
    // toolbar 버튼
    .fc .fc-button-primary {
      background-color: transparent;
      border: none;
      color: black;
  
      span {
        font-weight: 500;
        font-size: 15px;
      }
  
      :hover {
        background-color: transparent;
      }
    }
  
    // 요일 부분
    .fc-theme-standard th {
      height: 8%;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 2rem;
      color: #7b7b7b;
    }
  
    // 오늘 날짜 배경색
    .fc .fc-daygrid-day.fc-day-today {
      background-color: #fff8bd;
      color: #356eff;
    }

    // 날짜  ex) 2일
    .fc .fc-daygrid-day-top {
      flex-direction: row;
      margin-bottom: 0.5%;
      
    }
  
    // 각 이벤트 요소
    .fc-event {
      cursor: pointer;
      padding: 1px 1px;
      margin-bottom: 1.5%;
      border-radius: 3px;
      font-weight: 500;
      font-size: 1.5rem;
    }
    .fc-day-sun a {
      color: red;
      text-decoration: none;
    }
    .fc-day-sat a{
      color: blue;
      text-decoration: none;
    }
`;

export const WrappFullCalendar = styled.div`
    width: 100%;
    height: 100%;
`;
export default class LoginCal extends React.Component {

  calendarRef = React.createRef();

  handleDateClick = (arg) => { 
    const title = prompt("일정을 입력하세요");
    if (title) {
      const calendarApi = this.calendarRef.current.getApi();
      calendarApi.addEvent({ title: title, date: arg.date, color: "#E72F4B" });
    }
  }



  render() {
    return (
    <Wrapper>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={this.handleDateClick}
        eventContent={renderEventContent}
        initialView="dayGridMonth"
        editable={true}
        selectable= {true}
        headerToolbar={
          {
            start: "today",
            center: "title",
            end: "prev,next"
          }
        }
        weekends={true}
        eventTextColor='white'
        locale={'ko'}
        ref={this.calendarRef}
        // events={[
        //   { title: "중간 보고서", start:'2023-11-03', end:'2023-11-06', color: "#E72F4B"},
        //   { title: '융프2 보고서', start: '2023-11-15', end:'2023-11-19', color: ""},
        //   { title: '중간 발표', date: '2023-11-06', color: "#7FDD21"},
        // ]}
      />
    </Wrapper>
    )
  }


}

function renderEventContent(eventInfo) {
  return(
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
import React, {useEffect, useState} from 'react'
import styled from "@emotion/styled";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';

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
      margin-bottom: 8%;
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
function LogoutCal(props) {

    const [events, setEvents] = useState([]);

    // const getRandomColor = () => {
    //   const colors = ['#E72F4B', '#7FDD21', '#356eff'];
    //   return colors[Math.floor(Math.random() * colors.length)];
    // };

    const colors = ['#E72F4B', '#7FDD21', '#356eff'];

    useEffect(() => {

      axios.get('http://127.0.0.1:8000/logoutcals/schedulelist/') 
        .then(response => {
          const fetchedEvents = response.data.map((event, index) => ({
            title: event.out_title,
            start: event.out_startdate,
            end: event.out_enddate,
            color: colors[index % colors.length]
          }));
          setEvents(fetchedEvents); 
        })
        .catch(error => console.log(error));
    }, []); 
  
    return (
    <Wrapper>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        eventContent={renderEventContent}
        initialView="dayGridMonth"
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
        events={events}
      />
    </Wrapper>
    );
  }

export default LogoutCal;


  function renderEventContent(eventInfo) {
    return(
      <div style={{ backgroundColor: eventInfo.event.backgroundColor }}>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    )
  }
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import styled from "@emotion/styled";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import Modal from 'react-modal';

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

function LoginCal(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventStart, setNewEventStart] = useState('');
  const [newEventEnd, setNewEventEnd] = useState('');
  const [selectedEventId, setSelectedEventId] = useState('');
  const calendarRef = useRef(null);


  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
      // console.log(token)
    }
    return config;
  });

    // 색상 선택
  const [eventColor, setEventColor] = useState('#ffffff');

  const handleColorChange = (e) => {
    setEventColor(e.target.value);
    console.log("색상",e.target.value);
  };

  // 모든 일정 불러오기
  useEffect(() => {
    const get_AllEvents = async () => {
      try {
        const response = await axiosInstance.get('http://127.0.0.1:8000/logincals/events/list/');
        console.log("캘린더",response);
        const getAllEvents = response.data.map(event => ({
          id: event.id,
          title: event.in_title,
          start: event.in_startdate,
          end: event.in_enddate,
          color: event.color
        }));
        setEvents(getAllEvents);
      } catch (err) {
        console.error('Error get All events:', err);
      }
    }; 
    get_AllEvents();
  }, []);

  // 특정 일정 불러오기
  const openModal = async (startStr, endStr, eventId) => {
    setNewEventStart(startStr);
    setNewEventEnd(endStr);
    setSelectedEventId(eventId);
    console.log("이벤트 아이디",eventId);
    setNewEventTitle(''); 

    if (eventId) {
      try {
        const response = await axiosInstance.get(`http://127.0.0.1:8000/logincals/events/detail/${eventId}/`);
        const event = response.data;
        setNewEventTitle(event.in_title);
        setNewEventStart(event.in_startdate);
        setNewEventEnd(event.in_enddate);
      } catch (err) {
        console.error('Error get event details:', err);
      }
    }
  
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDateClick = (arg) => {
    
    openModal(arg.dateStr, arg.dateStr);
    console.log(arg)
  };

  const handleSelect = (selectInfo) => {
    openModal(selectInfo.startStr, selectInfo.endStr);
  };


  // 일정 추가
  const handleEventAdd = async () => {
    if (newEventTitle) {
      try {
        const response = await axiosInstance.post('http://127.0.0.1:8000/logincals/events/', {
          in_title: newEventTitle,
          in_startdate: newEventStart,
          in_enddate: newEventEnd,
          color: eventColor
        });
        
        const newEvent = {
          title: newEventTitle,
          start: newEventStart,
          end: newEventEnd,
          id: response.data.id,
          allDay: true,
          color: eventColor
        };
  
        setEvents([...events, newEvent]);
        closeModal();
      } catch (err) {
        console.error('Error adding new event:', err);
        
      }
    }
  };

  const handleEventClick = (clickInfo) => {
    console.log("id=",clickInfo.event.id);
    setNewEventTitle(clickInfo.event.title);
    setNewEventStart(clickInfo.event.start);
    setNewEventEnd(clickInfo.event.end);
    setEventColor(clickInfo.event.backgroundColor);
    setSelectedEventId(clickInfo.event.id); 
    setIsOpen(true);
    openModal(clickInfo.event.start, clickInfo.event.end, clickInfo.event.id);
    
  };


  // 이벤트 수정 api
  // const updateEvent = async () => {
  //   if (selectedEventId) {
  //     try {
  //       await axiosInstance.put(`http://127.0.0.1:8000/logincals/events/detail/${selectedEventId}/`, {
  //         in_title: newEventTitle,
  //         in_startdate: newEventStart,
  //         in_enddate: newEventEnd,
  //         color: eventColor
  //       });
  
        // 클라이언트 상태 업데이트
  //       const updatedEvents = events.map(event => {
  //         if (event.id === selectedEventId) {
  //           return { ...event, title: newEventTitle, start: newEventStart, end: newEventEnd, backgroundColor: eventColor };
  //         }
  //         return event;
  //       });
  //       setEvents(updatedEvents);
  //       closeModal();
  //     } catch (err) {
  //       console.error('Error updating event:', err);
  //     }
  //   }
  //   if (calendarRef.current) {
  //     const calendarApi = calendarRef.current.getApi();
  //     calendarApi.refetchEvents();
  //   }
  // };

  // 수정 이벤트 처리 - 바로 캘린더에 반영
  const updateEvent = async () => {
    if (selectedEventId && calendarRef.current) {
      try {
        await axiosInstance.put(`http://127.0.0.1:8000/logincals/events/detail/${selectedEventId}/`, {
          in_title: newEventTitle,
          in_startdate: newEventStart,
          in_enddate: newEventEnd,
          color: eventColor
        });
  
        // 캘린더 API를 사용하여 이벤트 업데이트
        const calendarApi = calendarRef.current.getApi();
        let event = calendarApi.getEventById(selectedEventId);
        if (event) {
          event.setProp('title', newEventTitle);
          event.setDates(newEventStart, newEventEnd);
          event.setProp('backgroundColor', eventColor);
        }
        closeModal();
      } catch (err) {
        console.error('Error updating event:', err);
      }
    }
  };
  
  

  // 이벤트 삭제 api
  // const deleteEvent = async () => {
  //   if (selectedEventId) {
  //     try {
  //       await axiosInstance.delete(`http://127.0.0.1:8000/logincals/events/detail/${selectedEventId}/`);
  
  //       // 클라이언트 상태 업데이트
  //       const filteredEvents = events.filter(event => event.id !== selectedEventId);
  //       setEvents(filteredEvents);
  //       closeModal();
  //     } catch (err) {
  //       console.error('Error deleting event:', err);
  //     }
  //   }
  //   if (calendarRef.current) {
  //     const calendarApi = calendarRef.current.getApi();
  //     calendarApi.refetchEvents();
  //   }
  // };


  // 삭제 이벤트처리 - 바로 캘린더에 반영
  const deleteEvent = async () => {
    if (selectedEventId && calendarRef.current) {
      try {
        await axiosInstance.delete(`http://127.0.0.1:8000/logincals/events/detail/${selectedEventId}/`);
  
        // 캘린더 API를 사용하여 이벤트 삭제
        const calendarApi = calendarRef.current.getApi();
        let event = calendarApi.getEventById(selectedEventId);
        if (event) {
          event.remove();
        }
        closeModal();
      } catch (err) {
        console.error('Error deleting event:', err);
      }
    }
  };
  
  

  return (
    <Wrapper>
      <FullCalendar
        ref={calendarRef}
        plugins={[ dayGridPlugin, interactionPlugin ]}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        events={events}
        selectable={true}
        select={handleSelect}
        dateClick={handleDateClick}
        initialView="dayGridMonth"
        editable={true}
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
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: '300px',
            width: '500px',
            backgroundColor: '#FFFFFF', 
            border: '1px solid #CDCDCD',
            borderRadius: '10px',
            display:'flex',
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }
        }}
      >
        <input
          type="text"
          placeholder="일정을 추가해주세요"
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}
          style={{
            border: '1px solid #CDCDCD',
            borderRadius: '5px',
            outline: 'none',
            padding: '15px',
            width: '350px',
            height: '50px',
            fontWeight: '800',
          }}
          />
          <input
            type="color"
            value={eventColor}
            onChange={handleColorChange}
            style={{ width: '200px', height: '50px', border: '1px solid #CDCDCD', borderRadius: '5px' }}
          />
        <div>
          <button
            onClick={selectedEventId ? deleteEvent : closeModal}
            style={{
              border: 'none',
              borderRadius: '5px',
              width: '150px',
              marginRight: '50px',
              backgroundColor: '#EDC219',
              fontWeight: '800',
              padding: '15px',
          }}>
            {selectedEventId ? '삭제' : '취소'}
          </button>
          <button 
            onClick={selectedEventId ? updateEvent : handleEventAdd}
            style={{
              border: 'none',
              borderRadius: '5px',
              width: '150px',
              backgroundColor: '#EB9332',
              fontWeight: '800',
              padding: '15px',
          }}>
            {selectedEventId ? '변경' : '추가'}</button>
        </div>
      </Modal>

    </Wrapper>
    );
  }

export default LoginCal;

function renderEventContent(eventInfo) {
  return(
    <div style={{ backgroundColor: eventInfo.event.backgroundColor }}>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  )
}
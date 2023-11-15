import React, {useState} from 'react';
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

// export const WrappFullCalendar = styled.div`
//     width: 100%;
//     height: 100%;
// `;

function LoginCal(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventStart, setNewEventStart] = useState('');
  const [newEventEnd, setNewEventEnd] = useState('');
  const [selectedEventId, setSelectedEventId] = useState('');

  const openModal = (startStr, endStr, eventId) => {
    setNewEventStart(startStr);
    setNewEventEnd(endStr);
    setSelectedEventId(eventId);
    setNewEventTitle(''); 
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDateClick = (arg) => {
    openModal(arg.dateStr);
  };

  const handleSelect = (selectInfo) => {
    openModal(selectInfo.startStr, selectInfo.endStr);
  };

  const handleEventAdd = () => {
    if (newEventTitle) {
      const newEvent = {
        title: newEventTitle,
        start: newEventStart,
        end: newEventEnd,
        id: events.length.toString(),
        allDay: true,
        color: eventColor,
      };
      setEvents([...events, newEvent]);
      closeModal();
    }
  };
  const [eventColor, setEventColor] = useState('#ffffff');

  const handleEventClick = (clickInfo) => {
    setNewEventTitle(clickInfo.event.title);
    setNewEventStart(clickInfo.event.start);
    setNewEventEnd(clickInfo.event.end);
    setEventColor(clickInfo.event.backgroundColor);
    setSelectedEventId(clickInfo.event.id); 
    setIsOpen(true);
    // openModal(clickInfo.event.start, clickInfo.event.end, clickInfo.event.id);
  };

  const updateEvent = () => {
    const updatedEvents = events.map(event => {
      if (event.id === selectedEventId) {
        return { ...event, title: newEventTitle, start: newEventStart, end: newEventEnd, backgroundColor: eventColor };
      }
      return event;
    });
    setEvents(updatedEvents);
    closeModal();
  };

  const deleteEvent = () => {
    const filteredEvents = events.filter(event => event.id !== selectedEventId);
    setEvents(filteredEvents);
    closeModal();
  };

  return (
    <Wrapper>
      <FullCalendar
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
            onChange={(e) => setEventColor(e.target.value)}
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
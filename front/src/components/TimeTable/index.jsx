import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as s from "./styles.js";
import axios from "axios";

export default function TimeTable(props) {
  const [timetableData, setTimetableData] = useState([]);
  const { pk: user_id } = useParams();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: { Authorization: `Token ${token}` },
    };
    axios
      .get(`http://127.0.0.1:8000/timetable/classlist/${user_id}`, config)
      .then((response) => {
        setTimetableData(response.data.timetable.timetable);
      })
      .catch((error) => {
        console.error("Error fetching lecture details", error);
      });
  }, [user_id]);

  console.log("시간표 데이터", timetableData);

  const times = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];

  if (!timetableData) {
    return <div>Loading...</div>;
  }

  return (
    <s.Container>
      <s.Table>
        <thead>
          <tr>
            <th>시간</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((row, i) => (
            <tr key={i}>
              <td>{times[i]}</td>
              {row.map((classItem, j) => (
                <td key={j}>{classItem}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </s.Table>
    </s.Container>
  );
}

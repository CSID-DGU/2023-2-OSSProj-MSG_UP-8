import React from "react";
import * as s from "./styles.js";
import theme from "../../style/theme.js";

export default function TimeTable(props) {

    return(
        <>
            <s.Container>
                <s.Table>
                    <tr>
                        <th style={{ borderTop: 'none', borderLeft: 'none' }}></th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th style={{ borderTop: 'none', borderRight: 'none' }} >금</th>
                    </tr>
                    <tr>
                        <th>9:00 - 9:30</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <th>9:30 - 10:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <th>10:00 - 10:30</th>
                        <td></td>
                        <td rowSpan={4}>
                            <s.TimeContainer style={{ backgroundColor:"#CBC37A"}}>
                                <s.LectureName>컴퓨터 시스템</s.LectureName>
                                <s.StartTime>10:00</s.StartTime>
                                <s.ProName>김강열</s.ProName>
                                <s.Place>정보문화관 P404</s.Place>
                            </s.TimeContainer>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <th>10:30 - 11:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <th>11:00 - 11:30</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <th>11:30 - 12:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <th>12:00 - 12:30</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <th>12:30 - 13:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <th>13:00 - 13:30</th>
                        <td rowSpan={4}>
                            <s.TimeContainer style={{ backgroundColor:"#FCC2BE"}}>
                                <s.LectureName>오픈소스 소프트웨어프로젝트</s.LectureName>
                                <s.StartTime>13:00</s.StartTime>
                                <s.ProName>김동호</s.ProName>
                                <s.Place>정보문화관 P403</s.Place>
                            </s.TimeContainer>
                        </td>
                        <td></td>
                        <td rowSpan={4}>
                            <s.TimeContainer style={{ backgroundColor:"#EDC219"}}>
                                <s.LectureName >오픈소스 소프트웨어프로젝트</s.LectureName>
                                <s.StartTime>13:00</s.StartTime>
                                <s.ProName>김동호</s.ProName>
                                <s.Place>정보문화관 P404</s.Place>
                            </s.TimeContainer>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                    <th>13:30 - 14:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    
                    </tr>
                    <tr>
                    <th>14:00 - 14:30</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    
                    </tr>
                    <tr>
                        <th>14:30 - 15:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                       
                    </tr>
                    <tr>
                        <th>15:00 - 15:30</th>
                        <td></td>
                        <td rowSpan={3}>
                            <s.TimeContainer style={{ backgroundColor:"#A3E0D8"}}>
                                <s.LectureName>모바일 프로그래밍</s.LectureName>
                                <s.StartTime>15:00</s.StartTime>
                                <s.ProName>송충건</s.ProName>
                                <s.Place>정보문화관 Q202</s.Place>
                            </s.TimeContainer>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>15:30 - 16:00</th>
                        <td></td>
                        <td rowSpan={3}>
                            <s.TimeContainer style={{ backgroundColor:"#E15E39"}}>
                                <s.LectureName>융합프로그래밍</s.LectureName>
                                <s.StartTime>15:30</s.StartTime>
                                <s.ProName>한웅진</s.ProName>
                                <s.Place>정보문화관 P404</s.Place>
                            </s.TimeContainer>
                        </td>
                        <td></td>
                       
                    </tr>
                    <tr>
                        <th>16:00 - 16:30</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                       
                    </tr>
                    <tr>
                        <th>16:30 - 17:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>17:00 - 17:30</th>
                        <td></td>
                        <td rowSpan="4">
                            <s.TimeContainer style={{ backgroundColor:"#EB9332"}}>
                                <s.LectureName>자료구조 알고리즘</s.LectureName>
                                <s.StartTime>17:00</s.StartTime>
                                <s.ProName>한웅진</s.ProName>
                                <s.Place>정보문화관 P404</s.Place>
                            </s.TimeContainer>
                        </td>
                        <td></td>
                        <td></td>
                       
                    </tr>
                    <tr>
                        <th>17:30 - 18:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <th>18:00 - 18:30</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    
                    </tr>
                    <tr>
                        <th style={{ borderBottom: 'none', borderLeft: 'none' }}>18:30 - 19:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                        <td style={{ borderBottom: 'none', borderRight: 'none' }}></td>
                    </tr>
                </s.Table>
            </s.Container>
        </>
    );
}
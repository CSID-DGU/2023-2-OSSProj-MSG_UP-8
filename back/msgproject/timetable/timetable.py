# 시간을 30분 단위로 나타내는 리스트
times = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
         "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
         "17:00", "17:30", "18:00"]

# 요일별 식별자 시작 번호
day_identifiers = {
    "Mon": 0,
    "Tue": 100,
    "Wed": 200,
    "Thu": 300,
    "Fri": 400
}

# 요일을 나타내는 열: 월요일부터 금요일
days = ["Mon", "Tue", "Wed", "Thu", "Fri"]

# 2차원 배열 형태의 시간표를 생성하고 각 칸에 고유 식별자를 할당
timetable = {}

for time in times:
    time_index = times.index(time)  # 시간에 따른 인덱스
    for day in days:
        # 칸별 변수명을 요일 식별자 시작 번호 + 시간 인덱스 형태로 구성
        cell_var_name = f"{day_identifiers[day] + time_index}"
        
        # 각 시간대와 요일에 대한 변수명과 빈 강의명으로 시간표 초기화
        timetable[(time, day)] = cell_var_name, ""

# 시간표 출력을 위한 코드
print("     | " + " | ".join(days))
for i, time in enumerate(times):
    row = [time]
    for day in days:
        cell_var_name, class_name = timetable[(time, day)]
        row.append(f"{cell_var_name}: {class_name}")
    print(" | ".join(row))

def update_timetable_with_json_data(timetable, json_data, days):
    json_timetable = json_data["timetable"]

    for i, row in enumerate(json_timetable):
        time = times[i]
        for j, class_name in enumerate(row):
            day = days[j]
            if class_name:  # 클래스 이름이 존재하는 경우에만 업데이트
                timetable[(time, day)] = (timetable[(time, day)][0], class_name)

# JSON 데이터 (예시)
json_data = {
    "timetable": [
        [
            "디지털영상편집입문",
            "",
            "",
            "",
            ""
        ],
        [
            "디지털영상편집입문",
            "",
            "",
            "",
            ""
        ],
        [
            "디지털영상편집입문",
            "",
            "디지털음향편집입문",
            "입체공연음향제작실습2",
            ""
        ],
        [
            "디지털영상편집입문",
            "",
            "디지털음향편집입문",
            "입체공연음향제작실습2",
            ""
        ],
        [
            "디지털영상편집입문",
            "",
            "디지털음향편집입문",
            "입체공연음향제작실습2",
            ""
        ],
        [
            "디지털영상편집입문",
            "",
            "디지털음향편집입문",
            "입체공연음향제작실습2",
            ""
        ],
        [
            "",
            "",
            "디지털음향편집입문",
            "입체공연음향제작실습2",
            ""
        ],
        [
            "",
            "",
            "디지털음향편집입문",
            "입체공연음향제작실습2",
            ""
        ],
        [
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "",
            "",
            "",
            "범죄증거분석학",
            ""
        ],
        [
            "문화가치의체험과창작",
            "",
            "문화가치의체험과창작",
            "범죄증거분석학",
            ""
        ],
        [
            "문화가치의체험과창작",
            "",
            "문화가치의체험과창작",
            "범죄증거분석학",
            ""
        ],
        [
            "문화가치의체험과창작",
            "",
            "문화가치의체험과창작",
            "범죄증거분석학",
            ""
        ],
        [
            "",
            "",
            "",
            "범죄증거분석학",
            ""
        ],
        [
            "",
            "문화상품과소비문화",
            "",
            "범죄증거분석학",
            "문화상품과소비문화"
        ],
        [
            "",
            "문화상품과소비문화",
            "",
            "",
            "문화상품과소비문화"
        ],
        [
            "",
            "문화상품과소비문화",
            "",
            "",
            "문화상품과소비문화"
        ],
        [
            "",
            "",
            "",
            "",
            ""
        ]
    ]
}

# 초기 시간표 생성
timetable = {}
for time in times:
    for day in days:
        cell_var_name = f"{day_identifiers[day] + times.index(time)}"
        timetable[(time, day)] = (cell_var_name, "")

# JSON 데이터로 시간표 업데이트
update_timetable_with_json_data(timetable, json_data, days)

# 시간표 출력
print("              | " + "            | ".join(days))
for time in times:
    row = [time]
    for day in days:
        cell_var_name, class_name = timetable[(time, day)]
        display_text = f"{cell_var_name}: {class_name}" if class_name else f"{cell_var_name}:          -         "
        row.append(display_text)
    print(" | ".join(row))

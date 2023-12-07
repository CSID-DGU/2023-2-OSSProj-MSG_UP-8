# 시간을 30분 단위로 나타내는 리스트
times = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
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

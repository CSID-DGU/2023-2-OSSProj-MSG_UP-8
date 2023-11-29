import pandas as pd
import sqlite3

# Read csv file.
df = pd.read_csv("schedule.csv", encoding="euc-kr")

# Connect to (create) database.
database = "db.sqlite3"
conn = sqlite3.connect(database)
dtype={
    "out_title": "CharField",
    "out_startdate": "DateField",
    "out_enddate": "DateField", 
}


df.to_sql(name='logoutcals_schedule', con=conn, if_exists='replace', dtype=dtype, index=True, index_label="id")
conn.close()

# CSV 파일을 Pandas DataFrame으로 읽기 (헤더가 포함되어 있다고 가정)
df = pd.read_csv('classlist.csv', encoding="euc-kr")

# 데이터베이스 연결
database = "db.sqlite3"
conn = sqlite3.connect(database)

# 데이터 유형(dtype)을 지정
dtype = {
    "name": "TEXT",
    "professor": "TEXT",
    "day1": "TEXT",  # 요일 필드는 문자열로 처리
    "day2": "TEXT",  # 요일 필드는 문자열로 처리
    "starttime1": "TEXT",  # 시간 필드도 문자열로 처리 가능
    "endtime1": "TEXT",
    "starttime2": "TEXT",
    "endtime2": "TEXT",
    "place": "TEXT",
    "major": "TEXT",
}

# DataFrame을 SQL 테이블로 저장
df.to_sql(name='eclass_classlist', con=conn, if_exists='replace', dtype=dtype, index=True, index_label="id")

# 데이터베이스 연결 종료
conn.close()
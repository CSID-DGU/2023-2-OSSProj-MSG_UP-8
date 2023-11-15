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

# CSV 파일을 Pandas DataFrame으로 읽기 (헤더 무시)
df = pd.read_csv('classlist.csv', encoding="utf-8", header=None)

# 첫 번째 행 삭제
df = df.iloc[1:]  # 첫 번째 행을 삭제

conn = sqlite3.connect(database)

# 데이터 유형(dtype)을 지정
dtype = {
    "id": "int64",
    "name": "str",
    "professor": "str",
    "day1": "str",
    "day2": "str",
    "starttime1": "datetime64",
    "endtime1": "datetime64",
    "starttime2": "datetime64",
    "endtime2": "datetime64",
    "place": "str",
    "major": "str",
}

# 데이터 유형 적용
# df = df.astype(dtype)



# 테이블 열 이름 지정
df.columns = ['id', 'name', 'professor', 'day1', 'day2', 'starttime1', 'endtime1', 'starttime2', 'endtime2', 'place', 'major']

df.to_sql(name='eclass_classlist', con=conn, if_exists='replace', dtype=dtype, index=False)

conn.close()

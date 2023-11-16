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
df = pd.read_csv('classlist.csv', encoding="euc-kr")

database = "db.sqlite3"
conn = sqlite3.connect(database)

# 데이터 유형(dtype)을 지정
dtype = {
    "name": "CharField",
    "professor": "CharField",
    "day1": "CharField",
    "day2": "CharField",
    "starttime1": "CharField",
    "endtime1": "CharField",
    "starttime2": "CharField",
    "endtime2": "CharField",
    "place": "CharField",
    "major": "CharField",
}

df.to_sql(name='eclass_classlist', con=conn, if_exists='replace', dtype=dtype, index=True, index_label="id")

conn.close()

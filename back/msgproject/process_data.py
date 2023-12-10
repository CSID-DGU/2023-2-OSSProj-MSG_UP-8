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
df = pd.read_csv('classlist.csv', encoding="utf-8")

# 'classtime' 열이 문자열이며 여러 식별자를 포함한다고 가정하고, 이를 처리합니다.
# 'classtime' 열을 문자열로 변환합니다.
# df['강의시간표'] = df['강의시간표'].apply(lambda x: ','.join(map(str, x.split(','))))

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
    "classtime": "CharField",
}

# 테이블 열 이름 지정
df.columns = ['name', 'professor', 'day1', 'day2', 'starttime1', 'endtime1', 'starttime2', 'endtime2', 'place', 'classtime']

database = "db.sqlite3"
conn = sqlite3.connect(database)

df.to_sql(name='eclass_classlist', con=conn, if_exists='replace', dtype=dtype, index=True, index_label="id")

# 데이터베이스 연결 종료
conn.close()
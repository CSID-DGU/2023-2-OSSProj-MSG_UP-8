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
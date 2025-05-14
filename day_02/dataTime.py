import time
from datetime import datetime,timedelta
import calendar

date1 = datetime.now()

cal = calendar.month(date1.year,date1.month)
print ("Here is the calendar:")
print (cal)

print(time.asctime(time.localtime(time.time())))
print(datetime.now())



date2= date1+timedelta(days = 4)
print("Date after 4 days:", date2)

date3 = date1-timedelta(15)
print("Date before 15 days:", date3)

var year = 1901;
isLeapYear = false;
var totalSundays = 0;
var currentDay = 2;//Starts on a Monday
var month;

while (year <= 2000) {
    isLeapYear = false;

    if ((year % 4) == 0) {
        if ((year % 100) == 0 && (year % 400) == 0) {
            isLeapYear = true;
        }
        else if ((year % 100) == 0 && (year % 400) != 0) {
            isLeapYear = false;
        } else {
            isLeapYear = true;
        }
    }
    for (month = 1; month <= 12; month++) {
        if (currentDay == 7) {
            totalSundays++;
        }
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            //January,March,May,July,August,October,December
            currentDay += 3;
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            //April,June,September,November
            currentDay += 2;
        } else if (month == 2 && isLeapYear) {
            //February has 29 days in a Leap Year
            currentDay += 1;
        }

        if (currentDay > 7) {
            currentDay = currentDay - 7;
        }
    }
    year++;
}
document.write('Solution : The total number of Sundays that fell in the first of the month is: ' + totalSundays);



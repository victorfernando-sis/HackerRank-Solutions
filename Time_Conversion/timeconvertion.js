// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    const hour = s.slice(0,2)
    const beforeMidday = s.slice(-2) == 'AM'
    let militaryHour
    if (beforeMidday){
        militaryHour = (hour == '12')? '00': hour
    } else {
        militaryHour = (parseInt(hour) != 12 )? parseInt(hour) + 12 : '12'
    }
    
    return militaryHour.toString() + s.slice(2,8)
}

// q1
function power(a,b) {
    return Math.pow(a,b)
}
document.write(power(5,2), "<br>")

// 2nd method
function power(a,b) {
    return a**b
}
document.write(power(5,2), "<br>")

// q2
function leapYear(year) {
    if((year%400 === 0) || (year%4 === 0 && year%100 !== 0)){
         return year + " is a leap year"
    }else {
        return year + " is not a leap year"
    }  
}
var user = prompt("Enter a year")
document.write(leapYear(user))

// q3
function calcArea(area) {
    function s (a,b,c){
        return (a+b+c)/2
    }
    return s(s-a)(s-b)(s-c)
}
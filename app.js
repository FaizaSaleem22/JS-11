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
// function leapYear(year) {
//     if((year%400 === 0) || (year%4 === 0 && year%100 !== 0)){
//          return year + " is a leap year"
//     }else {
//         return year + " is not a leap year"
//     }  
// }
// var user = prompt("Enter a year")
// document.write(leapYear(user))

// q3
// function calcS(a,b,c) {
//     return (a+b+c)/2
// }
// function calcArea(a,b,c){
//     var s = calcS(a,b,c) 
//     return Math.sqrt(s*(s-a)*(s-b)*(s-c));
// }
// document.write(calcArea(3,4,5))

// q4
// function calcAvg(s1,s2,s3){
//     return Math.round((s1+s2+s3)/3)
// }
// function calcParcent(s1,s2,s3) {
//     var totalObt = s1+s2+s3
//     var total = 300
//     return Math.round((totalObt/total)*100)
// }
// function main(){
//     var average = calcAvg(s1,s2,s3);
//     var percentage = calcParcent(s1,s2,s3);
//     document.write("average is ", average, "<br>")
//     document.write("percentage is ", percentage, "%")
// }
// var s1 = +prompt("Enter marks for Subject 1:")
// var s3 = +prompt("Enter marks for Subject 2:")
// var s2 = +prompt("Enter marks for Subject 3:")
// main();

// q5
// function find(str, char){
//     for(var i=0; i<str.length; i++){
//         if(str[i] === char){
//             return i
//         }
//     }
//     return -1
// }
// var userStr = prompt("Enter a string")
// var userChar = prompt("Enter a character")
// document.write("index of " , userChar, " is ", find(userStr,userChar));

// q6
// function deleteVowels(sentence){
//     var noVowels = ""
//     for(var i=0; i<sentence.length;i++){
//         if(sentence[i] !== "a" && sentence[i] !== "e" && sentence[i] !== "i" && sentence[i] !== "o" && sentence[i] !== "u")
//             noVowels += sentence[i]
//     }
//     return noVowels
// }
// var user = prompt("enter any sentence").toLowerCase()
// document.write("sentence without vowels is: ", deleteVowels(user))

// q7
function twoVowelsCount(text){
    var count = 0
    for(var i=0; i<text.length -1 ; i++){
        var first = text[i]
        var second = text[i+1]
        switch (first)  {
            case "a" :
            case "e" :
            case "i" :
            case "o" :
            case "u" :
                switch (second) {
                    case "a" :
                    case "e" :
                    case "i" :
                    case "o" :
                    case "u" :
                        count ++
                        break;
                }
        }
    }
    return count;

}
var sentence = "please read this application and give me gratuity"
document.write("occurences of two vowels in succcession are ",twoVowelsCount(sentence), " times")

let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일

document.write(year + '/' + month + '/' + date)
document.write('<br>')
document.write(day);
const StoryDate =  document.getElementById("date");
const StoryDate2 = document.getElementById("date2");
StoryDate.innerText = `${year}.${month}.${date}`;
StoryDate2.innerText = `${year}.${month}.${date}`;
function HomeBtn(){
location.href ='index.html';
}
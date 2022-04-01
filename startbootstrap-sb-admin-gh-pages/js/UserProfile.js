
let today = new Date();   
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일
const UserId = document.querySelector("#UserId");
let UID = "박진우";
document.write(year + '/' + month + '/' + date)
document.write('<br>')
document.write(day);
const StoryDate =  document.querySelector("#date");
const StoryDate2 = document.getElementById("date2");
const StoryDate3 = document.getElementById("date3");
StoryDate.innerText = `${year}.${month}.${date}`;
StoryDate2.innerText = `${year}.${month}.${date}`;
StoryDate3.innerText = `${year}.${month}.${date}`;
UserId.innerText = `${UID} (${month}.${date})`;
function HomeBtn(){
location.href ='index.html';
}
function LogOutBtn(){
    location.href ='login.html';
    }
    function showPopUp() { 
        //창 크기 지정 
        var width = 500; var height = 500; 
        //pc화면기준 가운데 정렬
         var left = (window.screen.width / 2) - (width/2); var top = (window.screen.height / 4); 
        //윈도우 속성 지정 
        var windowStatus = 'width='+width+', height='+height+', left='+left+', top='+top+', scrollbars=yes, status=yes, resizable=yes, titlebar=yes'; 
        //연결하고싶은url 
        const url = "EditProfile.html";
        //등록된 url 및 window 속성 기준으로 팝업창을 연다. 
        window.open(url, "hello popup", windowStatus); }

    
// let city=document.getElementById('demo');
// let result=[];
// function finddegree(){
//     getdegree(city.value);
//     displaydegree();
// }
// function getdegree(kewword){
//     var xhr=new XMLHttpRequest;
// xhr.addEventListener('readystatechange',function(){
//     if(xhr.readyState==4){
//         result=JSON.parse(xhr.responseText);
//         displaydegree();
//         console.log(result)
//     }
// })
// xhr.open('get',`https://api.weatherapi.com/v1/search.json?key=d5170c71830f47a0820113500231508&q=${kewword}`);
// xhr.send();
// }
// getdegree('cairo');
// function displaydegree(){
//     let res=``;
//     for(let i=0;i<result.length;i++){
//         res+=`
//         <div class="col-lg-4 col-md-12 col-sm-12 first">
//                     <div class="date one">
//                         <span>Monday</span>
//                         <span>14August</span>
//                     </div>
//                     <div class="content">
//                         <div class="degree">
//                             <p>${city.value}</p>
//                             <div class="image">
//                                 <span>34<sup>o</sup>C</span>
//                                 <img src="images/113.png" alt="">
//                             </div>
//                         </div>
//                         <div class="custom">Sunny</div>
//                         <div class="icons">
//                             <span>
//                             <img src="images/icon-umberella@2x.png" alt="">20%
//                             </span>
//                             <span>
//                                 <img src="images/icon-wind@2x.png" alt="">18km/h
//                             </span>
//                             <span>
//                                 <img src="images/icon-compass@2x.png" alt="">East
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-lg-4 col-md-12 col-sm-12 second">
//                     <div class="date two">
//                         <span>Tuesday</span>
//                     </div>
//                     <div class="degree">
//                         <div class="image">
//                             <img src="images/113.png" alt="">
//                         </div>
//                         <div class="deg">
//                             <span class="big">39.4<sup>o</sup>C</span>
//                             <span class="small">24.7<sup>o</sup>C</span>
//                         </div>
//                         <div class="custom">Sunny</div>
//                     </div>
//                 </div>
//                 <div class="col-lg-4 col-md-12 col-sm-12 third second ">
//                     <div class="date two">
//                         <span>Wednesday</span>
//                     </div>
//                     <div class="degree">
//                         <div class="image">
//                             <img src="images/113.png" alt="">
//                         </div>
//                         <div class="deg">
//                             <span class="big">39.4<sup>o</sup>C</span>
//                             <span class="small">24.7<sup>o</sup>C</span>
//                         </div>
//                         <div class="custom">Sunny</div>
//                     </div>
//                 </div>
//         `
//     }
//     document.getElementById('box').innerHTML=res;
// }
// displaydegree();


// let city=document.getElementById('demo');

// var xhr=new XMLHttpRequest;
// var savedata=[];
// xhr.addEventListener('readystatechange',function(){
//     if(xhr.readyState==4){
//         savedata=JSON.parse(xhr.responseText);
//         displaydegree();
//         // console.log(savedata);
//     }
// })
// xhr.open('get',`https://api.weatherapi.com/v1/search.json?key=d5170c71830f47a0820113500231508&q=lond`);
// xhr.send();
// // function finddegree(){
// //     // displaydegree();
// // }

// function displaydegree(){
//     document.getElementById('box').innerHTML=`
//     <div class="col-lg-4 col-md-12 col-sm-12 first">
//     <div class="date one">
//         <span>Monday</span>
//         <span>14August</span>
//     </div>
//     <div class="content">
//         <div class="degree">
//             <p>cairo</p>
//             <div class="image">
//                 <span>34<sup>o</sup>C</span>
//                 <img src="images/113.png" alt="">
//             </div>
//         </div>
//         <div class="custom">Sunny</div>
//         <div class="icons">
//             <span>
//             <img src="images/icon-umberella@2x.png" alt="">20%
//             </span>
//             <span>
//                 <img src="images/icon-wind@2x.png" alt="">18km/h
//             </span>
//             <span>
//                 <img src="images/icon-compass@2x.png" alt="">East
//             </span>
//         </div>
//     </div>
// </div>
// <div class="col-lg-4 col-md-12 col-sm-12 second">
//     <div class="date two">
//         <span>Tuesday</span>
//     </div>
//     <div class="degree">
//         <div class="image">
//             <img src="images/113.png" alt="">
//         </div>
//         <div class="deg">
//             <span class="big">39.4<sup>o</sup>C</span>
//             <span class="small">24.7<sup>o</sup>C</span>
//         </div>
//         <div class="custom">Sunny</div>
//     </div>
// </div>
// <div class="col-lg-4 col-md-12 col-sm-12 third second ">
//     <div class="date two">
//         <span>Wednesday</span>
//     </div>
//     <div class="degree">
//         <div class="image">
//             <img src="images/113.png" alt="">
//         </div>
//         <div class="deg">
//             <span class="big">39.4<sup>o</sup>C</span>
//             <span class="small">24.7<sup>o</sup>C</span>
//         </div>
//         <div class="custom">Sunny</div>
//     </div>
// </div>
//     `;
// }
// displaydegree();


let search='cairo';
let mySearch=document.getElementById('demo');
const Days=["Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let xhr=new XMLHttpRequest;
let arr=[];
let result=``;
xhr.addEventListener('readystatechange',function(){
    if(xhr.readyState==4){
        arr=JSON.parse(xhr.responseText);
        for(let i=0;i<3;i++){
            let ch=arr.current.wind_di;
            let dir;
            switch(ch){
                case 'N':
                    dir = "North"
                    break;
                case 'E':
                    dir = "East"
                    break;
                case 'W':
                    dir = "West"
                    break;
                case 'S':
                    dir = "South"
                    break;
                // default:
                //     dir = ch
                //     break;
            }
            var d = new Date(arr.forecast.forecastday[i].date)
            let day = Days[d.getDay()];
            result+=`
            <div class="col-lg-4 col-md-12 col-sm-12 first">
        <div class="date one">
            <span>${day}</span>
            <span>${d.getDate()} ${months[d.getMonth()]}</span>
        </div>
        <div class="content">
            <div class="degree">
                <p>${arr.location.name}</p>
                <div class="image">
                    <span>${arr.forecast.forecastday[i].day.avgtemp_c}<sup>o</sup>C</span>
                    <img src="https:${arr.forecast.forecastday[i].day.condition.icon}" alt="">
                </div>
            </div>
            <div class="custom">${arr.forecast.forecastday[i].day.condition.text}</div>
            <div class="icons">
                <span>
                <img src="images/icon-umberella@2x.png" alt="">${arr.forecast.forecastday[i].day.avghumidity}%
                </span>
                <span>
                    <img src="images/icon-wind@2x.png" alt=""> ${arr.current.wind_kph}
                </span>
                <span id="wind">
                    <img src="images/icon-compass@2x.png" alt="">${dir}
                </span>
            </div>
        </div>
    </div>`
            console.log(day);
        }
        displayweather();
        
        console.log(arr);

    }
})
function weather(){
    xhr.open('get','https://api.weatherapi.com/v1/forecast.json?key=d5170c71830f47a0820113500231508&q='+search+'&days=3')
    xhr.send();
}
weather();
function findweather(){
    search=mySearch.value.toLowerCase();
    weather();
}
function displayweather(){
    document.getElementById('box').innerHTML=result;
}
// document.getElementById('wind').innerHTML=`
// if (arr.current.wind_dir == "W") {
//     dir.innerHTML = "<img src="img/icon-compass.png" class="me-1">" + "West";
//   } else if (arr.current.wind_dir == "E") {
//     dir.innerHTML = "<img src="img/icon-compass.png" class="me-1">" + "East";
//   } else if (arr.current.wind_dir == "N") {
//     dir.innerHTML = "<img src="img/icon-compass.png" class="me-1">" + "North";
//   } else {
//     dir.innerHTML = "<img src="img/icon-compass.png" class="me-1">" + "South";
//   }
// }`
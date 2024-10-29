const mybtn=()=>{
const getvalue=document.getElementById('inputtext').value;
const key='afe35456ee032511f499eafc0697ffd1';
const apikey=`https://api.openweathermap.org/data/2.5/weather?q=${getvalue}&appid=${key}&units=metric`;


fetch(apikey).then(response=>response.json()).then(data=>{
  console.log(data);
  
 const country=data.sys.country;
 const weather=data.weather[0].main;
const descrip=data.main.temp;
const humidity=data.main.humidity;
const windspeed=data.wind.speed;
//const wind=data.wind.speed;


const resultarea=document.getElementById('result-area');

resultarea.innerHTML=`
<h1>country is:${country}</h1>
<p>weather:${weather}</p>
<p>temparature:${descrip} &#8451</p>
<p>humidity:${humidity}%</p>
<p>wind speed:${windspeed}m/s</p>



`
document.getElementById('inputtext').value='';


}).catch((error)=>{

  document.getElementById('heading-id').textContent='city not found';
  document.getElementById('inputtext').value='';

})



}
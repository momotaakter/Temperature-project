const getweather=()=>{
    const getvalue=document.getElementById('myinput').value;
    const apikey='afe35456ee032511f499eafc0697ffd1'
    const apilink=`https://api.openweathermap.org/data/2.5/weather?q=${getvalue}&appid=${apikey}`
     
  
    fetch(apilink).then(res=>res.json()).then(data=>{
      console.log(data);
  
      const country=data.sys.country;
      const tem=data.main.temp;
      const windspeed=data.wind.speed;
      const description=data.weather[0].description;
  
      const mydiv=document.getElementById('mydiv');
      mydiv.innerHTML=`
      <p>${country}</p>
      <p>${tem}\u00B0C </p>
      <p>${windspeed}</p>
     <p>${description} </p> 
      
      `
    })
  
  
  }
  
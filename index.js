const apiKey="4199ab1c12ca7baf76b170848147ebf4";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data=await response.json();
    console.log(data);
    // to convertit in celsius
    var tempCelsius=data.main.temp-273.15;
    //display
    console.log(tempCelsius +"&deg;C");
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=tempCelsius.toFixed(2);
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="cloud-images.";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear-image.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain-image.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle-image.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist-image.png";
    }
    document.querySelector(".weather").style.display="block";
    
    



}
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    searchBox.value="";
    console.log(searchBox.value);
    console.log(searchBtn);
    console.log(searchBox);
    console.log(checkWeather);
    console.log(apiUrl);
    console.log(apiKey);
    console.log(searchBox.value);
    console.log(searchBtn);
    console.log(searchBox);
    console.log(checkWeather);
    console.log(apiUrl);
    console.log(apiKey);
    console.log(searchBox.value);
    console.log(searchBtn);
    console.log(searchBox);
    console.log(checkWeather);
    console.log(apiUrl);
    console.log(apiKey);
    console.log(searchBox.value);
    console.log(searchBtn);
    console.log(searchBox);
    console.log(checkWeather);
    console.log(apiUrl);
    console.log(apiKey);
    console.log(searchBox.value);
})
//checkWeather();

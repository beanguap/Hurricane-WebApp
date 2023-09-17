      // API Usage for weather check
              
      const apiKey = "80fcadb908ffcc5bf593bba6119ae1dc";
      const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weatherIcon")


      async function checkWeather(city){
        const respone = await fetch(apiURL + city + `&appid=${apiKey}`);

        if(respone.status == 404){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";

        } else {
          var data = await respone.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.floor(data.wind.speed) + " m/h";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/cloud.png"
  } 
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"
  } else if
  (data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"
  } else if
  (data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
  } else if
  (data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png"
  } else if
  (data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png"
  }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


        }

        

      }

      searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
      })

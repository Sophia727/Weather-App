let searchValue = document.querySelector("#searchBox");
searchValue.addEventListener("keyPress", functionEnter);

function functionEnter(e) {
  if (e.keyCode == 13) {
    getData(searchValue.value);
  }
}

function getData(value) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      value +
      "&appid=7a9c105c63b11bf8ab34a77454312fec"
  )
    .then(function (response) {
      return response.json;
    })
    .then(function (weather) {
      document.querySelector("#ville").innerHTML = weather.name;
      ducument.querySelector("#temp").innerHTML = weather.main.temp;
      document.querySelector("#min_max_temp").innerHTML =
        "Min: " + weather.main.temp_min + "/ Max: " + weather.main.temp_max;
      document.querySelector("#weather").innerHTML = weather.weather[0].main;
      document.querySelector("#weather_desc").innerHTML =
        weather.weather[0].description;
      document.querySelector("#wind_dir_speed").innerHTML =
        "Wind speed: " +
        weather.wind.speed +
        " / Wind Direction: " +
        weather.wind.deg;
    })
    .catch(function (err) {
      console.log(err);
    });

  function convToCelsius(temp) {
    let celsius;
    celsius = ((temp - 32) * 5) / 9;
  }

  let weatherBackground = "";
  switch (val) {
    case 1:
      "Clouds";
      result = document.body.style.backgroundImage =
        "url('https://cdn.wallpapersafari.com/4/53/JCZUF5.jpg')";
    case 2:
      "Clear";
      result = document.body.style.backgroundImage =
        "url('https://media.istockphoto.com/photos/beautiful-sky-with-white-cloud-background-picture-id517897328?b=1&k=20&m=517897328&s=170667a&w=0&h=QpeJ9U8Kdx7Wbj96k_8pYR_5NvM2FfcufYg2NJGqPUo=')";
    case 3:
      "Sunny";
      result = document.body.style.backgroundImage =
        "url('https://wallpaperaccess.com/full/1778999.jpg')";
    case 4:
      "Rain";
      result = document.body.style.backgroundImage =
        "url('https://images.news18.com/ibnlive/uploads/2021/07/1627056776_clouds-1600x900.jpg')";
  }
}

// function getData(value) {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//       value +
//       "&appid=c7d0116d59f52703a9b4afabfa3d4258"
//   )
//     .then(function (reponse) {
//       return reponse.json();
//     })
//     .then(function (weather) {
//       document.querySelector("#ville").innerHTML = weather.name;
//       document.querySelector("#temp").innerHTML = weather.main.temp;
//       document.querySelector("#min_max_temp").innerHTML =
//         "Min. " + weather.main.temp_min + " / Max. " + weather.main.temp_max;
//       document.querySelector("#weather").innerHTML = weather.weather[0].main;
//       document.querySelector("#weather_desc").innerHTML =
//         weather.weather[0].description;
//       document.querySelector("#wind_dir_speed").innerHTML =
//         "Direction de l'air: " +
//         weather.wind.deg +
//         " / Wind speed: " +
//         weather.wind.speed;
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

let weather = {
    apiKey: "e61b0c1c5c25ffa9d1c2ac461d7ac83d",
  fetchWheather: function (city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q="
   + city +
    "&units=metric&appid="
     + this.apiKey).then((response) => response.json()).then((data) => console.log(data))
  },

  displayWheather: function (data){

  }
};

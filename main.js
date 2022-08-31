let weather = {
    apiKey: "e61b0c1c5c25ffa9d1c2ac461d7ac83d",
  fetchWheather: function (city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q="
   + city +
    "&units=metric&appid="
     + this.apiKey).then((response) => response.json()).then((data) => this.displayWheather(data))
  },

  displayWheather: function (data){
    const {name} = data ;
    const { icon , description} = data.weather[0];
    const  {temp ,humidity } =data.main;
    const {speed } =data.wind;
    console.log(name ,icon, description,temp,humidity,speed);
    document.querySelector
  }
};

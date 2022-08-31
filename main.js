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
 
    document.querySelector(".city").innerText = "Wheather in " + name;
    document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText=description;
    document.querySelector(".temb").innerText=temp + " °C";
    document.querySelector(".humidity").innerText="Humidity : " + humidity + "%" ;
   document.querySelector(".wind").innerText = "Wind Speed : " + speed + "km/h"
   document.querySelector(".weather").classList.remove("loading");
   document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg?w=900&t=st=1661938989~exp=1661939589~hmac=a15a0de80de4a5b1f1146077dc3d7967dc4c631b963c3da2cf27077d7d5e4411')"
  },
  search:function(){
   this.fetchWheather(document.querySelector(".search-bar").value);
  }
};
document.querySelector(".search button").addEventListener("click" , function (){
    weather.search();
} );
document.querySelector(".search-bar").addEventListener("keyup" ,  function(event) {
if(event.key == "Enter"){
    weather.search();
}
})

weather.fetchWheather("Bangladesh");

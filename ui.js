class Ui{
    constructor(){
        this.location=document.getElementById('w-location');
        this.desc=document.getElementById('w-desc');
        this.string=document.getElementById('w-string');
        this.icon=document.getElementById('w-icon');
        this.details=document.getElementById('w-details');
        this.humidity=document.getElementById('w-humidity');
        this.dewpoint=document.getElementById('w-dewpoint');
        this.feelsLike=document.getElementById('w-feels-like');
        this.wind=document.getElementById('w-wind');
        
    }

    paint(weather){
        this.location.textContent=`Location: ${weather.name}`;
        this.desc.textContent=`Lat: ${weather.coord.lat} & Long: ${weather.coord.lon}`;
        this.string.textContent=`Temp: ${(((weather.main.temp)-273).toFixed(2))} °C`;
        this.icon.setAttribute('src','./icon2.gif');
        this.humidity.textContent=`Relative Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent=`Feels Like: ${((weather.main.feels_like)-273).toFixed(2)} °C`;
        this.details= new Date().getTimezoneOffset();
        this.dewpoint.textContent=`Timezone: ${(weather.timezone)} UTC`;
        this.wind.textContent=`Wind: ${weather.wind.speed} m/sec`;
    }
}

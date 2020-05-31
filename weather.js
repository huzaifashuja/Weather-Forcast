class Weather{
    constructor(city){
        this.apiKey="549845b67df010602cd109f9d6119732";
        this.city=city;
    }

    async getWeather(){
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        const responseData=await response.json();
        return responseData;     
    }

    changeLocation(city){
        this.city=city;  
      }

}
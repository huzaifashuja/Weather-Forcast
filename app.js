const storage=new Storage();
const weatherLocation=storage.getLocation();



const weather=new Weather(weatherLocation.city);
const ui=new Ui();
document.addEventListener('DOMContentLoaded',getWeather);
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city=document.getElementById('city').value;
    weather.changeLocation(city);
    storage.setLocation(city);
    getWeather();
    $('#locModal').modal('hide');
}); 
function getWeather(){
weather.getWeather()
.then(result=>ui.paint(result))
.catch(err=>console.log(err));
}


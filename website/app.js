/* Global Variables */
const apiKey = '&appid=422c3391dcffcb449ba6dff86783a4bd&units=mertic';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
//create an eventListener for the id="generate"
document.getElementById('generate').addEventListener('click', performAction);
//function to run on click
function performAction(){
    const newZip =  document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeather(baseURL,newZip, apiKey)
.then(function(data){
    console.log(data);
   postData('/addUserComment', {date : newDate,temp : data.temp,feeling : feelings});
   UpdateUI();
})
}
//GET request to the OpenWeatherMap API
const getWeather = async (baseURL,zip,key) => {

  const retry = await fetch(baseURL+zip+key)
  try {
    const data = await retry.json();
    console.log(data);
    let temp = data.main.temp;
    let date = data.date;
    let newData = {date: data.date , temp : data.main.temp};
    console.log(newData);
    return newData;
  }catch(exception) {
    alert('Oops,looks like you frogot to add the zipCode :D')
  }
}

//updating the UI

const UpdateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        document.getElementById('date').innerHTML = "Date : " + newDate;
        document.getElementById('temp').innerHTML = "Temperature : " +allData.temp + "°C";
        document.getElementById('content').innerHTML = "Your Feelings : " + allData.feeling;
    }catch(error){
        console.log('error',error)
    }
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

//the POST data function
const postData = async (url = "", data = {}) =>{
const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
});

try {
    const newData = await JSON.parse(JSON.stringify(response));
    console.log(newData);
    return newData;
}catch(error){
    console.log("error",error);
   }
} 
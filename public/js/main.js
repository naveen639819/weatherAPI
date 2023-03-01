// const { response } = require("express");
// let cityVal = prompt("Enter city name here");
// let url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityVal+'&appid=3280da102fd6405fcbd53e34295b57a6';
// fetch(url).then(response => response.json()).then(data => {
//     const temp = data['main']['temp']
// });
// const buttonn = document.getElementById("subbtn");
// const cityName = document.getElementById("exampleInputEmail1");
// const city_name = document.getElementById("city_name");
// const city_temp = document.getElementById("city_temp")

// const { response } = require("express");

// city_name.textContent = cityVal
// city_temp.textContent = temp 
// buttonn.addEventListener("click",function(event){
//     event.preventDefault();
//     cityName.innerText = cityVal

    // // const cityName = document.getElementById("exampleInputEmail1");
    // let cityVal = prompt("Enter city name here");
    // alert(cityVal) 
    // const url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityVal+'&appid=3280da102fd6405fcbd53e34295b57a6';
    // alert(url)
    // fetch(url).then(response => response.json()).then(data => console.log(data));
// .catch(err => alert(err))
// }) 
//     fetch(url)
//     .then(response => {
//       if (!response.ok) { 
//         throw new Error("Network response was not ok");
//       }
//       alert("Y2")
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log("Fetch Error :-S", err);
//     });

// }) 
 
// const getInfo = async(event) =>{
//     event.preventDefault();
//     let cityVal = cityName.value;
//     if (cityVal === ""){
//         city_name.innerText = "Please write city name properly"
//         await let url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityVal+'&appid=3280da102fd6405fcbd53e34295b57a6'
//     } 
//     else{ 
//         try{
        
//         https.get(url,function(response){
//             console.log(response)
//         })


//         } catch {
//            city_name.innerText = cityVal
//            alert(url)

//         }

//     }
// }
 
// button.addEventListener("click",getInfo) 

//******************************************** */
// const button = document.getElementById("subbtn");


// button.addEventListener("click", function() {
//   const cityName = document.getElementById("exampleInputEmail1");
//   const cityVal = cityName.value;
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=3280da102fd6405fcbd53e34295b57a6`;

//   console.log(url);

//   fetch(url)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log("Fetch Error :-S", err);
//     });
// });


//********************************************************** */


/*************************************************************/


// window.onload = async function(){
// const city_name_box = document.getElementById("city_name");
// const info_sentence = document.getElementById("infosentence");
// cityName = prompt("Enter city name : ")
// let url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=3280da102fd6405fcbd53e34295b57a6' 
// const response = await fetch(url)
// const data = await response.json()
// const arrData = [data]
// console.log(arrData)
// }



// .catch(error => console.error(error));
const submitBtn = document.getElementById("subbtn");
const city_name_box = document.getElementById("city_name");
const info_sentence = document.getElementById("infosentence");
const temp_value = document.getElementById("city_temp");
const status_box = document.getElementById("city_status");
const getInfo = async(event) =>{
    event.preventDefault();
    const cityName = document.getElementById("exampleInputEmail1");
    let cityVal = cityName.value;

    
    if(cityVal ===""){
        info_sentence.classList.add("add_color")
        info_sentence.innerText = "Please write city name before search!"

    }else{
        try{
        let url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityVal+'&units=metric&appid=3280da102fd6405fcbd53e34295b57a6'
        const response = await fetch(url);
        const data = await response.json();
        const dataString = JSON.stringify(data)
        const obj = dataString
        const weatherData = JSON.parse(obj)
        temp_value.innerText = weatherData.main.temp;
        city_name_box.innerText = cityVal
        status_box.innerText = weatherData.weather[0].description
        info_sentence.innerText = "Weather of your city"
        info_sentence.classList.remove("add_color") 


        // info_sentence.innerText = "Sorry not able to fetch data at this time!"
        }catch{
            info_sentence.classList.add("add_color")
            info_sentence.innerText = "Please write city name properly!"
        }
 

    } 
}


submitBtn.addEventListener("click",getInfo);
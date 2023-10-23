//let username = prompt("Lütfen İsminizi Giriniz")

//document.querySelector("#myName").innerHTML = username



//let day = currentDate.get

var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];


setInterval(() => {
    let currentDate = new Date()
    let hour = currentDate.getHours()
    let minute = currentDate.getMinutes()
    let second = currentDate.getSeconds()
    let dayName = days[currentDate.getDay()]
    document.querySelector("#myClock").innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second} ${dayName}`  
},100);




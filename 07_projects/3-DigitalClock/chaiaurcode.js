const clock = document.getElementById("clock");

// const date = new Date();
// console.log(date);
// console.log(date.toLocaleTimeString()); // ye time ko ek baar print karega , aur jab jab hum code run karenge tab ek baar but hume to har second change chahiye

// setIntervaL(fucntion(){}, 1000)
// fucntion hota hai jo khud jab tak ye code run hota rahega ya , page open rahega ye function es interval tak run hota rahega
// interview me kaam aata hai

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// Sirf es function se digital clock ban gya .





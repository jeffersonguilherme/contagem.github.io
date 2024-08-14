
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");
const pontosElement = document.querySelector("[data-pontos]");



const countdown = () => {

  //const now = new Date();
  //const now = new Date();

  const now = new Date();
  const nextYar = now.getFullYear();
  //const targetDate = new Date(now.getFullYear(), 7, 7);
    const targetDate = new Date('aug 25 2024 21:00:0');
  

  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  
  
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
  const daysHoras = (days*24)+hours;
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  let render

  if(hours > 100){
    render = (hours, minutes, seconds) => {
      hoursElement.innerHTML = String(hours).padStart("3", 0);
      minutesElement.innerHTML = String(minutes).padStart("2", 0);
      secondsElement.innerHTML = String(seconds).padStart("2", 0);
    };
  }else{
    render = (hours, minutes, seconds) => {
      hoursElement.innerHTML = String(hours).padStart("2", 0);
      minutesElement.innerHTML = String(minutes).padStart("2", 0);
      secondsElement.innerHTML = String(seconds).padStart("2", 0);
    
    };
  }

  render(daysHoras,minutes, seconds);
  console.log(nextYar);
};

countdown();
setInterval(countdown, 1000);

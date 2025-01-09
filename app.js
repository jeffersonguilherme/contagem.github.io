//ajuste da logica
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");
const pontosElement = document.querySelector("[data-pontos]");
const paragrafoElement = document.querySelector("[frase]");
const cronometroElement = document.querySelector("[relogio]");


    //horario de inicio da contage

      const funcaoTime = () =>{
      const now2 = new Date();
      const targetDate2 = new Date('jan 10 2025 17:29:0');
      const timeLeft2 = targetDate2 - now2;
      console.log(timeLeft2);

      if(timeLeft2 < 0){
        const countdown = () => {
        
          //Data e hora inicio da Live  'aug 19 2024 20:03:0'
          //Data e hora final das horas 'aug 25 2024 16:03:0'
          //Data e hora fechamento demais loja 'aug 25 2024 19:00:0'
          //Data e hora fechamento Caruaru 'aug 25 2024 18:00:0'
          
          const now = new Date();
          const targetDate = new Date('jan 10 2025 17:29:0');
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

          if(timeLeft < 0){
            
            paragrafoElement.classList.remove("apaga");
            cronometroElement.classList.add("apaga");
          }
        
          render(days, daysHoras,minutes, seconds);
        };
        
        countdown();
        setInterval(countdown, 1000);
      }
      console.log(timeLeft2);
    }
    
    setInterval(funcaoTime, 1000);

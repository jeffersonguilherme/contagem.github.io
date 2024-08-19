//ajuste da logica
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");
const pontosElement = document.querySelector("[data-pontos]");

    //horario de inicio da contagem

      const funcaoTime = () =>{
      const now2 = new Date();
      const targetDate2 = new Date('aug 19 2024 20:03:0');
      const timeLeft2 = targetDate2 - now2;
      console.log(timeLeft2);

      if(timeLeft2 < 0){
        const countdown = () => {
        
          //Data e hora inicio da Live  'aug 19 2024 20:03:0'
          //Data e hora final das horas 'aug 25 2024 16:03:0'
          //Data e hora fechamento demais loja 'aug 25 2024 19:00:0'
          //Data e hora fechamento Caruaru 'aug 25 2024 18:00:0'
          
          const now = new Date();
          const targetDate = new Date('aug 25 2024 16:03:0');
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
        };
        
        countdown();
        setInterval(countdown, 1000);
      }
      console.log(timeLeft2);
    }
    
    setInterval(funcaoTime, 1000);

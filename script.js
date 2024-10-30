
document.addEventListener("DOMContentLoaded", function() {
    const starCanvas = document.getElementById('star-canvas');
    const ctx = starCanvas.getContext('2d');
  
    function resizeCanvas() {
        starCanvas.width = document.getElementById('button').offsetWidth;
        starCanvas.height = document.getElementById('button').offsetHeight;
      }
    resizeCanvas();
    
    const stars = createStars();
    
    
    function createStars() {
      const stars = [];
      for (let i = 0; i < 100; i++) {
        stars.push({
                x: Math.random() * starCanvas.width,
                y: Math.random() * starCanvas.height,
                size: Math.random() * 2 + 1,
                speed: Math.random() * 1 + 1
            });
        }
        return stars;
    }

    function drawStars(stars) {
        ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 1.5);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
            star.x -= star.speed; 
            if (star.x < -10) {
              star.x = starCanvas.width + Math.random() * 100;
              star.y = Math.random() * starCanvas.height; 
            }
          });
        }
        
        function animate() {
        drawStars(stars);
        requestAnimationFrame(animate);
      }
      
    window.addEventListener('resize', () => {
      resizeCanvas();
      stars = createStars(); 
    });animate(); ón
});

function launchFireworks(event) {
  
  const fireworksContainer = document.querySelector('.fireworks-container');
  const particleCount = 100;
  const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
  
  setTimeout(() => {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; 
  }, 400);
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = `${event.clientX}px`;
    particle.style.top = `${event.clientY}px`;
    fireworksContainer.appendChild(particle);
    
    particle.animate([
          { transform: 'translate(0, 0) scale(3)' },
          { transform: `translate(${Math.random() * 1000 - 500}px, ${Math.random() * 1000 - 500}px) scale(0)` }
      ], {
          duration: 1000,
          easing: 'ease-out',
          fill: 'forwards'
      });

      particle.addEventListener('animationend', () => particle.remove());
    }
  }
  
  document.getElementById('close-popup').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  });
  
  document.addEventListener('DOMContentLoaded', () => {
  const closePopupButton = document.getElementById('close-popup');
  closePopupButton.addEventListener('click', () => {
      const popup = document.getElementById('popup');
      popup.style.display = 'none';
    });
  });
  
  
  
  
  function updateText() {
    const element = document.querySelector(".guada");
    const element2= document.querySelector(".francis");
    const element3= document.querySelector(".muestra");
    if (window.innerWidth <= 1000) {
      element.innerHTML = "Los alumnos de segundo año ya estan trabajando en un sistema que facilitará inscripciones, trámites, y gestiones para alumnos y personal de la institución.";
      element2.innerHTML = "Uno de nuestros compañeros ya está trabajando como desarrollador de software en la Municipalidad de Tinogasta. Puedes ver la nota completa <a href='https://www.facebook.com/municipio.tinogasta/posts/pfbid0h66byaaiqJby82mEoT5GBLq5jP95eVNT4v4DPnVxokCvkfxJJhYdcQ7n5VJeL8yyl?locale=es_LA' target='_blank' style='color: aliceblue;'>aquí</a>";
      element3.innerHTML = "¡Este 30-10-2024 Vení a la plaza principal de Tinogasta!. Vamos a estar presentando los proyectos más relevantes del año y demostrando todo lo aprendido en una cursada mágica.";
    } else {
      element.innerHTML = "Los alumnos de segundo año ya estan trabajando en un sistema para la institución. <br><br> El objetivo de este proyecto es sistematizar todas las tareas administrativas y bindar soluciones a aquellos estudiantes y futuros alumnos que residen lejos del establecimiento, así mismo al personal de la institución. <br> Con esta plataforma facilitaremos inscripciones, trámites, y otras gestiones administrativas.";
      element2.innerHTML = "Uno de nuestros compañeros ya está trabajando como desarrollador de software en la Municipalidad de Tinogasta. Puedes ver la nota completa <a href='https://www.facebook.com/municipio.tinogasta/posts/pfbid0h66byaaiqJby82mEoT5GBLq5jP95eVNT4v4DPnVxokCvkfxJJhYdcQ7n5VJeL8yyl?locale=es_LA'; target='_blank'; style='color: aliceblue;'>aquí</a> <br><br> Tras finalizar el primer año de la Tec., Francis ya ejerce como programador desarrollando trabajos increíbles. <br><br> Visita su <a href='https://francis-seura.ar/' target='_blank'; style='color: #fff'>portfolio web</a>";
      element3.innerHTML = "¡Este 30-10-2024 Vení a la plaza principal de Tinogasta!. Vamos a estar presentando los proyectos más destacados del año y demostrando todo lo aprendido en una cursada mágica. ¡Sumate a esta aventura de programación, electrónica, luces, robótica, y forma parte de nuestro universo digital!";
    }
  }
  window.addEventListener("resize", updateText);
window.addEventListener("load", updateText);


document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
  
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  });

  let index = 0;

  function showSlide() {
    const slides = document.querySelectorAll('.banner .carousel-item');
    slides.forEach((slide, i) => {
      slide.classList.remove('active'); 
      if (i === index) {
        slide.classList.add('active'); 
      }
    });
  }
  
  function nextSlide() {
    const slides = document.querySelectorAll('.banner .carousel-item');
    index = (index + 1) % slides.length; 
    showSlide();
  }
  
  function prevSlide() {
    const slides = document.querySelectorAll('.banner .carousel-item');
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
  }
  
  setInterval(nextSlide, 10000);

  showSlide();




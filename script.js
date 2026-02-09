document.addEventListener('DOMContentLoaded',function(){
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if(menuToggle){
    menuToggle.addEventListener('click',function(){
      mainNav.classList.toggle('show');
    });
  }

  // Intersection Observer pro animace při scrollování
  const observerOptions = {
    threshold:0.1,
    rootMargin:'0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        entry.target.style.opacity = '0';
        entry.target.offsetHeight; // trigger reflow
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  },observerOptions);

  // Sleduj všechny cardy
  document.querySelectorAll('.card').forEach(function(card){
    observer.observe(card);
  });

  // jednoduché odeslání formuláře (simulace)
  const form = document.getElementById('contactForm');
  const result = document.getElementById('formResult');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name || !email || !message){
        result.textContent = 'Vyplňte prosím všechna pole.';
        result.style.color = 'crimson';
        return;
      }
      // tady by se poslal požadavek na server
      result.style.color = 'green';
      result.textContent = 'Děkuji, vaše zpráva byla odeslána (simulace).';
      result.style.animation = 'fadeIn 0.3s ease-out';
      form.reset();
    });
  }

  // Smooth scroll pro odkazy
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener('click',function(e){
      const href = this.getAttribute('href');
      if(href !== '#' && document.querySelector(href)){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
      }
    });
  });
});


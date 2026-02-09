document.addEventListener('DOMContentLoaded',function(){
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if(menuToggle){
    menuToggle.addEventListener('click',function(){
      mainNav.classList.toggle('show');
    });
  }

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
      form.reset();
    });
  }
});

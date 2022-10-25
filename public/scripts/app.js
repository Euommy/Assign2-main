contactFormbutton.addEventListener('submit', (event) =>{
    event.preventDefault();
    formArray = Array.from(document.querySelectorAll('#contactForm input')).reduce((acc, input)=>({...acc,[input.id]: input.value}), {});
});




let button = document.querySelector('.advice_button');
let show_text = document.querySelector('.advice_text');
let show_id = document.querySelector('.advice_number');
let url = 'https://api.adviceslip.com/advice';

button.addEventListener('click', () => {
    request_advice();
    button.classList.toggle('active');
});

function request_advice(){
    fetch(url).then(response => {
        return response.json();
    }).then(result => {
        show_id.innerText = result.slip.id;
        show_text.innerText = result.slip.advice; 
    })
};

request_advice();
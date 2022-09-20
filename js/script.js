

let hidetext_btn = document.getElementById("hidetext-btn");

let hidetext = document.getElementById("hidetext");


hidetext_btn.addEventListener('click', toggletext);

function toggletext(){
    hidetext.classList.toggle('show');

    if(hidetext.classList.contains('show')){
        hidetext_btn.innerHTML = '- info';
    }

    else{
        hidetext_btn.innerHTML = '+ info';
    }

}
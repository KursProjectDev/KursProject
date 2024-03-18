// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
// current slide counter
let curSlide = 0;
let maxSlide = slides.length - 1;
// select next slide button
const nextSlide = document.querySelector(".btn-next");

nextSlide.addEventListener("click", function () {
if (curSlide === maxSlide) {
curSlide = 0;
} else {
curSlide ++;
}
slides.forEach((slide, indx) => {
slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
});
});
// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
if (curSlide === 0) {
curSlide = maxSlide;
} else {
curSlide--;
}

slides.forEach((slide, indx) => {
slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
});
});
// WIND
let formwind = document.getElementById('windform');
let er_email = document.getElementById('er_email');
let er_pass = document.getElementById('er_pass');
// REG
let formreg = document.getElementById('regform');
let er_fio = document.getElementById('er_fio');
let er_number = document.getElementById('er_number');
let er_emailreg = document.getElementById('er_emailreg');
let er_passreg = document.getElementById('er_passreg');

// *Форма входа
    // Ввойти в форму входа 
// Открытие
document.getElementById('open-end').addEventListener('click', function () {
    var popup = document.querySelector('.pop-up');
    popup.style.display = 'flex';
    if (formreg.style.display == 'flex')
    {
        formreg.style.display = 'none';
        formwind.style.display = 'flex';
        ClearForm();
    }
    document.body.style.overflow = 'hidden';
    popup.classList.add('openPop');
});
    // Перейти к форме регистрации
document.getElementById('open-regist').addEventListener('click', function (){
        formreg.style.display = 'flex';
        formwind.style.display = 'none';
        ClearForm();
});
    // Перейти к форме входа
document.getElementById('form-end').addEventListener('click', function() {
        formreg.style.display = 'none';
        formwind.style.display = 'flex';
        ClearForm();
});
// Закрытие
const closeBtn = document.querySelectorAll('.clous-end')
closeBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        var popup = document.querySelector('.pop-up');
        popup.classList.remove('openPop');
        popup.classList.add('closePop');
        
        setTimeout(function(){
            popup.style.display = 'none';
            popup.classList.remove('closePop');
            ClearForm();
        }, 400);
        
        document.body.style.overflow = 'auto';
    });
})
/*
document.getElementById('clous-ent').addEventListener('click', function () {
    var popup = document.querySelector('.pop-up');
    popup.classList.remove('openPop');
    popup.classList.add('closePop');
    console.log('sdfjkjhasdfjhkasdjk');
    setTimeout(function(){
        popup.style.display = 'none';
        popup.classList.remove('closePop');
        document.getElementById('email').value = '';
        document.getElementById('pass').value = '';
    }, 400);
    document.body.style.overflow = 'auto';
});
*/
// Проверка на запониность
document.getElementById('endbut').addEventListener('click', function (){
    // Вход
        // Поле email
    if (formwind.email.value == ""){
        er_email.innerHTML = "Поле email не заполненно";
        er_email.style.display = "block";
    }
    else
    {
        er_email.innerHTML = "";
        er_email.style.display = "";
    }
        // Поле pass
    if (formwind.pass.value == ""){
        er_pass.innerHTML = "Поле пароля не заполненно";
        er_pass.style.display = "block";
    }
    else
    {
        er_pass.innerHTML = "";
        er_pass.style.display = "";
    }
});
document.getElementById('regbut').addEventListener('click', function (){
    // Регистрация
        // Поле Fio
    if (formreg.FIO.value == ""){
        er_fio.innerHTML = "Поле ФИО не заполненно";
        er_fio.style.display = "block";
    }
    else
    {
        er_fio.innerHTML = "";
        er_fio.style.display = "";
    }
        // Поле number
    if (formreg.number.value == ""){
        er_number.innerHTML = "Поле номера не заполненно";
        er_number.style.display = "block";
    }
    else
    {
        er_number.innerHTML = "";
        er_number.style.display = "";
    }
        // Поле почты
    if (formreg.email.value == ""){
        er_emailreg.innerHTML = "Поле email не заполненно";
        er_emailreg.style.display = "block";
    }
    else
    {
        er_emailreg.innerHTML = "";
        er_emailreg.style.display = "";
    }
        // Поле pass
    if (formreg.pass.value == ""){
        er_passreg.innerHTML = "Поле пароля не заполненно";
        er_passreg.style.display = "block";
    }
    else
    {
        er_passreg.innerHTML = "";
        er_passreg.style.display = "";
    }
});
function ClearForm(){
    if (formwind.style.display == 'none')
    {
        formwind.email.value = '';
        formwind.pass.value = '';
        er_email.style.display = 'none';
        er_pass.style.display = 'none';
    }
    else
    {
        formreg.FIO.value = '';
        formreg.number.value = '';
        formreg.email.value = '';
        formreg.pass.value = '';
        er_fio.style.display = 'none';
        er_number.style.display = 'none';
        er_emailreg.style.display = 'none';
        er_passreg.style.display = 'none';
    }
}


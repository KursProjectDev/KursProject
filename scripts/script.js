// СКРОЛИНГ
function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Милисекунды
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    function easeInOutCubic(t, b, c, d) {
        // easeInOutCubic easing function
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }

    window.requestAnimationFrame(step);
}
// СКРОЛЛ СТРЕЛКА 
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    const currentScroll = window.scrollY;
    const btn = document.querySelector('.scroll-btn');

    if (currentScroll > lastScrollTop) {
        // Скрол вниз
        btn.classList.remove('show');
    } else {
        // Скрол вверх
        if (currentScroll > 20) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для мобильного и негативного скролинга
}, false);

function smoothScrollToTop() {
    const startPosition = window.scrollY;
    const distance = startPosition;
    const duration = 1000; // Милисекунды
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, -distance, duration));
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    function easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }

    window.requestAnimationFrame(step);
}
window.addEventListener('scroll', function() {
    var trig = document.getElementById('q-block');
    var rect = trig.getBoundingClientRect();
    var fixbox = document.querySelector('.q-slide');
    var textnum = document.getElementById('q-number');
    
    if (rect.top <= 0 && rect.bottom >= window.innerHeight){ // Порабоать над условием
        fixbox.style.position = 'fixed';
        fixbox.style.top = 0;
        textnum.textContent = "2";
    } else {
        fixbox.style.position = 'absolute';
        fixbox.style.bottom = 0;
        textnum.textContent = "1";
    }
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
let er_repepassreg = document.getElementById('er_repepassreg');
// Для пароля
var clickEays = document.getElementById('Eaysclick');
var imgEays = document.getElementById('openEays');
// Ввойти в форму входа 
// Открытие
document.querySelectorAll('#open-end').forEach(function(element) {
    element.addEventListener('click', function() {
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
    // КДК
clickEays.addEventListener('click', function(){
    if(formreg.pass.type == 'password'){
        formreg.pass.type = 'text';
        imgEays.src = 'img/Eyse.svg'
    } else{
        formreg.pass.type = 'password';
        imgEays.src = 'img/eaysclouse.svg'
    }
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
        // Поле repepass
    if (formreg.repepass.value == ""){
        er_repepassreg.innerHTML = "Поле повтора пароля не заполненно";
        er_repepassreg.style.display = "block";
    }
    else
    {
        er_repepassreg.innerHTML = "";
        er_repepassreg.style.display = "";
        if (formreg.repepass.value != formreg.pass.value){
            er_repepassreg.innerHTML = "Пароли не совпадают";
            er_repepassreg.style.display = "block";
        }
        else
        {
            er_repepassreg.innerHTML = "";
            er_repepassreg.style.display = "";
        }
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
        formreg.repepass.value = '';
        er_fio.style.display = 'none';
        er_number.style.display = 'none';
        er_emailreg.style.display = 'none';
        er_passreg.style.display = 'none';
        er_repepassreg.style.display = 'none';
    }
}

// Get all tab checkboxes
const tabChecks = document.querySelectorAll('.tab-check');

// Loop through each one
tabChecks.forEach(tabCheck => {

  // Add click event listener
  tabCheck.addEventListener('click', () => {

    // If checked
    if(tabCheck.checked) {

      // Get the .check-img inside this tab 
      const checkImg = tabCheck.closest('.tab').querySelector('.check-img');

      // Do something with the checkImg
      checkImg.src = '../img/minus-icon.svg';

    }
    else{
        const checkImg = tabCheck.closest('.tab').querySelector('.check-img');

        // Do something with the checkImg
        checkImg.src = '../img/plus-icon.svg';
    }

  });

});
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tab.classList.toggle('open');
  })
})

const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
cat1.checked = true;
const equipment = document.querySelector('.equipment');
const equipment2 = document.querySelector('.equipment2');

function toggleDisplay() {
  if (cat1.checked) {
    console.log('cat1');
    equipment.style.display = 'block';
    equipment2.style.display = 'none';
    equipment.style.width = '100%';
    equipment.style.display = 'flex';
    equipment.style.flexDirection = 'column';
    equipment.style.justifyContent = 'space-around';
  } else if (cat2.checked) {
    console.log('cat2');
    equipment.style.display = 'none';
    equipment2.style.display = 'block';
    equipment2.style.width = '100%';
    equipment2.style.display = 'flex';
    equipment2.style.flexDirection = 'column';
    equipment2.style.justifyContent = 'space-around';
  }
}

cat1.addEventListener('change', toggleDisplay);
cat2.addEventListener('change', toggleDisplay);

// Call on initial page load
toggleDisplay(); 
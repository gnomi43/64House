window.addEventListener('DOMContentLoaded', () => {


    let link = document.querySelector('.button-feedback'),
        popup = document.querySelector('.popup-feedback'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        name = popup.querySelector('#feedback-name'),
        phone = popup.querySelector('#feedback-phone'),
        email = popup.querySelector('#feedback-email'),
        message = popup.querySelector('#feedback-message')
        form = popup.querySelector('.feedback-form');

    link.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.add('modal-show');
        overlay.classList.add('modal-show-overlay');
    });

    form.addEventListener('submit', function(event) {
        if( !name.value && !phone.value && !email.value) {
            event.preventDefault();
            name.classList.add('input-error');
            name.value = 'Поле обязательно для заполнения';
            phone.classList.add('input-error');
            phone.value = 'Поле обязательно для заполнения';
            email.classList.add('input-error');
            email.value = 'Поле обязательно для заполнения';
        }else if(!name.value){
            event.preventDefault();
            name.classList.add('input-error');
            name.value = 'Поле обязательно для заполнения';
        } else if (!phone.value) {
            event.preventDefault();
            phone.classList.add('input-error');
            phone.value = 'Поле обязательно для заполнения';
        } else if (!email.value) {
            event.preventDefault();
            email.classList.add('input-error');
            email.value = 'Поле обязательно для заполнения';
        }
    });

    name.addEventListener('focus', () => {
        if (name.classList.contains('input-error')){
            name.classList.remove('input-error');
            name.value = '';
        }
    });

    phone.addEventListener('focus', () => {
        if (phone.classList.contains('input-error')){
            phone.classList.remove('input-error');
            phone.value = '';
        }
    });

    email.addEventListener('focus', () => {
        if (email.classList.contains('input-error')){
            email.classList.remove('input-error');
            email.value = '';
        }
    });

    close.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.remove('modal-show');
        overlay.classList.remove('modal-show-overlay');
        name.classList.remove('input-error');
        email.classList.remove('input-error');
        phone.classList.remove('input-error');
        name.value = '';
        phone.value = '';
        email.value = '';
        message.value = '';
    });

    window.addEventListener('keydown', (event) => {
        if(event.keyCode === 27){
            if(popup.classList.contains('modal-show')) {
            event.preventDefault();
            popup.classList.remove('modal-show');
            overlay.classList.remove('modal-show-overlay');
            ame.classList.remove('input-error');
            email.classList.remove('input-error');
            phone.classList.remove('input-error');
            name.value = '';
            phone.value = '';
            email.value = '';
            message.value = '';
            }
        }
    });

    overlay.addEventListener('click', () => {
        popup.classList.remove('modal-show');
        overlay.classList.remove('modal-show-overlay');
        popup.classList.remove('modal-error');
        ame.classList.remove('input-error');
        email.classList.remove('input-error');
        phone.classList.remove('input-error');
        name.value = '';
        phone.value = '';
        email.value = '';
        message.value = '';
    });

});
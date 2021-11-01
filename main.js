let email_error = document.querySelector('.sign-up-email-error-msg');
const REGEX =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
document.querySelector('.form-btn').addEventListener('click', e => {
    e.preventDefault();
    if (REGEX.test(document.getElementById('sign-up-email').value.trim())) {
        console.log('sucess');
        email_error.style.display = 'none';
    } else {
        console.log('error');
        email_error.style.display = 'block';
    }
});

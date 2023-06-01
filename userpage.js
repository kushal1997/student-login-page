const user_name = document.querySelector('#name');

const email_ID = document.querySelector('#email');
const phone_number = document.querySelector('#phone-num');
const form = document.querySelector('#sign_up');

const submit = document.querySelector('#submit_btn')

let firebaseConfig = {
    apiKey: "AIzaSyDNw2GMD3y4LotsBpEn96Ll6sQW0JlTbKQ",
    authDomain: "fir-video-data.firebaseapp.com",
    projectId: "fir-video-data",
    storageBucket: "fir-video-data.appspot.com",
    messagingSenderId: "448013266772",
    appId: "1:448013266772:web:d7d5c12314c4b63f9562c1"
};

firebase.initializeApp(firebaseConfig);
let firestore= firebase.firestore();

const db=firestore.collection("formData");

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isNameValid = name => {
    const data = /^[a-zA-Z\s]{1,50}$/;
    return data.test(name);
}
const isMobNoValid = mob => {
    const data = /^[6-9]\d{9}$/;
    return data.test(mob);
}
const isEmailVAlid = email => {
    const data = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return data.test(email);
}

const showError = (input, message) => {
    const formSpace = input.parentElement;
    formSpace.classList.remove('success');
    formSpace.classList.add('error');

    const error = formSpace.querySelector('small');
    error.textContent = message;
}

const showSuccess = input => {
    const formSpace = input.parentElement;
    formSpace.classList.remove('error');
    formSpace.classList.add('success');

    const error = formSpace.querySelector('small');
    error.textContent = '';
}

const checkName = () => {
    let valid = false;
    const min = 3, max = 30;
    const name = user_name.value.trim();
    if (!isRequired(name)) showError(user_name, 'Your name cannot be blank.');
    else if (!isBetween(name.length, min, max)) showError(user_name, `Your name must be between ${min} and ${max} characters.`);
    else if (!isNameValid(name)) showError(user_name, 'Your name is not valid')
    else {
        showSuccess(user_name);
        valid = true;
    }
    return valid;
}
const checkEmail = () => {
    let valid = false;
    const email = email_ID.value.trim();
    if (!isRequired(email)) showError(email_ID, 'Email cannot be blank');
    else if (!isEmailVAlid(email)) showError(email_ID, 'Email is not valid');
    else {
        showSuccess(email_ID);
        valid = true;
    }
    return valid;
}

const checkMob = () => {
    let valid = false;
    const mobNo = phone_number.value;
    if (!isRequired(mobNo)) showError(phone_number, 'Phone number cannot be blank');
    else if (!isMobNoValid(mobNo)) showError(phone_number, 'Phone number is not valid');
    else {
        showSuccess(phone_number);
        valid = true;
    }
    return valid;

}
form.addEventListener('input', (e) => {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'phone-num':
            checkMob();
            break;
    }
})

submit.addEventListener('click',(e) => {
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let ph=document.getElementById('phone-num').value;
    let course=document.getElementById('exampleFormControlSelect1').value;

    db.doc().set({
        name: name,
        email: email,
        mob: ph,
        course: course
    }).then(()=>{
        console.log("Data Saved");
    }).catch(err => {
        console.log(err);
    })

    window.location.href="https://www.google.com/";
})



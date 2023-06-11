import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJW54ldDFF6c4f6I428m_Q9AXA-KEgMGI",
    authDomain: "masterclass-ac0d8.firebaseapp.com",
    projectId: "masterclass-ac0d8",
    storageBucket: "masterclass-ac0d8.appspot.com",
    messagingSenderId: "750331117435",
    appId: "1:750331117435:web:bd51bb767e5d0ccc2f47de"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const newTime=new Date().toLocaleTimeString();
const newDate =new Date().toLocaleDateString();
document.getElementById("submit_btn").addEventListener('click', (e) => {
    e.preventDefault();


    set(ref(db, 'users/' + Math.floor(Math.random() * 1000)), {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        ph: document.getElementById('phone-num').value,
        time: newTime,
        date: newDate
    }).then(() => {
      form.reset();
        Swal.fire({
            title: 'Please save or bookmark the upcoming page',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          }).then(()=>{
            location.href ="https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzU3MGRmMWItYTNmYS00MDJhLWFiNzEtMzAxZTM2ZWFlNDg4%40thread.v2/0?context=%7b%22Tid%22%3a%22b538aa44-7e6e-46ff-aa9e-28dc1570c306%22%2c%22Oid%22%3a%22156406a7-3c0c-4687-8c1c-7460d39003f7%22%7d";
          })
        

    }).catch(err => {
        console.log(err);
    })




})
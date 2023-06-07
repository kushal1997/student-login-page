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
const date=new Date().toLocaleTimeString();
document.getElementById("submit_btn").addEventListener('click', (e) => {
    e.preventDefault();


    set(ref(db, 'users/' + Math.floor(Math.random() * 1000)), {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        ph: document.getElementById('phone-num').value,
        time: date
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
            location.href ="https://teams.live.com/meet/9571274662711";
          })
        

    }).catch(err => {
        console.log(err);
    })




})
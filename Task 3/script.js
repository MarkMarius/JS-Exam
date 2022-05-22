/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const results = document.getElementById('output');

const displayUsers = (user) => {
    const message = document.getElementById('message');
    message.innerText = '';

    user.forEach(user => {
        const login = document.createElement('h3');
        const img = document.createElement('img');

        img.src = user.avatar_url;
        login.textContent = user.login;

        results.append(login, img);
    });

}

const fetchUsers = async () => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    displayUsers(data);
}

document.getElementById('btn').addEventListener('click', () => {
    fetchUsers();
});






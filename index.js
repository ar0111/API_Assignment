const user = {id: 12, name: "Sakib Khan", job: "Actor"};
// console.log(user);

const stringified = JSON.stringify(user);
// console.log(stringified);
const object = JSON.parse(stringified);
// console.log(object);


const company = {
    name: "facebook",
    ceo:{
        name: "Mark",
        id: 2,
        food: "Fried Rice"
    },
    web:{
        work: "Website development",
        employee: 22,
        framwork: "React JS",
        tech:{
            first: "html",
            second: "css",
            third: "js"
        }
    }
}

const companyStringified = JSON.stringify(company);

// console.log(companyStringified);

const convert = JSON.parse(companyStringified);
// console.log(convert);

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(users){
    const ul = document.getElementById('users');
    for(const user of users){
        // console.log(user.name);
        // console.log(user.id);
        // console.log(user?.address?.city);
        
        const li = document.createElement('li');
        li.innerText = user.address.city;
        ul.appendChild(li);
    }
}

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(data){
    const postContainer = document.getElementById('posts');

    for(const post of data){
        const div = document.createElement('div');
        div.classList.add('make-up');
        div.innerHTML = `
        <h2>${post.title}</h2>
        <h3>${post.id}</h3>
        <p>${post.body}</p>
        `;

        postContainer.appendChild(div);
    }
}

loadPosts();
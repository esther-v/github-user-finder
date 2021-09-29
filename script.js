const apiURL = "https://api.github.com/users/";
const form = document.querySelector('form');
const search = document.querySelector('input');
const userBox = document.querySelector('.box-user');

//call api
async function dataGithub(user){

    const response = await fetch(`${apiURL}${user}`);
    const data = await response.json();

    console.log(data);

    createBox(data);
}

dataGithub("esther-v")

//display api data in box user

const createBox = (user) => {

    const box = `
    <img src="${user.avatar_url}" alt="">
    <div class="infos">
        <div class="general">
            <h2>${user.name}</h2>
            <p class="username">@${user.login}</p>
            <p class="bio">${user.bio}</p>
        </div>
        <div class="follow">
            <div class="repos">
                <p>Repos</p>
                <p class="number-repos">${user.public_repos}</p>
            </div>
            <div class="followers">
                <p>Followers</p>
                <p class="number-followers">${user.followers}</p>
            </div>
            <div class="following">
                <p>Following</p>
                <p class="number-following">${user.following}</p>
            </div>
        </div>
        <div class="links">
            <p class="city"><i class="fas fa-map-marker-alt"></i>${user.location}</p>
            <p class="url-github"><i class="fas fa-link"></i>${user.html_url}</p>
        </div>
    </div>
    `;
    userBox.innerHTML = box;
}
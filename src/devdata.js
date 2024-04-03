/**
 * How do I display images from Google Drive on a react front-end website?

    - Obtain the public link of your uploaded google drive image:
      e.g https://drive.google.com/file/d/1JP0HZf4Gd5d9ohXX6rVyuMwuZJ-369Bl/view?usp=sharing

    - Extract the id from the link: id = 1JP0HZf4Gd5d9ohXX6rVyuMwuZJ-369Bl

    - use react url = "https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID"
    
    - DROPBOX change end of link from "dl=0" to "raw=1"
 */


export const devworks = [
    {
        id: 1,
        title: "Ecommerce Website",
        img: "https://www.dropbox.com/s/8luykt7f2t2z4mo/screencapture-primestoresuk-netlify-app-2022-03-03-17_53_20.png?raw=1",
        link: "https://primestoresuk.netlify.app/",
        repo: "https://github.com/Codexgrey/CAPSTONE-ECommerce-Project",
    },

    {
        id: 2,
        title: "My portfolio",
        img: "https://www.dropbox.com/s/t99kdmfj10usgbl/screencapture-localhost-3000-2022-03-03-18_36_50.png?raw=1",
        link: "https://Codexgrey.github.io/Portfolio",
        repo: "https://github.com/Codexgrey/Portfolio",
    },

    {
        id: 3,
        title: "Events Website",
        img: "https://www.dropbox.com/scl/fi/gvuzb4a5y9zshtnegoulp/screencapture-codexgrey-github-io-KAC233-2024-04-03-15_28_32.png?raw=1",
        link: "https://codexgrey.github.io/KAC233/",
        repo: "https://github.com/Codexgrey/KAC233",
    },

    {
        id: 4,
        title: "Social-Proof-Section",
        img: "https://www.dropbox.com/scl/fi/timpkfh7d8coj6kqtacze/screencapture-codexgrey-github-io-Social-Proof-Section-2024-04-03-15_34_10.png?raw=1",
        link: "https://codexgrey.github.io/Social-Proof-Section/",
        repo: "https://github.com/Codexgrey/Social-Proof-Section",
    },

    {
        id: 5,
        title: "Javascript - PIG GAME APP",
        img: "https://www.dropbox.com/s/w7uaohrqbn7r0i6/screencapture-codexgrey-github-io-The-PIG-Game-2022-03-03-18_01_24.png?raw=1",
        link: "https://codexgrey.github.io/The-PIG-Game/",
        repo: "https://github.com/Codexgrey/The-PIG-Game",
    },

    {
        id: 6,
        title: "BUDGET APP",
        img: "https://www.dropbox.com/s/qort5i9z8guzbdg/screencapture-codexgrey-github-io-Budget-App-2022-03-03-17_57_36.png?raw=1",
        link: "https://codexgrey.github.io/Budget-App/",
        repo: "https://github.com/Codexgrey/Budget-App",
    },
];
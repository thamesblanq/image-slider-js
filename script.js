const imageObject = [
    {image: "background-image.jpg", imagDesc: "Crashing Waves", artist: "Eric De Vries"},
    {image: "1.jpg", imagDesc: "3D Rendering", artist: "Leonardo"},
    {image: "2.jpg", imagDesc: "Ice Block", artist: "Adam"},
    {image: "3.jpg", imagDesc: "Chinese Building", artist: "John"},
    {image: "4.jpg", imagDesc: "Desert", artist: "Socrates"},
    {image: "5.1.jpg", imagDesc: "Mars", artist: "James"},
    {image: "6.1.jpg", imagDesc: "Desert Clouds", artist: "Brad"},
    {image: "7.1.jpg", imagDesc: "Green Mountains", artist: "Sven"},
    {image: "8.1.jpg", imagDesc: "Japanese Street", artist: "Ava"},
    {image: "9.1.jpg", imagDesc: "Night Mountain view", artist: "Ella"},
    {image: "10.1.jpg", imagDesc: "Snowy Mountain", artist: "Beau"}
];

const imageArr = ["background-image.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.1.jpg", "6.1.jpg", "7.1.jpg", "8.1.jpg", "9.1.jpg", "10.1.jpg"
];

const descArr = ["Crashing Waves", "3D Rendering", "Ice Block", "Chinese Building", "Desert", "Mars", "Desert Clouds", "Green Mountains", "Japanese Street", "Night Mountain view", "Snowy Mountain"];

const artistArr = ["Eric De Vries", "Leonardo", "Adam", "John", "Socrates", "James", "Brad", "Sven", "Ava", "Ella", "Beau"];

let currentId = 0;



//add a toggle method so that when it has a class of .active it will show and when it doesnt it wont show.


let btnOne = document.getElementById('btn-back');
let btnTwo = document.getElementById('btn-next')
let imageDescription = document.querySelector('.image-desc');
let artiste = document.querySelector('.artist');
let img = document.querySelector('.image-holder');


function updateImage()  {
    let random =Math.floor(Math.random() * imageObject.length);
    img.style.backgroundImage = `url(${imageArr[random]})`;
    artiste.textContent = artistArr[random];
    imageDescription.textContent = descArr[random];
    
};

(setInterval (updateImage, 20000));


function slide(currentId) {
    img.style.backgroundImage = `url(${imageArr[currentId]})`;

    img.classList.add('image-fade');

    setTimeout( () => {
        img.classList.remove('image-fade')
    }, 550);

    imageDescription.textContent = descArr[currentId];
    artiste.textContent = artistArr[currentId]; 
}

btnOne.addEventListener('click', function() {
    currentId--

    if (currentId < 0) {
        currentId = imageArr.length - 1;
    };

 slide(currentId);
});

btnTwo.addEventListener('click', function() {
     currentId++
 
    if (currentId > imageArr.length - 1) {
        currentId = 0
    };

 slide(currentId);
});












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


//add a toggle method so that when it has a class of .active it will show and when it doesnt it wont show.

let imageContainer = document.getElementsByTagName('img');// holds all the images in my html
//console.log(imageContainer[3]);

let btn = document.getElementById('btn');
let imageDescription = document.querySelector('.image-desc');
let artiste = document.querySelector('.artist');
let imageHolder = document.querySelector('.image-holder');//used to pick the first image in  my html
let imageHolderChild = imageHolder.firstElementChild;

//console.log(imageHolderChild);



 btn.addEventListener ('click', function(){

    let random = Math.floor(Math.random() * imageObject.length);
    let randomPicture = Math.floor(Math.random() * imageHolder.length);

    //imageContainer[randomPicture].toggle('.active');

    imageHolderChild = imageContainer[randomPicture];// not working
    imageDescription.textContent = imageObject[random].imagDesc;
    artiste.textContent = imageObject[random].artist;
})


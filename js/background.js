const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

// const audio = new Audio('spring.mp3');
// audio.play();

// document.getElementById('myAudio').play();


// const resources = [
//   {image: '0.jpg', sound: '/music/spring.mp3'},
//   {image: '이미지경로', sound: '사운드경로'},
//   {image: '이미지경로', sound: '사운드경로'},
//   {image: '이미지경로', sound: '사운드경로'},
//   {image: '이미지경로', sound: '사운드경로'},
//   ]



spring.onclick = function() {
  spring_sound.play();
}


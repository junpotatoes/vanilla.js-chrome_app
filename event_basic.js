const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === "blue"){
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}


h1.addEventListener("click", handleTitleClick); //event가 발생할 function ;
// title.onclick = handleTitleClick; //다른방법 
------------------------------------------------------------------------

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked sexy-font";
  if(h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass
  }
}

h1.addEventListener("click", handleTitleClick); 
-----------------------------------------------------------------------
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if(h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass); 
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick); 
-----------------------------------------------------------------
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick); 
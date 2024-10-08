const body=document.querySelector("body");
const bgHexCodeSpanElement=document.querySelector("#bg-hex-code");
const button=document.querySelector("#btn")


const darkColorsArr = [
    "#2C3E50", // Midnight Blue
    "#34495E", // Wet Asphalt
    "#2C2C2C", // Dark Charcoal
    "#4A235A", // Dark Purple
    "#2F4F4F", // Dark Slate Gray
    "#0E4B5A", // Deep Teal
    "#800020", // Burgundy
    "#1A1A2E", // Space Cadet
    "#191970", // Midnight Blue
    "#333333", // Dark Gray
  ];

  function radomIndex()
  {
    return Math.floor(Math.random() * darkColorsArr.length);

  }
 
  

  function changeBackgroundColor()
  {
    let color=darkColorsArr[radomIndex()]
    bgHexCodeSpanElement.innerText= color;
    body.style.backgroundColor=color

    
  }
  
//   button.onclick=changeBackgroundColor
button.addEventListener("click",changeBackgroundColor)




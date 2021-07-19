const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

function drawImage()
{
  let image = new Image();
  image.src = 'image.jpg';
  image.onload = function(){
    context.drawImage(image, 0, 0);
    let imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = imgData.data;
   
    for (let i = 0; i < pixels.length; i += stepsize) {
        pixels[i] = Math.ceil(Math.random()*250)
        stepsize = Math.ceil(Math.random()*4)
       }
       
    context.putImageData(imgData, 0, 0);
    }
}

window.setTimeout(function () {
    window.location.reload();
  }, 70);

drawImage()

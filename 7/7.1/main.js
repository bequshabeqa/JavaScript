function widthPlus() {
  const photo = document.getElementById('photo'); 
  const currentWidth = photo.clientWidth;
  photo.style.width = (currentWidth + 50) + 'px';
}


const sizePlus = document.getElementById('sizePlus');
sizePlus.addEventListener('click', widthPlus);

function widthMinus() {
  const photo = document.getElementById('photo'); 
  const currentWidth = photo.clientWidth;
  photo.style.width = (currentWidth - 50) + 'px';
}


const sizeMinus = document.getElementById('sizeMinus');
sizeMinus.addEventListener('click', widthMinus);

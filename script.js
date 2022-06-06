

function generateStars (){
  const container = document.querySelector('.container');
  const stars = document.createElement('div');
  
  let size = Math.random() * 10;
    
  
  stars.style.width = size + 'px';
  stars.style.height = size + 'px';
  stars.style.borderRadius = '50%';
  stars.style.background = 'white';
  stars.style.boxShadow = '0 0 15px pink, 0 0 15px pink';
  
  stars.style.top = Math.random() * innerHeight + 'px';
  stars.style.left = Math.random() * innerWidth + 'px';
  
  container.appendChild(stars);
   
  
  
    setTimeout(()=>{
      stars.remove()
    }, 3000);
}
setInterval(generateStars, 500);
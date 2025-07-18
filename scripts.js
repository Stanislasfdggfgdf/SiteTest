const box = document.getElementById('test');
 
box.style.animation = 'animation2 2s forwards';
 
box.addEventListener('animationend', () => {
  box.style.animation = 'animation3 2s infinite';
});
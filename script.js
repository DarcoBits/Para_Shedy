function mostrarRespuesta() {
    document.getElementById('respuesta').style.display = 'block';
  }
  
  const noBtn = document.getElementById('noButton');
  
  noBtn.addEventListener('mouseover', function () {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
  });
  function aceptar() {
    window.location.href = 'acepto.html';
  }
  
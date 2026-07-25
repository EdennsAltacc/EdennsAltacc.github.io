  const topbar = document.getElementById('topbar');
  function updateWidth() {
    topbar.style.width = window.innerWidth + 'px';
  }
  window.addEventListener('resize', updateWidth);
  updateWidth();

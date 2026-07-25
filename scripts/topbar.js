const topbar = document.getElementById('topbar');

function updateWidth() {
  if (topbar) {
    topbar.style.width = window.innerWidth + 'px';
  }
}

updateWidth();
window.addEventListener('resize', updateWidth);

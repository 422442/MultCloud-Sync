// This script is for UI demo only. No backend or real file actions.
document.querySelectorAll('.sidebar nav ul li').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.sidebar nav ul li').forEach(li => li.classList.remove('active'));
    this.classList.add('active');
  });
});

// Fake loading animation for status icons
document.querySelectorAll('.status.loading').forEach(el => {
  setInterval(() => {
    el.style.opacity = el.style.opacity === '0.5' ? '1' : '0.5';
  }, 500);
});

// Button click demo
document.querySelectorAll('.actions button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('This is a demo UI. No backend actions.');
  });
});

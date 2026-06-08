(function () {
  // 1. Cursor blink on hero headline
  var headline = document.getElementById('hero-headline');
  if (headline) {
    headline.classList.add('cursor-active');
  }

  // 2. Pixel art coder animation — cycle screen between </> and cursor
  var screen = document.getElementById('pixel-screen');
  if (screen) {
    var isCode = true;
    setInterval(function () {
      isCode = !isCode;
      screen.className = isCode
        ? 'pixel-coder-screen state-code'
        : 'pixel-coder-screen state-cursor';
    }, 2000);
  }

  // 3. Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();

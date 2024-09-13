// script.js
document.querySelectorAll('.slider-container .slide img').forEach((img) => {
  img.addEventListener('mousemove', function (e) {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  });

  img.addEventListener('mouseleave', function () {
    img.style.transformOrigin = 'center';
  });
});

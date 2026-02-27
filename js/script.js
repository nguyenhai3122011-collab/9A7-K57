// script.js - Tương tác cơ bản cho trang web

// Chờ trang load xong rồi mới chạy code
document.addEventListener('DOMContentLoaded', function() {

  // 1. Thay đổi tiêu đề khi click vào h1
  const heading = document.querySelector('h1');
  if (heading) {
    heading.addEventListener('click', function() {
      if (heading.textContent === 'Xin chào! Đây là trang web đầu tiên của mình trên GitHub 🚀') {
        heading.textContent = 'Bạn vừa click vào tiêu đề nè! 😄';
      } else {
        heading.textContent = 'Xin chào! Đây là trang web đầu tiên của mình trên GitHub 🚀';
      }
    });
  }

  // 2. Hiện thông báo chào mừng lần đầu (dùng localStorage để chỉ hiện 1 lần)
  if (!localStorage.getItem('welcomed')) {
    setTimeout(() => {
      alert('Chào mừng bạn đến với trang web của Nghi trên GitHub Pages! 🌟');
      localStorage.setItem('welcomed', 'true');
    }, 1500); // Hiện sau 1.5 giây
  }

  // 3. Thêm hiệu ứng click vào ảnh (console log để debug, hoặc mở modal sau này)
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('click', function() {
      console.log('Bạn vừa click vào ảnh:', img.alt);
      // Có thể mở modal xem ảnh to hơn ở đây nếu muốn nâng cấp
    });
  });

});

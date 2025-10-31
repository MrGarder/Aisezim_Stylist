// === 🌟 Анимация появления элементов при скролле ===
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));


// === 🖼️ Просмотр фото в модальном окне ===
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');

document.querySelectorAll('.shot').forEach(shot => {
  shot.addEventListener('click', () => {
    modal.classList.add('show');
    modalImg.src = shot.dataset.src || shot.src;
  });
});

function closeModal() {
  modal.classList.remove('show');
}

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});


// === 💅 Модалка Прайс-листа ===
function openPriceModal() {
  document.getElementById('priceModal').classList.add('show');
}

function closePriceModal() {
  document.getElementById('priceModal').classList.remove('show');
}

document.getElementById('priceModal').addEventListener('click', e => {
  if (e.target.id === 'priceModal') closePriceModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePriceModal();
});


// === 🧴 Модалка Информация ===
function openInfo() {
  document.getElementById('info-modal').classList.add('show');
}

function closeInfo() {
  document.getElementById('info-modal').classList.remove('show');
}

document.getElementById('info-modal').addEventListener('click', e => {
  if (e.target.id === 'info-modal') closeInfo();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeInfo();
});


// === 🌈 Бесконечная карусель ===
const track = document.querySelector('.carousel-track');
if (track) {
  track.innerHTML += track.innerHTML; // дублируем для бесконечного цикла
}


// === 🐉 Пасхалка «Red Dragons» ===
const logo = document.querySelector('.logo');
const egg = document.getElementById('easter-egg');

if (logo && egg) {
  logo.addEventListener('click', () => {
    egg.classList.add('show');
    setTimeout(() => egg.classList.remove('show'), 3000);
  });
}


// === ✨ Эффект наведения на кнопки (плавный зум) ===
document.querySelectorAll('.btn, .instagram-btn, .whatsapp-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
    btn.style.transition = 'transform 0.2s ease';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

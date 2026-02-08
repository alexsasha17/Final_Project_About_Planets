const themeButton = document.querySelector('.change-theme');
const body = document.body;

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
});

const searchInput = document.querySelector('.search-input');
const planetCards = document.querySelectorAll('.planet-card');

searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();

  planetCards.forEach(card => {
    const name = card.querySelector('.planet-name').textContent.toLowerCase();
    card.style.display = name.includes(value) ? '' : 'none';
  });
});

const loadedItems = [];

(function createCards() {
  // Підвантаження перших 12 карток.
  const cardGrid = document.getElementById('card-grid');
  const loadMoreButton = document.getElementById('load-more-button');
  // Довантаження ще 4 картки.
  loadMoreButton.addEventListener('click', loadMoreCards);

  const cardsHTML = cardsData.map(item => `
  <section class="grid-container">
    <div class="card">
      <img src="${item.imgSrc}" class="card-img-top" loading="lazy" alt="${item.title}">
      <div class="card-body">
        <div class="cont-title">
          <h4 class="card-title">${item.title}</h4>
        </div>
        <div class="cost-buy">
          <p class="card-text">Ціна: ${item.cost} ₴</p>
          <button class="btn">Додати</button>
        </div>
        <div class="overlay">
          <p class="card-text">${item.description}</p>
        </div>
      </div>
    </div>
  </section>
  `).slice(0, 15).join(' ');
  cardGrid.innerHTML = cardsHTML;

  // pushing the first 15 items to the loadedItems array
  cardsData.slice(0, 15).forEach(item => loadedItems.push(item));

  function cartAddListener() {
    const addButtons = document.querySelectorAll('.card .btn');
    addButtons.forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        const title = card.querySelector('.card-title').textContent;
        const cost = parseFloat(card.querySelector('.card-text').textContent.match(/\d+(?:.\d+)?/)[0]);
        const imgSrc = card.querySelector('.card-img-top').getAttribute('src');
        const item = { title, cost, imgSrc };
        addToCart(item);
      });
    });
  }

  function loadMoreCards() {
    const newCardsHTML = cardsData.slice(cardGrid.children.length, cardGrid.children.length + 5).map(item => `
    <section class="grid-container">
    <div class="card">
      <img src="${item.imgSrc}" class="card-img-top" loading="lazy" alt="${item.title}">
      <div class="card-body">
        <div class="cont-title">
          <h4 class="card-title">${item.title}</h4>
        </div>
        <div class="cost-buy">
          <p class="card-text">Ціна: ${item.cost} ₴</p>
          <button class="btn">Додати</button>
        </div>
        <div class="overlay">
          <p class="card-text">${item.description}</p>
        </div>
      </div>
    </div>
  </section>
  `).join(' ');
    cardGrid.innerHTML += newCardsHTML;
    cardsData.slice(cardGrid.children.length - 5, cardGrid.children.length).forEach(item => loadedItems.push(item));
    cartAddListener()
  }
})();
const cartButton = document.getElementById('cart-button');
const closeButton = document.getElementById('close-cart');
const checkoutButton = document.getElementById('checkout-button');
const cart = document.getElementById('cart');
const cartListEl = document.getElementById('cart-list');
const cartTotalEl = document.getElementById('cart-total');

function toggleCartList() {
  if (cart.style.display === 'none' || cart.style.display === '') {
    cart.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // блок скролл
  } else {
    cart.style.display = 'none';
  }
}

function closeCart() {
  cart.style.display = 'none';
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

checkoutButton.addEventListener('click', () => {
  closeCart();
  alert("Дякуємо за покупку!")
});

function updateCartTotal() {
  const cartTotal = cartList.reduce((total, item) => {
    return total + item.cost * item.quantity;
  }, 0);
  cartTotalEl.textContent = `${cartTotal.toFixed(2)} ₴`;
  if (cartList.length >= 1) {
    document.getElementById('count-cart').textContent = cartList.length;
  } else {
    document.getElementById('count-cart').textContent = '';
  }
}

function addToCart(item) {
  const existingItem = cartList.find(cartItem => cartItem.title === item.title);
  if (existingItem) {
    // Товар уже есть в корзине, увеличиваем его количество
    alert("Товар вже у кошику!");
  } else {
    // Товара еще нет в корзине, добавляем его
    const cartItem = {
      title: item.title,
      cost: item.cost,
      imgSrc: item.imgSrc,
      quantity: 1 // Количество товара в корзине
    };
    cartList.push(cartItem);
    const cartItemEl = document.createElement('div');
    cartItemEl.classList.add('cart-item');
    cartItemEl.innerHTML = `
      <div class="cart-item-img"> 
        <img src="${item.imgSrc}" alt="${item.title}"> 
      </div> 
      <div class="cart-item-info"> 
        <h4 class="cart-item-title">${item.title}</h4> 
        <p class="cart-item-cost">Ціна: ${item.cost.toFixed(2)} ₴</p> 
        <button class="decrease-quantity">-</button>
        <span class="quantity">${cartItem.quantity}</span>
        <button class="increase-quantity">+</button>
        <button class="remove-item-button">Видалити</button>
      </div>`;
    cartListEl.appendChild(cartItemEl);

    // Добавляем обработчик на кнопки увеличения/уменьшения количества товара
    const increaseButton = cartItemEl.querySelector('.increase-quantity');
    const decreaseButton = cartItemEl.querySelector('.decrease-quantity');
    const quantityEl = cartItemEl.querySelector('.quantity');

    increaseButton.addEventListener('click', () => {
      cartList.forEach(cartItem => {
        if (cartItem.title === item.title) {
          cartItem.quantity++;
          quantityEl.textContent = cartItem.quantity;
          updateCartTotal();
        }
      });
    });

    decreaseButton.addEventListener('click', () => {
      cartList.forEach(cartItem => {
        if (cartItem.title === item.title) {
          if (cartItem.quantity > 1) {
            cartItem.quantity--;
            quantityEl.textContent = cartItem.quantity;
            updateCartTotal();
          } else {
            const itemIndex = cartList.findIndex(cartItem => cartItem.title === item.title);
            if (itemIndex !== -1) {
              cartList.splice(itemIndex, 1);
              cartListEl.removeChild(cartItemEl);
              updateCartTotal();
            }
          }
        }
      });
    });


    // Добавляем обработчик на кнопку удаления
    const removeItemButton = cartItemEl.querySelector('.remove-item-button');
    removeItemButton.addEventListener('click', () => {
      const itemIndex = cartList.findIndex(cartItem => cartItem.title === item.title);
      if (itemIndex !== -1) {
        cartList.splice(itemIndex, 1);
        cartListEl.removeChild(cartItemEl);
        updateCartTotal();
      }
    });
  }
  updateCartTotal();
}


// Функция для добавления обработчиков на кнопки "Додати" на карточках товаров
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

document.addEventListener('DOMContentLoaded', function () {
  cartButton.addEventListener('click', toggleCartList);
  closeButton.addEventListener('click', closeCart);
  // Вызов функции добавления обработчиков на кнопки "Додати"
  cartAddListener();

  // Добавляем обработчик на кнопку "Фільтрувати по назві"
  const cartSortButton = document.getElementById('cart-sort');
  cartSortButton.addEventListener('click', () => {
    cartList.sort((a, b) => a.title.localeCompare(b.title));
    cartListEl.innerHTML = '';
    cartList.forEach(cartItem => {
      const cartItemEl = createCartItemElement(cartItem);
      cartListEl.appendChild(cartItemEl);
    });
  });
});

function createCartItemElement(item) {
  const cartItemEl = document.createElement('div');
  cartItemEl.classList.add('cart-item');
  cartItemEl.innerHTML = `
    <div class="cart-item-img"> 
      <img src="${item.imgSrc}" alt="${item.title}"> 
    </div> 
    <div class="cart-item-info"> 
      <h4 class="cart-item-title">${item.title}</h4> 
      <p class="cart-item-cost">Ціна: ${item.cost.toFixed(2)} ₴</p> 
      <button class="decrease-quantity">-</button>
      <span class="quantity">${item.quantity}</span>
      <button class="increase-quantity">+</button>
      <button class="remove-item-button">Видалити</button>
    </div>`;
  
  const increaseButton = cartItemEl.querySelector('.increase-quantity');
  const decreaseButton = cartItemEl.querySelector('.decrease-quantity');
  const quantityEl = cartItemEl.querySelector('.quantity');
  
  increaseButton.addEventListener('click', () => {
    cartList.forEach(cartItem => {
      if (cartItem.title === item.title) {
        cartItem.quantity++;
        quantityEl.textContent = cartItem.quantity;
        updateCartTotal();
      }
    });
  });
  
  decreaseButton.addEventListener('click', () => {
    cartList.forEach(cartItem => {
      if (cartItem.title === item.title) {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
          quantityEl.textContent = cartItem.quantity;
          updateCartTotal();
        } else {
          const itemIndex = cartList.findIndex(cartItem => cartItem.title === item.title);
          if (itemIndex !== -1) {
            cartList.splice(itemIndex, 1);
            cartListEl.removeChild(cartItemEl);
            updateCartTotal();
          }
        }
      }
    });
  });
  
  const removeItemButton = cartItemEl.querySelector('.remove-item-button');
  removeItemButton.addEventListener('click', () => {
    const itemIndex = cartList.findIndex(cartItem => cartItem.title === item.title);
    if (itemIndex !== -1) {
      cartList.splice(itemIndex, 1);
      cartListEl.removeChild(cartItemEl);
      updateCartTotal();
    }
  });

  return cartItemEl;
}

const cartSortButton = document.getElementById('cart-sort-price');
cartSortButton.addEventListener('click', () => {
  const sortDirection = confirm('Сортувати по зростанню?') ? 'asc' : 'desc';
  sortCartList(sortDirection);
});

function sortCartList(direction) {
  cartList.sort((a, b) => {
    if (direction === 'asc') {
      return a.cost - b.cost;
    } else {
      return b.cost - a.cost;
    }
  });
  cartListEl.innerHTML = '';
  cartList.forEach(item => {
    const cartItemEl = createCartItemElement(item);
    cartListEl.appendChild(cartItemEl);
  });
}

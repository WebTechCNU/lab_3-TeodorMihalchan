(function subscribeCheck() {
  const isSubscribed = localStorage.getItem('isSubscribed');

  if (!isSubscribed) {
    setTimeout(() => {
      const subs = document.getElementById("sub");
      const overlayHtml = `<div style="position: fixed; bottom: 0; left: 0; width: 100%; display: flex; flex-direction: column; z-index: 9998; border-radius: 0;" id="subscribe-overlay"> <div style="background: rgba(0, 52, 100, 1); padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); text-align: center;"> <p style="margin: 0 0 20px;">Підпишіться на наші повідомлення:</p> <button style="margin: 10px; border-radius: 6px;" id="subscribe-accept-button">Підписатися</button> <button style="margin: 10px; border-radius: 6px;" id="subscribe-cancel-button">Не зараз</button> </div> </div>`;
      subs.innerHTML = overlayHtml;

      const acceptButton = document.querySelector('#subscribe-accept-button');
      acceptButton.addEventListener('click', () => {
        localStorage.setItem('isSubscribed', true);
        const overlay = document.querySelector('#subscribe-overlay');
        overlay.style.display = 'none';
      });

      const cancelButton = document.querySelector('#subscribe-cancel-button');
      cancelButton.addEventListener('click', () => {
        const overlay = document.querySelector('#subscribe-overlay');
        overlay.style.display = 'none';
      });
    }, 4000);
  }
})(); // Функція обробника підписки.
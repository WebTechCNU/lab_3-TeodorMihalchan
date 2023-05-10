let newsCollection = [
  {
    title: "Channel F",
    imgSrc: "images/news_img/news4.jpg",
    text: "Channel F була буквально революційною та продемонструвала, як саме можна заробляти на домашніх ігрових платформах. Мало того, це була перша консоль, яка використовувала мікропроцесор. Не дивно, що двоє вихідців саме із компанії-розробника Fairchild пізніше створять скромну компанію під назвою Intel.",
    date: "2023-05-03 12:10:00",
    important: false
  },
  {
    title: "Ubisoft Kyiv!",
    imgSrc: "images/news_img/news3.jpg",
    text: "Але нам з тобою, поціновувачам відеоігор, буде особливо приємно дізнатися, що до процесу відновлення докладуть руку та гроробелі з Ubisoft, які відтворили собор в Assassins Creed: Unity. Одна з їхніх художників, Каролін М'юсс, витратила два роки на вивчення найменших деталей будівлі, щоб відтворити її у грі з хірургічною точністю. Виходить, що тепер храм із відеоігри буде відтворено насправді. Такий незвичайний цикл.",
    date: "2023-05-03 17:11:00",
    important: false
  },
  {
    title: "Ще одна важлива новина",
    imgSrc: "images/news_img/news2.jpg",
    text: "Прайм-статус у CS:GO подорожчав практично для всіх регіонів, тепер він коштує $15 або 550₴",
    date: "2023-05-02 13:15:00",
    important: true
  },
  {
    title: "Нова важлива новина",
    imgSrc: "images/news_img/news1.jpg",
    text: "Нінтендо-ексклюзив The Legend of Zelda: Tears of the Kingdom злили на торенти за 12 днів до релізу – пірати вже проходять гру через емулятори і навіть стримають на твічі. Також з витоку з'ясувалося, що у новій Зельді є російська озвучка. Гра з'явилася на українських торрент-трекерах. Особи юристів Nintendo навіть представляти не потрібно",
    date: "2023-05-01 20:00:00",
    important: true
  }
];

const renderNews = (newsCollection, newsContainerId) => {
  const newsContainer = document.querySelector(`#${newsContainerId}`);

  newsCollection.sort((b, a) => new Date(b.date) - new Date(a.date)); // сортування за датою

  let i = 0;
  const intervalId = setInterval(() => {
    if (i >= newsCollection.length) {
      clearInterval(intervalId);
      return;
    }

    const newsItem = newsCollection[i];

    const newsElement = `
      <div class="news-item">
        <h2 style="${newsItem.important ? 'font-weight: bold' : ''}">
          ${newsItem.title}
        </h2>
        <span>
          ${new Date(newsItem.date).toLocaleString()}
        </span><br>
        <img src="${newsItem.imgSrc}" class="news-img" loading="lazy" alt="${newsItem.title}">
        <p style="${newsItem.important ? 'font-weight: bold' : ''}">
          ${newsItem.text}
        </p>
        <hr />
      </div>
    `;

    newsContainer.insertAdjacentHTML('beforeend', newsElement);

    i++;
  }, 5000);
};
renderNews(newsCollection, 'news-lenta');



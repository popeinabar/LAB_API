// Progression 1: create a function and fetch the api using axios
const articleGrid = document.getElementById('articleGrid');

function populateData() {
  axios
    .get(
      'https://gnews.io/api/v4/top-headlines?token=b7a08cf2cd6b51422961fa185990a2b2&lang=en'
    )
    .then((res) => {
      console.log(res);

      const articles = res.data.articles;

      articles.forEach((article) => {
        const articlElement = document.createElement('div');
        const titleElemant = document.createElement('h3');
        const imageElement = document.createElement('img');
        const contentElement = document.createElement('p');
        articlElement.setAttribute('class', 'article');

        titleElemant.innerText = article.title;
        imageElement.setAttribute('src', article.image);
        contentElement.innerText = article.content;

        articlElement.append(titleElemant);
        articlElement.append(imageElement);
        articlElement.append(contentElement);

        articleGrid.append(articlElement);
      });
    });
}
populateData();

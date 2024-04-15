// get the articles div
const articlesDiv = document.getElementById('articles');

// 1. create xhr object
let xhr = new XMLHttpRequest();

// 2. open connection
const url = './health_article.json'

// true for asynchronous operation
xhr.open('GET', url, true);

xhr.responseType = 'json';

// 3. define what happen on load
xhr.onload = function () {

    // get response data
    let articles = xhr.response.articles;

    articles.forEach(article => {

        // article title
        const title = document.createElement('h2');
        title.textContent = article.title;

        // article description
        const description = document.createElement('p');
        description.textContent = article.description;

        // way list title
        const waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        // construct ways List
        const waysList = document.createElement('ul');

        article.ways_to_achieve.forEach((way) => {
            const listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        // benefit list title
        const benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        // construct benefit list
        const benefitsList = document.createElement('ul');
        article.benefits.forEach((benefit) => {
            const listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem)

        })

        // single article div container
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');


        // add all item to single article div
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);


        // add a single article div to all articles div
        articlesDiv.appendChild(articleDiv);

    });
}

// 4. send the request
xhr.send();
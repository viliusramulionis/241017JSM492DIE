const result = document.querySelector('.result');

function handleForm(e) {
    e.preventDefault()

    const keyword = document.querySelector('input').value;

    localStorage.setItem('keyword', keyword);
    localStorage.setItem('page', 1);

    getMovies(keyword);
}

function goToPage(keyword, page) {
    localStorage.setItem('page', page);
    
    getMovies(keyword, page);
}

function getMovies(keyword, page = 1) {
    fetch(`http://www.omdbapi.com/?apikey=8b7b43a5&s=${keyword}&page=${page}`)
    .then(resp => resp.json())
    .then(resp => {
        // Guard
        if(resp.Response !== "True") 
            return;

        result.innerHTML = `
            <div class="row">
                ${resp.Search.map(value => `
                    <div class="col-3 pb-4">
                        <img src="${value.Poster}" alt="${value.Title}">
                        <h5 class="mt-3">${value.Title}</h5>
                        <div class="d-flex justify-content-between text-body-tertiary">
                            <strong>${value.Type}</strong>
                            <span>${value.Year}</span>
                        </div>
                    </div>
                `).join('')}
            </div>`;

        result.innerHTML += pagination(keyword, page, resp.totalResults);
    });
}

function pagination(keyword, currentPage, total) {
    const pages = Math.ceil(total / 10);

    return `        
        <nav>
            <ul class="pagination d-flex align-items-center justify-content-center">
                <li class="page-item ${currentPage === 1 && `disabled`}">
                    <a 
                        class="page-link"
                        href="#" 
                        onclick="goToPage('${keyword}', ${currentPage - 1})"
                    >Previous</a>
                </li>
                <li class="page-item px-4">${currentPage} / ${pages}</li>
                <li class="page-item ${currentPage === pages && `disabled`}">
                    <a 
                        class="page-link" 
                        href="#" 
                        onclick="goToPage('${keyword}', ${currentPage + 1})"
                    >Next</a>
                </li>
            </ul>
        </nav>
    `;
}

const localKeyword = localStorage.getItem('keyword');
const localPage = localStorage.getItem('page'); 

if(localKeyword) {
    getMovies(localKeyword, localPage ? localPage : 1);
}

// Vieno filmo informacija
// fetch(`http://www.omdbapi.com/?apikey=8b7b43a5&i=tt0372784`)
// .then(resp => resp.json())
// .then(resp => console.log(resp));
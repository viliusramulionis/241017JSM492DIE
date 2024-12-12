const result = document.querySelector('.result');

function getMovies(e) {
    e.preventDefault();
    
    fetch(`http://www.omdbapi.com/?apikey=8b7b43a5&s=Batman&page=1`)
    .then(resp => resp.json())
    .then(resp => {
        if(resp.Response !== "True") 
            return;
        
        console.log(resp);

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
    });
}

// Vieno filmo informacija
// fetch(`http://www.omdbapi.com/?apikey=8b7b43a5&i=tt0372784`)
// .then(resp => resp.json())
// .then(resp => console.log(resp));
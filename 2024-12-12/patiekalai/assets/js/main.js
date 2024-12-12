// DRY - Don't Repeat Yourself
// KISS - Keep it simple stupid

const input = document.querySelector('input');
const result = document.querySelector('.result');
let searchPhrase;
let listType;

function formatIngredients(value) {
    let html = '<ul>';

    for(let i = 1; i <= 20; i++) {
        if(value['strIngredient' + i]) {
            html += `<li>
                        <a href="#" onclick="getList('i', '${value['strIngredient' + i]}')">
                            ${value['strIngredient' + i]} ${value['strMeasure' + i]}
                        </a>
                    </li>`;
        }
    }

    html += '</ul>';

    return html;
}

function setMessage() {
    result.innerHTML = `<div class="alert alert-warning">Pagal Jūsų užklausą nieko neradome :/</div>`;
}

function generateAlphabet() {
    const el = document.querySelector('.alphabet');
    
    let res = '<ul class="pagination my-4">';

    for(let i = 65; i < 91; i++) {
        const letter = String.fromCharCode(i);

        res += `<li class="page-item">
                    <a href="#" class="page-link" onclick="getList('f', '${letter}')">${letter}</a>
                </li>`;
    }

    res += '</ul>';

    el.innerHTML = res;
}

generateAlphabet();

function validateInput() {
    if(input.value.length > 0) {
        input.classList.remove('is-invalid');
    } else {
        input.classList.add('is-invalid');
    }
}

function getMeal(e) {
    e.preventDefault();
    
    if(input.value.length === 0) 
        return input.classList.add('is-invalid');

    getList('s', input.value);
}

function backToTheList() {
    getList(listType, searchPhrase);
}

function feelingLucky(e) {
    e.preventDefault();

    getSingleMeal();
}

function getList(type, keyword) {
    searchPhrase = keyword;
    listType = type;

    let command = 'filter';
    
    if(type === 's' || type === 'f') {
        command = 'search';
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/${command}.php?${type}=${keyword}`)
    .then(resp => resp.json())
    .then(resp => {
        if(!resp.meals) 
            return setMessage();

        result.innerHTML = resp.meals.map(value => `
                <div class="col-4 pb-5">
                    <a href="#" onclick="getSingleMeal(${value.idMeal})">
                        <img src="${value.strMealThumb}">
                        <h4 class="mt-2">${value.strMeal}</h4>
                    </a>
                </div>
            `
        ).join('');
    });
}

function getSingleMeal(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/${!id ? `random.php` : `lookup.php?i=` + id}`)
    .then(resp => resp.json())
    .then(resp => {
        if(!resp.meals) 
            return setMessage();

        result.innerHTML = resp.meals.map(value => `
                <div class="col-4">
                    <img src="${value.strMealThumb}">
                    <button class="btn btn-primary mt-4" onclick="backToTheList()">Atgal į sąrašą</button>
                </div>
                <div class="col-8">
                    <h3>${value.strMeal}</h3>
                    <p>${value.strInstructions}</p>
                    <div>
                        <strong>Kategorija:</strong>
                        <a href="#" onclick="getList('c', '${value.strCategory}')">${value.strCategory}</a>
                    </div>
                    <div>
                        <strong>Šalis:</strong>
                        <a href="#" onclick="getList('a', '${value.strArea}')">${value.strArea}</a>
                    </div>
                    <div>
                        <h4>Ingridientai</h4>
                        ${formatIngredients(value)}
                    </div>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/${value.strYoutube.split('?v=')[1]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            `
        ).join('');
    });
}

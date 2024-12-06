let html = '';

for(const product of products) {
    let discountPrice = product.price / 100 * product.discountPercentage;
    let specialPrice = product.price - discountPrice;

    html += `
        <div class="d-flex flex-column flex-md-row border-bottom py-4">
            <div>
                <img src="${product.thumbnail}" style="max-width: 300px;" />
            </div>
            <div class="px-md-5">
                <h6 class="text-primary">${product.title}</h6>
                <div class="rating">
                    <div class="active" style="width: ${product.rating * 2 * 10}%">
                        <div class="wrapper">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                    </div>
                    <div class="inactive">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                </div>
                <p class="mt-4">
                    ${product.description}
                </p>
            </div>
            <div style="min-width: 300px;">
                <div class="price mb-5">
                    ${product.discountPercentage > 0 ? `
                        <strong class="special">$${specialPrice.toFixed(2)}</strong>    
                        <span>$${product.price}</span>    
                    ` : `
                        <strong>$${product.price}</strong>
                    `}
                </div>
                <div>
                    <a href="#" onclick="addToCart(event, ${product.id}, '${product.thumbnail}', '${product.title}', '${specialPrice}')" class="btn btn-warning w-100">Add To Cart</a>
                </div>
            </div>
            
        </div>
    `;
}

document.querySelector('.produktai').innerHTML = html;

const produktai = document.querySelector('.produktai');
const krepselis = document.querySelector('.krepselis');
const krepselioProduktaiDiv = document.querySelector('.krepselio-produktai');

const krepselioProduktai = [];

function addToCart(e, id, photo, title, price) {
    e.preventDefault();

    produktai.style.display = 'none';
    krepselis.style.display = 'block';
    // console.log(krepselioProduktai.filter(value => value.id === id))
    if(krepselioProduktai.filter(value => value.id === id).length > 0) {
        for(const produktas of krepselioProduktai) {
            if(produktas.id === id) {
                produktas.qty++;
            }
        }
    } else {
        krepselioProduktai.push({id, photo, title, price, qty: 1});
    }

    // krepselioProduktaiDiv.innerHTML = '';

    // for(const produktas of krepselioProduktai) {
    //     krepselioProduktaiDiv.innerHTML += `
    //         <div class="row">
    //             <div class="col">
    //                 <img src="${produktas.photo}">
    //             </div>
    //             <div class="col">
    //                 ${produktas.title}
    //             </div>
    //             <div class="col">
    //                 <input type="number" value="${produktas.qty}">
    //             </div>
    //             <div class="col">
    //                 $${produktas.price}
    //             </div>
    //         </div>
    //     `;
    // }

    krepselioProduktaiDiv.innerHTML = krepselioProduktai.map(produktas => `
            <div class="row">
                <div class="col">
                    <img src="${produktas.photo}">
                </div>
                <div class="col">
                    ${produktas.title}
                </div>
                <div class="col">
                    <input type="number" value="${produktas.qty}">
                </div>
                <div class="col">
                    $${produktas.price}
                </div>
            </div>
        `).join('');

    document.querySelector('.items-count').textContent = `${krepselioProduktai.length} items`;
}

function backToProductList(e) {
    e. preventDefault();

    produktai.style.display = 'block';
    krepselis.style.display = 'none';
}
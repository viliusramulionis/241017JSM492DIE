let html = '';

for(const product of products) {
    let discountPrice = product.price / 100 * product.discountPercentage;
    let specialPrice = product.price - discountPrice;

    html += `
        <div class="d-flex border-bottom py-4">
            <div>
                <img src="${product.thumbnail}" style="max-width: 300px;" />
            </div>
            <div class="ps-5 pe-5">
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
                    <a href="#" class="btn btn-warning w-100">Add To Cart</a>
                </div>
            </div>
            
        </div>
    `;
}

document.querySelector('.produktai').innerHTML = html;
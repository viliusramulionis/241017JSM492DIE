const Product = ({ data, setShowCart, setCart }) => {
    let discountPrice = data.price / 100 * data.discountPercentage;
    let specialPrice = data.price - discountPrice;

    const goToCart = (e) => {
        e.preventDefault();
    
        setShowCart(true);

        // cart.push({
        //     id: data.id,
        //     price: specialPrice,
        //     image: data.thumbnail,
        //     quantity: 1,
        //     title: data.title
        // })

        // console.log(cart);

        setCart((cart) => {
            const index = cart.findIndex((value) => value.id === data.id)

            if(index === -1) {
                cart.push({
                    id: data.id,
                    price: specialPrice,
                    image: data.thumbnail,
                    quantity: 1,
                    title: data.title
                });
            } else {
                cart[index].quantity++;
            }

            return cart;
        });
    }
    

    return (
        <div key={data.id} className="d-flex flex-column flex-md-row border-bottom py-4">
            <div>
                <img src={data.thumbnail} style={{ maxWidth: 300 }} />
            </div>
            <div className="px-md-5">
                <h6 className="text-primary">{data.title}</h6>
                <div className="rating">
                    <div className="active" style={{ width: (data.rating * 2 * 10) + '%' }}>
                        <div className="wrapper">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                    </div>
                    <div className="inactive">
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <p className="mt-4">
                    {data.description}
                </p>
            </div>
            <div style={{ minWidth: 300 }}>
                <div className="price mb-5">
                    {data.discountPercentage > 0 ? 
                        <>
                        <strong className="special">${specialPrice.toFixed(2)}</strong>    
                        <span>${data.price}</span>  
                        </>  
                    : 
                        <strong>${data.price}</strong>
                    }
                </div>
                <div>
                    <a href="#" onClick={goToCart} className="btn btn-warning w-100">Add To Cart</a>
                </div>
            </div>
            
        </div>
    );
}

export default Product;
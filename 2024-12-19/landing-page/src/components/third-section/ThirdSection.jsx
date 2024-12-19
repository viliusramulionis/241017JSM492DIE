import image from '../../assets/section-images/3.jpg'
import './ThirdSection.css';

const ThirdSection = () => {
    return (
        <section className="third-section d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={image} />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, unde!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore voluptates molestiae facere voluptas assumenda. Corporis dolores nulla eaque voluptatibus? Omnis, quisquam? Mollitia quisquam modi nulla similique explicabo ex ea, cupiditate aperiam perferendis ullam, esse, provident quidem! Est suscipit reprehenderit labore. Labore, quibusdam eum quod suscipit delectus veniam sapiente minus.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ThirdSection;
import React from 'react';
import img1 from '../../img/client-1.jpg';
import img2 from '../../img/client-2.jpg';
import img3 from '../../img/client-3.jpg';
import './ClientsReview.css';

const ClietnsReview = () => {
    return (
        <div>
            <h2 className='text-center fw-bold my-5 text-success'>Our Happy Clients:</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
                <div class="col">
                    <div class="card h-100 client">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5>Jecy Mark</h5>
                            <p>Massage: That Was good products and finally its good brand Thanks.</p>
                            <p>Rating:4.6</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 client">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5>Tom Mark Lee</h5>
                            <p>Massage: That Was good products and finally its good brand Thanks.</p>
                            <p>Rating:5</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 client">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5>Gear Bards TYoo</h5>
                            <p>Massage: That Was good products and finally its good brand Thanks.</p>
                            <p>Rating: 4.8</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ClietnsReview;
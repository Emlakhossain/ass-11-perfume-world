import React from 'react';
import showroom1 from '../../img/showroom-1.jpg';
import showroom2 from '../../img/showroom-2.jpg';
import showroom3 from '../../img/showroom-3.jpg';
import './TopItem.css';

const TopItem = () => {
    return (
        <>
            <h2 className='my-5 text-center fw-bold text-success '>Our Showrooms:</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
                <div class="col">
                    <div class="card h-100 showroom">
                        <img src={showroom1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5> Gulshan-1</h5>
                            <p>DCC Market dhaka-1211</p>
                            <p>Contact:+8012121212</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 showroom">
                        <img src={showroom2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5>Dhanmondi</h5>
                            <p>Dhanmondi unimart Building,dhaka-1216</p>
                            <p>Contact:+8012121212</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 showroom">
                        <img src={showroom3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5>Gulshan-2</h5>
                            <p>City-corporation building,dhaka-1212</p>
                            <p>Contact:+8012121212</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default TopItem;
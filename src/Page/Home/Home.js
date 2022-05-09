import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Slider from '../Slider/Slider';
import TopItem from '../TopItem/TopItem';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Slider></Slider>
            <h1 className='text-center my-5 fw-bold text-success'>Our Products:</h1>
            <div className="row row-cols-1 row-cols-md-3 col-lg-12 g-4 mx-auto mt-5">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <TopItem></TopItem>
            {/* <ClietnsReview></ClietnsReview> */}

        </div>
    );
};

export default Home;
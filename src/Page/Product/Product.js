import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id, img, name, discription, price, ratings, seller } = product;
    const navigate = useNavigate();
    const handleManageInventory = id => {
        navigate(`product/${_id}`)
        console.log(navigate)
    }
    return (
        <>
            <div className="col card-container ">
                <div class="card h-100 mx-5 products">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{discription}</p>
                        <p>Suppliers:{seller}</p>
                        <p>Price:{price}</p>
                        <p>Rating: {ratings}</p>
                        <button className='btn btn-success' onClick={() => handleManageInventory(_id)}>{name}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
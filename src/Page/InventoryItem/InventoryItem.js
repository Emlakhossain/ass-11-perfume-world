import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `https://young-chamber-17457.herokuapp.com/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [productId])
    return (
        <div>
            <div className='Manage-item'>
                <h2 className='text-center'>Hello Client are You want to know to Products Current Stock?</h2>
                <p>{products._id}</p>
                <h2 className='text-center'>{productId}</h2>
                <p>Name: {products.name}</p>
                <Link to='/addproduct'><button className='btn btn-warning w-50 '>Update Items</button></Link>
            </div>
        </div>
    );
};

export default InventoryItem;
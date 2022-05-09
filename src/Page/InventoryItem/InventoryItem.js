import { Link, useParams } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = (props) => {
    const { productId, name, seller, _id, quantity } = useParams();
    console.log(productId)
    // const [manageItems, setManageItems] = useState([]);
    // useEffect(() => {
    //     const url = `http://localhost:3000/product/${productId}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setManageItems(data))
    // }, [productId])
    return (
        <div>
            <div className='Manage-item'>
                <h2 className='text-center'>Hello Client are You want to know to Products Current Stock?</h2>
                <p>{productId._id}</p>
                <h2 className='text-center'>{productId}</h2>
                <p>Name: {productId.quantity}</p>
                <Link to='/add'><button className='btn btn-warning w-50 '>Update Items</button></Link>
            </div>
        </div>
    );
};

export default InventoryItem;
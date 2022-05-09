import React from 'react';
import './AddItem.css';

const AddItem = () => {
    return (
        <div className='add-item'>
            <h4 className='text-center'>Please add Your Update Items:</h4>

            <form >
                <input className='w-50' name='Product Name' type="text" />
                <input className='w-50' name='Price' type="text" />
                <input className='w-50' name='img' type="text" />
            </form>
        </div>
    );
};

export default AddItem;
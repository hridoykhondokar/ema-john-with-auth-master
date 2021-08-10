import React from 'react';


const Inventory = () => {
const handleAddProduct = () => {
    const product = {};
    fetch(' /addProduct',{
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
}
    return (
        <div>

            <form action="">
                
            <p><span>Name</span> <input type="text" name="" value=""/></p>
            <p><span>Price</span> <input type="text" name="" value=""/></p>
            <p><span>Quantity</span> <input type="text" name="" value=""/></p>
            <p><span>Photo</span> <input type="file" name="" value=""/></p>

            <button onClick={handleAddProduct}>Add Product</button> 
            </form>
            
        </div>
    );
};

export default Inventory;
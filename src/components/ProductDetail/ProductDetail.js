import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch("http://glacial-caverns-92333.herokuapp.com/product/" + productKey)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [product]);
    
    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;
import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css'
import star from './star.png'

const Product = ({ id, title, price, image, rating }) => {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating
            }
        })
    }

    return (
        <div className='product'>
            <div className="product__info">
                <p className='product__title'>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong> {price} </strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><img src={star} alt="" /></p>
                    ))}

                </div>
            </div>
            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to busket</button>
        </div>
    );
};

export default Product;
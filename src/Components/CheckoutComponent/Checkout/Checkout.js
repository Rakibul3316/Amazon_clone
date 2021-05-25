import React from 'react';
import './Checkout.css'
import banner from './banner.jpg'
import SubTotal from '../SubTotal/SubTotal';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../Redux/StateProvider';

const Checkout = () => {

    const [{ basket }, dispatch] = useStateValue();

    return (


        <div className='checkout'>
            <div className="checkout__left">
                <img
                    className='checkout__ad'
                    src={banner} alt=""
                />

                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>

                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                    ))}

                </div>
            </div>

            <div className="checkout__right">
                <SubTotal />
            </div>

        </div>
    );
};

export default Checkout;
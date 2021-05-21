import React from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__img' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id='233787'
                        title='Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project)'
                        price={29.99}
                        image='https://m.media-amazon.com/images/I/61Ci9oVzWrL._AC_UL320_.jpg'
                        rating={5}
                    />

                    <Product
                        id='4748375'
                        title='Instant Pot Pro 10-in-1 Pressure Cooker, Slow Cooker, Rice/Grain Cooker, Steamer, Saute, Sous Vide, Yogurt Maker, Sterilizer, and Warmer, 6 Quart'
                        price={86.99}
                        image='https://m.media-amazon.com/images/I/81rxrMrhr5L._AC_UY218_.jpg'
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id='4754576'
                        title='LETSCOM Fitness Tracker HR, Activity Tracker Watch with Heart Rate Monitor, Waterproof Smart Fitness Band with Step Counter, Calorie Counter, Pedometer Watch for Women and Men'
                        price={77.59}
                        image='https://m.media-amazon.com/images/I/61uOaf54wlL._AC_UL320_.jpg'
                        rating={4}
                    />

                    <Product
                        id='395757'
                        title='Pyle Portable Speaker, Boombox, Bluetooth Speakers, Rechargeable Battery, Surround Sound, Digital Sound Amplifier, USB/SD/FM Radio, Wireless Hi-Fi Active Stereo Speaker System in Black (PBMSPG7)'
                        price={229.99}
                        image='https://m.media-amazon.com/images/I/81xGLhBmwaL._AC_UY218_.jpg'
                        rating={3}
                    />

                    <Product
                        id='3785677'
                        title='2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Sky Blue (4th Generation)'
                        price={129.99}
                        image='https://m.media-amazon.com/images/I/71FePRgkiZL._AC_UY218_.jpg'
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id='785747'
                        title='ASUS ROG Strix XG43VQ 43? Super Ultra-Wide Curved HDR Gaming Monitor 120Hz (3840 x 1200) 1ms FreeSync 2 HDR DisplayHDR 400 90% DCI-P3,BLACK'
                        price={159.99}
                        image='https://m.media-amazon.com/images/I/81xhJYiF3LL._AC_UY218_.jpg'
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
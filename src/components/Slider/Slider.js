import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../../static/style/slider.css'
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    const images = [
        'https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80',
        'https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1842&q=80',
        'https://images.unsplash.com/photo-1602330041000-4b8119482edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
    ]
    return <>
        <div className='w-full h-screen relative'>
            <Carousel
                autoPlay={true}
                interval={2000}
                infiniteLoop={true}
                stopOnHover={false}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
            >
                <div id='slider' className='w-full h-screen' style={{ backgroundImage: `url(${images[0]})` }}></div>
                <div id='slider' className='w-full h-screen' style={{ backgroundImage: `url(${images[1]})` }}></div>
                <div id='slider' className='w-full h-screen' style={{ backgroundImage: `url(${images[2]})` }}></div>
            </Carousel>
        </div>
    </>
}

export default Slider

// <div>
// <img className='w-full h-full' src="https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80" />
// </div>
// <div>
// <img className='w-full h-full' src="https://images.unsplash.com/photo-1620987278429-ab178d6eb547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" />
// </div>
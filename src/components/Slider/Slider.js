import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../../static/style/slider.css'
import { Carousel } from 'react-responsive-carousel';
import { BsSearch } from 'react-icons/bs'

const Slider = props => {
    const images = [
        'https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80',
        'https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1842&q=80',
        'https://images.unsplash.com/photo-1602330041000-4b8119482edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
    ]
    const [colorIndex, setColorIndex] = useState(0)
    const change = () => {
        if (colorIndex === props.colors.length - 1) {
            setColorIndex(0)
        } else {
            setColorIndex(colorIndex + 1)
        }
    }

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
                onChange={change}
            >
                <div id='slider' className='w-full h-screen' style={{ backgroundImage: `url(${images[0]})` }}></div>
                <div id='slider' className='w-full h-screen' style={{ backgroundImage: `url(${images[1]})` }}></div>
                <div id='slider' className='w-full h-screen' style={{ backgroundImage: `url(${images[2]})` }}></div>
            </Carousel>
            <div id='text' className='flex flex-col'>
                <h1 style={{ color: `${props.colors[colorIndex]}`, textShadow: '1px 1px 3px #131313' }} className='text-5xl font-bold mb-9'>Find the perfect freelance services for your business</h1>
                <div className='flex h-12 justify-center items-center '>
                    <div className='h-full w-14 bg-white text-gray-600 rounded-l flex justify-center items-center'><BsSearch /></div>
                    <input placeholder='Try "Website Developer"' className='flex h-full w-full focus:outline-none icon text-gray-900 pb-1 font-medium'></input>
                    <button style={{ backgroundColor: `${props.colors[colorIndex]}` }} id='button' className='h-full px-5 rounded-r text-white'>
                        Search
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Slider

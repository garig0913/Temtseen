import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../../static/style/slider2.css'
import { Carousel } from 'react-responsive-carousel';
import { BsSearch } from 'react-icons/bs'
import Slider3 from './Slider3';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/effect-fade/effect-fade.min.css'

import './styles.css'

import SwiperCore, {
    EffectFade, Navigation, Pagination, Autoplay
} from 'swiper';

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);


const Slider2 = props => {
    const images = [
        {
            image: 'https://images.unsplash.com/photo-1587334274535-5f82e7e55dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
        },
        {
            image: 'https://images.unsplash.com/photo-1615485925807-d11c291f531c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        },
        {
            image: 'https://images.unsplash.com/photo-1587735243475-46f39636076a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
        },

    ]

    const test = 'https://images.unsplash.com/photo-1587735243475-46f39636076a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'

    // setInterval(() => {
    //     if (colorIndex === props.colors.length - 1) {
    //         setColorIndex(0)
    //     } else {
    //         setColorIndex(colorIndex + 1)
    //     }
    // }, 3000);
    // const [colorIndex, setColorIndex] = useState(0)


    return <>
        <div id='grid' className='grid grid-cols-2'>

            {/* GRID1 */}
            <div id='grids' className='flex flex-col justify-center h-screen '>
                <div className='ml-14 mr-5'>
                    <h1 style={{ color: `black` }} className='text-7xl font-bold text-white mb-7'>Make bright ideas happen</h1>
                    <h1 className='text-2xl text-gray-900 font-semibold mb-8'>Find the best freelancers to deliver your projects</h1>
                    <div id='inputShadow' className='flex h-14 rounded-lg'>
                        <div className='h-full w-14 bg-white text-gray-600 rounded-l flex justify-center items-center'><BsSearch /></div>
                        <input className='h-full w-full focus:outline-none' />
                        <button style={{ backgroundColor: `black` }} id='button' className='h-full px-5 rounded-r text-white '>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* GRID2 */}
            <div id='grids' className='h-screen grid2'>
                <Swiper
                    onSlideChange={() => console.log('hi')}
                    slidesPerView={1}
                    loop={true}

                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false
                    }}
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        "clickable": true
                    }}
                >
                    {
                        images.map(slides => {
                            return <SwiperSlide><img id='imgSlider' src={slides.image} style={{ width: '100%', height: '100%' }} /></SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    </>
}

export default Slider2

import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../../static/style/slider2.css'
import { Carousel } from 'react-responsive-carousel';
import { BsSearch } from 'react-icons/bs'

const Slider2 = props => {
    const images = [
        'https://images.unsplash.com/photo-1587334274535-5f82e7e55dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        'https://images.unsplash.com/photo-1615485925807-d11c291f531c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        'https://images.unsplash.com/photo-1587735243475-46f39636076a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
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
        <div id='grid' className='grid grid-cols-2'>

            {/* GRID1 */}
            <div id='grids' className='flex flex-col justify-center h-screen '>
                <div className='mx-12'>
                    <h1 style={{ color: `${props.colors[colorIndex]}` }} className='text-7xl font-bold text-white mb-7'>Make bright ideas happen</h1>
                    <h1 className='text-2xl text-gray-900 font-semibold mb-8'>Find the best freelancers to deliver your projects</h1>
                    <div className='flex h-14'>
                        <div className='h-full w-14 bg-white text-gray-600 rounded-l flex justify-center items-center'><BsSearch /></div>
                        <input className='h-full w-full focus:outline-none shadow-xl' />
                        <button style={{ backgroundColor: `${props.colors[colorIndex]}` }} id='button' className='h-full px-5 rounded-r text-white '>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* GRID2 */}
            <div id='grids' className=' h-screen'>

            </div>
        </div>
    </>
}

export default Slider2

import WebFont from "webfontloader";
import { VscThreeBars } from 'react-icons/vsc'

const Navbar = props => {
    WebFont.load({
        google: {
            families: ["Anton"],
        },
    });
    return <>
        <div className='w-full flex justify-between items-center py-4 fixed bg-transparent border-b border-gray-300'>
            <div className='flex items-end ml-6 lg:ml-16'>
                <VscThreeBars className='text-3xl text-green-900 mb-0.5 lg:hidden opacity-80 font-bold' />
                <h1 className='text-4xl ml-3 text-green-900 font-extrabold'
                    style={{
                        font: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif',
                        letterSpacing: '-2px'
                    }}>fiverr<span className='text-green-400'>.</span></h1>
            </div>
            <div className='flex items-center gap-8 mr-20 text-lg' style={{
                font: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif',
                color: '#7a7d85'
            }}>
                <button id='transitionBtn' className='font-medium hover:text-green-500'>Fiverr Business</button>
                <button id='transitionBtn' className='font-medium hover:text-green-500'>Explore</button>
                <button id='transitionBtn' className='font-medium hover:text-green-500'>Become a seller</button>
                <button id='transitionBtn' className='font-medium hover:text-green-500'>Become a seller</button>
                <button id='transitionBtn' className='font-medium hover:text-green-500'>Sign in</button>
                <button id='transitionBtn' className='font-medium hover:text-green-500' style={{ transition: '190ms' }} className='px-6 border border-gray-500 rounded
                 mt-1 hover:bg-green-600 hover:text-gray-100 hover:border-gray-700'>Join</button>
            </div>
        </div>
    </>
}

export default Navbar
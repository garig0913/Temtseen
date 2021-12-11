import WebFont from "webfontloader";
import { VscThreeBars } from 'react-icons/vsc'

const Navbar = props => {
    WebFont.load({
        google: {
            families: ["Anton"],
        },
    });
    return <>
        <div className='w-full flex justify-between items-center py-3 fixed'>
            <div className='flex items-end ml-6 lg:ml-16'>
                <VscThreeBars className='text-3xl text-green-900 mb-0.5 lg:hidden opacity-80 font-bold' />
                <h1 className='text-4xl ml-3 text-green-900 font-extrabold'
                    style={{
                        font: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif',
                        letterSpacing: '-2px'
                    }}>fiverr<span className='text-green-400'>.</span></h1>
            </div>
            <div className='flex items-center gap-14 mr-20 text-lg' style={{
                font: 'Macan, Helvetica Neue, Helvetica, Arial, sans-serif',
            }}>
                <h1>Fiverr Business</h1>
                <h1>Explore</h1>
                <h1>Become a seller</h1>
                <h1>Become a seller</h1>
                <h1>Sign in</h1>
                <h1>Join</h1>
            </div>
        </div>
    </>
}

export default Navbar
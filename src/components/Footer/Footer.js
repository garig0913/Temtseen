import { BsTwitter, BsFacebook, BsLinkedin, BsPinterest, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return <>
        <div className='py-5 w-full flex justify-center bg-gray-50'>
            <div style={{ width: '91%' }} className='border-t flex justify-between py-5'>
                {/* LEFT SIDE */}
                <div className='flex items-end'>
                    <h1
                        className="text-3xl ml-3 font-extrabold text-gray-500"
                        style={{
                            font: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                            letterSpacing: "-2px",
                        }}
                    >
                        fiverr<span style={{
                            fontSize: '0.60rem',
                            lineHeight: '1rem'
                        }}>®</span>
                    </h1>
                    <h1 className='mb-0.5 ml-6 text-sm font-semibold text-gray-400'>© Fiverr International Ltd. 2021</h1>
                </div>

                {/* RIGHT SIDE */}
                <div className='flex gap-6 items-end text-gray-500 text-4xl'>
                    <BsTwitter className='hover:text-gray-700 cursor-pointer hover:bg-gray-200 rounded-xl p-2' />
                    <BsFacebook className='hover:text-gray-700 cursor-pointer hover:bg-gray-200 rounded-xl p-2' />
                    <BsLinkedin className='hover:text-gray-700 cursor-pointer hover:bg-gray-200 rounded-xl p-2' />
                    <BsPinterest className='hover:text-gray-700 cursor-pointer hover:bg-gray-200 rounded-xl p-2' />
                    <BsInstagram className='hover:text-gray-700 cursor-pointer hover:bg-gray-200 rounded-xl p-2' />
                </div>
            </div>
        </div>
    </>
}

export default Footer
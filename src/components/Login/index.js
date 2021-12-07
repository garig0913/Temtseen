import '../../static/style/login.scss'
import '../../static/style/fonts.css'
import image from '../../static/images/trim.jpg'
import image2 from '../../static/images/iphone.jpg'
import desk from '../../static/images/desk.jpg'
import logo from '../../static/images/logo.jpg'
import pngLogo from '../../static/images/logo.png'

const Login = props => {
    return <div id='outer-wrap' className='h-screen w-screen flex justify-center items-center bg-gray-200'>
        <div id='wrap' className='rounded-r-2xl'>
            {/* grid1 */}
            <div id='grid1' className='flex justify-center items-center'>
                <div id='login-section' className='flex flex-col justify-center items-center'>
                    <h1 className='text-3xl uppercase mb-4 mt-1'>Login</h1>
                    <div className='flex flex-col w-80 mb-5'>
                        <input id='input1' placeholder='email' className='my-3 mx-2 py-1.5 px-4' />
                        <input id='input2' placeholder='password' className='my-3 mx-2 py-1.5 px-4' />
                    </div>
                    <button className='px-8 py-1.5'>Submit</button>
                </div>
            </div>

            {/* grid2 */}
            <div id='grid2' className='rounded-r-2xl'>
            </div>
        </div>
    </div>
}

export default Login
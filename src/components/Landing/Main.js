import Slider from "../Slider/Slider"
import Slider2 from "../Slider/Slider2"
import Slider3 from "../Slider/Slider3"

const Main = () => {
    const colors2 = [
        '#da3601',
        '#b30205',
        '#adb924'
    ]
    const colors = [
        '#387aaa',
        '#fe9d96',
        '#394f64'
    ]

    return <>
        {/* <Slider colors={colors} /> */}
        <Slider2 colors={colors} />
        {/* <Slider3 /> */}

    </>
}

export default Main
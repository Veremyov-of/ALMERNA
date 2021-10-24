import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//style
import "../../css/slider/slider.css";

export default function Slider() {
    return (
        <div>
            <Carousel className="slider-body" autoPlay={true} emulateTouch={true} infiniteLoop={true} showArrows={false} showStatus={false}>
                    <div className="slider-item">
                        1
                    </div>
                    <div className="slider-item">
                        2
                    </div>
                    <div className="slider-item">
                        3
                    </div>
            </Carousel>
        </div>
    );
}
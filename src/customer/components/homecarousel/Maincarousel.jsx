// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { mainCarouselData } from './mainCarouselData';

// const items = mainCarouselData.map((item, index) => <img className='cursor-pointer' role="presentation"  src={item.image} alt={index} /> );

// const Maincarousel = () => (
//     <AliceCarousel
//         animationType="fadeout" 
//         animationDuration={800}
//         disableButtonsControls
//         infinite
//         items={items}
//         mouseTracking
//     />
// );

// export default Maincarousel;


import React from 'react';
import { mainCarouselData } from './mainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Maincarousel = () => {


    const items = mainCarouselData.map((item, index) => <img className='cursor-pointer' role="presentation"  src={item.image} alt={index} /> )


    return(
        <div>
            <AliceCarousel
                mouseTracking
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1500}
                infinite
            />
        </div>
    );
}

export default Maincarousel;
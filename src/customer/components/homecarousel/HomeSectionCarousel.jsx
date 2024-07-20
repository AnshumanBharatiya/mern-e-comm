import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectioncard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


function HomeSectionCarousel({data, sectionNames}) {
    const responsive = {
        0: { items: 2 },
        568: { items: 3 },
        1024: { items: 5 },
        1540: { items: 6 },
        1900: { items: 8 },
    };

    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = Math.max(prevIndex - 1, 0);
            return newIndex;
        });
    };

    const slideNext = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = Math.min(prevIndex + 1, items.length - responsive[1024].items);
            return newIndex;
        });
    };

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };

    const items = data.slice(0, 10).map((item, index) => <HomeSectionCard key={index} product={item} />);

    return (
        <div> 
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionNames}</h2> 
            <div className='relative border border-gray-300 rounded'>
                <div className='relative p-4'>
                    <AliceCarousel
                        items={items}
                        disableButtonsControls
                        responsive={responsive}
                        disableDotsControls
                        onSlideChanged={syncActiveIndex}
                        activeIndex={activeIndex}
                    />
                    {activeIndex !== items.length - responsive[1024].items && <Button variant="contained" className="z-50" onClick={slideNext} sx={{ position: 'absolute', top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white" }} aria-label='next'>
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>}
                    {activeIndex > 0 && <Button variant="contained" className="z-50" onClick={slidePrev} sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white" }} aria-label='prev'>
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>}
                </div>
            </div>
        </div>
    )
}

export default HomeSectionCarousel;
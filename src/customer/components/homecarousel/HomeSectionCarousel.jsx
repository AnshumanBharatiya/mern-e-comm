import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectioncard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../../data/mens_kurta';

function HomeSectionCarousel() {
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
            console.log(`Prev Clicked: ${newIndex}`);
            return newIndex;
        });
    };

    const slideNext = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = Math.min(prevIndex + 1, items.length - responsive[1024].items);
            console.log(`Next Clicked: ${newIndex}`);
            return newIndex;
        });
    };

    const syncActiveIndex = ({ item }) => {
        console.log(`Slide Changed: ${item}`);
        setActiveIndex(item);
    };

    const items = mens_kurta.slice(0, 10).map((item, index) => <HomeSectionCard key={index} product={item} />);

    return (
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
    )
}

export default HomeSectionCarousel;
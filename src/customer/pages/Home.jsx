import React from 'react'
import Maincarousel from '../components/homecarousel/Maincarousel'
import HomeSectionCarousel from '../components/homecarousel/HomeSectionCarousel'
import { mens_kurta } from '../../data/mens_kurta';

const Home = () => {
  return (
    <div>
        <Maincarousel/>
        <div className='space-y-20 py-20 flex flex-col justify-center px-4 lg:px-8'>
            <HomeSectionCarousel sectionNames="Mens's Kurta" data={mens_kurta}/>
            <HomeSectionCarousel sectionNames="Mens's Shoes" data={mens_kurta}/>
            <HomeSectionCarousel sectionNames="Mens's Shirt" data={mens_kurta}/>
            <HomeSectionCarousel sectionNames="Women's Saree" data={mens_kurta}/>
            <HomeSectionCarousel sectionNames="Women's Top" data={mens_kurta}/>
        </div>
    </div>
  )
}

export default Home
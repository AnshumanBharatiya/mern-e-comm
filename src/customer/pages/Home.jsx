import React from 'react'
import Maincarousel from '../components/homecarousel/Maincarousel'
import HomeSectionCarousel from '../components/homecarousel/HomeSectionCarousel'

const Home = () => {
  return (
    <div>
        <Maincarousel/>
        <div className='space-y-20 py-20 flex flex-col justify-center px-4 lg:px-8'>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default Home
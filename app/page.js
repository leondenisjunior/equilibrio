'use client'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function Home() {
  return (
    <main>
      {/*     <Banner /> */}
      {/*   
      <div className="max-w-[1800px] ml-auto mr-auto">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="max-h-[750px]"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <img
          src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="image"
          className="w-full"
        />

        <img
          src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="image"
          className="w-full"
        />
      </Carousel> 
      </div>
      
      */}
      {/* <Products /> */}
      {/*       <section className="max-w-[1200px] ml-auto mr-auto">
        <Hero
          buttonText="Saber mais"
          description="História de quem quer mais produção para seu negócio."
          resume="A Equilíbrio é uma empresa que começou a sua história há 12 anos, nas terras férteis de Catalão/GO. A confiança, transparência e o..."
          title="Quem somos"
        />
      </section>
      <Footer /> */}
      <Footer />
    </main>
  )
}

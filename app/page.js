'use client'
import Banner from '@/components/Banner'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import { Button } from '@mui/material'
/* import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Image from 'next/image' */
import React from 'react'
import Carousel from 'react-multi-carousel'
// import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { list } from './blog/page'

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import MapChart from '@/components/Maps'

export default function Home() {
  const videoId = 'https://www.youtube.com/watch?v=uDqujdezPsc'.split('v=')[1]
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  return (
    <section>
      <Container className="mb-8">
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
      </Container>
      <Container className="p-5">
        <Hero
          className="mb-8"
          videoUrl="https://www.youtube.com/watch?v=uDqujdezPsc"
          buttonText="Saber mais"
          title="Quem somos"
          description="História de quem quer mais produção para seu negócio."
          resume="A Equilíbrio é uma empresa que começou a sua história há 12 anos, nas terras férteis de Catalão/GO. A confiança, transparência e o..."
        />
      </Container>
      <Products />
      <Container backgroundColor="bg-gray2" className="mb-8 pt-8 pb-8">
        <div className="flex">
          <div className="flex flex-col min-w-[410px]">
            <h2 className="text-2xl font-semibold text-primary mb-5">
              Notícias & Eventos
            </h2>
            <p className="text-4xl font-bold mb-5">
              Acompanhe as notícias sobre a Equilíbrio
            </p>
            <span className="text-gray text-xl mb-5">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor.
            </span>
            <div>
              <Button
                style={{ textTransform: 'none' }}
                size="large"
                className="!rounded-xl !font-bold"
                variant="outlined"
                color="secondary"
              >
                Saber mais
              </Button>
            </div>
          </div>

          <div className="flex overflow-auto pb-4">
            {list.map((post, index) => (
              <div key={index} className="min-w-[372px] cursor-pointer mr-4">
                <div
                  className="h-[286px] rounded-t-2xl"
                  style={{
                    backgroundImage: `url(${post.imagem})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="flex flex-col justify-end h-full p-5 text-white">
                    <span className="text-sm font-semibold">{post.data}</span>
                  </div>
                </div>
                <div className="p-5 bg-white rounded-b-2xl">
                  <span className="text-lg font-normal text-green mb-2">
                    {post.titulo}
                  </span>
                  <h1 className="text-2xl font-bold">{post.descricao}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container className="mb-8">
        <Hero
          imageUrl="/Persona-eQ.png"
          buttonText="Saber mais"
          description="História de quem quer mais produção para seu negócio."
          resume="A Equilíbrio é uma empresa que começou a sua história há 12 anos, nas terras férteis de Catalão/GO. A confiança, transparência e o..."
          title="Quem somos"
        />
      </Container>
      <Container backgroundColor="bg-gray2">
        <div className="flex items-center justify-center">
          <div className="max-w-[300px]">
            <h2 className="text-5xl font-semibold text-green mb-5">
              Encontre a{' '}
              <span className="text-primary font-bold">Equilibrio</span> mais
              perto de você
            </h2>
            <Button
              style={{ textTransform: 'none' }}
              size="large"
              fullWidth
              className="!rounded-xl !font-bold"
              variant="outlined"
              color="secondary"
            >
              Falar com Especialista
            </Button>
          </div>
          <MapChart />
        </div>
      </Container>
    </section>
  )
}

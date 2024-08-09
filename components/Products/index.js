import React, { useState } from 'react'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import './styles.css'

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules'
import { Button } from '@mui/material'
import { caterories } from '@/utils/constants'
import Container from '../Container'
import Tab from '../Tab'
const products = {
  Pastagem: [
    {
      id: 1,
      tipo: 'Premium',
      nome: 'Pastagem',
      description:
        'Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      tipo: 'Premium',
      nome: 'Pastagem',
      description:
        'Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      tipo: 'Premium',
      nome: 'Pastagem',
      description:
        'Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      tipo: 'Premium',
      nome: 'Pastagem',
      description:
        'Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      tipo: 'Premium',
      nome: 'Pastagem',
      description:
        'Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão',
      image: 'https://via.placeholder.com/150',
    },
  ],
  'Matéria Prima': [
    {
      id: 1,
      tipo: 'Premium',
      nome: 'Matéria Prima',
      description:
        'Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      tipo: 'Premium',
      nome: 'Matéria Prima',
      description:
        'Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      tipo: 'Premium',
      nome: 'Matéria Prima',
      description:
        'Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      tipo: 'Premium',
      nome: 'Matéria Prima',
      description:
        'Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      tipo: 'Premium',
      nome: 'Matéria Prima',
      description:
        'Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão',
      image: 'https://via.placeholder.com/150',
    },
  ],
}

export default function Products() {
  const [category, setCategory] = useState('Pastagem')

  const onChangeCategory = (item) => {
    setCategory(item)
  }

  const list = products[category]

  return (
    <Container className="mb-8">
      <div className="flex justify-center mb-12">
        <div className="max-w-[870px] text-center">
          <h1 className="text-lg font-bold text-primary mb-5">Soluções</h1>
          <p className="text-4xl font-bold mb-3">
            Soluções com alta eficiência e desempenho
          </p>
          <span className="text-xl text-gray mb-12 ">
            A Equilíbrio Fertilizantes possui formulações de fertilizantes
            fosfatados, nitrogenados e potássicos que atendem as necessidades
            nutricionais das diversas culturas.
          </span>
        </div>
      </div>
      <Tab
        data={caterories}
        value={category}
        onChange={(item) => onChangeCategory(item)}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation
        freeMode
        className="!h-[550px]"
        pagination={{ clickable: true }}
        modules={[FreeMode, Navigation, Pagination]}
        style={{
          '--swiper-navigation-color': '#1E3F85',
          '--swiper-pagination-color': '#1E3F85',
        }}
      >
        {list.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-gray2 rounded-2xl h-[470px] w-[275px] p-5">
              <span className="text-sm text-gray mb-2">{product.tipo}</span>
              <h3 className="text-xl font-semibold mb-2">{product.nome}</h3>
              <img
                className="h-[275px] w-full mb-2"
                src={product.image}
                alt={product.name}
              />
              <p className="text-sm text-left">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-5 ">
        <Button
          style={{ textTransform: 'none' }}
          className="!rounded-xl !font-bold"
          variant="outlined"
          color="secondary"
        >
          Conheça nossos produtos
        </Button>
      </div>
    </Container>
  )
}

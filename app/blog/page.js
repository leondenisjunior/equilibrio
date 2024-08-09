'use client'
import * as React from 'react'

import Container from '@/components/Container'

export const list = [
  {
    data: '01 de Maio, 2024',
    imagem: 'https://cademeudono3.s3.amazonaws.com/EIOS2174.png',
    titulo: 'Categorias',
    descricao: 'Mechanics of mechanical robots in major states',
  },
  {
    data: '01 de Maio, 2024',
    imagem: 'https://cademeudono3.s3.amazonaws.com/EIOS2174.png',
    titulo: 'Categorias',
    descricao: 'Mechanics of mechanical robots in major states',
  },
  {
    data: '01 de Maio, 2024',
    imagem: 'https://cademeudono3.s3.amazonaws.com/EIOS2174.png',
    titulo: 'Categorias',
    descricao: 'Mechanics of mechanical robots in major states',
  },
  {
    data: '01 de Maio, 2024',
    imagem: 'https://cademeudono3.s3.amazonaws.com/EIOS2174.png',
    titulo: 'Categorias',
    descricao: 'Mechanics of mechanical robots in major states',
  },
  {
    data: '01 de Maio, 2024',
    imagem: 'https://cademeudono3.s3.amazonaws.com/EIOS2174.png',
    titulo: 'Categorias',
    descricao: 'Mechanics of mechanical robots in major states',
  },
  {
    data: '01 de Maio, 2024',
    imagem: 'https://cademeudono3.s3.amazonaws.com/EIOS2174.png',
    titulo: 'Categorias',
    descricao: 'Mechanics of mechanical robots in major states',
  },
]

export default function Blog() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold text-center mb-8">
        Notícias & Eventos
      </h1>
      <div
        className="h-[513px] rounded-xl mb-8"
        style={{
          backgroundImage:
            'url(' + 'https://cademeudono3.s3.amazonaws.com/EIOS2174.png' + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col justify-end h-full p-10 text-white">
          <span className="text-2xl">Postado hoje</span>
          <h2 className="text-3xl font-extrabold ">
            Mechanics of mechanical robots in major states{' '}
          </h2>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        {list.map((post, index) => (
          <div key={index} className="max-w-[372px] cursor-pointer mb-6">
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
    </Container>
  )
}

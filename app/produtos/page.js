'use client'
import Container from '@/components/Container'
import Filter from '@/components/Filter'
import Footer from '@/components/Footer'
import HeroImage from '@/components/HeroImage'
import Product from '@/components/Product'
import { productsCategory } from '@/mock'
import { caterories } from '@/utils/constants'
import classNames from 'classnames'
import { useState } from 'react'

export default function Produtos() {
  const [category, setCategory] = useState(caterories[0])

  const onChangeCategory = (item) => {
    setCategory(item)
  }
  const list = productsCategory[category]
  return (
    <section>
      <Container>
        <div className="flex justify-between items-center border-b border-solid border-gray3 pb-3 mb-14 mt-8">
          <span className="text-lg text-gray">Selecione por Linha:</span>
          <nav className="">
            <ul className="flex justify-between w-[600px]">
              {caterories.map((item) => {
                const className =
                  item === category
                    ? 'text-green font-bold border-b border-solid border-green'
                    : 'text-gray'
                return (
                  <li
                    onClick={() => onChangeCategory(item)}
                    className={classNames('text-xl cursor-pointer', className)}
                    key={item}
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <HeroImage
          className="mb-14"
          image="https://cademeudono3.s3.amazonaws.com/Rectangle+60+(1).png"
          resume="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="eQcoat"
          description="Lorem Ipsum is simply dummy text of the printing"
        />
        <div>
          <h3 className="text-2xl text-center font-semibold text-primary mb-14">
            Soluções
          </h3>
          <div className="flex">
            <Filter />
            <div className="flex flex-wrap justify-between">
              {list.map((product) => (
                <div className="mb-8" key={product.id}>
                  <Product
                    description={product.description}
                    image={product.image}
                    name={product.nome}
                    type={product.tipo}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </section>
  )
}

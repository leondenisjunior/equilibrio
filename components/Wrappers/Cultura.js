'use client'
import Container from '@/components/Container'
import HeroImage from '@/components/HeroImage'
import Product from '@/components/Product'
import Tab from '@/components/Tab'
import { productsCulture } from '@/mock'
import { cultures } from '@/utils/constants'
import classNames from 'classnames'
import { useState } from 'react'
const nutrientes = [
  'Ntritogênio (N)',
  'Fósforo (P)',
  'Potássio (K)',
  'Enxofre (S)',
  'Boro (B)',
]

const elements = {
  'Ntritogênio (N)': {
    title: 'Nitrogênio (N)',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    data: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
    ],
  },
  'Fósforo (P)': {
    title: 'Fósforo (P)',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    data: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
    ],
  },
  'Potássio (K)': {
    title: 'Potássio (K)',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    data: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
      'Lorem Ipsum is simply dummy text of the printing and typesetting',
    ],
  },
}
export default function CultureWrapper({ data }) {
  console.log('iddd', data[0].acf.id)
  const [culture, setCulture] = useState(data[0].acf)
  const [nutrient, setNutrient] = useState('Ntritogênio (N)')

  const onChangeCulture = (cultureSelected) => {
    setCulture(cultureSelected)
  }

  const onChangeNutrient = (nutrientSelected) => {
    setNutrient(nutrientSelected)
  }
  const element = elements[nutrient]
  const products = productsCulture[culture] || []
  return (
    <>
      <div className="m-5">
        <img src={culture.imagem} alt="cultura" />
      </div>
      <Container>
        <Tab data={data} onChange={onChangeCulture} value={culture.id.name} />
        <HeroImage
          className="mb-14 flex-row-reverse"
          image={culture.imagem}
          resume={culture.resumo}
          title={culture.titulo}
          description={culture.descricao}
        />
      </Container>
      <div className="bg-background">
        <Container className="p-5 pt-12 pb-12">
          <h2 className="text-3xl text-center mb-11">
            Deficiências nutricionais
          </h2>
          <div className="flex items-center mb-12">
            <nav className="mr-14">
              <ul className="w-[240px]">
                {nutrientes.map((item) => (
                  <li
                    onClick={() => onChangeNutrient(item)}
                    key={item}
                    className={classNames(
                      'border-b border-solid border-gray text-center pb-5 pt-5 cursor-pointer',
                      {
                        'font-extrabold': item === nutrient,
                      },
                    )}
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="font-semibold text-2xl text-primary mb-3">
                {element.title}
              </h3>
              <p className="mb-8">{element.description}</p>
              <ul className="list-disc">
                {element.data.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className="text-2xl text-center font-semibold text-primary mb-14">
            Soluções
          </h3>
          <div className="flex flex-wrap justify-between">
            {products.map((product) => (
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
        </Container>
      </div>
    </>
  )
}

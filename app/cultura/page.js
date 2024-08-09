import Container from '@/components/Container'
import HeroImage from '@/components/HeroImage'
import Product from '@/components/Product'
import Tab from '@/components/Tab'
import CultureWrapper from '@/components/Wrappers/Cultura'
import { productsCulture } from '@/mock'
import { cultures } from '@/utils/constants'
import classNames from 'classnames'
// import { useState } from 'react'

/* export async function generateStaticParams() {
  const data = await fetch(
    'https://equilibrio.berrante.digital/wp-json/wp/v2/culturas?acf_format=standard&_fields=acf',
  )
  const x = await data.json()
  console.log('xxxx', x)
  return x
} */

/* export async function getStaticProps() {
  const data = await fetch(
    'https://equilibrio.berrante.digital/wp-json/wp/v2/culturas?acf_format=standard&_fields=acf',
  )
  const x = await data.json()
  return {
    props: {
      data: x,
    },
  }
} */

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

export default async function Cultura() {
  const data = await fetch(
    'https://equilibrio.berrante.digital/wp-json/wp/v2/culturas?acf_format=standard&_fields=acf',
  )
  const culturas = await data.json()

  /*   const [culture, setCulture] = useState(cultures[0])
  const [nutrient, setNutrient] = useState('Ntritogênio (N)')

  const onChangeCulture = (cultureSelected) => {
    setCulture(cultureSelected)
  }
  const onChangeNutrient = (nutrientSelected) => {
    setNutrient(nutrientSelected)
  }
  const element = elements[nutrient]
  const products = productsCulture[culture] || [] */
  return (
    <section className="max-w-[1800px] ml-auto mr-auto">
      <CultureWrapper data={culturas} />
    </section>
  )
}

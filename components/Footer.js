import { ArrowUpwardOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const menus = [
  {
    name: 'O Grupo Equilíbrio',
    pages: [
      {
        name: 'Home',
        route: '/',
      },
      {
        name: 'Quem somos',
        route: '/sobre',
      },
      {
        name: 'Serviços',
        route: '/servicos',
      },
      {
        name: 'Noticias & Eventos',
        route: '/noticias-eventos',
      },
    ],
  },
  {
    name: 'Soluções',
    pages: [
      {
        name: 'Linha  eQcoat',
        route: '/eqcoat',
      },
      {
        name: 'Linha Solúvel',
        route: '/soluvel',
      },
      {
        name: 'Linha Pastagem ',
        route: '/pastagem',
      },
      {
        name: 'Matéria Prima',
        route: '/materia-prima',
      },
      {
        name: 'Cultura',
        route: '/cultura',
      },
    ],
  },
  {
    name: 'Fale conosco',
    pages: [
      {
        name: 'Contato',
        route: '/contato',
      },
      {
        name: 'Falar com especialista',
        route: '/falar-com-especialista',
      },
      {
        name: 'Unidades do Grupo ',
        route: '/contato',
      },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white h-[480px]">
      <div className="max-w-[1200px] ml-auto mr-auto h-full">
        <img src="/logo-background.png" alt="logo" className="absolute" />
        <div className="pt-[75px] relative">
          <div className="flex items-center justify-between border-b border-solid border-gray2 pb-8 mb-6">
            <div>
              <Image
                src="/logo-branca-grande.svg"
                alt="logo"
                width={427}
                height={121}
              />
            </div>
            <div className="flex">
              {menus.map((menu) => (
                <ul key={menu.name} className="ml-9">
                  <h3 className="text-2xl font-semibold mb-8">{menu.name}</h3>
                  {menu.pages.map((page) => (
                    <li key={page.name} className="mb-2">
                      <Link href={page.route}>{page.name}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <ul className="flex">
              <li className="text-xs font-semibold">
                2024 Equilíbrio Fertilizantes All rights reserved.
              </li>
            </ul>
            <Button
              style={{ textTransform: 'none' }}
              className="!rounded-xl !font-bold"
              color="white"
              variant="outlined"
              endIcon={<ArrowUpwardOutlined />}
            >
              Subir ao topo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

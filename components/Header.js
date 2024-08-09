'use client'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { styled } from '@mui/material/styles'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Modal,
} from '@mui/material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Clear,
  ExpandMore,
  Menu,
  PinDropOutlined,
  Remove,
  RemoveCircle,
} from '@mui/icons-material'

const styleContainer = {
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  borderRadius: 3,
}

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    maxWidth: 1280,
  },
}))

const items = [
  {
    name: 'eQcoat',
    values: [
      {
        patch: '/eqn-reforce',
        label: 'eqn reforce',
      },
      {
        patch: '/eqcoat',
        label: 'eqcoat',
      },
      {
        patch: '/eqn+',
        label: 'eqn+',
      },
    ],
  },
  {
    name: 'Capim Coat',
    values: [
      {
        patch: '/capim-coat-plantio',
        label: 'Capim coat plantio',
      },
    ],
  },
  {
    name: 'Matéria prima',
    values: [
      {
        patch: '/kcl',
        label: 'KCL',
      },
      {
        patch: '/map',
        label: 'MAP',
      },
      {
        patch: '/super-triplo',
        label: 'SUPER TRIPLO',
      },
    ],
  },
  {
    name: 'Solúvel',
    values: [
      {
        patch: '/kcl',
        label: 'KCL',
      },
      {
        patch: '/map',
        label: 'MAP',
      },
      {
        patch: '/super-triplo',
        label: 'SUPER TRIPLO',
      },
    ],
  },
  {
    name: 'Fontes de boro',
    values: [
      {
        patch: '/kcl',
        label: 'KCL',
      },
      {
        patch: '/map',
        label: 'MAP',
      },
      {
        patch: '/super-triplo',
        label: 'SUPER TRIPLO',
      },
    ],
  },
  {
    name: 'Fontes de enxofre',
    values: [
      {
        patch: '/kcl',
        label: 'KCL',
      },
      {
        patch: '/map',
        label: 'MAP',
      },
      {
        patch: '/super-triplo',
        label: 'SUPER TRIPLO',
      },
      {
        patch: '/map',
        label: 'MAP',
      },
      {
        patch: '/super-triplo',
        label: 'SUPER TRIPLO',
      },
    ],
  },
]

const menus = [
  {
    label: 'Home',
    patch: '/',
  },
  {
    label: 'O Grupo eQuilíbrio',
    patch: '',
    values: [
      {
        name: '',
        values: [
          {
            patch: '/sobre',
            label: 'Sobre nós',
          },
          {
            patch: '/unidades',
            label: 'Unidades',
          },
          {
            patch: '/instituto',
            label: 'Instituto',
          },
        ],
      },
    ],
  },
  {
    label: 'Soluções',
    patch: '',
    values: items,
    button: {
      lavel: 'Ver todos',
      action: () => {},
    },
    image:
      'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    label: 'Notícias & Eventos',
    patch: '/noticias-eventos',
  },
]
export default function Header() {
  const [modal, setModal] = useState(false)
  return (
    <header className="">
      <nav className="max-w-7xl ml-auto mr-auto">
        <ul className="flex items-center justify-between p-5 ">
          <li>
            <Image
              alt="logo"
              src="/logo.svg"
              width={177}
              height={50}
              className="max-h-[35px] lg:max-h-[50px]"
            />
          </li>
          <ul className="block lg:hidden">
            <IconButton onClick={() => setModal(true)} aria-label="delete">
              <Menu />
            </IconButton>
          </ul>
          <ul className="hidden lg:flex items-center">
            {menus.map(({ label, patch, values, button }) => {
              if (patch) {
                return (
                  <li className="text-lg mr-8" key={patch}>
                    <a href={patch}>{label}</a>
                  </li>
                )
              }
              return (
                <li className="text-lg mr-8" key={patch}>
                  <LightTooltip
                    title={
                      <div className=" p-5">
                        <div className="flex">
                          {values &&
                            values.map((item) => (
                              <ul className="mr-8 " key={item.name}>
                                {item.name && (
                                  <h2 className="text-xl font-normal mb-5 border-b border-solid border-gray3 pb-2">
                                    {item.name}
                                  </h2>
                                )}
                                <div className="flex flex-col ">
                                  {item.values.map((el) => (
                                    <Link
                                      className="text-base border-b border-solid border-gray3 pb-2 mb-5"
                                      key={el.label}
                                      href={el.patch}
                                    >
                                      {el.label}
                                    </Link>
                                  ))}
                                </div>
                              </ul>
                            ))}
                        </div>
                        {button && (
                          <div className="flex justify-center">
                            <Button
                              style={{ textTransform: 'none' }}
                              className="!rounded-xl !font-bold"
                              variant="outlined"
                              color="secondary"
                              onClick={button.action}
                            >
                              {button.lavel}
                            </Button>
                          </div>
                        )}
                      </div>
                    }
                  >
                    <span className="cursor-pointer">{label}</span>
                    <KeyboardArrowRightIcon />
                  </LightTooltip>
                </li>
              )
            })}
            <li>
              <Button
                style={{ textTransform: 'none' }}
                endIcon={<KeyboardArrowRightIcon />}
                variant="contained"
              >
                Fale Conosco
              </Button>
            </li>
          </ul>
        </ul>
      </nav>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        className="!overflow-auto"
      >
        <Box>
          <div className="flex flex-col bg-white p-5">
            <ul className="flex flex-col">
              <div className="flex justify-end">
                <IconButton onClick={() => setModal(false)}>
                  <Clear />
                </IconButton>
              </div>
              {menus.map(({ label, patch, values, button }) => {
                if (patch) {
                  return (
                    <li className="text-lg mb-5" key={patch}>
                      <a href={patch}>{label}</a>
                    </li>
                  )
                }
                return (
                  <li className="" key={patch}>
                    <Accordion
                      sx={{
                        boxShadow: 'none', // Remove a sombra
                        border: 'none', // Remove a borda
                        '&:before': {
                          // Remove a linha divisória que aparece antes do Accordion
                          display: 'none',
                        },
                      }}
                    >
                      <AccordionSummary
                        className="!p-0"
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        {label}
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="">
                          <div className="flex flex-col text-base">
                            {values &&
                              values.map((item) => (
                                <ul className="mb-5" key={item.name}>
                                  {item.name && (
                                    <h2 className="font-semibold mb-2">
                                      {item.name}
                                    </h2>
                                  )}
                                  <div className="flex flex-col ">
                                    {item.values.map((el) => (
                                      <Link
                                        className=" mb-2"
                                        key={el.label}
                                        href={el.patch}
                                      >
                                        {el.label}
                                      </Link>
                                    ))}
                                  </div>
                                </ul>
                              ))}
                          </div>
                          {button && (
                            <Button
                              fullWidth
                              style={{ textTransform: 'none' }}
                              className="!rounded-xl !font-bold"
                              variant="outlined"
                              color="secondary"
                              onClick={button.action}
                            >
                              {button.lavel}
                            </Button>
                          )}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                )
              })}
              <li>
                <Button
                  fullWidth
                  style={{ textTransform: 'none' }}
                  endIcon={<KeyboardArrowRightIcon />}
                  variant="contained"
                >
                  Fale Conosco
                </Button>
              </li>
            </ul>
          </div>
        </Box>
      </Modal>
    </header>
  )
}

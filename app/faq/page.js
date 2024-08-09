import * as React from 'react'
import Accordion from '@mui/material/Accordion'
// import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import Container from '@/components/Container'
// import { ArrowUpwardOutlined } from '@mui/icons-material'

const faqs = [
  'Quais são os tamanhos das embalagens de fertilizantes disponíveis?',
  'Qual é o melhor fertilizante para minha cultura específica?',
  'Como faço para comprar fertilizantes diretamente da empresa?',
  'Quais métodos de pagamento são aceitos?',
  'Os produtos possuem certificação de qualidade?',
]

export default function Faq() {
  return (
    <section className="max-w-[1800px] ml-auto mr-auto">
      <div className="m-5 mb-12">
        <img
          src="https://cademeudono3.s3.amazonaws.com/Rectangle+68.png"
          alt="cultura"
        />
      </div>
      <Container>
        <div className=" mb-11">
          <h2 className="font-bold text-5xl mb-5">Perguntas frequentes:</h2>
          <span className="text-base">
            Encontre respostas para perguntas comuns sobre nossos produtos e
            serviços.
          </span>
        </div>
        {faqs.map((faq) => (
          <Accordion key={faq}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="!text-xl"
            >
              {faq}
            </AccordionSummary>
            <AccordionDetails>{faq}</AccordionDetails>
          </Accordion>
        ))}
        <div className="flex flex-col mt-12">
          <h3 className="font-bold text-3xl mb-3">Ainda tem dúvidas?</h3>
          <span className="text-base mb-8">
            Entre em contato com nossa equipe de suporte para obter assistência.
          </span>
          <div className="mb-12">
            <Button
              size="large"
              style={{ textTransform: 'none' }}
              className="!rounded-xl !font-bold "
              variant="outlined"
              color="secondary"
            >
              Entrar em contato
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

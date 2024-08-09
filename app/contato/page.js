'use client'
import Container from '@/components/Container'
import {
  // ArrowBackIosNewOutlined,
  ArrowRightAltOutlined,
  EmailOutlined,
  // LocalActivityOutlined,
  WhatsApp,
  // WhatshotOutlined,
} from '@mui/icons-material'
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
// import Image from 'next/image'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Button, TextField } from '@mui/material'

const validationSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('Emial é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
})

export default function Contato() {
  const onSubmit = () => {}
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema,
    onSubmit,
  })
  return (
    <Container>
      <div className="flex items-center mt-8 mb-8">
        <img
          src="https://cademeudono3.s3.amazonaws.com/EIOS2174.png"
          alt="image"
          className="w-1/2 mr-8 h-[500px]"
        />
        <div className="">
          <h2 className="text-2xl text-center mb-8">Conecte-se</h2>
          <form noValidate onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              className="!mb-5"
              name="name"
              label="Nome"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              name="email"
              label="E-mail"
              className="!mb-5"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              name="phone"
              className="!mb-5"
              label="Telefone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              fullWidth
              name="location"
              className="!mb-5"
              label="Cidade/Estado"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
            />
            <TextField
              fullWidth
              name="message"
              label="Mensagem"
              className="!mb-5"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <div className="flex justify-center">
              <Button
                style={{ textTransform: 'none' }}
                variant="contained"
                color="success"
                endIcon={<ArrowRightAltOutlined />}
              >
                Enviar mensagem
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="mb-8">
        <span className="text-xl">Contato Matriz</span>
        <h1 className="text-4xl font-bold">Unidade de Catalão</h1>
        <span>Sinta-se à vontade para entrar em contato conosco.</span>
      </div>
      <div className="flex justify-between mb-8">
        <div className="flex justify-between w-full">
          <div className="">
            <EmailOutlined fontSize="large" color="success" />
            <h2 className="text-xl font-bold">Email</h2>
            <p className="mb-3 text-sm">Envie-nos um e-mail hoje!</p>
            <span>contatoequilibrio@gmail.com</span>
          </div>
          <div className="">
            <WhatsApp fontSize="large" color="success" />
            <h2 className="text-xl font-bold">Whatsapp</h2>
            <p className="mb-3 text-sm">Ligue-nos agora!</p>
            <span>+55 0 0000-0000</span>
          </div>
          <div className="">
            <LocationOnOutlinedIcon fontSize="large" color="success" />
            <h2 className="text-xl font-bold">Localização</h2>
            <p className="mb-3 text-sm">Envie-nos um e-mail hoje!</p>
            <span>Clique e veja no Maps</span>
          </div>
          <div className="">
            <AddBusinessOutlinedIcon fontSize="large" color="success" />
            <h2 className="text-xl font-bold">Outras Unidades</h2>
            <p className="mb-3 text-sm">
              Acesse outras unidades do Grupo Equilibrio
            </p>
            <span>Saiba mais</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

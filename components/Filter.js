import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import { Button, styled } from '@mui/material'

const SelectUI = styled((props) => <Select {...props} />)(() => ({
  '& .MuiSelect-multiple': {
    backgroundColor: '#ECEDF1',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}))

const itensCultura = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]

const itensNutrientes = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]

export default function Filter() {
  const [values, setValues] = React.useState({
    nutrientes: [],
    culturas: [],
  })

  const handleChange = (event) => {
    const {
      target: { value, name },
    } = event
    setValues((el) => ({
      ...el,
      [name]: typeof value === 'string' ? value.split(',') : value,
    }))
  }

  const onChandeReset = () => {
    setValues({
      nutrientes: [],
      culturas: [],
    })
  }

  return (
    <article className="min-w-[274px] mr-8">
      <h3 className="text-primary text-xl font-semibold border-none mb-3">
        Filtrar por:
      </h3>
      <div className="flex justify-end mb-3">
        <Button
          onClick={onChandeReset}
          className=""
          startIcon={<CloseOutlinedIcon />}
          size="small"
          variant="text"
          color="gray"
          style={{ textTransform: 'none' }}
        >
          Redefinir
        </Button>
      </div>
      <FormControl fullWidth className="!mb-5">
        <InputLabel>Nutrientes</InputLabel>
        <SelectUI
          multiple
          name="nutrientes"
          value={values.nutrientes}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(', ')}
        >
          {itensNutrientes.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={values.nutrientes.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </SelectUI>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Culturas</InputLabel>
        <SelectUI
          name="culturas"
          multiple
          value={values.culturas}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(', ')}
        >
          {itensCultura.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={values.culturas.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </SelectUI>
      </FormControl>
    </article>
  )
}

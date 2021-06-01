import { useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

interface SelectProps {
  id
  defaultValue
}

const Select = styled.select<SelectProps>`
  width: 100%;
  padding: 2rem 1rem;
  color: var(--color-white);
  font-weight: 600;
  background-color: var(--color-chateau);
  border: 4px solid var(--color-white);
`

export function SelectInput({
  id,
  placeholder,
  initialValue,
  onChange
}: InferProps<typeof SelectInput.propTypes>) {
  const [value, setValue] = useState('')

  return (
    <Select
      id={id}
      defaultValue={initialValue}
      onChange={e => {
        setValue(e.target.value)
        if (onChange) onChange(e)
      }}
    >
      <option value="" disabled>{placeholder}</option>
      <option>1</option>
      <option>2</option>
    </Select>
  )
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

SelectInput.defaultProps = {
  initialValue: '',
  placeholder: ''
}
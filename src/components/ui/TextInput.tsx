import { useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

import { visuallyHidden } from '@/styles/mixins'

interface LabelProps {
  htmlFor
  hidden
}

interface IconProps {
  icon
}

interface InputProps {
  id
  type
  placeholder
  defaultValue
  hasIcon,
  size
}

const Label = styled.label<LabelProps>`
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  padding-bottom: 1.2rem;

  ${({ hidden }) => hidden ? visuallyHidden : ''}
`

const InputWrapper = styled.div`
  position: relative;
`

const Icon = styled.span<IconProps>`
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translateY(-50%);
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${props => props.icon});
  background-size: cover;
`

const Input = styled.input<InputProps>`
  padding: ${props => props.size === 'small' ? '1rem' : '2rem 1rem'};
  ${props => props.hasIcon ? 'padding-right: 3.2rem;' : ''}

  width: 100%;
  color: var(--color-white);
  font-weight: 600;
  background-color: var(--color-chateau);
  border: 4px solid var(--color-white);

  &::placeholder {
    color: var(--color-french);
  }
`

export function TextInput({
  id,
  label,
  placeholder,
  hideLabel,
  initialValue,
  icon,
  size,
  onChange
}: InferProps<typeof TextInput.propTypes>) {
  const [value, setValue] = useState('')

  return (
    <>
      <Label htmlFor={id} hidden={hideLabel}>{label}</Label>
      <InputWrapper>
        <Input
          id={id}
          type='text'
          placeholder={placeholder}
          defaultValue={initialValue}
          hasIcon={!!icon}
          size={size}
          onChange={e => {
            setValue(e.target.value)
            if (onChange) onChange(e)
          }}
        />
        {icon && <Icon icon={icon} />}
      </InputWrapper>
    </>
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,
  hideLabel: PropTypes.bool,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  onChange: PropTypes.func
}

TextInput.defaultProps = {
  initialValue: '',
  placeholder: '',
  hideLabel: false,
  size: 'small'
}
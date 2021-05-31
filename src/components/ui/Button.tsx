import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

const ButtonElem = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  color: var(--color-white);
  border: 4px solid var(--color-white);
  font-size: 1.6rem;
  font-weight: 600;
`

export function Button({
  text,
  onClick
}: InferProps<typeof Button.propTypes>) {
  return (
    <ButtonElem onClick={onClick}>
      {text}
    </ButtonElem>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
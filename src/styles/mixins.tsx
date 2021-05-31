// @ts-nocheck
import { css } from 'styled-components'
import { breakpoints } from './variables'

export const visuallyHidden = css`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`

export const stripButton = css`
  display: block;
  appearance: none;
  background: none;
  padding: 0;
  border: none;
  white-space: nowrap;
  cursor: pointer;
`

export const mq = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `
  return acc
}, {})
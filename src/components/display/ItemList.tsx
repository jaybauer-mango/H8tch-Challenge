import { useContext } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

import { ListContext, FilterContext } from '@/context'

const ListWrapper = styled.div`
  width: 100%;
  color: var(--color-white);

  span {
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    display: block;
    padding: 2rem;
    background: linear-gradient(0deg, var(--color-fiord) 0%, var(--color-casper) 100%);
  }
`

const DeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  border: 2px solid var(--buttonColor);
  border-radius: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    height: 12px;
    width: 2px;
    margin: -1px -1px;
    background-color: var(--buttonColor);
    transform: rotate(45deg);
    z-index: 1;
  }

  &::after {
    content: '';
    display: block;
    height: 12px;
    width: 2px;
    margin: -1px -1px;
    background-color: var(--buttonColor);
    transform: rotate(135deg);
    z-index: 2;
  }
`

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  font-size: 1.6rem;
  font-weight: 600;

  &:nth-child(odd) {
    color: var(--color-raven);
    background-color: var(--color-porcelain);

    ${DeleteBtn} {
      --buttonColor: var(--color-raven);
    }
  }

  &:nth-child(even) {
    background-color: var(--color-french);

    ${DeleteBtn} {
      --buttonColor: var(--color-white);
    }
  }
`

export function ItemList({
  header,
  items
}: InferProps<typeof ItemList.propTypes>) {
  const { filter } = useContext(FilterContext)
  const { deleteItem } = useContext(ListContext)

  return (
    <ListWrapper>
      <span>{header}</span>
      <ul>
        {items.map(item => {
          if (!item) return
          if (!filter || item.text?.includes(filter)) {
            return (
              <Item key={item.id}>
                {item.text}
                <DeleteBtn onClick={() => deleteItem(item.id!)} />
              </Item>
            )
          }
        })}
      </ul>
    </ListWrapper>
  )
}

ItemList.propTypes = {
  header: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    column: PropTypes.number,
    text: PropTypes.string
  })).isRequired
}
import { useContext } from 'react'
import styled from 'styled-components'

import { ListContext } from '@/context'
import { ItemList, Sidebar } from '@/components'

const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.2rem;
  margin-bottom: 1.6rem;
  background: linear-gradient(0deg, var(--color-fiord) -50%, var(--color-casper) 100%);
  font-size: 2.4rem;
  font-weight: 600;
`

const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-basis: 33.333333%;
  width: 100%;

  div {
    width: 100%;
  }
`

const BorderWrapper = styled.div`
  width: 100%;
  border: 6px solid var(--color-white);

  &:not(:last-of-type) {
    margin-right: -6px;
  }
`

export function ColumnDisplay() {
  const { list } = useContext(ListContext)

  return (
    <>
      <Header>ADD ITEM</Header>
      <OuterWrapper>
        <Sidebar />
        <BorderWrapper>
          <ItemList
            header="COLUMN 1"
            items={list.filter(item => item.column === 1)} />
        </BorderWrapper>
        <BorderWrapper>
          <ItemList
            header="COLUMN 2"
            items={list.filter(item => item.column === 2)} />
        </BorderWrapper>
      </OuterWrapper>
    </>
  )
}
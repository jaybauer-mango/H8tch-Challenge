import { useContext } from 'react'
import styled from 'styled-components'

import { ListContext } from '@/context'
import { ItemList, Sidebar } from '@/components'
import { mq } from '@/styles/mixins'

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
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  ${mq.md`
    flex-direction: row;
  `}
`

const SidebarWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  width: 100%;
  height: 100%;
  margin-bottom: 2.4rem;

  ${mq.md`
    flex-basis: 33.333%;
    padding-right: 1.2rem;
  `}

  ${mq.sm`
    flex-basis: 33.333%;
  `}
`

const ListWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  width: 100%;

  ${mq.md`
    flex-basis: 66.667%;
  `}

  ${mq.sm`
    flex-direction: row;
  `}
`

const BorderWrapper = styled.div`
  width: 100%;
  border: 6px solid var(--color-white);

  &:not(:last-of-type) {
    margin: 0 0 -6px 0;
  }

  ${mq.sm`
    &:not(:last-of-type) {
      margin: 0 -6px 0 0;
    }
  `}
`

export function ColumnDisplay() {
  const { list } = useContext(ListContext)

  return (
    <>
      <Header>ADD ITEM</Header>
      <OuterWrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ListWrapper>
          <BorderWrapper>
            <ItemList
              header="COLUMN 1"
              items={list.filter(item => item.column === 1)}
            />
          </BorderWrapper>
          <BorderWrapper>
            <ItemList
              header="COLUMN 2"
              items={list.filter(item => item.column === 2)}
            />
          </BorderWrapper>
        </ListWrapper>
      </OuterWrapper>
    </>
  )
}
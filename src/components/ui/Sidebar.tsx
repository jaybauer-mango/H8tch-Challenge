import { useContext, useState } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

import { ListContext, FilterContext } from '@/context'
import { Button, TextInput, SelectInput } from '@/components'
import magnifier from '@/assets/magnifier.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const InnerWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 1.6rem;
  }

  &:last-of-type {
    margin-top: auto;
  }
`

export function Sidebar() {
  const [newItem, setNewItem] = useState('')
  const [selectedColumn, setSelectedColumn] = useState('')
  const { addItem } = useContext(ListContext)
  const { changeFilter } = useContext(FilterContext)

  const addNewItem = () => {
    if (selectedColumn.length && newItem.length) {
      addItem({
        id: uuid(),
        column: parseInt(selectedColumn),
        text: newItem
      })
    } else {
      alert('Please fill out all fields')
    }
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <TextInput
          id="new-item"
          label="Enter new item"
          placeholder="ENTER ITEM"
          hideLabel={true}
          size="large"
          onChange={(e) => setNewItem(e.target.value)}
        />
      </InnerWrapper>

      <InnerWrapper>
        <SelectInput
          id="select-column"
          placeholder="CHOOSE COLUMN"
          onChange={(e) => setSelectedColumn(e.target.value)}
        />
      </InnerWrapper>

      <InnerWrapper>
        <Button
          text="ADD ITEM"
          onClick={() => addNewItem()}
        />
      </InnerWrapper>

      <InnerWrapper>
        <TextInput
          id="search-input"
          label="SEARCH AN ITEM"
          placeholder="SEARCH"
          icon={magnifier}
          onChange={(e) => changeFilter(e.target.value)}
        />
      </InnerWrapper>
    </Wrapper>
  )
}
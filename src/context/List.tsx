import React, { useState, createContext } from 'react'

interface listItem {
  id: string
  column: number
  text: string
}

type ListContextState = {
  list: listItem[]
  addItem: (item: listItem) => void
  deleteItem: (id: string) => void
}

const defaultValues: ListContextState = {
  list: [],
  addItem: () => {},
  deleteItem: () => {}
}

export const ListContext = createContext<ListContextState>(defaultValues)
export const ListProvider = ({ children }) => {

  const [list, setList] = useState<listItem[]>(defaultValues.list)

  const addItem = (item: listItem) => {
    setList([...list, item])
  }

  const deleteItem = (id: string) => {
    setList(list.filter(item => item.id !== id))
  }

  return (
    <ListContext.Provider value={{ list, addItem, deleteItem }}>
      {children}
    </ListContext.Provider>
  )
}
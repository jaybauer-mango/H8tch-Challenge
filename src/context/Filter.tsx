import { useState, createContext } from 'react'

type FilterContextState = {
  filter: string
  changeFilter: (text: string) => void
}

const defaultValues: FilterContextState = {
  filter: '',
  changeFilter: () => {}
}

export const FilterContext = createContext<FilterContextState>(defaultValues)
export const FilterProvider = ({ children }) => {

  const [filter, setFilter] = useState<string>(defaultValues.filter)
  const changeFilter = (text: string) => setFilter(text)

  return (
    <FilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
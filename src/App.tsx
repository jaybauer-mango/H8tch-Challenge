import styled from 'styled-components'

import { siteMaxWidth } from '@/styles/variables'
import { FilterProvider, ListProvider } from '@/context'
import { ColumnDisplay } from '@/components'

const MainWrapper = styled.main`
  display: block;
  padding: 12rem 2.4rem;
  margin: 0 auto;
  max-width: ${siteMaxWidth};
`

const Header = styled.header`
  margin-bottom: 7.5rem;

  h1 {
    font-family: 'Merriweather', serif;
    font-size: 6rem;
    font-weight: 400;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.25;
    color: var(--color-aquamarine);
    max-width: 50rem;
  }
`

export const App = () => {
  return (
    <FilterProvider>
      <ListProvider>
        <MainWrapper>
          <Header>
            <h1>Marvelous!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
          </Header>

          <ColumnDisplay />
        </MainWrapper>
      </ListProvider>
    </FilterProvider>
  )
}
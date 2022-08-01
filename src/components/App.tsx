import styled from "styled-components"
import Button from "./Button/Button"
import Section from "./Section"

// #region styled
const Header = styled.header`
  text-align: center;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  font-size: 5rem;
`

const Article = styled.article`
  display: flex;
  justify-content: center;
  gap: 1rem;
`
// #endregion

const App = () => {
  return (
    <main>
      <Header>
        <h1>fint</h1>
      </Header>

      <Section>
        <Title>Button</Title>
        <Article>
          <Button>Default</Button>
          <Button>
            <svg viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" aria-hidden="true">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Icon
          </Button>
          <Button type="submit">Submit</Button>
          <Button type="button">Type Button</Button>
          <Button type="reset">Reset</Button>
          <Button disabled>Disabled</Button>
          <Button theme={{ colors: { text: "#ff5555" } }}>Custom</Button>
        </Article>
      </Section>
    </main>
  )
}

export default App


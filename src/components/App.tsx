import styled from "styled-components"
import Button from "./Button/Button"

// #region styled
const Header = styled.header`
  text-align: center;
  h1 {
    font-size: 5rem;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 50px 0;

  article,
  form {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`
// #endregion

const App = () => {
  return (
    <main>
      <Header>
        <h1>fint</h1>
      </Header>

      <Section>
        <h2>Button</h2>
        <p>Unified modern style, visual differences reinforce purpose.</p>
        <article className="fluid-flex">
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
          <Button className="btn-custom">Custom</Button>
        </article>

        <h2>
          When inside a <code>&#60;form&#62;</code>
        </h2>
        <p>
          <span className="red-squigly">Untyped Buttons</span> visually match their new contextual default of type submit.
        </p>

        <form action="" className="fluid-flex">
          <Button>Default</Button>
          <Button>
            Icon <span data-icon="cloud"></span>
          </Button>
          <Button type="submit">Submit</Button>
          <Button type="button">Type Button</Button>
          <Button type="reset">Reset</Button>
          <Button disabled>Disabled</Button>
          <Button className="btn-custom btn-large" type="button">
            Large Custom
          </Button>
        </form>
      </Section>
    </main>
  )
}

export default App


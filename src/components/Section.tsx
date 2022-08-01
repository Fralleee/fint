import { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"
import { base, light, dark } from "styles/themes"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 50px 0;
  background-color: ${props => props.theme.colors.background};
`
type ThemeKey = "light" | "dark"
const themeMap = {
  light: { ...base, colors: light },
  dark: { ...base, colors: dark }
}

type ThemePickerProps = {
  children?: React.ReactNode
}
const ThemePicker = ({ children }: ThemePickerProps) => {
  const [themeKey, setThemeKey] = useState<ThemeKey>("light")
  const [theme, setTheme] = useState({ ...base, colors: light })

  useEffect(() => {
    setTheme(themeMap[themeKey])
  }, [themeKey])

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ThemeKey
    setThemeKey(value)
  }

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <select value={themeKey} onChange={handleSelect}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        {children}
      </Section>
    </ThemeProvider>
  )
}

export default ThemePicker

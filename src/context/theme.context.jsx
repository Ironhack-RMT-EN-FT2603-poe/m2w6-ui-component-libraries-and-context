import { createContext, useState } from "react";

// context component (the one in charge of sharing the data with the whole app)
const ThemeContext = createContext()

// wrapper component (the one in charge of holding the data and wrapping the app)
function ThemeWrapper(props) {

  const [ isDarkTheme, setIsDarkTheme ] = useState(false)

  const bootstrapTheme = isDarkTheme ? "dark" : "light"
  
  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const passedContext = {
    isDarkTheme,
    setIsDarkTheme,
    bootstrapTheme,
    handleToggleTheme
  }


  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export {
  ThemeContext,
  ThemeWrapper
}
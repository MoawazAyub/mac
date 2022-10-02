import './App.scss'
import Login from './pages/shared/login'
import { default as AdminWelcome } from './pages/admin/welcome'
import { default as EmployeeWelcome } from './pages/employee/welcome'
import Button from './components/shared/button/button'
import theme from './theme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button rounded={true}>Hello</Button>
        <Login></Login>
        <AdminWelcome></AdminWelcome>
        <EmployeeWelcome></EmployeeWelcome>
      </div>
    </ThemeProvider>
  )
}

export default App

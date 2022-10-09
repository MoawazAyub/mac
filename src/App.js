import './App.scss'
import Login from './pages/shared/login'
import { default as AdminWelcome } from './pages/admin/welcome'
import { default as EmployeeWelcome } from './pages/employee/welcome'
import Button from './components/shared/button/button'
import { Counter } from './components/shared/counter/counter'

function App() {
  return (
    <div className="App">
      <Counter />
      <Button rounded={true}>Hello</Button>
      <Login></Login>
      <AdminWelcome></AdminWelcome>
      <EmployeeWelcome></EmployeeWelcome>
    </div>
  )
}

export default App

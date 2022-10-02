import './App.scss';
import Login from './pages/shared/login';
import { default as AdminWelcome } from './pages/admin/welcome';
import { default as EmployeeWelcome } from './pages/employee/welcome';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <AdminWelcome></AdminWelcome>
      <EmployeeWelcome></EmployeeWelcome>
    </div>
  );
}

export default App;

import { BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,} from 'react-router-dom'
import './App.css';
import Layout from './components/layout/Layout';
import { Login } from './components/login_component/Login';
import Register from './components/login_component/Signup'
function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/',element:<Login/>},
      {path:'/signup',element:<Register />}
    ]
  )
  return routes;
}
function App() {
  return (

   
       <Router>
          <AppRoutes />
        </Router>
   
       
  
   
  );
}

export default App;

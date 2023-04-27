import { 
  BrowserRouter as Router,
  useRoutes} from 'react-router-dom'

import { Login } from './components/Login';
import Register from './components/Signup'
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

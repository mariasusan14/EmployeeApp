import './App.css'
import { CreateEmployee } from './pages/createEmployee/CreateEmployee'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'

import { Login } from './pages/login/Login'
import NotFound from './pages/notFound/NotFound'
import { Layout } from './components/layout/Layout'
import { EmployeeDetails} from './pages/employeeDetails/EmployeeDetails'
import { EmployeeList } from './pages/employeeList/EmployeeList'
import { EditEmployee } from './pages/editEmployee/EditEmployee'
import { DeleteEmployee } from './pages/deleteEmployee/DeleteEmployee'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
 
  const router=createBrowserRouter([
    {
      path:"/",
      element : <Login/>,
    },
     {
      path:"/employee",
      element:<Layout/>,
      children:[
      {index:true, element:<EmployeeList/>},
      {path:"create", element:<CreateEmployee/>},
      {path:"details/:id", element:<EmployeeDetails/>},
      {path:"edit/:id", element:<EditEmployee/>},
      {path:"delete/:id", element:<DeleteEmployee/>}
     ]
    },
    {
      path:"*",
      element:<NotFound/>
    }
   
  ]);
  return (
   
    <Provider store={store}>
    <RouterProvider router={router}/>
   </Provider>
  )
}

export default App

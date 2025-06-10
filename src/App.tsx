import "./App.css";
import { CreateEmployee } from "./pages/createEmployee/CreateEmployee";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./pages/notFound/NotFound";
import { Layout } from "./components/layout/Layout";
import { EmployeeDetails } from "./pages/employeeDetails/EmployeeDetails";
import { DeleteEmployee } from "./pages/deleteEmployee/DeleteEmployee";
import { Provider } from "react-redux";
import store from "./store/store";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
const EmployeeList = lazy(() => import("./pages/employeeList/EmployeeList"));
const EditEmployee = lazy(() => import("./pages/editEmployee/EditEmployee"));

function App() {

    function isLoggedIn(){
    if(localStorage.getItem("isLoggedIn")==="true") return true;
    else return false;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element:isLoggedIn()?<Navigate to={"/employee"}/>: <Login />,
    },
    {
      path: "/employee",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading.....</div>}>
              <EmployeeList />
            </Suspense>
          ),
        },
        { path: "profile", element: <Profile /> },
        { path: "create", element: <CreateEmployee /> },
        { path: "details/:id", element: <EmployeeDetails /> },
        {
          path: "edit/:id",
          element: (
            <Suspense>
              <EditEmployee />
            </Suspense>
          ),
        },
        { path: "delete", element: <DeleteEmployee /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

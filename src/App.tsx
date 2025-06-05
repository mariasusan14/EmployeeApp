import "./App.css";
import { CreateEmployee } from "./pages/createEmployee/CreateEmployee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./pages/notFound/NotFound";
import { Layout } from "./components/layout/Layout";
import { EmployeeDetails } from "./pages/employeeDetails/EmployeeDetails";
import { DeleteEmployee } from "./pages/deleteEmployee/DeleteEmployee";
import { Provider } from "react-redux";
import store from "./store/store";
import { Login } from "./pages/login/Login";
const EmployeeList = lazy(() => import("./pages/employeeList/EmployeeList"));
const EditEmployee = lazy(() => import("./pages/editEmployee/EditEmployee"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
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
        { path: "delete/:id", element: <DeleteEmployee /> },
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

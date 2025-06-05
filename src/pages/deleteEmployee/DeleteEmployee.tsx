import { DeletePopup } from "../../components/deletePopup/DeletePopup";
import  EmployeeList  from "../employeeList/EmployeeList";
import "./DeleteEmployee.css";
export const DeleteEmployee = () => {
  return (
    <>
      <DeletePopup />
     
      <EmployeeList />
      
    </>
  );
};
